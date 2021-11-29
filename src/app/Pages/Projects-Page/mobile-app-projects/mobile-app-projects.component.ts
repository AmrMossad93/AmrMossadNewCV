import {Component, OnInit} from '@angular/core';
import {ISubNav} from "../../../Interfaces/sub-nav";
import {ProjectsService} from "../../../Services/projects.service";
import {IMobileApplications} from "../../../Interfaces/mobile-applications";
import {animate, style, transition, trigger} from "@angular/animations";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-mobile-app-projects',
  templateUrl: './mobile-app-projects.component.html',
  styleUrls: ['./mobile-app-projects.component.scss'],
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
export class MobileAppProjectsComponent implements OnInit {

  subNavRoutes: ISubNav[] = [];
  mobileApplications: IMobileApplications[] = []
  mobileApplicationsFiltered: IMobileApplications[] = []
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
    this.getMobileApplications();
  }

  getMobileApplications(): void {
    this.projectsService.getMobileApplications().subscribe(res => {
      this.mobileApplications = res;
      this.mobileApplicationsFiltered = this.mobileApplications;
      this.myCategory = this.mobileApplications.map(c => c.category)
      let myCategories = new Set(this.myCategory);
      this.myCategory = [...myCategories];
      this.myCategory = ['All'].concat(this.myCategory)
      this.showProgress = false;
    })
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.mobileApplicationsFiltered = this.mobileApplications;
    } else {
      this.mobileApplicationsFiltered = this.mobileApplications.filter(c => c.category === category);
    }
  }
}
