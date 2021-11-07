import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebAppProjectsComponent} from "./web-app-projects/web-app-projects.component";
import {MobileAppProjectsComponent} from "./mobile-app-projects/mobile-app-projects.component";

const routes: Routes = [
  {path: 'web-applications', component: WebAppProjectsComponent},
  {path: 'mobile-applications', component: MobileAppProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsPageRoutingModule {
}
