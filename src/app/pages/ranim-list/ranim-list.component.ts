// src/app/pages/ranim-list/ranim-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtelierService } from '../../services/atelier.service';
import { Atelier } from '../../atelier.model';

@Component({
  selector: 'app-ranim-list',
  templateUrl: './ranim-list.component.html'
})
export class RanimListComponent implements OnInit {

  ateliers: Atelier[] = [];
  loading: boolean = false;

  constructor(private atelierService: AtelierService, private router: Router) {}

  ngOnInit(): void {
    this.loadAteliers();
  }

  loadAteliers(): void {
    this.loading = true;
    this.atelierService.getAll().subscribe({
      next: (data) => {
        this.ateliers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement :", err);
        this.loading = false;
      }
    });
  }

  editAtelier(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deleteAtelier(id: string): void {
    if (confirm("Voulez-vous vraiment supprimer cet atelier ?")) {
      this.atelierService.delete(id).subscribe({
        next: () => {
          alert("Atelier supprimé !");
          this.loadAteliers(); // Recharge la liste
        },
        error: (err) => {
          console.error("Erreur lors de la suppression :", err);
        }
      });
    }
  }
}