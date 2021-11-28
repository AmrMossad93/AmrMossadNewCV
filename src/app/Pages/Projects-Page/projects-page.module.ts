import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { WebAppProjectsComponent } from './web-app-projects/web-app-projects.component';
import { MobileAppProjectsComponent } from './mobile-app-projects/mobile-app-projects.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import { WebAppProjectDetailComponent } from './web-app-projects/web-app-project-detail/web-app-project-detail.component';
import { MobileAppProjectDetailComponent } from './mobile-app-projects/mobile-app-project-detail/mobile-app-project-detail.component';
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    WebAppProjectsComponent,
    MobileAppProjectsComponent,
    WebAppProjectDetailComponent,
    MobileAppProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsPageRoutingModule,
    WidgetsModule,
    AngularMaterialModule,
    PrimeNgModule,
    CarouselModule
  ]
})
export class ProjectsPageModule { }
