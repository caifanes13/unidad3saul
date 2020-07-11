import { Injectable } from '@angular/core';
import { Tarea } from '../model/tareas.model';

@Injectable({
    providedIn: 'root'
  })
  export class TareasService {
      constructor(){
          this.cargarSorage();
      }
    Tarea: Tarea[] = [];
    agregarTarea( termino: string ){
      if (termino.length > 0){
        const index = this.Tarea.length + 1;
        const tareaAux = new Tarea(termino, index);
        this.Tarea.push(tareaAux);
      }
      this.guardarSorage();
    }
    
      borrar(){
          this.Tarea.splice(0, this.Tarea.length);
          this.guardarSorage();
      }
      
    guardarSorage(){
      localStorage.setItem('Tareas', JSON.stringify(this.Tarea));
      console.log(this.Tarea);
    }
    cargarSorage(){
      if ( localStorage.getItem('Tareas') ){
        this.Tarea = JSON.parse(localStorage.getItem('Tareas'));
      }else{
        this.Tarea = [];
      }
    }
  }
  