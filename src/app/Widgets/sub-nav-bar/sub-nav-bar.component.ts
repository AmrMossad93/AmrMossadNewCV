import {Component, Input, OnInit} from '@angular/core';
import {ISubNav} from "../../Interfaces/sub-nav";

@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.scss']
})
export class SubNavBarComponent implements OnInit {
  @Input() subNavRoutes: ISubNav[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
