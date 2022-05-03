"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[240],{50240:(vn,T,s)=>{s.r(T),s.d(T,{KanbanModule:()=>xn});var g=s(22031),D=s(46260),h=s(73080),c=s(48116),v=s(4730),F=s(62359),l=s(61569),B=s(10009);const b={CARD:"KANBAN_CARD",LIST:"KANBAN_LIST"};var d=s(67448);function C(n,a){const t=n.slice(0);return a(t),t}function S(n,a,t){const r=n.findIndex(o=>o.id===a);if(-1===r)return n;const i=Object.assign(Object.assign({},n[r]),{cards:C(n[r].cards,t)});return C(n,o=>{o.splice(r,1,i)})}function w(n,a,t){return C(n,r=>{r.splice(t,0,a)})}function j(n,a){return C(n,t=>{t.splice(a,1)})}function I(n,a,t){return S(n,a,r=>{r.splice(t,1)})}function y(n,a,t,r){return S(n,t,i=>{i.splice(r,0,a)})}const K=[{id:0,title:"To Do",cards:[{id:1,title:d.lorem.sentence()},{id:2,title:d.lorem.sentence()},{id:3,title:d.lorem.sentence()},{id:4,title:d.lorem.sentence()},{id:5,title:"This card is a bigger than the other ones. "+d.lorem.sentence()+" "+d.lorem.sentence()}]},{id:1,title:"Doing",cards:[{id:6,title:d.company.bs()},{id:7,title:d.company.bs()},{id:8,title:d.company.bs()},{id:9,title:d.company.bs()},{id:10,title:d.company.bs()}]},{id:2,title:"Done",cards:[{id:11,title:d.name.jobTitle()},{id:12,title:d.name.jobTitle()},{id:13,title:d.name.jobTitle()},{id:14,title:d.name.jobTitle()},{id:15,title:d.name.jobTitle()}]}];var p=(()=>{return(n=p||(p={})).SortList="[Kanban] SortList",n.SortCard="[Kanban] SortCard",n.AddCard="[Kanban] AddCard",n.RemoveCard="[Kanban] RemoveCard",n.Spill="[Kanban] Spill",p;var n})();class L{constructor(a,t){this.listId=a,this.title=t,this.type=p.AddCard}}class J{constructor(a){this.item=a,this.type=p.RemoveCard}}class U{constructor(a){this.item=a,this.type=p.Spill}}const Y={board:K,draggingBoard:null,cardInFlight:null,listInFlight:null,nextId:1e3,spilledCard:!1,isCopying:!1,shouldCopy:!1},m=n=>Object.assign(Object.assign({},n),{draggingBoard:null,cardInFlight:null,listInFlight:null,isCopying:!1,spilledCard:!1}),k=Symbol("CLONED_CARD"),M=(n,a)=>Object.assign(Object.assign({},n),{id:a}),P=(n,a)=>{let{board:t,nextId:r}=n;if(n.cardInFlight){const{data:i,hover:o}=n.cardInFlight;if(n.isCopying)r++,t=n.spilledCard?n.board:y(n.board,a,o.listId,o.index);else{const u=n.draggingBoard||n.board;t=n.spilledCard?u:y(u,i,o.listId,o.index)}}return Object.assign(Object.assign({},m(n)),{board:t,nextId:r})};function Q(n=Y,a){const t=n.draggingBoard||n.board;switch(a.type){case p.SortList:return function N(n,a){const t=n.draggingBoard||n.board,{data:r,index:i,hover:u}=a.item;switch(a.event){case l.DC.BeginDrag:return Object.assign(Object.assign({},n),{draggingBoard:j(n.board,i),listInFlight:a.item});case l.DC.Hover:return Object.assign(Object.assign({},n),{listInFlight:a.item});case l.DC.Drop:return Object.assign(Object.assign({},m(n)),{board:w(t,r,u.index)});case l.DC.EndDrag:return m(n);default:return n}}(n,a);case p.SortCard:return function R(n,a){const{index:r,listId:i}=a.item;switch(n=Object.assign(Object.assign({},n),{spilledCard:!1}),a.event){case l.DC.BeginDrag:return Object.assign(Object.assign({},n),{draggingBoard:I(n.board,i,r),cardInFlight:a.item,isCopying:n.shouldCopy&&1===i});case l.DC.Hover:return Object.assign(Object.assign({},n),{cardInFlight:a.item});case l.DC.Drop:return P(n,M(n.cardInFlight.data,n.nextId));case l.DC.EndDrag:return m(n);default:return n}}(n,a);case p.AddCard:{const r={id:n.nextId,title:a.title},o=t.find(u=>u.id===a.listId).cards.length;return Object.assign(Object.assign({},m(n)),{board:y(n.board,r,a.listId,o),nextId:n.nextId+1})}case p.RemoveCard:{const{listId:r,index:i}=a.item;return Object.assign(Object.assign({},m(n)),{board:I(n.board,r,i)})}case p.Spill:return Object.assign(Object.assign({},n),{spilledCard:!0,cardInFlight:a.item});default:return n}}const f=(0,c.ZF)("kanban"),Z=(0,c.P1)(f,n=>n.isCopying),z=(0,c.P1)(f,n=>n.cardInFlight),E=(0,c.P1)(Z,z,(n,a)=>n&&a?M(a.data,k):null),$=(0,c.P1)(f,n=>n.board),X=(0,c.P1)(f,E,(n,a)=>{const{cardInFlight:t,listInFlight:r}=n,i=n.draggingBoard||n.board;if(null!=t)return P(n,a).board;if(null!=r){const{hover:o,data:u}=r;return w(i,u,o.index)}return i});var e=s(16355),G=s(74967),q=s(90594);let x=(()=>{class n{constructor(t){this.store=t,this.boardSpec=new l.yn(this.store,p.SortList,{type:b.LIST,trackBy:r=>r.id,getList:r=>this.store.pipe((0,c.Ys)(X))}),this.isCopying=!1,this.subs=this.store.pipe((0,c.Ys)(Z)).subscribe(r=>this.isCopying=r),this.listSpec=new l.yn(this.store,p.SortCard,{type:b.CARD,trackBy:r=>r.id,getList:r=>this.store.pipe((0,c.Ys)((n=>(0,c.P1)($,a=>{const t=a.find(r=>r.id===n);return t&&t.cards}))(r)),(0,q.h)(i=>null!=i)),isDragging:(r,i)=>r.id===(this.isCopying?k:i.data.id)})}ngOnDestroy(){this.subs.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(c.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var W=s(59857);let _=(()=>{class n{constructor(){this.preview=!1,this.placeholder=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-card"]],inputs:{card:"card",preview:"preview",placeholder:"placeholder"},decls:3,vars:5,consts:[[1,"card"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2),e.qZA()()),2&t&&(e.ekj("card--preview",r.preview)("card--placeholder",r.placeholder),e.xp6(2),e.Oqu(r.card.title))},styles:['[_nghost-%COMP%]{display:block}*[_ngcontent-%COMP%]{box-sizing:border-box}.card[_ngcontent-%COMP%]{padding:8px;border-radius:4px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#fff;box-shadow:0 1px 3px #00000014,0 1px 2px #00000029}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.card--preview[_ngcontent-%COMP%]{transform:rotate(-2deg);width:100%;height:100%;box-shadow:0 8px 16px #00000040,0 6px 6px #00000021}.card--placeholder[_ngcontent-%COMP%]{background:none;box-shadow:none}.card--placeholder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:hidden}.card--placeholder[_ngcontent-%COMP%]:before{content:"";border-radius:4px;background:rgba(0,0,0,.13);box-shadow:inset 0 3px 7px #00000021,inset 0 1px 3px #00000038;position:absolute;top:0;left:0;width:100%;height:100%}']}),n})();var O=s(10231),V=s(97493),A=s(48307);let nn=(()=>{class n{constructor(){this.add=new e.vpe,this.addForm=new h.cw({title:new h.NI})}onSubmit(){var t;this.add.emit(null===(t=this.addForm.get("title"))||void 0===t?void 0:t.value),this.addForm.reset()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-add-card"]],outputs:{add:"add"},decls:2,vars:1,consts:[[3,"formGroup"],["placeholder","Add a card","formControlName","title",1,"title",3,"keyup.enter"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0)(1,"input",1),e.NdJ("keyup.enter",function(){return r.onSubmit()}),e.qZA()()),2&t&&e.Q6J("formGroup",r.addForm)},directives:[h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u],styles:[".title[_ngcontent-%COMP%]{box-sizing:border-box;border:none;width:100%;background:rgba(0,0,0,0);padding:6px 8px}.title[_ngcontent-%COMP%]:focus{background:#fff}"]}),n})();function en(n,a){if(1&n&&(e._UZ(0,"kanban-card",8,9),e.ALo(2,"async")),2&n){const t=a.$implicit,r=a.index,i=e.MAs(1);e.oxw();const o=e.MAs(1);e.Q6J("card",t)("dndSortableRender",o.contextFor(t,r))("dragSource",i.source)("noHTML5Preview",!0)("placeholder",!!e.lcZ(2,5,i.isDragging$))}}function tn(n,a){if(1&n&&(e.TgZ(0,"div",5,6),e.YNc(2,en,3,7,"kanban-card",7),e.qZA()),2&n){const t=e.oxw();e.Q6J("spec",t.specs.listSpec)("listId",t.list.id),e.xp6(2),e.Q6J("ngForOf",t.list.cards)("ngForTrackBy",t.trackById)}}function rn(n,a){1&n&&e._UZ(0,"kanban-card",12),2&n&&e.Q6J("card",a.$implicit)}function an(n,a){if(1&n&&(e.TgZ(0,"div",10),e.YNc(1,rn,1,1,"kanban-card",11),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.list.cards)("ngForTrackBy",t.trackById)}}let on=(()=>{class n{constructor(t,r){this.specs=t,this.render=r,this.preview=!1,this.addCard=new e.vpe,this.placeholder$=this.render&&this.render.source.listen(i=>i.isDragging()),this.isOver$=this.render&&this.render.target.listen(i=>i.canDrop()&&i.isOver()),this.trackById=(i,o)=>o.id}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x),e.Y36(l.UH,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-list"]],inputs:{list:"list",preview:"preview"},outputs:{addCard:"addCard"},decls:9,vars:11,consts:[[1,"list"],[1,"handle",3,"dragSource","noHTML5Preview"],["class","cards-container","dndSortable","",3,"spec","listId",4,"ngIf","ngIfElse"],["plain",""],[3,"add"],["dndSortable","",1,"cards-container",3,"spec","listId"],["clist","dndSortable"],[3,"card","dndSortableRender","dragSource","noHTML5Preview","placeholder",4,"ngFor","ngForOf","ngForTrackBy"],[3,"card","dndSortableRender","dragSource","noHTML5Preview","placeholder"],["render","dndSortableRender"],[1,"cards-container"],[3,"card",4,"ngFor","ngForOf","ngForTrackBy"],[3,"card"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"h3"),e._uU(4),e.qZA()(),e.YNc(5,tn,3,4,"div",2),e.YNc(6,an,2,2,"ng-template",null,3,e.W1O),e.TgZ(8,"kanban-add-card",4),e.NdJ("add",function(o){return r.addCard.emit(o)}),e.qZA()()),2&t){const i=e.MAs(7);e.ekj("list--preview",r.preview)("list--placeholder",e.lcZ(1,9,null==r.render?null:r.render.isDragging$)),e.xp6(2),e.Q6J("dragSource",null==r.render?null:r.render.source)("noHTML5Preview",!0),e.xp6(2),e.Oqu(r.list.title),e.xp6(1),e.Q6J("ngIf",r.render)("ngIfElse",i)}},directives:[O.$d,g.O5,V.B,g.sg,_,A.U,nn],pipes:[g.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}.cards-container[_ngcontent-%COMP%]{min-height:20px}.cards-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:6px}.list[_ngcontent-%COMP%]{position:relative;width:240px;padding:8px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#eee;box-shadow:0 1px 3px #00000014,0 1px 2px #00000029}.list--preview[_ngcontent-%COMP%]{box-shadow:0 14px 28px #0003,0 10px 10px #0000001a}.list--placeholder[_ngcontent-%COMP%]{background:none;box-shadow:none}.list--placeholder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{visibility:hidden}.list--placeholder[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.13);border-radius:4px;box-shadow:inset 0 3px 7px #00000021,inset 0 1px 3px #00000038}.handle[_ngcontent-%COMP%]{margin:-8px;padding:8px}.handle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px}'],changeDetection:0}),n})();var sn=s(43554),dn=s(64365);function cn(n,a){if(1&n&&(e.TgZ(0,"div",1)(1,"div"),e._UZ(2,"i",2),e.TgZ(3,"span"),e._uU(4,"Drop here to delete"),e.qZA()(),e._UZ(5,"div",3),e.qZA()),2&n){const t=a.ngIf,r=e.oxw();e.ekj("isOver",t.isOver),e.Q6J("dropTarget",r.target),e.xp6(5),e.Q6J("ngStyle",r.getStyle(t.isOver,t.item))}}let ln=(()=>{class n{constructor(t){this.dnd=t,this.dropped=new e.vpe,this.target=this.dnd.dropTarget(b.CARD,{canDrop:r=>r.getItem().isInternal,drop:r=>{this.dropped.emit(r.getItem())}}),this.collect$=this.target.listen(r=>({item:r.getItem(),isOver:r.isOver()&&r.canDrop()}))}getStyle(t,r){return t&&r?Object.assign(Object.assign({},r.size.style()),{transition:"all 50ms ease-in"}):{}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.fD))},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-trash-can"]],outputs:{dropped:"dropped"},decls:2,vars:3,consts:[["class","trash-can",3,"isOver","dropTarget",4,"ngIf"],[1,"trash-can",3,"dropTarget"],[1,"fas","fa-trash-alt"],[1,"space",3,"ngStyle"]],template:function(t,r){1&t&&(e.YNc(0,cn,6,4,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.collect$))},directives:[g.O5,O.Li,g.PC],pipes:[g.Ov],styles:[".fas[_ngcontent-%COMP%]{margin-right:8px}.trash-can[_ngcontent-%COMP%]{margin:8px;padding:8px;font-weight:700;text-shadow:1px 1px rgba(255,255,255,.2);border-radius:4px;border:1px dashed #333;text-align:center;transform-origin:100% 100%;transition:transform 50ms ease-out}.space[_ngcontent-%COMP%]{height:0;width:0;transition:all 50ms ease-out}.isOver[_ngcontent-%COMP%]{transition:transform 50ms ease-in;background:rgba(255,255,255,.4);transform:scale(1.2)}"],changeDetection:0}),n})();var pn=s(82817);let gn=(()=>{class n{constructor(t){this.specs=t,this.ItemTypes=b,this.card={id:1337,title:"External card - drag me in!"},this.nextId=3e6,this.externalSpec=Object.assign(Object.assign({},this.specs.listSpec),{beginDrag:()=>{},createData:()=>({id:this.nextId++,title:this.card.title})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-external"]],decls:3,vars:4,consts:[[1,"ext"],[3,"dndSortableExternal","card","dragSource","noHTML5Preview"],["ext","dndSortableExternal"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"kanban-card",1,2),e.qZA()),2&t){const i=e.MAs(2);e.xp6(1),e.Q6J("dndSortableExternal",r.externalSpec)("card",r.card)("dragSource",i.source)("noHTML5Preview",!0)}},directives:[_,pn.Y,O.$d],styles:[".ext[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:8px;display:inline-block}"]}),n})();function un(n,a){if(1&n&&e._UZ(0,"kanban-card",8),2&n){const t=e.oxw().item;e.Q6J("card",t.data)("preview",!0)("ngStyle",t.size.style())}}function hn(n,a){if(1&n&&e._UZ(0,"kanban-list",9),2&n){const t=e.oxw().item;e.Q6J("list",t.data)("preview",!0)("ngStyle",t.size.style())}}function bn(n,a){if(1&n&&(e.ynx(0,5),e.YNc(1,un,1,3,"kanban-card",6),e.YNc(2,hn,1,3,"kanban-list",7),e.BQk()),2&n){const t=a.$implicit,r=e.oxw();e.Q6J("ngSwitch",t),e.xp6(1),e.Q6J("ngSwitchCase",r.ItemTypes.CARD),e.xp6(1),e.Q6J("ngSwitchCase",r.ItemTypes.LIST)}}function mn(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"kanban-list",10),e.NdJ("addCard",function(i){const u=e.CHM(t).$implicit;return e.oxw().addCard(u.data.id,i)}),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("dndSortableRender",t)("list",t.data)}}let Cn=(()=>{class n{constructor(t,r){this.store=t,this.specs=r,this.ItemTypes=b,this.hoverTrigger=l.SO.fixed}addCard(t,r){this.store.dispatch(new L(t,r))}removeCard(t){this.store.dispatch(new J(t))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.yh),e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-board"]],decls:7,vars:5,consts:[[3,"allBackends"],[1,"kanban-root",3,"hoverTrigger","listId","spec","horizontal"],["dndSortableTemplate",""],[1,"trash-zone"],[3,"dropped"],[3,"ngSwitch"],[3,"card","preview","ngStyle",4,"ngSwitchCase"],[3,"list","preview","ngStyle",4,"ngSwitchCase"],[3,"card","preview","ngStyle"],[3,"list","preview","ngStyle"],[3,"dndSortableRender","list","addCard"]],template:function(t,r){1&t&&(e.TgZ(0,"dnd-preview",0),e.YNc(1,bn,3,3,"ng-template"),e.qZA(),e.TgZ(2,"dnd-sortable-list",1),e.YNc(3,mn,1,2,"ng-template",2),e.qZA(),e.TgZ(4,"div",3)(5,"kanban-trash-can",4),e.NdJ("dropped",function(o){return r.removeCard(o)}),e.qZA(),e._UZ(6,"kanban-external"),e.qZA()),2&t&&(e.Q6J("allBackends",!0),e.xp6(2),e.Q6J("hoverTrigger",r.hoverTrigger)("listId",888)("spec",r.specs.boardSpec)("horizontal",!0))},directives:[W.S,g.RF,g.n9,_,g.PC,on,sn.J,dn.S,A.U,ln,gn],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}.kanban-root[_ngcontent-%COMP%]{background:#828cca;flex:1;display:flex;min-height:500px;overflow-x:scroll;padding:8px;justify-content:flex-start}.kanban-root[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:8px}.trash-zone[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;text-align:right}"],changeDetection:0}),n})(),fn=(()=>{class n{constructor(t,r,i){this.dnd=t,this.el=r,this.store=i,this.cardSpill=(0,l.De)(this.dnd,b.CARD,{hover:o=>this.store.dispatch(new U(o))})}ngAfterViewInit(){this.cardSpill.connectDropTarget(this.el.nativeElement)}ngOnDestroy(){this.cardSpill.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.fD),e.Y36(e.SBq),e.Y36(c.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["kanban-container"]],decls:20,vars:0,consts:[[1,"text"],["path","sortable/kanban"],[1,"span","span--darkblue"],[1,"span","span--light"],[1,"relative"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-example-link",1),e.TgZ(2,"p"),e._uU(3," This example uses "),e.TgZ(4,"code"),e._uU(5,"@ng-dnd/sortable"),e.qZA(),e._uU(6,". There are two kinds of sortable in play here: "),e.qZA(),e.TgZ(7,"ul")(8,"li"),e._uU(9,"One "),e.TgZ(10,"span",2),e._uU(11,"horizontal"),e.qZA(),e._uU(12," one, whose 'cards' are the vertical lists. Try grabbing a whole list by its header, and reordering. "),e.qZA(),e.TgZ(13,"li"),e._uU(14,"Many "),e.TgZ(15,"span",3),e._uU(16,"vertical"),e.qZA(),e._uU(17," ones, which contain the kanban cards. Try moving the cards between lists. "),e.qZA()()(),e.TgZ(18,"div",4),e._UZ(19,"kanban-board"),e.qZA())},directives:[G.Z,Cn],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{display:flex;flex-direction:column}.relative[_ngcontent-%COMP%]{position:relative}.text[_ngcontent-%COMP%]{background:#fff;max-width:800px}.span[_ngcontent-%COMP%]{border-radius:4px;padding:0 2px}.span--darkblue[_ngcontent-%COMP%]{background:#828cca;color:#fff}.span--light[_ngcontent-%COMP%]{background:#eee;color:#000;box-shadow:0 1px 3px #00000014,0 1px 2px #00000029}"]}),n})(),xn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[x],imports:[[g.ez,B.g,v.c8,F.XJ,l.tG,h.UX,c.Aw,c.Aw.forFeature("kanban",Q),D.Bz.forChild([{path:"",component:fn}])]]}),n})()}}]);