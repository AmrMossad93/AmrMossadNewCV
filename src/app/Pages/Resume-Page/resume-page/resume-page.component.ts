import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {ResumeService} from "../../../Services/resume.service";
import {IResume} from "../../../Interfaces/resume";
import {MatDialog} from "@angular/material/dialog";
import {ResumeCompanyDetailsComponent} from "./resume-company-details/resume-company-details.component";
import {IEducationResume} from "../../../Interfaces/education-resume";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  workResumesArr: IResume[] = [];
  educationResumesArr: IEducationResume[] = [];

  constructor(public dialog: MatDialog, private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.getWorkResume();
    this.getEducationResume();
  }

  getWorkResume(): void {
    this.resumeService.getWorkResume().subscribe(res => {
      this.workResumesArr = this.onGenerateArray(res);
    })
  }

  getEducationResume(): void {
    this.resumeService.getEducationResume().subscribe(res => {
      this.educationResumesArr = this.onGenerateEducationArray(res);
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

  onGenerateEducationArray(educationResumes: IEducationResume[]) {
    let arr: IEducationResume[] = []
    educationResumes.forEach(c => {
      let x: IEducationResume = {
        position: c.position,
        dateOfGraduation: c.dateOfGraduation,
        studyPlace: c.studyPlace,
        details: c.details,
        icon: c.icon,
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
