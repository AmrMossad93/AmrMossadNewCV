import {Component, OnInit} from '@angular/core';
import {ServicesService} from 'src/app/Services/services.service';
import {IServices} from "../../../Interfaces/services";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  servicesList: IServices[] = []
  showProgress = true;

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.servicesService.getServices().subscribe(res => {
      this.servicesList = res
      this.showProgress = false;
    })
  }
}
