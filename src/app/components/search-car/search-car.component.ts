import { DataMakeService } from '../../services/data-make.service';
import { DataModelService } from '.././../services/data-model.service';
import { DataVersionService } from '.././../services/data-version.service';
import { Component, OnInit } from '@angular/core';
import { DataMake } from '../../models/dataMake';
import { DataModel } from '../../models/dataModel';
import { DataVersion } from '../../models/dataVersion';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit { 
  
  constructor(
   private dataMakeService: DataMakeService,
   private dataModelService: DataModelService,
   private dataVersionService: DataVersionService){}
  
  ngOnInit() {
    this.getMake();
    this.getModel();
    this.getVersion();
  }

  marcas: Array<DataMake>;  
  models: Array<DataModel>;
  versions: Array<DataVersion>;

  getMake() {
    this.dataMakeService.getDataMake().subscribe(dados => this.marcas = dados);  
  }

  getModel() {
    this.dataModelService.getDataModel().subscribe(dados => this.models = dados);
  }

  getVersion() {
    this.dataVersionService.getDataVersion().subscribe(dados => this.versions = dados);
  }
}
