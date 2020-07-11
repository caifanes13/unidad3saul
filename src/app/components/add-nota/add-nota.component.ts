import { Component, Input } from '@angular/core';
import { Nota } from '../../model/notas.model';
import { NotasService } from '../../service/notas.service';

@Component({
  selector: 'my-org-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.css']
})
export class AddNotaComponent {
  nota: Nota[] = [];
  constructor(public notaService: NotasService ) { }

}
