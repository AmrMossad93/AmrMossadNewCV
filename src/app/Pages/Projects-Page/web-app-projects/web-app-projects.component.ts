import { Component, OnInit } from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";

@Component({
  selector: 'app-web-app-projects',
  templateUrl: './web-app-projects.component.html',
  styleUrls: ['./web-app-projects.component.scss']
})
export class WebAppProjectsComponent implements OnInit {
  subNavRoutes: ISubNav[] = [];
  constructor() { }

  ngOnInit(): void {
    this.subNavRoutes = [
      {title: 'Web Applications', route: '/projects/web-applications'},
      {title: 'Mobile Applications', route: '/projects/mobile-applications'}
    ];
  }

}
