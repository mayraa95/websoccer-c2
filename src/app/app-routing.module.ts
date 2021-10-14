import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoringComponent } from './scorings/scorings.component';

const routes: Routes = [
  {path:'scorings', component:ScoringsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
