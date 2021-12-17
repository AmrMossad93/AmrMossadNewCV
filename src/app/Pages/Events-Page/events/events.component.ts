import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../Services/event.service";
import {IEvent} from "../../../Interfaces/event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  showProgress: boolean = true;
  eventList: IEvent[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.getEventsList();
  }

  getEventsList(): void {
    this.eventService.getEvents().subscribe(res => {
      this.eventList = res;
      this.showProgress = false;
    })
  }
}
