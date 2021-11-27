import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mobile-app-project-detail',
  templateUrl: './mobile-app-project-detail.component.html',
  styleUrls: ['./mobile-app-project-detail.component.scss']
})
export class MobileAppProjectDetailComponent implements OnInit {
  projectId: number = 0;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      if (params['projectId']) {
        this.projectId = +params['projectId']
      }
    })
  }

  ngOnInit(): void {
  }

}
