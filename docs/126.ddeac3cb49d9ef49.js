"use strict";(self.webpackChunkAmrMossadNewCV=self.webpackChunkAmrMossadNewCV||[]).push([[126],{126:(S,n,o)=>{o.r(n),o.d(n,{AboutMePageModule:()=>B});var r=o(6019),u=o(1729),t=o(3668),h=o(4522);let c=(()=>{class i{constructor(e){this.httpClient=e}getAboutMe(){return this.httpClient.get("assets/JSON-Files/aboutMe.json")}getPersonalSkills(){return this.httpClient.get("assets/JSON-Files/personalSkills.json")}getTechnicalSkills(){return this.httpClient.get("assets/JSON-Files/technicalSkills.json")}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(h.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var p=o(2236),l=o(888),Z=o(9009);function b(i,s){1&i&&(t.TgZ(0,"mat-card-footer"),t._UZ(1,"mat-progress-bar",1),t.qZA())}const d=["*"];let m=(()=>{class i{constructor(){this.title="",this.subTitle="",this.showProgress=!0}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card"]],inputs:{title:"title",subTitle:"subTitle",showProgress:"showProgress"},ngContentSelectors:d,decls:9,vars:3,consts:[[4,"ngIf"],["mode","indeterminate"]],template:function(e,a){1&e&&(t.F$t(),t.TgZ(0,"mat-card"),t.TgZ(1,"mat-card-header"),t.TgZ(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"mat-card-content"),t.Hsn(7),t.qZA(),t.YNc(8,b,2,0,"mat-card-footer",0),t.qZA()),2&e&&(t.xp6(3),t.Oqu(a.title),t.xp6(2),t.Oqu(a.subTitle),t.xp6(3),t.Q6J("ngIf",a.showProgress))},directives:[l.a8,l.dk,l.n5,l.$j,l.dn,r.O5,l.rt,Z.pW],styles:[""]}),i})();var g=o(3546);function A(i,s){if(1&i&&(t.TgZ(0,"li",12),t.TgZ(1,"b"),t._uU(2),t.qZA(),t.qZA()),2&i){const e=s.$implicit;t.xp6(2),t.hij(" ",e," ")}}function M(i,s){if(1&i&&(t.TgZ(0,"div",10),t.TgZ(1,"div",19),t.TgZ(2,"div",20),t._uU(3),t.qZA(),t.TgZ(4,"div",7),t.TgZ(5,"div",21),t.TgZ(6,"div",22),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i){const e=s.$implicit;t.xp6(3),t.hij(" ",e.name," "),t.xp6(3),t.Udp("width",e.progress+"%"),t.xp6(1),t.hij("",e.progress,"%")}}const O=[{path:"",component:(()=>{class i{constructor(e,a){this.aboutMeService=e,this.langService=a,this.showProgress=!0,this.aboutMeOBJ={},this.aboutMeOBJView={},this.personalSkills={},this.personalSkillsView={},this.technicalSkills=[]}ngOnInit(){this.getAboutMe(),this.getPersonalSkills(),this.getTechnicalSkills()}getAboutMe(){this.aboutMeService.getAboutMe().subscribe(e=>{this.aboutMeOBJ=e},e=>{},()=>{this.createOBJ()})}createOBJ(){let e="";this.langService.getLang().subscribe(a=>{e=a,""===e&&(e=localStorage.getItem("amrMossadWebsiteLanguage")),"en"===e?this.aboutMeOBJView={desc:this.aboutMeOBJ.descEn,title:this.aboutMeOBJ.titleEn,imgPath:this.aboutMeOBJ.imgPath,phone:this.aboutMeOBJ.phone,email:this.aboutMeOBJ.email,profile:this.aboutMeOBJ.profileEn,fullName:this.aboutMeOBJ.fullNameEn,birthDate:this.aboutMeOBJ.birthDateEn,degree:this.aboutMeOBJ.degreeEn,nationality:this.aboutMeOBJ.nationalityEn,militaryStatus:this.aboutMeOBJ.militaryStatusEn,maritalStatus:this.aboutMeOBJ.maritalStatusEn}:"ar"===e?this.aboutMeOBJView={desc:this.aboutMeOBJ.descAr,title:this.aboutMeOBJ.titleAr,imgPath:this.aboutMeOBJ.imgPath,phone:this.aboutMeOBJ.phone,email:this.aboutMeOBJ.email,profile:this.aboutMeOBJ.profileAr,fullName:this.aboutMeOBJ.fullNameAr,birthDate:this.aboutMeOBJ.birthDateAr,degree:this.aboutMeOBJ.degreeAr,nationality:this.aboutMeOBJ.nationalityAr,militaryStatus:this.aboutMeOBJ.militaryStatusAr,maritalStatus:this.aboutMeOBJ.maritalStatusAr}:"fr"===e&&(this.aboutMeOBJView={desc:this.aboutMeOBJ.descFn,title:this.aboutMeOBJ.titleFn,imgPath:this.aboutMeOBJ.imgPath,phone:this.aboutMeOBJ.phone,email:this.aboutMeOBJ.email,profile:this.aboutMeOBJ.profileFn,fullName:this.aboutMeOBJ.fullNameFn,birthDate:this.aboutMeOBJ.birthDateFn,degree:this.aboutMeOBJ.degreeFn,nationality:this.aboutMeOBJ.nationalityFn,militaryStatus:this.aboutMeOBJ.militaryStatusFn,maritalStatus:this.aboutMeOBJ.maritalStatusFn})}),this.showProgress=!1}getPersonalSkills(){this.aboutMeService.getPersonalSkills().subscribe(e=>{this.personalSkills=e},e=>{},()=>{this.createPersonalSkillsOBJ()})}createPersonalSkillsOBJ(){let e="";this.langService.getLang().subscribe(a=>{e=a,""===e&&(e=localStorage.getItem("amrMossadWebsiteLanguage")),"en"===e?this.personalSkillsView.skills=this.personalSkills.skillsEn:"ar"===e?this.personalSkillsView.skills=this.personalSkills.skillsAr:"fr"===e&&(this.personalSkillsView.skills=this.personalSkills.skillsFr)})}getTechnicalSkills(){this.aboutMeService.getTechnicalSkills().subscribe(e=>{this.technicalSkills=e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c),t.Y36(p.C))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-about-me-page"]],decls:78,vars:59,consts:[[1,"container"],[3,"title","subTitle","showProgress"],[1,"card","mb-3","animate__animated","animate__fadeIn"],[1,"row","g-0"],[1,"col-md-4"],["alt","photo",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-header","text-primary","text-center"],[1,"row"],[1,"col-md-6"],[1,"list-group","list-group-flush"],[1,"list-group-item","text-primary"],["dir","ltr"],[1,"card-title","text-primary","text-center"],[1,"col-md-12"],[1,"list-group","list-group-flush","text-center"],["class","list-group-item text-primary",4,"ngFor","ngForOf"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"card","text-center"],[1,"card-header"],[1,"progress"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"app-card",1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t.TgZ(10,"h5",8),t._uU(11),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"div",9),t.TgZ(14,"div",10),t.TgZ(15,"ul",11),t.TgZ(16,"li",12),t.TgZ(17,"b"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"li",12),t.TgZ(22,"b"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"li",12),t.TgZ(27,"b"),t._uU(28),t.ALo(29,"translate"),t.qZA(),t._uU(30),t.qZA(),t.TgZ(31,"li",12),t.TgZ(32,"b"),t._uU(33),t.ALo(34,"translate"),t.qZA(),t._uU(35),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",10),t.TgZ(37,"ul",11),t.TgZ(38,"li",12),t.TgZ(39,"b"),t._uU(40),t.ALo(41,"translate"),t.qZA(),t._uU(42),t.qZA(),t.TgZ(43,"li",12),t.TgZ(44,"b"),t._uU(45),t.ALo(46,"translate"),t.qZA(),t._uU(47),t.qZA(),t.TgZ(48,"li",12),t.TgZ(49,"b"),t._uU(50),t.ALo(51,"translate"),t.qZA(),t._uU(52,": "),t.TgZ(53,"span",13),t._uU(54),t.qZA(),t.qZA(),t.TgZ(55,"li",12),t.TgZ(56,"b"),t._uU(57),t.ALo(58,"translate"),t.qZA(),t._uU(59),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"h5",8),t._uU(61),t.qZA(),t.TgZ(62,"h5",14),t._uU(63),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(64,"br"),t.TgZ(65,"app-card",1),t.ALo(66,"translate"),t.ALo(67,"translate"),t.TgZ(68,"div",9),t.TgZ(69,"div",15),t.TgZ(70,"ul",16),t.YNc(71,A,3,1,"li",17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(72,"br"),t.TgZ(73,"app-card",1),t.ALo(74,"translate"),t.ALo(75,"translate"),t.TgZ(76,"div",9),t.YNc(77,M,8,4,"div",18),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.s9C("title",t.lcZ(2,31,"Let Me Introduce Myself")),t.s9C("subTitle",t.lcZ(3,33,"About Me")),t.Q6J("showProgress",a.showProgress),t.xp6(6),t.Q6J("src",a.aboutMeOBJView.imgPath,t.LSH),t.xp6(4),t.Oqu(a.aboutMeOBJView.profile),t.xp6(7),t.hij(" ",t.lcZ(19,35,"Full name")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.fullName," "),t.xp6(3),t.hij(" ",t.lcZ(24,37,"Birth Date")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.birthDate," "),t.xp6(3),t.hij(" ",t.lcZ(29,39,"Nationality")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.nationality," "),t.xp6(3),t.hij(" ",t.lcZ(34,41,"Military Status")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.militaryStatus," "),t.xp6(5),t.hij(" ",t.lcZ(41,43,"Marital Status")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.maritalStatus," "),t.xp6(3),t.hij(" ",t.lcZ(46,45,"Email")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.email," "),t.xp6(3),t.hij(" ",t.lcZ(51,47,"Phone")," "),t.xp6(4),t.Oqu(a.aboutMeOBJView.phone),t.xp6(3),t.hij(" ",t.lcZ(58,49,"Degree")," "),t.xp6(2),t.hij(": ",a.aboutMeOBJView.degree," "),t.xp6(2),t.Oqu(a.aboutMeOBJView.title),t.xp6(2),t.hij(" ",a.aboutMeOBJView.desc," "),t.xp6(2),t.s9C("title",t.lcZ(66,51,"Personal Skills")),t.s9C("subTitle",t.lcZ(67,53,"About Me")),t.Q6J("showProgress",a.showProgress),t.xp6(6),t.Q6J("ngForOf",a.personalSkillsView.skills),t.xp6(2),t.s9C("title",t.lcZ(74,55,"Technical Skills")),t.s9C("subTitle",t.lcZ(75,57,"About Me")),t.Q6J("showProgress",a.showProgress),t.xp6(4),t.Q6J("ngForOf",a.technicalSkills))},directives:[m,r.sg],pipes:[g.X$],styles:[""]}),i})()}];let J=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.Bz.forChild(O)],u.Bz]}),i})();var T=o(4278);let f=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.ez,T.h]]}),i})(),B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.ez,J,f,g.aw]]}),i})()}}]);