import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { WebAppProjectsComponent } from './web-app-projects/web-app-projects.component';
import { MobileAppProjectsComponent } from './mobile-app-projects/mobile-app-projects.component';


@NgModule({
  declarations: [
    WebAppProjectsComponent,
    MobileAppProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsPageRoutingModule
  ]
})
export class ProjectsPageModule { }
