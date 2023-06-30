import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnosForm!:FormGroup
  alumnos:Array<any>

  constructor(private readonly fb:FormBuilder) {
    this.alumnosForm = this.initForm()
    this.alumnos = []
  }

  onSubmit():void {
    this.alumnos.push(this.alumnosForm.value)
    this.alumnosForm.reset()
  }

  obtenerValor(){
    const mat = this.alumnosForm.get('matricula')?.value
    const nom = this.alumnosForm.get('nombre')?.value

    console.log('Matricula: ', mat)
    console.log('Nombre: ', nom);
    
  }

  initForm():FormGroup {
    return this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(3)]],
      nombre:['', [Validators.required]],
      edad:[''],
      correo:['', [Validators.required]],
      foto:[''],
      calif:['']
    })
  }

}
