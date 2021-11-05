import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';


@NgModule({
  declarations: [
    ResumePageComponent
  ],
  imports: [
    CommonModule,
    ResumePageRoutingModule
  ]
})
export class ResumePageModule { }
