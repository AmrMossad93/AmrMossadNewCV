import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../../Services/contact.service";
import {ISendEmail} from "../../../Interfaces/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactService.emailForm)
    this.contactService.emailForm = {} as ISendEmail
  }
}
