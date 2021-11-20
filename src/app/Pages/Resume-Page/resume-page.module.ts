import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";


@NgModule({
  declarations: [
    ResumePageComponent
  ],
    imports: [
        CommonModule,
        ResumePageRoutingModule,
        PrimeNgModule,
        AngularMaterialModule
    ]
})
export class ResumePageModule { }
