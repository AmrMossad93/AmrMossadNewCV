import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IWebApplications} from "../Interfaces/web-applications";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) {
  }

  getWebApplications(): Observable<IWebApplications[]> {
    return this.httpClient.get<IWebApplications[]>('assets/JSON-Files/web-applications.json')
  }
}
