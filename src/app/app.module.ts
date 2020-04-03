import { DataMakeService } from './services/data-make.service';
import { DataModelService } from './services/data-model.service';
import { DataVersionService } from './services/data-version.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { SearchCarComponent } from './components/search-car/search-car.component';
import { SearchMotoComponent } from './components/search-moto/search-moto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    SearchCarComponent,
    SearchMotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataMakeService,
    DataModelService,
    DataVersionService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
