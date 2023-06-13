import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';

  alumno = {
    matricula: 20001402,
    nombre: 'Cristian',
    apellido: 'Ruiz',
    edad: 21,
    inscrito: 0.1,
    fechaNacimiento: new Date(2002, 2, 20)
  }
  duplicarN(n: number): number {
    return n * 2;
  }

}