import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtelierService } from '../../services/atelier.service';
import { Atelier } from '../../atelier.model';

@Component({
  selector: 'app-azza-edit',
  templateUrl: './azza-edit.component.html'
})
export class azzaEditComponent {

  atelierForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private atelierService: AtelierService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){

    this.atelierForm = this.fb.group({

      id:['',Validators.required],

      nom:['',[
        Validators.required,
        Validators.minLength(5)
      ]],

      emailformateur:['',[
        Validators.required,
        Validators.email
      ]],

      nbrparticipant:['',[
        Validators.required,
        Validators.min(16)
      ]],

      statut:[true]

    });

    this.id = this.route.snapshot.params['id'];

    this.atelierService.getById(this.id)
.subscribe((data: Atelier)=>{      this.atelierForm.patchValue(data);
    });

  }

onSubmit() {
  if (this.atelierForm.valid) {

    // Convertir nbrparticipant en nombre
    const formValue = { ...this.atelierForm.value, nbrparticipant: Number(this.atelierForm.value.nbrparticipant) };

    this.atelierService.update(this.id, formValue)
      .subscribe({
        next: () => {
          alert("Atelier modifié avec succès");
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          alert(err.error?.error || "Erreur lors de la modification");
        }
      });
  }
}

  get nom(){return this.atelierForm.get('nom')}
  get emailformateur(){return this.atelierForm.get('emailformateur')}
  get nbrparticipant(){return this.atelierForm.get('nbrparticipant')}

}