"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[719],{34719:(M,a,s)=>{s.r(a),s.d(a,{NestedTargetsModule:()=>D});var i=s(22031),m=s(46260),l=s(10009),d=s(4730),u=s(62359),e=s(16355),h=s(74967);const p_BOX="NESTED_SOURCES_BOX";var c=s(10231);let C=(()=>{class t{constructor(n){this.dnd=n,this.source=this.dnd.dragSource(p_BOX,{beginDrag:()=>({})}),this.opacity=this.source.listen(r=>r.isDragging()?.4:1)}ngOnDestroy(){this.source.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.fD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nested-targets-box"]],decls:4,vars:5,consts:[[3,"dragSource"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e.ALo(1,"async"),e.TgZ(2,"p"),e._uU(3,"Drag this!"),e.qZA()()),2&n&&(e.Udp("opacity",e.lcZ(1,3,r.opacity)),e.Q6J("dragSource",r.source))},directives:[c.$d],pipes:[i.Ov],styles:["div[_ngcontent-%COMP%]{border:1px dashed #777;background:#fff;padding:.5rem 1rem;width:8rem;margin-bottom:1rem}p[_ngcontent-%COMP%]{display:inline-block;padding:3px;margin:0}"]}),t})();function f(t,o){if(1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Oqu("dropped"+(n.hasDroppedOnChild?" on child":""))}}function x(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",1)(2,"p"),e._uU(3),e.qZA(),e.YNc(4,f,2,1,"p",0),e.Hsn(5),e.qZA(),e.BQk()),2&t){const n=o.ngIf,r=e.oxw();e.xp6(1),e.Udp("background-color",r.getColor(n)),e.Q6J("dropTarget",r.target),e.xp6(2),e.Oqu(r.greedy?"greedy":"not greedy"),e.xp6(1),e.Q6J("ngIf",r.hasDroppedOnChild||r.hasDropped)}}const O=[[["app-nested-targets-dustbin"]]],y=["app-nested-targets-dustbin"];let b=(()=>{class t{constructor(n){this.dnd=n,this.greedy=!1,this.hasDropped=!1,this.hasDroppedOnChild=!1,this.lastDroppedColor="",this.backgroundColor="",this.target=this.dnd.dropTarget(p_BOX,{drop:r=>{const g=r.didDrop();g&&!this.greedy||(this.hasDropped=!0,this.hasDroppedOnChild=g)}}),this.collected$=this.target.listen(r=>({isOver:r.isOver(),isOverCurrent:r.isOver({shallow:!0})}))}text(){return this.hasDropped&&"dropped"+(this.hasDroppedOnChild?" on child":"")||""}getColor({isOver:n,isOverCurrent:r}){if(r||n&&this.greedy)return"darkgreen"}ngOnDestroy(){this.target.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.fD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nested-targets-dustbin"]],inputs:{greedy:"greedy"},ngContentSelectors:y,decls:2,vars:3,consts:[[4,"ngIf"],[1,"box",3,"dropTarget"]],template:function(n,r){1&n&&(e.F$t(O),e.YNc(0,x,6,5,"ng-container",0),e.ALo(1,"async")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,r.collected$))},directives:[i.O5,c.Li],pipes:[i.Ov],styles:["p[_ngcontent-%COMP%]{font-size:1rem;line-height:2rem;margin:0;margin-left:calc(-1rem + (-2 - -1) * ((100vw - 0rem) / (71.4285714286 - 0)));margin-right:calc(-1rem + (-2 - -1) * ((100vw - 0rem) / (71.4285714286 - 0)))}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-left:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-left:-2rem}}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-right:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-right:-2rem}}.box[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);width:100%;color:#fff;padding:calc(1rem + (2 - 1) * ((100vw - 0rem) / (71.4285714286 - 0)));padding-top:calc(.5rem + (1 - .5) * ((100vw - 0rem) / (71.4285714286 - 0)));text-align:center;background-color:#00000080}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding:1rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding:2rem}}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding-top:.5rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding-top:1rem}}"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nested-targets"]],decls:9,vars:3,consts:[["path","nested/targets"],[1,"nested-targets-wrapper"],[3,"greedy"]],template:function(n,r){1&n&&(e._UZ(0,"app-example-link",0)(1,"app-nested-targets-box"),e.TgZ(2,"div",1)(3,"app-nested-targets-dustbin",2)(4,"app-nested-targets-dustbin",2),e._UZ(5,"app-nested-targets-dustbin",2),e.qZA()(),e.TgZ(6,"app-nested-targets-dustbin")(7,"app-nested-targets-dustbin"),e._UZ(8,"app-nested-targets-dustbin"),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("greedy",!0),e.xp6(1),e.Q6J("greedy",!0),e.xp6(1),e.Q6J("greedy",!0))},directives:[h.Z,C,b],styles:[".nested-targets-wrapper[_ngcontent-%COMP%]{display:flex}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}"]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,l.g,d.c8,u.XJ,m.Bz.forChild([{path:"",component:v}])]]}),t})()}}]);