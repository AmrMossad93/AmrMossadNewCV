import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {IEvent} from '../Interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>('assets/JSON-Files/events.json')
  }
}
