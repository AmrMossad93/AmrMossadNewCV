import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAboutMeOBJ} from "../Interfaces/about-me";
import {IPersonalSkills} from "../Interfaces/personal-skills";
import {ITechnicalSkills} from "../Interfaces/technical-skills";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private httpClient: HttpClient) {
  }

  getAboutMe(): Observable<IAboutMeOBJ> {
    return this.httpClient.get<IAboutMeOBJ>('assets/JSON-Files/aboutMe.json');
  }

  getPersonalSkills(): Observable<IPersonalSkills> {
    return this.httpClient.get<IPersonalSkills>('assets/JSON-Files/personalSkills.json');
  }
  getTechnicalSkills(): Observable<ITechnicalSkills[]> {
    return this.httpClient.get<ITechnicalSkills[]>('assets/JSON-Files/technicalSkills.json');
  }
}
