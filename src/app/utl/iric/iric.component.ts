import { Component } from '@angular/core';
import { AlumnoIric } from '../alumno-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number = 50
  imageMargin:number = 2
  muestraImg:boolean = true
  listFilter:string = "" 

  showImage():void {
    this.muestraImg = !this.muestraImg
  }

  alumnosIric:AlumnoIric[] = [
    {
      matricula:2000,
      nombre: "pedro",
      edad: 23,
      correo: "prueba@gmail.com",
      foto: "https://www.cuerpomente.com/medio/2023/03/27/luna-llena-de-abril-o-luna-rosa_2e768875_230327063952_1280x720.jpg",
      calificacion: 10
    },
    {
      matricula:2000,
      nombre: "calos",
      edad: 23,
      correo: "prueba@gmail.com",
      foto: "https://www.cuerpomente.com/medio/2023/03/27/luna-llena-de-abril-o-luna-rosa_2e768875_230327063952_1280x720.jpg",
      calificacion: 9
    },
    {
      matricula:2000,
      nombre: "jose",
      edad: 23,
      correo: "prueba@gmail.com",
      foto: "https://www.cuerpomente.com/medio/2023/03/27/luna-llena-de-abril-o-luna-rosa_2e768875_230327063952_1280x720.jpg",
      calificacion: 8
    },
    {
      matricula:2000,
      nombre: "mariana",
      edad: 23,
      correo: "prueba@gmail.com",
      foto: "https://www.cuerpomente.com/medio/2023/03/27/luna-llena-de-abril-o-luna-rosa_2e768875_230327063952_1280x720.jpg",
      calificacion: 7

    }
  ]

}
