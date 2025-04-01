import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RecipeCalculatorPageComponent } from './pages/recipe-calculator-page/recipe-calculator-page.component';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { RecetteIndexComponent } from './pages/recette-index/recette-index.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'calculateur', component: RecipeCalculatorPageComponent},
  { path: 'ingredients', component: IngredientManagerPageComponent},
  { path: 'mes-recettes', component: RecetteIndexComponent},
  { path: 'users', component: UtilisateursComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }