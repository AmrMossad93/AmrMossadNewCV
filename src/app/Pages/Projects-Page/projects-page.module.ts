import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { WebAppProjectsComponent } from './web-app-projects/web-app-projects.component';
import { MobileAppProjectsComponent } from './mobile-app-projects/mobile-app-projects.component';
import {WidgetsModule} from "../../Widgets/widgets.module";


@NgModule({
  declarations: [
    WebAppProjectsComponent,
    MobileAppProjectsComponent
  ],
    imports: [
        CommonModule,
        ProjectsPageRoutingModule,
        WidgetsModule
    ]
})
export class ProjectsPageModule { }
