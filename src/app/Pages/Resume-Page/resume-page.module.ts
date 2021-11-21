import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import { ResumeCompanyDetailsComponent } from './resume-page/resume-company-details/resume-company-details.component';
import {TranslateModule} from "@ngx-translate/core";
import {WidgetsModule} from "../../Widgets/widgets.module";


@NgModule({
  declarations: [
    ResumePageComponent,
    ResumeCompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    ResumePageRoutingModule,
    PrimeNgModule,
    AngularMaterialModule,
    TranslateModule,
    WidgetsModule
  ]
})
export class ResumePageModule { }
