import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azza-list',
  templateUrl: './azza-list.component.html',
})
export class AzzaListComponent {

  ateliers = [
    { id: 1, nom: 'Atelier 1' },
    { id: 2, nom: 'Atelier 2' }
  ];

  constructor(private router: Router) {}

  goToAdd(): void {
    this.router.navigate(['/add']);
  }

  editAtelier(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteAtelier(id: number): void {
    this.ateliers = this.ateliers.filter(a => a.id !== id);
  }
}