import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaComponent } from './components/tarea/tarea.component';
import { NotaComponent } from './components/nota/nota.component';


const routes: Routes = [
  { path: 'tarea', component: TareaComponent },
    { path: 'nota', component: NotaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'tareas' }
];
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
