import {Injectable} from '@angular/core';
import {ISendEmail} from "../Interfaces/contact";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  emailForm = {} as ISendEmail;

  constructor(private httpClient: HttpClient) {
  }
  sendEmail(): Observable<any> {
    return this.httpClient.post('https://formspree.io/f/xrgjzknp', {})
  }
}
