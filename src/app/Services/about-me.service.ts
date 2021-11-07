import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAboutMeOBJ} from "../Interfaces/about-me";
import {IPersonalSkills} from "../Interfaces/personal-skills";

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
}
