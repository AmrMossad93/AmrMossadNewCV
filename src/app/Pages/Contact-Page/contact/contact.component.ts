import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../../Services/contact.service";
import {ISendEmail} from "../../../Interfaces/contact";
import {NgForm} from "@angular/forms";
import {SnackBarService} from "../../../Services/snack-bar.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.contactService.sendEmail().subscribe(res => {
    }, error => {
      this.snackBarService.errorAlert(
        'Error Happened',
        'Email'
      );
    }, () => {
      this.snackBarService.addAlert(
        'Sent Successfully',
        'Email',
        'end'
      );
      form.resetForm()
    })

  }
}
