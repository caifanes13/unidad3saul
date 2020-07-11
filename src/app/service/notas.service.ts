import { Injectable } from '@angular/core';
import { Nota } from '../model/notas.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {


  constructor() {
    this.cargarrSorage();
  }
  nota: Nota[] = [];

  crearNota( titulo: string, descr: string){
    const nuevaNota = new Nota(titulo, descr);
    this.nota.push(nuevaNota);
    this.guardarSorage();
  }
  editaNota( nuevoTitulo: string, descr: string, nota: Nota){
    nota.titulo = nuevoTitulo;
    nota.descripcion = descr;
    
    this.guardarSorage();
  }
  borrarNotas(){
    this.nota.splice(0, this.nota.length);
    this.guardarSorage();
}

  guardarSorage(){
    localStorage.setItem('Notas', JSON.stringify(this.nota));
  }
  cargarrSorage(){
    if ( localStorage.getItem('Notas') ){
      this.nota = JSON.parse(localStorage.getItem('Notas'));
    }else{
      this.nota = [];
    }

  }
}
