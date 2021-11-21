import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {ResumeService} from "../../../Services/resume.service";
import {IResume} from "../../../Interfaces/resume";
import {MatDialog} from "@angular/material/dialog";
import {ResumeCompanyDetailsComponent} from "./resume-company-details/resume-company-details.component";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  events1: any[] = [];
  workResumes: IResume[] = [];
  workResumesArr: IResume[] = []

  constructor(public dialog: MatDialog, private resumeService: ResumeService) {
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
      this.workResumesArr = this.onGenerateArray(res);
    })
  }

  openCompanyResumeDetails(workResumes: IResume): void {
    this.dialog.open(ResumeCompanyDetailsComponent, {
      data: workResumes,
      width: '50vw',
      maxHeight: '90vh'
    });
  }

  onGenerateArray(workResumes: IResume[]) {
    let arr: IResume[] = []
    workResumes.forEach(c => {
      let x: IResume = {
        position: c.position,
        dateOfEmployee: c.dateOfEmployee,
        companyName: c.companyName,
        details: c.details,
        icon: c.icon,
        jobRequirements: c.jobRequirements,
        color: this.generateColor(6),
      }
      arr.push(x);
    })
    return arr;
  }

  generateColor(size: number): string {
    return '#' + [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  }
}
