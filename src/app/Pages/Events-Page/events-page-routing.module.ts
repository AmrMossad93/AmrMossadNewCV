import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: ':eventId', component: EventDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule {
}
