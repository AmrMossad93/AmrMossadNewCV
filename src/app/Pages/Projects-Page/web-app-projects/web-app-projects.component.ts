import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";
import {ProjectsService} from "../../../Services/projects.service";
import {IWebApplications} from "../../../Interfaces/web-applications";
import {trigger, transition, style, animate} from '@angular/animations';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-web-app-projects',
  templateUrl: './web-app-projects.component.html',
  styleUrls: ['./web-app-projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    autoWidth: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

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
      this.webApplicationsFiltered = this.webApplications;
    } else {
      this.webApplicationsFiltered = this.webApplications.filter(c => c.category === category);
    }
  }
}
