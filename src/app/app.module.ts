import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AzzaListComponent } from './pages/azza-list/azza-list.component.';
import { azzaAddComponent } from './pages/azza-add/azza-add.component';
import { azzaEditComponent } from './pages/azza-edit/azza-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    azzaEditComponent,
    azzaAddComponent,
    AzzaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }