import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    AngularMaterialModule,
    TranslateModule
  ]
})
export class HomePageModule { }
