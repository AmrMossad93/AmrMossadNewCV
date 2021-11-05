import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {Direction} from "@angular/cdk/bidi";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private lang: BehaviorSubject<string> = new BehaviorSubject('');
  language = localStorage.getItem('language');
  position: any;
  direction: Direction = "ltr";

  // @ts-ignore
  constructor(@Inject(DOCUMENT) private document, private translateService: TranslateService) {
  }

  getLang(): Observable<string> {
    return this.lang.asObservable();
  }

  setLang(lang: string): void {
    this.lang.next(lang);
  }

  changeLanguage(lang: string): void {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.translateService.use('ar');
      localStorage.setItem('language', 'ar');
      this.language = 'ar';
      this.position = 'end';
      this.direction = "rtl";
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
      this.language = 'en';
      this.position = 'start';
      this.direction = "ltr";
    }
    this.setLang(this.language);
  }
}
