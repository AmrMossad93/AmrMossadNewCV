import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAboutMeOBJ} from "../Interfaces/about-me";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private httpClient: HttpClient) {
  }

  getAboutMe(): Observable<IAboutMeOBJ> {
    return this.httpClient.get<IAboutMeOBJ>('assets/JSON-Files/aboutMe.json');
  }
}
