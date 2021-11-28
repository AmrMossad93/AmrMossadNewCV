import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsService} from "../../../../Services/projects.service";
import {IWebApplications} from "../../../../Interfaces/web-applications";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-web-app-project-detail',
  templateUrl: './web-app-project-detail.component.html',
  styleUrls: ['./web-app-project-detail.component.scss']
})
export class WebAppProjectDetailComponent implements OnInit {
  projectId: number = 0;
  webApplication = {} as IWebApplications;
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
    this.getWebApplication();
  }

  getWebApplication(): void {
    this.projectsService.getWebApplications().subscribe(res => {
      this.webApplication = <IWebApplications>res.find(c => c.id === this.projectId);
      this.showProgress = false;
      console.log(this.webApplication)
    })
  }
}
