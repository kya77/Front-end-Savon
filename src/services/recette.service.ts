import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recette } from '../app/models/Recette';
import { RecetteDTO } from '../app/models/RecetteDTO';


@Injectable({
  providedIn: 'root'
})

export class RecetteService {
  recette: Recette[] = [];
  indiceMoyenINS: any;
    deleteAllIngredients() {
      throw new Error('Method not implemented.');
    }
    supprimerToutesRecettes() {
      throw new Error('Method not implemented.');
    }
    private apiUrl = 'http://localhost:8080/api-savon/v1';
  
    constructor(private http: HttpClient) {}
  
    /**
     * Récupère toutes les recettes.
     * @returns Un Observable contenant la liste des recettes.
     */
    getAllRecettes(): Observable<Recette[]> {
      return this.http.get<Recette[]>(`${this.apiUrl}/recette`);
    }
  
    /**
     * Récupère une recette par son ID.
     * @param id - L'identifiant de la recette.
     * @returns Un Observable contenant la recette correspondante.
     */
    getRecetteById(id: number): Observable<Recette> {
      return this.http.get<Recette>(`${this.apiUrl}/recette/${id}`);
    }
  
    /**
     * Enregistre une nouvelle recette.
     * @param recette - L'objet Recette à enregistrer.
     * @returns Un Observable contenant la recette enregistrée.
     */
    addRecette(recette: RecetteDTO): Observable<Recette> {
      return this.http.post<Recette>(`${this.apiUrl}/recette`, recette);
    }
  
    /**
     * Met à jour une recette existante par son ID.
     * @param id - L'identifiant de la recette.
     * @param recette - L'objet Recette mis à jour.
     * @returns Un Observable contenant la recette mise à jour.
     */
    updateRecette(id: number, recette: RecetteDTO): Observable<Recette> {
      return this.http.put<Recette>(`${this.apiUrl}/recette/${id}`, recette);
    }
  
    /**
     * Supprime une recette par son ID.
     * @param id - L'identifiant de la recette.
     * @returns Un Observable vide.
     */
    deleteRecette(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/recette/${id}`);
    }

    /**
     * Supprime toutes les recettes.
     * @returns Un Observable vide.
     */
        deleteAllRecette(): Observable<void> {
          return this.http.delete<void>(`${this.apiUrl}/recette/all`);
        }


  /**
   * Calcule l'indice INS moyen de toutes les recettes
   * @param recettes Liste des recettes à analyser
   * @returns La moyenne des indices INS ou 0 si aucune recette
   */
  /*calculerINSMoyen(recettes: Recette[]): number {
    if (recettes.length === 0) {
      return 0;
    }*/
    
    // L'indice INS est stocké dans recette.resultats[0].score
    /*const sommeINS = recettes.reduce((somme, recette) => {
      return somme + recette.resultats[0].score;
    }, 0);
    
    return sommeINS / recettes.length;
  }
    
    // Cette méthode pourrait être appelée après le chargement des recettes
    calculerStatistiques(): void {
      this.indiceMoyenINS = this.calculerINSMoyen(this.recette);
      console.log(`L'indice INS moyen est: ${this.indiceMoyenINS.toFixed(1)}`);
  }
}*/