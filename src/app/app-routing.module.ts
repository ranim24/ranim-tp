import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RanimAddComponent } from './pages/ranim-add/ranim-add.component';
import { RanimEditComponent } from './pages/ranim-edit/ranim-edit.component';
import { RanimListComponent } from './pages/ranim-list/ranim-list.component';

const routes: Routes = [
 { path: 'add', component: RanimAddComponent },
  { path: 'edit/:id', component: RanimEditComponent },
  { path: 'list', component: RanimListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
