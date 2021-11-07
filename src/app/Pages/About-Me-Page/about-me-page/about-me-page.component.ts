import {Component, OnInit} from '@angular/core';
import {LangService} from 'src/app/Services/lang.service';
import {AboutMeService} from "../../../Services/about-me.service";
import {IAboutMeOBJ, IAboutMeView} from "../../../Interfaces/about-me";

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  showProgress = true;
  aboutMeOBJ = {} as IAboutMeOBJ;
  aboutMeOBJView = {} as IAboutMeView;

  constructor(private aboutMeService: AboutMeService, private langService: LangService) {
  }

  ngOnInit(): void {
    this.getAboutMe();
  }

  getAboutMe(): void {
    this.aboutMeService.getAboutMe().subscribe(res => {
      this.aboutMeOBJ = res
    }, error => {
    }, () => {
      this.createOBJ();
    })
  }

  createOBJ(): void {
    let lang: string | null = '';
    this.langService.getLang().subscribe(res => {
      lang = res as string;
      if (lang === '') {
        lang = localStorage.getItem('amrMossadWebsiteLanguage');
      }
      if (lang === 'en') {
        this.aboutMeOBJView = {
          desc: this.aboutMeOBJ.descEn,
          title: this.aboutMeOBJ.titleEn,
        }
      } else if (lang === 'ar') {
        this.aboutMeOBJView = {
          desc: this.aboutMeOBJ.descAr,
          title: this.aboutMeOBJ.titleAr,
        }
      } else if (lang === 'fr') {
        this.aboutMeOBJView = {
          desc: this.aboutMeOBJ.descFn,
          title: this.aboutMeOBJ.titleFn,
        }
      }
    });
    this.showProgress = false;
  }
}
