import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {AngularMaterialModule} from "../DesignModules/angular-material.module";



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class WidgetsModule { }
