import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../Services/home.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  welcomeMessage: string = '';

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getHomeDetails();
  }

  getHomeDetails(): void {
    this.homeService.getHomeDetails().subscribe(res => {
      this.welcomeMessage = res.welcomeMessage
    })
  }
}
