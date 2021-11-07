import {Component, OnInit} from '@angular/core';
import {LangService} from 'src/app/Services/lang.service';
import {AboutMeService} from "../../../Services/about-me.service";
import {IAboutMeOBJ, IAboutMeView} from "../../../Interfaces/about-me";
import {IPersonalSkills, IPersonalSkillsView} from "../../../Interfaces/personal-skills";

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  showProgress = true;
  aboutMeOBJ = {} as IAboutMeOBJ;
  aboutMeOBJView = {} as IAboutMeView;
  personalSkills = {} as IPersonalSkills;
  personalSkillsView = {} as IPersonalSkillsView;

  constructor(private aboutMeService: AboutMeService, private langService: LangService) {
  }

  ngOnInit(): void {
    this.getAboutMe();
    this.getPersonalSkills();
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
          imgPath: this.aboutMeOBJ.imgPath,
          phone: this.aboutMeOBJ.phone,
          email: this.aboutMeOBJ.email,
          profile: this.aboutMeOBJ.profileEn,
          fullName: this.aboutMeOBJ.fullNameEn,
          birthDate: this.aboutMeOBJ.birthDateEn,
          degree: this.aboutMeOBJ.degreeEn,
          nationality: this.aboutMeOBJ.nationalityEn,
          militaryStatus: this.aboutMeOBJ.militaryStatusEn,
          maritalStatus: this.aboutMeOBJ.maritalStatusEn,
        }
      } else if (lang === 'ar') {
        this.aboutMeOBJView = {
          desc: this.aboutMeOBJ.descAr,
          title: this.aboutMeOBJ.titleAr,
          imgPath: this.aboutMeOBJ.imgPath,
          phone: this.aboutMeOBJ.phone,
          email: this.aboutMeOBJ.email,
          profile: this.aboutMeOBJ.profileAr,
          fullName: this.aboutMeOBJ.fullNameAr,
          birthDate: this.aboutMeOBJ.birthDateAr,
          degree: this.aboutMeOBJ.degreeAr,
          nationality: this.aboutMeOBJ.nationalityAr,
          militaryStatus: this.aboutMeOBJ.militaryStatusAr,
          maritalStatus: this.aboutMeOBJ.maritalStatusAr,
        }
      } else if (lang === 'fr') {
        this.aboutMeOBJView = {
          desc: this.aboutMeOBJ.descFn,
          title: this.aboutMeOBJ.titleFn,
          imgPath: this.aboutMeOBJ.imgPath,
          phone: this.aboutMeOBJ.phone,
          email: this.aboutMeOBJ.email,
          profile: this.aboutMeOBJ.profileFn,
          fullName: this.aboutMeOBJ.fullNameFn,
          birthDate: this.aboutMeOBJ.birthDateFn,
          degree: this.aboutMeOBJ.degreeFn,
          nationality: this.aboutMeOBJ.nationalityFn,
          militaryStatus: this.aboutMeOBJ.militaryStatusFn,
          maritalStatus: this.aboutMeOBJ.maritalStatusFn,
        }
      }
    });
    this.showProgress = false;
  }

  getPersonalSkills(): void {
    this.aboutMeService.getPersonalSkills().subscribe(res => {
      this.personalSkills = res;
    }, error => {
    }, () => {
      this.createPersonalSkillsOBJ();
    })
  }

  createPersonalSkillsOBJ(): void {
    let lang: string | null = '';
    this.langService.getLang().subscribe(res => {
      lang = res as string;
      if (lang === '') {
        lang = localStorage.getItem('amrMossadWebsiteLanguage');
      }
      if (lang === 'en') {
        this.personalSkillsView.skills = this.personalSkills.skillsEn;
      } else if (lang === 'ar') {
        this.personalSkillsView.skills = this.personalSkills.skillsAr;
      } else if (lang === 'fr') {
        this.personalSkillsView.skills = this.personalSkills.skillsFr;
      }
    });
  }
}
