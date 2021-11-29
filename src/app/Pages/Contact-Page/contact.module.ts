import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {FormsModule} from "@angular/forms";
import {CustomFormsModule} from "ngx-custom-validators";


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    WidgetsModule,
    AngularMaterialModule,
    FormsModule,
    CustomFormsModule
  ]
})
export class ContactModule { }
