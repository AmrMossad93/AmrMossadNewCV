import {Component, OnInit} from '@angular/core';
import {IEvent} from "../../../../Interfaces/event";
import {EventService} from "../../../../Services/event.service";
import {ActivatedRoute} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  showProgress: boolean = true;
  event = {} as IEvent;
  eventId: number = 0;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private eventService: EventService, private activeRoute: ActivatedRoute,) {
    this.activeRoute.params.subscribe(params => {
      if (params['eventId']) {
        this.eventId = +params['eventId']
      }
    })
  }

  ngOnInit(): void {
    this.getEventsList();
  }

  getEventsList(): void {
    this.eventService.getEvents().subscribe(res => {
      this.event = <IEvent>res.find(c => c.id === this.eventId);
      this.event.eventImages.splice(0, 1)
      console.log(this.event)
      this.showProgress = false;
    })
  }
}
