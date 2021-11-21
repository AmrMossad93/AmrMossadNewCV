import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IResume} from "../../../../Interfaces/resume";

@Component({
  selector: 'app-resume-company-details',
  templateUrl: './resume-company-details.component.html',
  styleUrls: ['./resume-company-details.component.scss']
})
export class ResumeCompanyDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResumeCompanyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IResume,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  goToUrl(url: string): void {
    window.open(url, '_blank')
  }
}
