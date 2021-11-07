import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    AboutMePageComponent
  ],
  imports: [
    CommonModule,
    AboutMePageRoutingModule,
    WidgetsModule,
    TranslateModule
  ]
})
export class AboutMePageModule { }
