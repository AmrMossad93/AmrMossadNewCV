import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import { EventsComponent } from './events/events.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import { EventDetailsComponent } from './events/event-details/event-details.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsPageRoutingModule,
    WidgetsModule,
    AngularMaterialModule
  ]
})
export class EventsPageModule { }
