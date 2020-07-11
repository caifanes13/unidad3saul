import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { NotaComponent } from './components/nota/nota.component';
import { CompartirComponent } from './components/compartir/compartir.component';
import { AddNotaComponent } from './components/add-nota/add-nota.component';
import { NavbarComponent } from './components/compartir/navbar/navbar.component';
import { FooterComponent } from './components/compartir/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    AddTareaComponent,
    NotaComponent,
    CompartirComponent,
    AddNotaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
