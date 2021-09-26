import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../models/medicamento.model';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor( private medicamentoServicio: MedicamentoService ) { }

  ngOnInit(): void {
  }

  medicamentos: Medicamento = {
    nombre: "",
    precio: 0,
    stock: 0,
    laboratorio: ""
  }

  saveMedicamento(){
    console.log("Se Envia Datos");
    console.log(this.medicamentos)

    this.medicamentoServicio.postMedicamento(this.medicamentos)
        .subscribe( respuesta => {
          alert(respuesta.mensaje)
          console.log("Datos Correctos")
        }, err => {
          console.log(err)
        })

  }

}
