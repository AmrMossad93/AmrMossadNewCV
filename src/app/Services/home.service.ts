import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Observable} from "rxjs";
import {APIName} from "../APINames/APIName";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataService: DataService) {
  }

  getHomeDetails(): Observable<{ welcomeMessage: string }> {
    return this.dataService.get(APIName.home)
  }
}
