import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMobileApplications} from "../../../../Interfaces/mobile-applications";
import {ProjectsService} from "../../../../Services/projects.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-mobile-app-project-detail',
  templateUrl: './mobile-app-project-detail.component.html',
  styleUrls: ['./mobile-app-project-detail.component.scss']
})
export class MobileAppProjectDetailComponent implements OnInit {
  projectId: number = 0;
  mobileApplication = {} as IMobileApplications;
  showProgress: boolean = true;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private activeRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.activeRoute.params.subscribe(params => {
      if (params['projectId']) {
        this.projectId = +params['projectId']
      }
    })
  }

  ngOnInit(): void {
    this.getMobileApplication()
  }

  getMobileApplication(): void {
    this.projectsService.getMobileApplications().subscribe(res => {
      this.mobileApplication = <IMobileApplications>res.find(c => c.id === this.projectId);
      this.showProgress = false;
    })
  }
}
