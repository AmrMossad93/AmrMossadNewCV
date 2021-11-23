import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {AngularMaterialModule} from "../DesignModules/angular-material.module";
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CardComponent,
    SubNavBarComponent
  ],
  exports: [
    CardComponent,
    SubNavBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class WidgetsModule { }
