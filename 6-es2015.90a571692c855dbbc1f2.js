(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9O1O":function(l,n,e){"use strict";var t=e("z6cu"),u=e("un/a"),r=e("lJxs"),i=e("JIr8");class o{static fromRaw(l){return Object.assign({},l,{published:new Date(l.published)})}}var a=e("8Y7J"),c=e("IheW");e.d(n,"a",function(){return s});class s{constructor(l){this.http=l,this.api="https://api3.angular-buch.com/secure"}getAll(){return this.http.get(`${this.api}/books`).pipe(Object(u.a)(3),Object(r.a)(l=>l.map(l=>o.fromRaw(l))),Object(i.a)(this.errorHandler))}getSingle(l){return this.http.get(`${this.api}/book/${l}`).pipe(Object(u.a)(3),Object(r.a)(l=>o.fromRaw(l)),Object(i.a)(this.errorHandler))}create(l){return this.http.post(`${this.api}/book`,l,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}update(l){return this.http.put(`${this.api}/book/${l.isbn}`,l,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}remove(l){return this.http.delete(`${this.api}/book/${l}`,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}getAllSearch(l){return this.http.get(`${this.api}/books/search/${l}`).pipe(Object(u.a)(3),Object(r.a)(l=>l.map(l=>o.fromRaw(l))),Object(i.a)(this.errorHandler))}check(l){return this.http.get(`${this.api}/book/${l}/check`).pipe(Object(i.a)(this.errorHandler))}errorHandler(l){return console.error("Fehler aufgetreten!"),Object(t.a)(l)}}s.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new s(a["\u0275\u0275inject"](c.c))},token:s,providedIn:"root"})},Hfs6:function(l,n,e){var t,u,r;!function(i){if("object"==typeof l.exports){var o=i(0,n);void 0!==o&&(l.exports=o)}else u=[e,n],void 0===(r="function"==typeof(t=i)?t.apply(n,u):t)||(l.exports=r)}(function(l,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=void 0;n.default=["fr",[["AM","PM"],e,e],e,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],e,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]],e,[["av. J.-C.","ap. J.-C."],e,["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1} '\xe0' {0}",e,e],[",","\xa0",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"\u20ac","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BSD:["$BS","$"],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[e,"\xa5"],COP:["$CO","$"],CYP:["\xa3CY"],EGP:[e,"\xa3E"],FJD:["$FJ","$"],FKP:["\xa3FK","\xa3"],FRF:["F"],GBP:["\xa3GB","\xa3"],GIP:["\xa3GI","\xa3"],HKD:[e,"$"],IEP:["\xa3IE"],ILP:["\xa3IL"],ITL:["\u20a4IT"],JPY:[e,"\xa5"],KMF:[e,"FC"],LBP:["\xa3LB","\xa3L"],MTP:["\xa3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[e,"$C"],NZD:["$NZ","$"],RHD:["$RH"],RON:[e,"L"],RWF:[e,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TTD:["$TT","$"],TWD:[e,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["WS$"],XCD:[e,"$"],XPF:["FCFP"],ZMW:[e,"Kw"]},function(l){var n=Math.floor(Math.abs(l));return 0===n||1===n?1:5}]})},OqnO:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("VLs4"),r=e.n(u),i=e("Hfs6"),o=e.n(i),a=e("SVse");class c{constructor(l){Object(a.r)(r.a),Object(a.r)(o.a),console.log("Current Locale",l)}}class s{}var d=e("pMnS"),p=e("iInd"),h=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"div",[["class","ui menu"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](2,671744,[[2,4]],0,p.o,[p.l,p.a,a.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](3,1720320,null,2,p.n,[p.l,t.ElementRef,t.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](7,0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](8,671744,[[4,4]],0,p.o,[p.l,p.a,a.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](9,1720320,null,2,p.n,[p.l,t.ElementRef,t.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,3,{links:1}),t["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Books"])),(l()(),t["\u0275eld"](13,0,null,null,5,"a",[["class","item"],["routerLink","admin"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](14,671744,[[6,4]],0,p.o,[p.l,p.a,a.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](15,1720320,null,2,p.n,[p.l,t.ElementRef,t.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,5,{links:1}),t["\u0275qud"](603979776,6,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Administration"])),(l()(),t["\u0275eld"](19,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](20,212992,null,0,p.q,[p.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){l(n,2,0,"home"),l(n,3,0,"active"),l(n,8,0,"books"),l(n,9,0,"active"),l(n,14,0,"admin"),l(n,15,0,"active"),l(n,20,0)},function(l,n){l(n,1,0,t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href),l(n,7,0,t["\u0275nov"](n,8).target,t["\u0275nov"](n,8).href),l(n,13,0,t["\u0275nov"](n,14).target,t["\u0275nov"](n,14).href)})}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"bm-root",[],null,null,null,m,h)),t["\u0275did"](1,49152,null,0,s,[],null,null)],null,null)}var v=t["\u0275ccf"]("bm-root",s,f,{},{},[]),k=e("XNiG"),b=e("pLZG"),$=e("Kj3r"),g=e("/uUt"),L=e("vkgz"),O=e("eIep"),y=e("9O1O");class j{constructor(l){this.bs=l,this.keyUp$=new k.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(b.a)(l=>l.length>=3),Object($.a)(500),Object(g.a)(),Object(L.a)(()=>this.isLoading=!0),Object(O.a)(l=>this.bs.getAllSearch(l)),Object(L.a)(()=>this.isLoading=!1)).subscribe(l=>this.foundBooks=l)}}var M=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"a",[["class","result"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](1,671744,null,0,p.o,[p.l,p.a,a.i],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,3),(l()(),t["\u0275ted"](3,null,[" "," "])),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""]))],function(l,n){var e=l(n,2,0,"..","books",n.context.$implicit.isbn);l(n,1,0,e)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).target,t["\u0275nov"](n,1).href),l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.subtitle)})}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","results transition visible"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](2,278528,null,0,a.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.foundBooks)},null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","ui search"]],[[2,"loading",null]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","ui icon input"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"input",[["class","prompt"],["type","text"]],null,[[null,"keyup"]],function(l,n,e){var t=!0;return"keyup"===n&&(t=!1!==l.component.keyUp$.next(e.target.value)&&t),t},null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](5,16384,null,0,a.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,n.component.foundBooks.length)},function(l,n){l(n,0,0,n.component.isLoading)})}class F{constructor(){}ngOnInit(){}}var I=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["This is the BookMonkey."])),(l()(),t["\u0275eld"](4,0,null,null,4,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](5,671744,null,0,p.o,[p.l,p.a,a.i],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](6,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["See book list"])),(l()(),t["\u0275eld"](8,0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Search"])),(l()(),t["\u0275eld"](11,0,null,null,1,"bm-search",[],null,null,null,R,M)),t["\u0275did"](12,114688,null,0,j,[y.a],null,null)],function(l,n){l(n,5,0,"../books"),l(n,12,0)},function(l,n){l(n,4,0,t["\u0275nov"](n,5).target,t["\u0275nov"](n,5).href)})}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"bm-home",[],null,null,null,D,I)),t["\u0275did"](1,114688,null,0,F,[],null,null)],function(l,n){l(n,1,0)},null)}var S=t["\u0275ccf"]("bm-home",F,H,{},{},[]),T=e("IheW");class B{constructor(){this.authToken="1234567890"}intercept(l,n){const e=l.clone({setHeaders:{Authorization:`Bearer ${this.authToken}`}});return n.handle(e)}}class w{constructor(){this.accessGranted=!1}canActivate(){return this.accessGranted||(this.accessGranted=window.confirm("Mit gro\xdfer Macht kommt gro\xdfe Verantwortung. M\xf6chten Sie den Admin-Bereich betreten?")),this.accessGranted}}w.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new w},token:w,providedIn:"root"});const K=()=>e.e(30).then(e.bind(null,"+CAP")).then(l=>l.BooksModuleNgFactory),N=()=>Promise.all([e.e(1),e.e(29)]).then(e.bind(null,"sR/p")).then(l=>l.AdminModuleNgFactory);class E{}e.d(n,"AppModuleNgFactory",function(){return P});var P=t["\u0275cmf"](c,[s],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,v,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.m,a.l,[t.LOCALE_ID,[2,a.t]]),t["\u0275mpd"](4608,T.h,T.n,[a.d,t.PLATFORM_ID,T.l]),t["\u0275mpd"](4608,T.o,T.o,[T.h,T.m]),t["\u0275mpd"](5120,T.a,function(l){return[l,new B]},[T.o]),t["\u0275mpd"](4608,T.k,T.k,[]),t["\u0275mpd"](6144,T.i,null,[T.k]),t["\u0275mpd"](4608,T.g,T.g,[T.i]),t["\u0275mpd"](6144,T.b,null,[T.g]),t["\u0275mpd"](4608,T.f,T.j,[T.b,t.Injector]),t["\u0275mpd"](4608,T.c,T.c,[T.f]),t["\u0275mpd"](1073742336,a.c,a.c,[]),t["\u0275mpd"](1073742336,T.e,T.e,[]),t["\u0275mpd"](1073742336,T.d,T.d,[]),t["\u0275mpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.l]]),t["\u0275mpd"](1073742336,E,E,[]),t["\u0275mpd"](256,t.LOCALE_ID,"de",[]),t["\u0275mpd"](1073742336,c,c,[t.LOCALE_ID]),t["\u0275mpd"](256,T.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,T.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:s,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:F},{path:"books",loadChildren:K},{path:"admin",loadChildren:N,canActivate:[w]}]}]]},[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xtb",[])])})}}]);