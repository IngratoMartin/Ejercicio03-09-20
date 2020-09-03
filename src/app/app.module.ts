import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CargaAlumnoComponent } from './components/carga-alumno/carga-alumno.component';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { ManejadoraComponent } from './components/manejadora/manejadora.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CargaAlumnoComponent,
    ListaAlumnoComponent,
    ManejadoraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
