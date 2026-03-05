import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { azzaAddComponent } from './pages/azza-add/azza-add.component';
import { azzaEditComponent } from './pages/azza-edit/azza-edit.component';
import { AzzaListComponent } from './pages/azza-list/azza-list.component.';

const routes: Routes = [
 { path: 'add', component: azzaAddComponent },
  { path: 'edit/:id', component: azzaEditComponent },
  { path: 'list', component: AzzaListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
