import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports:      [ BrowserModule, HikeModule, HttpModule, HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
