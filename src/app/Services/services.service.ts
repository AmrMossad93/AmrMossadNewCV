import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IServices} from "../Interfaces/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }

  getServices(): Observable<IServices[]> {
    return this.httpClient.get<IServices[]>('assets/JSON-Files/services.json')
  }
}
