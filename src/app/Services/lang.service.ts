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

  setLang(lang: null | string): void {
    if (lang != null) {
      this.lang.next(lang);
    }
  }

  changeLanguage(lang: string | null): void {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.direction = "rtl";
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.direction = "ltr";
    }
    this.language = lang;
    if (typeof lang === "string") {
      localStorage.setItem('amrMossadWebsiteLanguage', lang);
    }
    if (lang != null) {
      this.translateService.use(lang);
    }
    this.setLang(lang);
  }
}
