import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {ResumeService} from "../../../Services/resume.service";
import {IResume} from "../../../Interfaces/resume";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  events1: any[] = [];
  workResumes: IResume[] = []

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.events1 = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg'
      },
      {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
    this.getWorkResume();
  }

  getWorkResume(): void {
    this.resumeService.getWorkResume().subscribe(res => {
      this.workResumes = res;
      console.log(this.workResumes)
    })
  }
}
