import { Component } from '@angular/core';
import { Tarea } from '../../model/tareas.model';
import { TareasService } from '../../service/tareas.service';


@Component({
  selector: 'my-org-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent  {
  nombreTarea= "";
  tarea: Tarea;
   validar = true;
  constructor( public tareasService: TareasService) { }
  
  agregarTarea( termino: string ){
    this.tareasService.agregarTarea(termino) ;
    this.nombreTarea= "";
  }
  
  borrar(){
        this.tareasService.borrar();
  }
}

