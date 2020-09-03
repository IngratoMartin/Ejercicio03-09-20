import { Component, OnInit } from '@angular/core';
import { Alumno } from "../../clases/alumno";

@Component({
  selector: 'app-carga-alumno',
  templateUrl: './carga-alumno.component.html',
  styleUrls: ['./carga-alumno.component.css']
})
export class CargaAlumnoComponent implements OnInit {

  alumno;
  constructor() { }

  nombre="";
  apellido="";
  legajo="";
  materia="";

  ngOnInit(): void {
  }

  Cargar()
  {
    this.alumno= new Alumno(this.nombre, this.apellido, this.legajo, this.materia);
    console.log(this.alumno);
  }

}
