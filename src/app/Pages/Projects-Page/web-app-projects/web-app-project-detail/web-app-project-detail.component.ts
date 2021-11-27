import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsService} from "../../../../Services/projects.service";
import {IWebApplications} from "../../../../Interfaces/web-applications";

@Component({
  selector: 'app-web-app-project-detail',
  templateUrl: './web-app-project-detail.component.html',
  styleUrls: ['./web-app-project-detail.component.scss']
})
export class WebAppProjectDetailComponent implements OnInit {
  projectId: number = 0;
  webApplication: IWebApplications | undefined = {} as IWebApplications;

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
      this.webApplication = res.find(c => c.id === this.projectId);
      console.log(this.webApplication)
    })
  }
}
