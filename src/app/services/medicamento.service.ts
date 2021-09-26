import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento.model';

const baseUrl: string = "http://localhost:8090/rest/medicamento";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor( private http: HttpClient ) { }

  postMedicamento(medicamento: Medicamento): Observable<any>{
    return this.http.post<any>(baseUrl,medicamento);
  }

}
