(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5tAl":function(l,n,u){"use strict";u.d(n,"a",function(){return i});var e=u("mrSG"),t=u("FFOo");function i(l){return void 0===l&&(l=-1),function(n){return n.lift(new o(l,n))}}var o=function(){function l(l,n){this.count=l,this.source=n}return l.prototype.call=function(l,n){return n.subscribe(new r(l,this.count,this.source))},l}(),r=function(l){function n(n,u,e){var t=l.call(this,n)||this;return t.count=u,t.source=e,t}return e.c(n,l),n.prototype.error=function(n){if(!this.isStopped){var u=this.source,e=this.count;if(0===e)return l.prototype.error.call(this,n);e>-1&&(this.count=e-1),u.subscribe(this._unsubscribeAndRecycle())}},n}(t.a)},XlPw:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var e=u("6blF");function t(l,n){return new e.a(n?function(u){return n.schedule(i,0,{error:l,subscriber:u})}:function(n){return n.error(l)})}function i(l){l.subscriber.error(l.error)}},tPEy:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=function(){function l(){}return l.prototype.onMouseEnter=function(){this.isZoomed=!0},l.prototype.onMouseLeave=function(){this.isZoomed=!1},l}(),r=u("Ip0R"),c=function(){function l(){}return l.prototype.transform=function(l){return l?l.substr(0,3)+"-"+l.substr(3):null},l}(),d=function(){return function(){}}(),s=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function a(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"img",[["bmZoom",""],["class","ui tiny image"]],[[8,"src",4],[2,"small",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var t=!0;return"mouseenter"===n&&(t=!1!==e["\u0275nov"](l,1).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==e["\u0275nov"](l,1).onMouseLeave()&&t),t},null,null)),e["\u0275did"](1,16384,null,0,o,[],null,null)],null,function(l,n){l(n,0,0,n.component.book.thumbnails[0].url,e["\u0275nov"](n,1).isZoomed)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[", "]))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](3,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,!n.context.last)},function(l,n){l(n,1,0,n.context.$implicit)})}function p(l){return e["\u0275vid"](0,[e["\u0275pid"](0,c,[]),(l()(),e["\u0275and"](16777216,null,null,1,null,a)),e["\u0275did"](2,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,5,"div",[["class","metadata"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](10,278528,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" ISBN "," "])),e["\u0275ppd"](13,2)],function(l,n){var u=n.component;l(n,2,0,u.book.thumbnails&&u.book.thumbnails[0]&&u.book.thumbnails[0].url),l(n,10,0,u.book.authors)},function(l,n){var u=n.component;l(n,5,0,u.book.title),l(n,7,0,u.book.subtitle);var t=e["\u0275unv"](n,12,0,l(n,13,0,e["\u0275nov"](n,0),u.book.isbn,!0));l(n,12,0,t)})}var v=u("ZYCi"),m=u("iA8X"),h=function(){function l(l){this.bs=l}return l.prototype.ngOnInit=function(){var l=this;this.bs.getAll().subscribe(function(n){return l.books=n})},l}(),g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"bm-book-list-item",[["class","item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick()&&t),t},p,s)),e["\u0275did"](1,16384,null,0,v.m,[v.l,v.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,49152,null,0,d,[],{book:[0,"book"]},null)],function(l,n){l(n,1,0,n.context.$implicit.isbn),l(n,2,0,n.context.$implicit)},null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","ui active dimmer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","ui large text loader"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Daten werden geladen..."]))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Es wurden noch keine B\xfccher eingetragen."]))],null,null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](2,278528,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](4,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](6,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.books),l(n,4,0,!u.books),l(n,6,0,u.books&&!u.books.length)},null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-list",[],null,null,null,y,g)),e["\u0275did"](1,114688,null,0,h,[m.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e["\u0275ccf"]("bm-book-list",h,I,{},{},[]),F=function(){function l(l,n){this.templateRef=l,this.viewContainerRef=n}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.viewContainerRef.createEmbeddedView(l.templateRef)},this.bmDelay)},l}(),O=function(){function l(l,n,u){this.bs=l,this.router=n,this.route=u}return l.prototype.ngOnInit=function(){var l=this;this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(function(n){return l.book=n})},l.prototype.getRating=function(l){return new Array(l)},l.prototype.removeBook=function(){var l=this;confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(function(n){return l.router.navigate(["../"],{relativeTo:l.route})})},l}(),T=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](2,81920,null,0,F,[e.TemplateRef,e.ViewContainerRef],{bmDelay:[0,"bmDelay"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,500+200*n.context.index)},null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.url)})}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,41,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,20,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Autoren"])),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](11,278528,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](12,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ISBN"])),(l()(),e["\u0275ted"](15,null,[" "," "])),e["\u0275ppd"](16,2),(l()(),e["\u0275eld"](17,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Erschienen"])),(l()(),e["\u0275ted"](20,null,[" "," "])),e["\u0275ppd"](21,2),(l()(),e["\u0275eld"](22,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Rating"])),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](26,278528,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](27,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Beschreibung"])),(l()(),e["\u0275eld"](29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,["",""])),(l()(),e["\u0275eld"](31,0,null,null,2,"div",[["class","ui small images"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](33,278528,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](34,0,null,null,2,"button",[["class","ui tiny red labeled icon button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeBook()&&e),e},null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"i",[["class","remove icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch l\xf6schen "])),(l()(),e["\u0275eld"](37,0,null,null,4,"a",[["class","ui tiny yellow labeled icon button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,38).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](38,671744,null,0,v.o,[v.l,v.a,r.h],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](39,2),(l()(),e["\u0275eld"](40,0,null,null,0,"i",[["class","write icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch bearbeiten "]))],function(l,n){var u=n.component;l(n,11,0,u.book.authors),l(n,26,0,u.getRating(u.book.rating)),l(n,33,0,u.book.thumbnails);var e=l(n,39,0,"../../admin/edit",u.book.isbn);l(n,38,0,e)},function(l,n){var u=n.component;l(n,2,0,u.book.title),l(n,4,0,u.book.subtitle);var t=e["\u0275unv"](n,15,0,l(n,16,0,e["\u0275nov"](n.parent,0),u.book.isbn,!0));l(n,15,0,t);var i=e["\u0275unv"](n,20,0,l(n,21,0,e["\u0275nov"](n.parent,1),u.book.published,"longDate"));l(n,20,0,i),l(n,30,0,u.book.description),l(n,37,0,e["\u0275nov"](n,38).target,e["\u0275nov"](n,38).href)})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","ui active centered inline loader"]],null,null,null,null,null))],null,null)}function M(l){return e["\u0275vid"](0,[e["\u0275pid"](0,c,[]),e["\u0275pid"](0,r.d,[e.LOCALE_ID]),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](3,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["errorMessage",2]],null,0,null,x))],function(l,n){l(n,3,0,n.component.book,e["\u0275nov"](n,4))},null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-details",[],null,null,null,M,T)),e["\u0275did"](1,114688,null,0,O,[m.a,v.l,v.a],null,null)],function(l,n){l(n,1,0)},null)}var j=e["\u0275ccf"]("bm-book-details",O,A,{},{},[]),S=function(){return function(){}}();u.d(n,"BooksModuleNgFactory",function(){return Z});var Z=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,C,j]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.l,r.k,[e.LOCALE_ID,[2,r.s]]),e["\u0275mpd"](1073742336,r.b,r.b,[]),e["\u0275mpd"](1073742336,v.p,v.p,[[2,v.v],[2,v.l]]),e["\u0275mpd"](1073742336,S,S,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,v.j,function(){return[[{path:"",component:h},{path:":isbn",component:O}]]},[])])})}}]);