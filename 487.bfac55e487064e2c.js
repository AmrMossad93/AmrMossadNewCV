"use strict";(self.webpackChunkAmrMossadNewCV=self.webpackChunkAmrMossadNewCV||[]).push([[487],{4487:(_,u,a)=>{a.r(u),a.d(u,{ResumePageModule:()=>S});var l=a(6019),p=a(3218),r=a(5304),e=a(3668),g=a(86),c=a(888);function f(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-dialog-actions"),e.TgZ(1,"button",3),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.goToUrl(s.data.details.companyURL)}),e._uU(2),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(2),e.hij("",t.data.companyName," WebSite")}}let h=(()=>{class o{constructor(t,i){this.dialogRef=t,this.data=i}ngOnInit(){}onNoClick(){this.dialogRef.close()}goToUrl(t){window.open(t,"_blank")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.so),e.Y36(r.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-resume-company-details"]],decls:21,vars:6,consts:[["mat-button","","id","dialog","mat-dialog-close","",1,"float-end",3,"click"],["mat-dialog-title",""],[4,"ngIf"],["mat-button","","color","primary",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.onNoClick()}),e._uU(1,"X"),e.qZA(),e.TgZ(2,"h2",1),e._uU(3),e.qZA(),e.TgZ(4,"h6",1),e._uU(5),e.qZA(),e.TgZ(6,"mat-dialog-content"),e.TgZ(7,"mat-card"),e.TgZ(8,"mat-card-title"),e._uU(9),e.qZA(),e.TgZ(10,"mat-card-content"),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"mat-card"),e.TgZ(15,"mat-card-title"),e._uU(16,"About My Role"),e.qZA(),e.TgZ(17,"mat-card-content"),e.TgZ(18,"p"),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(20,f,3,1,"mat-dialog-actions",2)),2&t&&(e.xp6(3),e.Oqu(i.data.companyName),e.xp6(2),e.Oqu(i.data.position),e.xp6(4),e.hij("About ",i.data.companyName,""),e.xp6(3),e.hij(" ",i.data.details.aboutCompany," "),e.xp6(7),e.hij(" ",i.data.details.myRole," "),e.xp6(1),e.Q6J("ngIf",i.data.details.companyURL))},directives:[g.lW,r.ZT,r.uh,r.xY,c.a8,c.n5,c.dn,l.O5,r.H8],styles:[""]}),o})();var R=a(4522);let C=(()=>{class o{constructor(t){this.httpClient=t}getWorkResume(){return this.httpClient.get("assets/JSON-Files/workResume.json")}getEducationResume(){return this.httpClient.get("assets/JSON-Files/educationResume.json")}getMyCertificate(){return this.httpClient.get("assets/JSON-Files/certificate.json")}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(R.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var y=a(3951),d=a(2605),A=a(7917),T=a(7901),v=a(4791),x=a(4781),b=a(3660),Z=a(8292);function P(o,n){if(1&o&&(e.TgZ(0,"span",13),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.certificateName)}}function N(o,n){if(1&o&&(e.TgZ(0,"div",10),e.TgZ(1,"p-image",11),e.YNc(2,P,2,1,"ng-template",12),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.certificatePath)("alt",t.certificateName)("preview",!0)}}function M(o,n){if(1&o&&(e.TgZ(0,"span",14),e._UZ(1,"i",15),e.qZA()),2&o){const t=n.$implicit;e.Udp("background-color",t.color),e.xp6(1),e.Q6J("ngClass",t.icon)}}function q(o,n){if(1&o&&(e.TgZ(0,"li",21),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function U(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"p-card",16),e.TgZ(1,"ul",17),e.YNc(2,q,2,1,"li",18),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"div",19),e.TgZ(5,"button",20),e.NdJ("click",function(){const m=e.CHM(t).$implicit;return e.oxw().openCompanyResumeDetails(m)}),e.TgZ(6,"mat-icon"),e._uU(7," visibility "),e.qZA(),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("header",t.position)("subheader",t.companyName+" ... "+t.dateOfEmployee),e.xp6(2),e.Q6J("ngForOf",t.jobRequirements),e.xp6(6),e.hij(" View More About ",t.companyName," ")}}function w(o,n){if(1&o&&(e.TgZ(0,"span",14),e._UZ(1,"i",15),e.qZA()),2&o){const t=n.$implicit;e.Udp("background-color",t.color),e.xp6(1),e.Q6J("ngClass",t.icon)}}function J(o,n){if(1&o&&(e.TgZ(0,"p-card",16),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.Q6J("header",t.position)("subheader",t.studyPlace+" ... "+t.dateOfGraduation),e.xp6(2),e.hij(" ",t.details," ")}}const O=[{path:"",component:(()=>{class o{constructor(t,i){this.dialog=t,this.resumeService=i,this.workResumesArr=[],this.educationResumesArr=[],this.certificates=[]}ngOnInit(){this.getWorkResume(),this.getEducationResume(),this.getMyCertificate()}getWorkResume(){this.resumeService.getWorkResume().subscribe(t=>{this.workResumesArr=this.onGenerateArray(t)})}getEducationResume(){this.resumeService.getEducationResume().subscribe(t=>{this.educationResumesArr=this.onGenerateEducationArray(t)})}getMyCertificate(){this.resumeService.getMyCertificate().subscribe(t=>{this.certificates=t})}openCompanyResumeDetails(t){this.dialog.open(h,{data:t,width:"50vw",maxHeight:"90vh"})}onGenerateArray(t){let i=[];return t.forEach(s=>{let m={position:s.position,dateOfEmployee:s.dateOfEmployee,companyName:s.companyName,details:s.details,icon:s.icon,jobRequirements:s.jobRequirements,color:this.generateColor(6)};i.push(m)}),i}onGenerateEducationArray(t){let i=[];return t.forEach(s=>{let m={position:s.position,dateOfGraduation:s.dateOfGraduation,studyPlace:s.studyPlace,details:s.details,icon:s.icon,color:this.generateColor(6)};i.push(m)}),i}generateColor(t){return"#"+[...Array(t)].map(()=>Math.floor(16*Math.random()).toString(16)).join("")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.uw),e.Y36(C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-resume-page"]],decls:21,vars:18,consts:[[1,"container"],[3,"title","subTitle","showProgress"],[1,"row"],["class","col-md-3 mb-2 text-center",4,"ngFor","ngForOf"],["mat-align-tabs","center",3,"backgroundColor"],["label","Work Experience"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["pTemplate","content"],["label","Education"],[1,"col-md-3","mb-2","text-center"],["width","250",3,"src","alt","preview"],["pTemplate","indicator"],[1,"text-center","p-1"],[1,"custom-marker","p-shadow-2"],[3,"ngClass"],[3,"header","subheader"],[1,"list-group","list-group-flush","text-center"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"col-md-12","mt-2"],["mat-flat-button","","color","primary",1,"float-end",3,"click"],[1,"list-group-item"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"app-card",1),e.ALo(2,"translate"),e.ALo(3,"translate"),e.TgZ(4,"div",2),e.YNc(5,N,3,3,"div",3),e.qZA(),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"app-card",1),e.ALo(8,"translate"),e.ALo(9,"translate"),e.TgZ(10,"mat-tab-group",4),e.TgZ(11,"mat-tab",5),e._UZ(12,"br"),e.TgZ(13,"p-timeline",6),e.YNc(14,M,2,3,"ng-template",7),e.YNc(15,U,9,4,"ng-template",8),e.qZA(),e.qZA(),e.TgZ(16,"mat-tab",9),e._UZ(17,"br"),e.TgZ(18,"p-timeline",6),e.YNc(19,w,2,3,"ng-template",7),e.YNc(20,J,3,3,"ng-template",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.s9C("title",e.lcZ(2,10,"Let Me Show You My Certificates")),e.s9C("subTitle",e.lcZ(3,12,"My Resume")),e.Q6J("showProgress",!1),e.xp6(4),e.Q6J("ngForOf",i.certificates),e.xp6(2),e.s9C("title",e.lcZ(8,14,"Let Me Show You My Experiences")),e.s9C("subTitle",e.lcZ(9,16,"My Resume")),e.Q6J("showProgress",!1),e.xp6(3),e.Q6J("backgroundColor","primary"),e.xp6(3),e.Q6J("value",i.workResumesArr),e.xp6(5),e.Q6J("value",i.educationResumesArr))},directives:[y.A,l.sg,d.SP,d.uX,A.T,T.jx,v.E,l.mk,x.Z,g.lW,b.Hw],pipes:[Z.X$],styles:[".custom-marker[_ngcontent-%COMP%]{display:flex;width:2rem;height:2rem;align-items:center;justify-content:center;color:#fff;border-radius:50%;z-index:1}  .p-timeline-event-content,   .p-timeline-event-opposite{line-height:1}@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(even){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(O)],p.Bz]}),o})();var k=a(4297),E=a(2358),F=a(7634);let S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,j,k.g,E.h,Z.aw,F.H]]}),o})()}}]);