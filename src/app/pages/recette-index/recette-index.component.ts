import { Component } from '@angular/core';
import { Recette } from '../../models/Recette';
import { RecetteService } from '../../../services/recette.service';

@Component({
  selector: 'app-recette-index',
  templateUrl: './recette-index.component.html',
  styleUrl: './recette-index.component.css'
})
export class RecetteIndexComponent {
  recettes: Recette[] = []; // Liste des ingrédients de l’API
  isLoading: boolean = true; // Flag marquant la récupération des données
  errorMessage: string = ""; // Eventuel message d'erreur
  indiceMoyenINS!: number;

  constructor(private recetteService: RecetteService) {}
ngOnInit(): void {
  this.fetchRecettes();
}
fetchRecettes(): void {
  this.recetteService.getAllRecettes().subscribe({
  next: (data) => {
  this.recettes = data;
  this.isLoading = false;
  },
  error: (error) => {
  this.errorMessage = "Erreur lors du chargement des ingrédients.";
  console.error("Erreur API:", error);
  this.isLoading = false;
  }
  });
}

// Méthode pour supprimer toutes les recettes
deleteAllRecette(): void {
  if (this.recettes.length === 0) {
    return;
  }
  
  // Afficher une confirmation avant de supprimer
  if (confirm('Êtes-vous sûr de vouloir supprimer toutes les recettes ? Cette action est irréversible.')) {
    // Appel au service pour supprimer toutes les recettes
    this.recetteService.deleteAllRecette().subscribe({
      next: () => {
        this.recettes = [];
        // Afficher un message de succès (optionnel)
        // this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Toutes les recettes ont été supprimées'});
      },
      error: (error) => {
        this.errorMessage = `Erreur lors de la suppression des recettes: ${error.message}`;
      }
    });
  }


}
}