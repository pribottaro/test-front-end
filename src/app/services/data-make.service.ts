import { DataMake } from '../models/dataMake';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMakeService {

  dadosMake = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make';  

  constructor(private http: HttpClient) { }

  getDataMake() {
    return this.http.get<DataMake[]>(`${this.dadosMake}`);
  }
}
