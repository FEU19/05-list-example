import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCityFormComponent } from './add-city-form/add-city-form.component';
import { SmartCityListComponent } from './smart-city-list/smart-city-list.component';
import { CityListItemComponent } from './city-list-item/city-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCityFormComponent,
    SmartCityListComponent,
    CityListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
