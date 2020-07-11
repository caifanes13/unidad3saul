import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../model/tareas.model';
import { TareasService } from '../../service/tareas.service';


@Component({
  selector: 'my-org-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {
  tarea: Tarea[];
  @Output() tareaSeleccionada: EventEmitter<Tarea>;
  constructor(public tareasService: TareasService) {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {

  }
  cheked(tarea: Tarea){
    this.tareaSeleccionada.emit(tarea);
  }


}