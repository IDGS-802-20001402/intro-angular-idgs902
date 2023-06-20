import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.component';
import { Alumno } from './utl/alumno.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { TareaModule } from './tarea/tarea.module';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    Alumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OperasModule,
    TareaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
