import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";
import {ProjectsService} from "../../../Services/projects.service";
import {IWebApplications} from "../../../Interfaces/web-applications";

@Component({
  selector: 'app-web-app-projects',
  templateUrl: './web-app-projects.component.html',
  styleUrls: ['./web-app-projects.component.scss']
})
export class WebAppProjectsComponent implements OnInit {
  subNavRoutes: ISubNav[] = [];
  webApplications: IWebApplications[] = []

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.subNavRoutes = [
      {title: 'Web Applications', route: '/projects/web-applications'},
      {title: 'Mobile Applications', route: '/projects/mobile-applications'}
    ];
    this.getWebApplications();
  }

  getWebApplications(): void {
    this.projectsService.getWebApplications().subscribe(res => {
      this.webApplications = res;
    })
  }
}
