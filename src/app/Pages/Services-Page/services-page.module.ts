import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesPageComponent } from './services-page/services-page.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {WidgetsModule} from "../../Widgets/widgets.module";


@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    AngularMaterialModule,
    WidgetsModule
  ]
})
export class ServicesPageModule { }
