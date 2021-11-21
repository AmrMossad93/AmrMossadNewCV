import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IResume} from "../Interfaces/resume";
import {IEducationResume} from "../Interfaces/education-resume";
import {ICertificate} from "../Interfaces/certificate";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpClient: HttpClient) {
  }

  getWorkResume(): Observable<IResume[]> {
    return this.httpClient.get<IResume[]>('assets/JSON-Files/workResume.json');
  }

  getEducationResume(): Observable<IEducationResume[]> {
    return this.httpClient.get<IEducationResume[]>('assets/JSON-Files/educationResume.json');
  }

  getMyCertificate(): Observable<ICertificate[]> {
    return this.httpClient.get<ICertificate[]>('assets/JSON-Files/certificate.json');
  }
}
