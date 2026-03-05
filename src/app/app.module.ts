import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RanimAddComponent } from './pages/ranim-add/ranim-add.component';
import { RanimEditComponent } from './pages/ranim-edit/ranim-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RanimListComponent } from './pages/ranim-list/ranim-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RanimAddComponent,
    RanimEditComponent,
    RanimListComponent
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
