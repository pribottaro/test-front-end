import { DataModel } from './../models/dataModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  dadosModel = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1';  

  constructor(private http: HttpClient) { }

  getDataModel() {
    return this.http.get<DataModel[]>(`${this.dadosModel}`);
  }
}
