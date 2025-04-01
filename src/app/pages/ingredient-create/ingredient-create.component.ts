import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService } from '../../../servcies/ingredients.servcie';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})
export class IngredientCreateComponent implements OnInit {
  isLoading: boolean = true;  // Flag pour marquer le chargement des données
  errorMessage: string = '';  // Message d'erreur éventuel
  ingredient: Ingredient = new Ingredient();  // Un ingrédient vide pour le formulaire
  ingredients: Ingredient[] = [];  // Liste des ingrédients récupérés
  

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    // Appeler le service pour récupérer la liste des ingrédients au démarrage
    this.loadIngredients();
  }

  loadIngredients(): void {
    // Appeler le service pour récupérer tous les ingrédients
    this.ingredientService.getAllIngredients().subscribe({
      next: (data) => {
        this.ingredients = data;  // Récupérer la liste des ingrédients
        this.isLoading = false;  // Changer le flag pour indiquer que le chargement est terminé
      },
      error: (e) => {
        this.errorMessage = "Erreur lors du chargement des ingrédients.";
        this.isLoading = false;  // Fin du chargement
        console.log(e);
      }
    });
  }

  onSubmit(): void {
    // Soumettre le formulaire et ajouter un nouvel ingrédient
    this.ingredientService.addIngredient(this.ingredient).subscribe({
      next: (savedIngredient) => {
        console.log("Un ingrédient a été ajouté : " + savedIngredient);
        alert("Ingrédient créé avec succès.");
        // Ajouter l'ingrédient ajouté à la liste des ingrédients
        this.ingredients.push(savedIngredient);
        // Réinitialiser le formulaire après l'ajout
        this.ingredient = new Ingredient();
      },
      error: (e) => {
        console.log(e);
        alert("Erreur lors de l'ajout de l'ingrédient.");
      }
    });
  }
}
