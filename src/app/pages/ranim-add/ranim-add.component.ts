import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtelierService } from '../../services/atelier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranim-add',
  templateUrl: './ranim-add.component.html'
})
export class RanimAddComponent implements OnInit {

  atelierForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private atelierService: AtelierService,
    private router: Router
  ) {}

  ngOnInit() {
    this.atelierForm = this.fb.group({
      // ID optionnel si auto-increment dans la BDD
      // id: [''],

      nom: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      emailFormateur: ['', [
        Validators.required,
        Validators.email
      ]],

      nbrParticipant: ['', [
        Validators.required,
        Validators.min(16)
      ]],

      statut: [true] // par défaut true
    });
  }

  onSubmit() {
    if(this.atelierForm.valid) {
      console.log("Données envoyées :", this.atelierForm.value);
      this.atelierService.add(this.atelierForm.value)
        .subscribe({
          next: () => {
            alert("Atelier ajouté avec succès !");
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error("Erreur lors de l'ajout :", err);
            alert(err.error?.message || "Erreur serveur");
          }
        });
    } else {
      alert("Formulaire invalide !");
    }
  }

  // Getters pour validations
  get nom() { return this.atelierForm.get('nom'); }
  get emailFormateur() { return this.atelierForm.get('emailFormateur'); }
  get nbrParticipant() { return this.atelierForm.get('nbrParticipant'); }
}