import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {LangService} from "./Services/lang.service";
import {NavigationEnd, NavigationStart, Router, Event,} from '@angular/router';
import {LoaderService} from "./Services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  connectUrls = [
    {url: 'home', page: 'Home Page'},
    {url: 'about-me', page: 'About Me'},
    {url: 'resume', page: 'My Resume'},
  ];
  lang = '';
  currentUrl: string = '';

  // @ts-ignore
  constructor(@Inject(DOCUMENT) private document, public langService: LangService, public router: Router, private loaderService: LoaderService) {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('language') === 'ar') {
      this.langService.changeLanguage('ar');
    } else {
      this.langService.changeLanguage('en');
    }
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

  ngAfterViewInit() {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }
}
