import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmrMossadNewCV';
  connectUrls = [
    {url: 'home', page: 'Home Page'},
    {url: 'about-me', page: 'About Me'},
    {url: 'resume', page: 'My Resume'},
  ]
}
