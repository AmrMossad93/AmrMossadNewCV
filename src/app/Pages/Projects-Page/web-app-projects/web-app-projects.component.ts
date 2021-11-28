import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";
import {ProjectsService} from "../../../Services/projects.service";
import {IWebApplications} from "../../../Interfaces/web-applications";
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-web-app-projects',
  templateUrl: './web-app-projects.component.html',
  styleUrls: ['./web-app-projects.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('.7s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('.7s', style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class WebAppProjectsComponent implements OnInit {
  subNavRoutes: ISubNav[] = [];
  webApplications: IWebApplications[] = [];
  webApplicationsFiltered: IWebApplications[] = [];
  myCategory: string[] = [];
  showProgress: boolean = true;

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
      this.webApplicationsFiltered = this.webApplications;
      this.myCategory = this.webApplications.map(c => c.category)
      let myCategories = new Set(this.myCategory);
      this.myCategory = [...myCategories];
      this.myCategory = ['All'].concat(this.myCategory)
      this.showProgress = false;
    })
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      console.log(this.webApplications);
      this.webApplicationsFiltered = this.webApplications;
    } else {
      this.webApplicationsFiltered = this.webApplications.filter(c => c.category === category);
      console.log(this.webApplications.filter(c => c.category === category));
    }
  }
}
