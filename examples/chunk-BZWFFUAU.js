import{a as m}from"./chunk-SDQHVLFJ.js";import{a as O}from"./chunk-HQODWAYX.js";import{$a as y,Ab as f,Ib as c,Nb as T,Ob as M,Qa as r,Ra as l,Xb as _,bb as s,hb as v,lb as i,mb as o,na as d,nb as u,nc as S,rb as h,sb as x,sc as D,tb as C,xc as E,zb as p,zc as I}from"./chunk-NAC6KBNY.js";var w=["*"];function N(e,b){if(e&1&&(i(0,"pre"),p(1),T(2,"json"),o()),e&2){let a=h();r(),f(M(2,1,a.dropped))}}var P=(()=>{class e{constructor(a,n){this.dnd=a,this.cdr=n,this.type="",this.droppedType=null,this.dropped=null,this.target=this.dnd.dropTarget(null,{drop:t=>{this.droppedType=t.getItemType();let g=t.getItem();if(t.getItemType()===m.FILE){let L=g.files.map(R=>`File named ${R.name}`);this.dropped={files:L}}else this.dropped=g;this.cdr.detectChanges()}})}ngOnDestroy(){this.target.unsubscribe()}static{this.\u0275fac=function(n){return new(n||e)(l(I),l(_))}}static{this.\u0275cmp=d({type:e,selectors:[["native-target"]],inputs:{type:"type"},standalone:!0,features:[c],ngContentSelectors:w,decls:7,vars:4,consts:[[1,"target",3,"dropTarget","dropTargetTypes"]],template:function(n,t){n&1&&(x(),i(0,"div",0)(1,"p"),p(2," Accepts "),i(3,"code"),p(4),o()(),C(5),y(6,N,3,3,"pre"),o()),n&2&&(s("dropTarget",t.target)("dropTargetTypes",t.type),r(4),f(t.type),r(2),v(t.dropped?6:-1))},dependencies:[E,D,S],styles:["[_nghost-%COMP%]{min-width:200px}.target[_ngcontent-%COMP%]{padding:8px;background:#ddd;min-height:140px}pre[_ngcontent-%COMP%]{overflow-x:auto}"]})}}return e})();var F=(()=>{class e{constructor(){this.NativeTypes=m}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["native-container"]],standalone:!0,features:[c],decls:13,vars:3,consts:[["path","html5/native-types"],[1,"flex"],[3,"type"]],template:function(n,t){n&1&&(u(0,"app-example-link",0),i(1,"p"),p(2," When you are using the HTML5 backend, you can accept three native types: files, URLs, and text. "),o(),i(3,"div",1)(4,"native-target",2)(5,"p"),p(6,"Receives a list of native JavaScript File objects."),o()(),i(7,"native-target",2)(8,"p"),p(9,"Receives a list of URLs as strings."),o()(),i(10,"native-target",2)(11,"p"),p(12,"Receives a string of the text you dropped."),o()()()),n&2&&(r(4),s("type",t.NativeTypes.FILE),r(3),s("type",t.NativeTypes.URL),r(3),s("type",t.NativeTypes.TEXT))},dependencies:[O,P],styles:[".flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-8px}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]})}}return e})();var G=[{path:"",component:F}];export{G as routes};
