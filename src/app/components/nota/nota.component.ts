import { Component, OnInit } from '@angular/core';
import { Nota } from '../../model/notas.model';
import { NotasService } from '../../service/notas.service';


@Component({
  selector: 'my-org-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {

  nota: Nota[] = [];
  tit="";
  des="";
  opti="null";
  
  constructor(public notasService: NotasService) { }
  agregarNota( tit: string, desc: string){
    if (tit.length > 0 && desc.length > 0){
      this.notasService.crearNota(tit, desc);
      this.tit="";
      this.des="";
      this.opti="null";
     
     }
  }
}


