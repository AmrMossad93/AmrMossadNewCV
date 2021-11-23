import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";

@Component({
  selector: 'app-mobile-app-projects',
  templateUrl: './mobile-app-projects.component.html',
  styleUrls: ['./mobile-app-projects.component.scss']
})
export class MobileAppProjectsComponent implements OnInit {

  subNavRoutes: ISubNav[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.subNavRoutes = [
      {title: 'Web Applications', route: '/projects/web-applications'},
      {title: 'Mobile Applications', route: '/projects/mobile-applications'}
    ];
  }

}
