(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6Kx0":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}class i{}var o=u("pMnS"),r=u("iInd"),c=u("SVse"),d=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function a(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","ui menu"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](2,671744,[[2,4]],0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,1720320,null,2,r.n,[r.l,e.ElementRef,e.Renderer2,[2,r.m],[2,r.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](7,0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](8,671744,[[4,4]],0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275did"](9,1720320,null,2,r.n,[r.l,e.ElementRef,e.Renderer2,[2,r.m],[2,r.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),e["\u0275ted"](-1,null,["B\xfccher"])),(l()(),e["\u0275eld"](13,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](14,212992,null,0,r.q,[r.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(l,n){l(n,2,0,"home"),l(n,3,0,"active"),l(n,8,0,"books"),l(n,9,0,"active"),l(n,14,0)},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,7,0,e["\u0275nov"](n,8).target,e["\u0275nov"](n,8).href)})}function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-root",[],null,null,null,a,d)),e["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)}var f=e["\u0275ccf"]("bm-root",i,s,{},{},[]),p=u("XNiG"),m=u("pLZG"),b=u("Kj3r"),h=u("/uUt"),k=u("vkgz"),v=u("eIep"),g=u("z6cu"),R=u("un/a"),I=u("lJxs"),O=u("JIr8");class w{static fromRaw(l){return Object.assign({},l,{published:new Date(l.published)})}}var y=u("IheW");class j{constructor(l){this.http=l,this.api="https://api3.angular-buch.com/secure"}getAll(){return this.http.get(`${this.api}/books`).pipe(Object(R.a)(3),Object(I.a)(l=>l.map(l=>w.fromRaw(l))),Object(O.a)(this.errorHandler))}getSingle(l){return this.http.get(`${this.api}/book/${l}`).pipe(Object(R.a)(3),Object(I.a)(l=>w.fromRaw(l)),Object(O.a)(this.errorHandler))}remove(l){return this.http.delete(`${this.api}/book/${l}`,{responseType:"text"}).pipe(Object(O.a)(this.errorHandler))}getAllSearch(l){return this.http.get(`${this.api}/books/search/${l}`).pipe(Object(R.a)(3),Object(I.a)(l=>l.map(l=>w.fromRaw(l))),Object(O.a)(this.errorHandler))}errorHandler(l){return console.error("Fehler aufgetreten!"),Object(g.a)(l)}}j.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new j(e["\u0275\u0275inject"](y.c))},token:j,providedIn:"root"});class L{constructor(l){this.bs=l,this.keyUp$=new p.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(m.a)(l=>l.length>=3),Object(b.a)(500),Object(h.a)(),Object(k.a)(()=>this.isLoading=!0),Object(v.a)(l=>this.bs.getAllSearch(l)),Object(k.a)(()=>this.isLoading=!1)).subscribe(l=>this.foundBooks=l)}}var C=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"a",[["class","result"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,3),(l()(),e["\u0275ted"](3,null,[" "," "])),(l()(),e["\u0275eld"](4,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""]))],function(l,n){var u=l(n,2,0,"..","books",n.context.$implicit.isbn);l(n,1,0,u)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.subtitle)})}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","results transition visible"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](2,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.foundBooks)},null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","ui search"]],[[2,"loading",null]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","ui icon input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"input",[["class","prompt"],["type","text"]],null,[[null,"keyup"]],function(l,n,u){var e=!0;return"keyup"===n&&(e=!1!==l.component.keyUp$.next(u.target.value)&&e),e},null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](5,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,n.component.foundBooks.length)},function(l,n){l(n,0,0,n.component.isLoading)})}class ${constructor(){}ngOnInit(){}}var x=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Das ist der BookMonkey."])),(l()(),e["\u0275eld"](4,0,null,null,3,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](5,671744,null,0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,[" Buchliste ansehen "])),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Suche"])),(l()(),e["\u0275eld"](10,0,null,null,1,"bm-search",[],null,null,null,A,C)),e["\u0275did"](11,114688,null,0,L,[j],null,null)],function(l,n){l(n,5,0,"../books"),l(n,11,0)},function(l,n){l(n,4,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href)})}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-home",[],null,null,null,B,x)),e["\u0275did"](1,114688,null,0,$,[],null,null)],function(l,n){l(n,1,0)},null)}var V=e["\u0275ccf"]("bm-home",$,K,{},{},[]);class D{ngOnInit(){}}var S=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["class","ui tiny image"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.book.thumbnails[0].url)})}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.book.subtitle)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[", "]))],null,null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](3,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,!n.context.last)},function(l,n){l(n,1,0,n.context.$implicit)})}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](1,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](2,0,null,null,9,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,H)),e["\u0275did"](6,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","metadata"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](9,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,[" ISBN "," "]))],function(l,n){var u=n.component;l(n,1,0,u.book.thumbnails&&u.book.thumbnails[0]&&u.book.thumbnails[0].url),l(n,6,0,u.book.subtitle),l(n,9,0,u.book.authors)},function(l,n){var u=n.component;l(n,4,0,u.book.title),l(n,11,0,u.book.isbn)})}class J{constructor(l){this.bs=l}ngOnInit(){this.bs.getAll().subscribe(l=>this.books=l)}}var U=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function X(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"bm-book-list-item",[["class","item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick()&&t),t},q,S)),e["\u0275did"](1,16384,null,0,r.m,[r.l,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,114688,null,0,D,[],{book:[0,"book"]},null)],function(l,n){l(n,1,0,n.context.$implicit.isbn),l(n,2,0,n.context.$implicit)},null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","ui active dimmer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","ui large text loader"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Daten werden geladen..."]))],null,null)}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Es wurden noch keine B\xfccher eingetragen."]))],null,null)}function W(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,X)),e["\u0275did"](2,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](4,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](6,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.books),l(n,4,0,!u.books),l(n,6,0,u.books&&!u.books.length)},null)}function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-list",[],null,null,null,W,U)),e["\u0275did"](1,114688,null,0,J,[j],null,null)],function(l,n){l(n,1,0)},null)}var P=e["\u0275ccf"]("bm-book-list",J,G,{},{},[]);class Y{constructor(l,n,u){this.bs=l,this.router=n,this.route=u}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(l=>this.book=l)}getRating(l){return new Array(l)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(l=>this.router.navigate(["../"],{relativeTo:this.route}))}}var Z=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.book.subtitle)})}function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function nl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null))],null,null)}function ul(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.url)})}function el(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,34,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](4,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](5,0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,18,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Autoren"])),(l()(),e["\u0275and"](16777216,null,null,1,null,ll)),e["\u0275did"](11,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ISBN"])),(l()(),e["\u0275ted"](15,null,[" "," "])),(l()(),e["\u0275eld"](16,0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Erschienen"])),(l()(),e["\u0275ted"](19,null,[" "," "])),(l()(),e["\u0275eld"](20,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Rating"])),(l()(),e["\u0275and"](16777216,null,null,1,null,nl)),e["\u0275did"](24,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](25,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Beschreibung"])),(l()(),e["\u0275eld"](27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",""])),(l()(),e["\u0275eld"](29,0,null,null,2,"div",[["class","ui small images"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,ul)),e["\u0275did"](31,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](32,0,null,null,2,"button",[["class","ui tiny red labeled icon button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeBook()&&e),e},null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"i",[["class","remove icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch l\xf6schen "]))],function(l,n){var u=n.component;l(n,4,0,u.book.subtitle),l(n,11,0,u.book.authors),l(n,24,0,u.getRating(u.book.rating)),l(n,31,0,u.book.thumbnails)},function(l,n){var u=n.component;l(n,2,0,u.book.title),l(n,15,0,u.book.isbn),l(n,19,0,u.book.published),l(n,28,0,u.book.description)})}function tl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","ui active centered inline loader"]],null,null,null,null,null))],null,null)}function il(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,el)),e["\u0275did"](1,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["loading",2]],null,0,null,tl))],function(l,n){l(n,1,0,n.component.book,e["\u0275nov"](n,2))},null)}function ol(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-details",[],null,null,null,il,Z)),e["\u0275did"](1,114688,null,0,Y,[j,r.l,r.a],null,null)],function(l,n){l(n,1,0)},null)}var rl=e["\u0275ccf"]("bm-book-details",Y,ol,{},{},[]);class cl{constructor(){this.authToken="1234567890"}intercept(l,n){const u=l.clone({setHeaders:{Authorization:`Bearer ${this.authToken}`}});return n.handle(u)}}class dl{}u.d(n,"AppModuleNgFactory",function(){return al});var al=e["\u0275cmf"](t,[i],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,f,V,P,rl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.m,c.l,[e.LOCALE_ID,[2,c.t]]),e["\u0275mpd"](4608,y.h,y.n,[c.d,e.PLATFORM_ID,y.l]),e["\u0275mpd"](4608,y.o,y.o,[y.h,y.m]),e["\u0275mpd"](5120,y.a,function(l){return[l,new cl]},[y.o]),e["\u0275mpd"](4608,y.k,y.k,[]),e["\u0275mpd"](6144,y.i,null,[y.k]),e["\u0275mpd"](4608,y.g,y.g,[y.i]),e["\u0275mpd"](6144,y.b,null,[y.g]),e["\u0275mpd"](4608,y.f,y.j,[y.b,e.Injector]),e["\u0275mpd"](4608,y.c,y.c,[y.f]),e["\u0275mpd"](1073742336,c.c,c.c,[]),e["\u0275mpd"](1073742336,y.e,y.e,[]),e["\u0275mpd"](1073742336,y.d,y.d,[]),e["\u0275mpd"](1073742336,r.p,r.p,[[2,r.u],[2,r.l]]),e["\u0275mpd"](1073742336,dl,dl,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](256,y.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,y.m,"X-XSRF-TOKEN",[]),e["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:i,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:$},{path:"books",component:J},{path:"books/:isbn",component:Y}]}]]},[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xtb",[])])})}}]);