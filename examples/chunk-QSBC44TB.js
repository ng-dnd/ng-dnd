import{a as ue}from"./chunk-2VD5BHMB.js";import{$ as ie,$a as _,Bb as O,E as F,Ea as A,I as W,Ib as v,Jb as de,Kb as G,L as X,N as w,Nb as c,Ob as p,Qa as d,Ra as m,Sa as ae,Va as ce,W as Y,X as Z,Y as ee,_ as te,a as u,b as y,bb as g,cb as pe,db as I,ea as ne,gb as B,hb as $,jb as L,k as J,kb as j,lb as r,lc as D,m as q,mb as s,n as Q,na as C,nb as x,pa as oe,pb as le,qb as T,rb as f,rc as me,sc as he,w as b,wc as M,xa as re,ya as se,yc as S,zb as a}from"./chunk-H5XLUPFI.js";var N=class{constructor(){this.$implicit=null,this.ngLet=null}},ge=(()=>{class t{set ngLet(e){this._context.$implicit=this._context.ngLet=e}constructor(e,i){this._vcr=e,this._templateRef=i,this._context=new N}ngOnInit(){this._vcr.createEmbeddedView(this._templateRef,this._context)}static{this.\u0275fac=function(i){return new(i||t)(m(ce),m(ae))}}static{this.\u0275dir=oe({type:t,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"},standalone:!0})}}return t})();var P={EMAIL:"EMAIL"};var fe=(()=>{class t{constructor(e){this.dnd=e,this.beginDrag=new A,this.endDrag=new A,this.source=this.dnd.dragSource(P.EMAIL,{beginDrag:()=>(this.beginDrag.emit(),{}),endDrag:()=>{this.endDrag.emit()}}),this.opacity=this.source.listen(i=>i.isDragging()?.4:1)}ngOnDestroy(){this.source.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(m(S))}}static{this.\u0275cmp=C({type:t,selectors:[["drilldown-source"]],outputs:{beginDrag:"beginDrag",endDrag:"endDrag"},standalone:!0,features:[v],decls:4,vars:5,consts:[[3,"dragSource"]],template:function(i,n){i&1&&(r(0,"div",0),c(1,"async"),r(2,"span"),a(3,"Drag this!"),s()()),i&2&&(pe("opacity",p(1,3,n.opacity)),g("dragSource",n.source))},dependencies:[M,he,D],styles:["div[_ngcontent-%COMP%]{width:8rem;padding:6px;background-color:#fff;border:1px dashed #777}"]})}}return t})();var R=class{constructor(o,e){this.type=o,this.item=e}};function ye(t,o,e,i){let n=new q,h=t.dropTarget(o,y(u({},i),{hover:l=>{n.next(new R(l.getItemType(),l.getItem())),i.hover&&i.hover(l)}})),$e=h.listen(l=>l.isOver()&&l.canDrop()).pipe(w(),F(l=>l)),Te=h.listen(l=>l.isOver()).pipe(w(),F(l=>l===!1)),Me=$e.pipe(te(n.pipe(X(e),ie(Te),W(1)))).subscribe(i.onActivate);return h.add(Me),h}var Ce="BEGIN_DRAG",xe="END_DRAG",ve="OPEN_TRANSIENT",De="DROP",ke="TOGGLE",K=class{constructor(){this.type=Ce}},V=class{constructor(){this.type=xe}},H=class{constructor(o){this.keys=o,this.type=ve}},U=class{constructor(o){this.keys=o,this.type=De}},z=class{constructor(o){this.keys=o,this.type=ke}},_e={structure:{Infraction:{Anecdotal:{Clumsily:{},Megalomaniac:{},Neurotic:{}},Basilica:{Salivate:{}},Candid:{Granada:{}}},Magnanimous:{Jalape\u00F1o:{Poppers:{}},Jalape\u00F1o2:{Poppers3:{}}},Byzantine:{Fault:{Tolerance:{}},Armadillo:{Farming:{}}}},open:{Infraction:!0,"Infraction.Basilica":!0,"Infraction.Basilica.Salivate":!0},preDragOpen:{}},k=(()=>{class t{constructor(){this.actions$=new Q({type:"@@init"}),this.store$=this.actions$.pipe(Z(t.reducer,_e),ee(_e),Y(),J())}static makeKey(e){return e.join(".")}static toggleSingle(e,i){let n=t.makeKey(i);return Object.assign({},e,{[n]:!e[n]})}static openAllAncestors(e,i){e=u({},e);for(let n=0;n<i.length;n++){let h=t.makeKey(i.slice(0,n+1));e[h]=!0}return e}static reducer(e,i){switch(i.type){case Ce:return y(u({},e),{preDragOpen:e.open});case xe:return y(u({},e),{open:e.preDragOpen});case ve:return y(u({},e),{open:t.openAllAncestors(e.preDragOpen,i.keys)});case De:return y(u({},e),{lastDrop:i.keys});case ke:return y(u({},e),{open:t.toggleSingle(e.open,i.keys)});default:return e}}static recursiveGet(e,i){if(i.length===0)return e;let n=i[0];return t.recursiveGet(e[n],i.slice(0).splice(1))}select(e){return this.store$.pipe(b(e),w())}isOpen(e){return this.select(i=>e==null||e.length===0||i.open[t.makeKey(e)])}getChildren(e){return this.select(i=>i).pipe(b(i=>{let n=t.recursiveGet(i.structure,e);return Object.keys(n).sort()}))}beginDrag(){this.actions$.next(new K)}endDrag(){this.actions$.next(new V)}toggle(e){this.actions$.next(new z(e))}openTransient(e){this.actions$.next(new H(e))}drop(e){this.actions$.next(new U(e))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac})}}return t})();var we=t=>[t];function Pe(t,o){if(t&1&&x(0,"drilldown-folder",2),t&2){let e=o.$implicit,i=f(2);g("keys",i.keys.concat(G(1,we,e)))}}function Fe(t,o){if(t&1&&(r(0,"ul"),c(1,"async"),L(2,Pe,1,3,"drilldown-folder",2,B().tracker,!0),c(4,"async"),s()),t&2){let e=f();I("has-children",p(1,2,e.anyChildren$)),d(2),j(p(4,4,e.children$))}}function Ae(t,o){if(t&1&&(r(0,"b"),a(1),s()),t&2){let e=f(2);d(),O("",e.ownKey," ...")}}function Be(t,o){if(t&1&&a(0),t&2){let e=f(2);O(" ",e.ownKey," ")}}function Le(t,o){if(t&1&&x(0,"drilldown-folder",2),t&2){let e=o.$implicit,i=f(3);g("keys",i.keys.concat(G(1,we,e)))}}function je(t,o){if(t&1&&(r(0,"ul"),c(1,"async"),L(2,Le,1,3,"drilldown-folder",2,B().tracker,!0),c(4,"async"),s()),t&2){let e=f(2);I("root",e.keys.length===0)("has-children",p(1,4,e.anyChildren$)),d(2),j(p(4,6,e.children$))}}function Ge(t,o){if(t&1){let e=le();r(0,"li"),c(1,"async"),c(2,"async"),c(3,"async"),r(4,"div",3),T("click",function(){re(e);let n=f();return se(n.toggle())}),_(5,Ae,2,1,"b"),c(6,"async"),_(7,Be,1,1),s(),_(8,je,5,8,"ul",4),c(9,"async"),s()}if(t&2){let e=f();I("root",e.keys.length===0)("is-open",p(1,11,e.isOpen$))("is-over",p(2,13,e.isOver$))("has-children",p(3,15,e.anyChildren$)),d(4),g("dropTarget",e.target),d(),$(p(6,17,e.anyChildren$)?5:7),d(3),$(p(9,19,e.isOpen$)?8:-1)}}var Oe=(()=>{class t{get ownKey(){return this.keys.length===0?"<root>":this.keys[this.keys.length-1]}constructor(e,i){this.tree=e,this.dnd=i,this.keys=[],this.target=ye(this.dnd,P.EMAIL,600,{onActivate:n=>{this.tree.openTransient(this.keys)},drop:n=>{this.tree.drop(this.keys)}}),this.isOver$=this.target.listen(n=>n.isOver()&&n.canDrop())}ngOnInit(){this.children$=this.tree.getChildren(this.keys),this.anyChildren$=this.children$.pipe(b(e=>e&&e.length>0)),this.isOpen$=this.tree.isOpen(this.keys)}tracker(e,i){return i}toggle(){this.tree.toggle(this.keys)}ngOnDestroy(){this.target.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(m(k),m(S))}}static{this.\u0275cmp=C({type:t,selectors:[["drilldown-folder"]],inputs:{keys:"keys"},standalone:!0,features:[v],decls:2,vars:1,consts:[[3,"has-children"],[3,"root","is-open","is-over","has-children"],[3,"keys"],[3,"click","dropTarget"],[3,"root","has-children"]],template:function(i,n){i&1&&_(0,Fe,5,6,"ul",0)(1,Ge,10,21,"li",1),i&2&&$(n.keys.length===0?0:1)},dependencies:[t,M,me,D],styles:['[_nghost-%COMP%]     *{margin:0;padding:0}[_nghost-%COMP%]     li.has-children{background:#fafad2;cursor:pointer}[_nghost-%COMP%]     li:not(.has-children){cursor:initial}[_nghost-%COMP%]     li.has-children>div:hover, [_nghost-%COMP%]     li.is-over>div{background:#d1c072}[_nghost-%COMP%]     ul{margin:0 0 0 20px;list-style:none;line-height:2em;font-family:Arial,sans-serif}[_nghost-%COMP%]     li{position:relative;list-style:none;font-size:16px}[_nghost-%COMP%]     li:before{position:absolute;left:-15px;top:0;content:"";display:block;border-left:1px solid #444;height:1em;border-bottom:1px solid #444;width:10px}[_nghost-%COMP%]     li:after{position:absolute;left:-15px;bottom:-7px;content:"";display:block;border-left:1px solid #444;height:100%}[_nghost-%COMP%]     li.root{margin:0 0 0 -20px}[_nghost-%COMP%]     li.root:before{display:none}[_nghost-%COMP%]     li.root:after{display:none}[_nghost-%COMP%]     li:last-child:after{display:none}'],changeDetection:0})}}return t})();var Ne=()=>[];function Re(t,o){if(t&1&&(r(0,"p"),a(1," Last dropped on "),r(2,"code"),a(3),s()()),t&2){let e=o.ngLet;d(3),O(" ",e?e.join(" > "):"(never)"," ")}}var Ie=(()=>{class t{constructor(e){this.tree=e,this.lastDrop$=this.tree.select(i=>i.lastDrop)}beginDrag(){this.tree.beginDrag()}endDrag(){this.tree.endDrag()}static{this.\u0275fac=function(i){return new(i||t)(m(k))}}static{this.\u0275cmp=C({type:t,selectors:[["drilldown-container"]],standalone:!0,features:[v],decls:16,vars:5,consts:[["path","drilldown"],[4,"ngLet"],[3,"beginDrag","endDrag"],[3,"keys"]],template:function(i,n){i&1&&(x(0,"app-example-link",0),r(1,"p"),a(2," Hover over a folder to temporarily drill down. Click normally on a folder to open or close it. "),s(),r(3,"p"),a(4," This example uses a wrapper around "),r(5,"code"),a(6,"DndService#dropTarget"),s(),a(7,", that listens to dnd-core hover events and fires a callback when you have hovered long enough. This is a clean pattern for extending "),r(8,"code"),a(9,"@ng-dnd/core"),s(),a(10," in a reusable way. "),s(),_(11,Re,4,1,"p",1),c(12,"async"),r(13,"p")(14,"drilldown-source",2),T("beginDrag",function(){return n.beginDrag()})("endDrag",function(){return n.endDrag()}),s()(),x(15,"drilldown-folder",3)),i&2&&(d(11),g("ngLet",p(12,2,n.lastDrop$)),d(4),g("keys",de(4,Ne)))},dependencies:[ue,ge,fe,Oe,D],styles:["[_nghost-%COMP%]{display:block;min-height:600px}"]})}}return t})();var xt=[{path:"",component:Ie,providers:[k]}];export{xt as routes};
