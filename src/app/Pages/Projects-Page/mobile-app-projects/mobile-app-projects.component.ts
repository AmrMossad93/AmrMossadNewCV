import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";
import {ProjectsService} from "../../../Services/projects.service";
import {IMobileApplications} from "../../../Interfaces/mobile-applications";

@Component({
  selector: 'app-mobile-app-projects',
  templateUrl: './mobile-app-projects.component.html',
  styleUrls: ['./mobile-app-projects.component.scss']
})
export class MobileAppProjectsComponent implements OnInit {

  subNavRoutes: ISubNav[] = [];
  mobileApplications: IMobileApplications[] = []

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.subNavRoutes = [
      {title: 'Web Applications', route: '/projects/web-applications'},
      {title: 'Mobile Applications', route: '/projects/mobile-applications'}
    ];
    this.getMobileApplications();
  }

  getMobileApplications(): void {
    this.projectsService.getMobileApplications().subscribe(res => {
      this.mobileApplications = res;
    })
  }
}
