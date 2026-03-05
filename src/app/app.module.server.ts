import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,    // module principal
    ServerModule, // module spécifique au rendu serveur
  ],
  bootstrap: [AppComponent], // point d'entrée côté serveur
})
export class AppServerModule {}