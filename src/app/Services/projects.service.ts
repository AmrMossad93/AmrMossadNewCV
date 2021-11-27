import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IWebApplications} from "../Interfaces/web-applications";
import {Observable} from "rxjs";
import {IMobileApplications} from "../Interfaces/mobile-applications";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) {
  }

  getWebApplications(): Observable<IWebApplications[]> {
    return this.httpClient.get<IWebApplications[]>('assets/JSON-Files/web-applications.json')
  }

  getMobileApplications(): Observable<IMobileApplications[]> {
    return this.httpClient.get<IMobileApplications[]>('assets/JSON-Files/mobile-applications.json')
  }
}
