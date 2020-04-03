import { DataVersion } from '../models/dataVersion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataVersionService {

  dadosVersion = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=1';  

  constructor(private http: HttpClient) { }

  getDataVersion() {
    return this.http.get<DataVersion[]>(`${this.dadosVersion}`);
  }
}
