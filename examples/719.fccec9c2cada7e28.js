"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[719],{34719:(M,d,s)=>{s.r(d),s.d(d,{NestedTargetsModule:()=>D});var o=s(17011),m=s(14595),l=s(10009),a=s(4730),h=s(62359),t=s(31385),u=s(74967);const p_BOX="NESTED_SOURCES_BOX";var c=s(10231);let f=(()=>{class n{constructor(r){this.dnd=r,this.source=this.dnd.dragSource(p_BOX,{beginDrag:()=>({})}),this.opacity=this.source.listen(e=>e.isDragging()?.4:1)}ngOnDestroy(){this.source.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(a.fD))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-nested-targets-box"]],decls:4,vars:5,consts:[[3,"dragSource"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.TgZ(2,"p"),t._uU(3,"Drag this!"),t.qZA()()),2&e&&(t.Udp("opacity",t.lcZ(1,3,i.opacity)),t.Q6J("dragSource",i.source))},dependencies:[c.$d,o.Ov],styles:["div[_ngcontent-%COMP%]{border:1px dashed #777;background:#fff;padding:.5rem 1rem;width:8rem;margin-bottom:1rem}p[_ngcontent-%COMP%]{display:inline-block;padding:3px;margin:0}"]})}return n})();function C(n,g){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const r=t.oxw(2);t.xp6(1),t.hij(" ","dropped"+(r.hasDroppedOnChild?" on child":"")," ")}}function x(n,g){if(1&n&&(t.ynx(0),t.TgZ(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.YNc(4,C,2,1,"p",0),t.Hsn(5),t.qZA(),t.BQk()),2&n){const r=g.ngIf,e=t.oxw();t.xp6(1),t.Udp("background-color",e.getColor(r)),t.Q6J("dropTarget",e.target),t.xp6(2),t.Oqu(e.greedy?"greedy":"not greedy"),t.xp6(1),t.Q6J("ngIf",e.hasDroppedOnChild||e.hasDropped)}}const O=[[["app-nested-targets-dustbin"]]],y=["app-nested-targets-dustbin"];let b=(()=>{class n{text(){return this.hasDropped&&"dropped"+(this.hasDroppedOnChild?" on child":"")||""}getColor({isOver:r,isOverCurrent:e}){if(e||r&&this.greedy)return"darkgreen"}constructor(r){this.dnd=r,this.greedy=!1,this.hasDropped=!1,this.hasDroppedOnChild=!1,this.lastDroppedColor="",this.backgroundColor="",this.target=this.dnd.dropTarget(p_BOX,{drop:e=>{const i=e.didDrop();i&&!this.greedy||(this.hasDropped=!0,this.hasDroppedOnChild=i)}}),this.collected$=this.target.listen(e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})}))}ngOnDestroy(){this.target.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(a.fD))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-nested-targets-dustbin"]],inputs:{greedy:"greedy"},ngContentSelectors:y,decls:2,vars:3,consts:[[4,"ngIf"],[1,"box",3,"dropTarget"]],template:function(e,i){1&e&&(t.F$t(O),t.YNc(0,x,6,5,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.collected$))},dependencies:[o.O5,c.Li,o.Ov],styles:["p[_ngcontent-%COMP%]{font-size:1rem;line-height:2rem;margin:0;margin-left:calc(-1rem + (-2 - -1) * ((100vw - 0rem) / (71.4285714286 - 0)));margin-right:calc(-1rem + (-2 - -1) * ((100vw - 0rem) / (71.4285714286 - 0)))}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-left:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-left:-2rem}}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-right:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-right:-2rem}}.box[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);width:100%;color:#fff;padding:calc(1rem + (2 - 1) * ((100vw - 0rem) / (71.4285714286 - 0)));padding-top:calc(.5rem + (1 - .5) * ((100vw - 0rem) / (71.4285714286 - 0)));text-align:center;background-color:#00000080}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding:1rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding:2rem}}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding-top:.5rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding-top:1rem}}"]})}return n})(),v=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-nested-targets"]],decls:9,vars:3,consts:[["path","nested/targets"],[1,"nested-targets-wrapper"],[3,"greedy"]],template:function(e,i){1&e&&(t._UZ(0,"app-example-link",0)(1,"app-nested-targets-box"),t.TgZ(2,"div",1)(3,"app-nested-targets-dustbin",2)(4,"app-nested-targets-dustbin",2),t._UZ(5,"app-nested-targets-dustbin",2),t.qZA()(),t.TgZ(6,"app-nested-targets-dustbin")(7,"app-nested-targets-dustbin"),t._UZ(8,"app-nested-targets-dustbin"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("greedy",!0),t.xp6(1),t.Q6J("greedy",!0),t.xp6(1),t.Q6J("greedy",!0))},dependencies:[u.Z,f,b],styles:[".nested-targets-wrapper[_ngcontent-%COMP%]{display:flex}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}"]})}return n})(),D=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[o.ez,l.g,a.c8,h.XJ,m.Bz.forChild([{path:"",component:v}])]})}return n})()}}]);