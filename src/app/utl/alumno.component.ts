import { Component } from "@angular/core";

@Component({
    selector: 'app-alumno',
    template: `<h6><b>Alumno: </b> {{ alumno.nombre }} </h6>
                <h6><b>Grupo: </b>{{ alumno.grupo }}</h6>`
})


export class Alumno {
    alumno = {
        nombre: "Cristian",
        grupo: "IDGS-902"
    }
}