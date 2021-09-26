import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent} from './components/add-alumno/add-alumno.component';
import { AddMedicamentoComponent } from './components/add-medicamento/add-medicamento.component';

const routes: Routes = [
  {path:"addAlumno", component:AddAlumnoComponent },
  {path:"addMedicamento", component:AddMedicamentoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }