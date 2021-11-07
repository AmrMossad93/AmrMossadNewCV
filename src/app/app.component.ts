import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {LangService} from "./Services/lang.service";
import {NavigationEnd, NavigationStart, Router, Event,} from '@angular/router';
import {LoaderService} from "./Services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  connectUrls = [
    {url: 'home', page: 'Home Page'},
    {url: 'about-me', page: 'About Me'},
    {url: 'resume', page: 'Resume'},
    {url: 'projects/web-applications', page: 'Projects'},
    {url: 'services', page: 'Services'},
    {url: 'contact', page: 'Contact'},
  ];
  currentUrl: string = '';
  lang = localStorage.getItem('amrMossadWebsiteLanguage');
  // @ts-ignore
  constructor(@Inject(DOCUMENT) private document, public langService: LangService, public router: Router, private loaderService: LoaderService) {
    if (!localStorage.getItem('amrMossadWebsiteLanguage')) {
      localStorage.setItem('amrMossadWebsiteLanguage', 'en');
    }
    this.langService.changeLanguage(this.lang)
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
