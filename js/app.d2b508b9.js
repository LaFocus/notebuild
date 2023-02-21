(function(){"use strict";var e={1901:function(e,t,n){var a=n(9242),o=n(3396);function i(e,t,n,i,s,l){const r=(0,o.up)("Navbar"),d=(0,o.up)("Notes"),c=(0,o.up)("AddBtn"),h=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{onGetSearch:t[0]||(t[0]=e=>s.search=e),lang:s.lang,onChangeLang:l.changeLang},null,8,["lang","onChangeLang"]),(0,o.Wm)(d,{notes:l.filterNotes,onChangeNote:l.changeNote,onDelNote:l.delNote,lang:s.lang,search:s.search},null,8,["notes","onChangeNote","onDelNote","lang","search"]),(0,o.wy)((0,o.Wm)(c,{onOpenModal:l.openModal,lang:s.lang},null,8,["onOpenModal","lang"]),[[a.F8,!s.search]]),(0,o.wy)((0,o.Wm)(h,{edit:s.edit,onCloseModal:l.closeModal,currentId:s.currentId,onAddNote:l.addNote,editNote:s.editNote,onEditedNote:l.editedNote,lang:s.lang,search:s.search,title:e.title,desc:e.desc},null,8,["edit","onCloseModal","currentId","onAddNote","editNote","onEditedNote","lang","search","title","desc"]),[[a.F8,s.modalWind]])],64)}n(7658);var s=n(7139),l=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/close.1d4d165f.svg";const d={class:"header"},c={class:"header__notes"},h={class:"container"},u={class:"header__change"},g={key:0,class:"header__p"},_=["placeholder"],p={key:0},m=(0,o._)("img",{src:l,alt:""},null,-1),f=[m],w={key:1},v=(0,o._)("img",{src:r,alt:""},null,-1),N=[v];function b(e,t,n,i,l,r){return(0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("div",c,["ru"==n.lang?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"header__lang",onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e))}," UZ ")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"header__lang",onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e))},"RU")),(0,o._)("div",h,[(0,o._)("div",u,[(0,o.Wm)(a.uT,{name:"opp"},{default:(0,o.w5)((()=>[l.header?((0,o.wg)(),(0,o.iD)("p",g,(0,s.zw)(r.words.appbartitle[n.lang]),1)):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,type:"text",class:"header__input",placeholder:r.words.appbarseacrch[n.lang],"onUpdate:modelValue":t[2]||(t[2]=e=>l.search=e)},null,8,_)),[[a.nr,l.search]])])),_:1})])]),(0,o._)("button",{class:"header__search",onClick:t[3]||(t[3]=e=>r.showSearch())},[l.header?((0,o.wg)(),(0,o.iD)("div",p,f)):((0,o.wg)(),(0,o.iD)("div",w,N))])])])}var y={name:"NavbarTodo",props:{lang:String},inject:["words"],data(){return{search:"",header:!0}},methods:{changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")},showSearch(){this.header=!this.header,this.search=""}},watch:{search(e){this.$emit("getSearch",e)}}},k=n(89);const S=(0,k.Z)(y,[["render",b]]);var C=S,D=n.p+"img/flex.4ed3d4be.svg",z=n.p+"img/grid.dbae4039.svg";const M={class:"changer"},O={class:"container changer__wrap"},L={class:"all__notes"},x={key:0},j={key:1},T={key:0,class:"ch__cont"},W=(0,o._)("img",{src:D,alt:""},null,-1),I={key:1,class:"ch__cont"},$=(0,o._)("img",{src:z,alt:""},null,-1),A={class:"container"};function Z(e,t,n,a,i,l){const r=(0,o.up)("Note");return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("div",O,[(0,o._)("h3",L,[n.search?((0,o.wg)(),(0,o.iD)("div",j,(0,s.zw)(l.words.appbarseacrch[n.lang]),1)):((0,o.wg)(),(0,o.iD)("div",x,(0,s.zw)(n.notes.length>0?l.words.infobar[n.lang]:l.words.noinfobar[n.lang]),1))]),(0,o._)("button",{class:"ch__btn",onClick:t[0]||(t[0]=e=>i.change=!i.change)},[i.change?((0,o.wg)(),(0,o.iD)("div",T,[W,(0,o._)("span",null,(0,s.zw)(l.words.list[n.lang]),1)])):((0,o.wg)(),(0,o.iD)("div",I,[$,(0,o._)("span",null,(0,s.zw)(l.words.grid[n.lang]),1)]))])]),(0,o._)("div",A,[(0,o._)("div",{class:(0,s.C_)([i.change?i.grid:i.flex])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.notes,((t,a)=>((0,o.wg)(),(0,o.j4)(r,{onChangeNote:n=>e.$emit("changeNote",t.id),onDelNote:n=>e.$emit("delNote",t.id),note:t,key:a,lang:n.lang,search:n.search},null,8,["onChangeNote","onDelNote","note","lang","search"])))),128))],2)])])}var E=n.p+"img/pen.092f5b23.svg",B=n.p+"img/trash.f04c87ff.svg";const q={class:"note__item"},U={class:"note__top"},F={class:"note__title"},J={class:"note__date"},R={class:"note__desc"},H={class:"note__btns"},V=(0,o._)("img",{src:E,alt:""},null,-1),G=(0,o._)("span",null,"РЕДАКТИРОВАТЬ",-1),P=[V,G],Q=(0,o._)("img",{src:B,alt:""},null,-1),Y=(0,o._)("span",null,"Удалить",-1),K=[Q,Y];function X(e,t,n,i,l,r){return(0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",U,[(0,o._)("h4",F,(0,s.zw)(n.note.title),1),(0,o._)("p",J,(0,s.zw)(n.note.date),1)]),(0,o._)("p",R,(0,s.zw)(n.note.desc),1),(0,o.wy)((0,o._)("div",H,[(0,o._)("button",{class:"note__btn redact",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},P),(0,o._)("button",{class:"note__btn delete",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},K)],512),[[a.F8,!n.search]])])}var ee={name:"NoteItem",props:{search:String,note:{typeof:Object,default:{title:"",desc:"",date:"",id:""}},lang:String},data(){return{}}};const te=(0,k.Z)(ee,[["render",X]]);var ne=te,ae={name:"NotesTodo",components:{Note:ne},props:{notes:{typeof:Array},lang:String,search:String},inject:["words"],data(){return{change:!0,flex:"changer__flex",grid:"changer__grid"}}};const oe=(0,k.Z)(ae,[["render",Z]]);var ie=oe;const se=(0,o._)("img",{src:E,alt:""},null,-1),le=[se];function re(e,t,n,a,i,s){return(0,o.wg)(),(0,o.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=(...e)=>s.openModal&&s.openModal(...e))},le)}var de={name:"AddBtnTodo",methods:{openModal(){this.$emit("openModal",!0)}}};const ce=(0,k.Z)(de,[["render",re]]);var he=ce;const ue={class:"form"},ge={class:"add"},_e={class:"modal__inputNames"},pe=(0,o._)("p",{class:"modal__name"},"Title",-1),me={class:"modal__inputNames"},fe=(0,o._)("p",{class:"modal__name"},"Content",-1),we={class:"modal__btns"};function ve(e,t,n,i,l,r){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"show"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,o._)("div",{class:"modal__content",onClick:t[5]||(t[5]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("form",ue,[(0,o._)("h3",ge,(0,s.zw)(n.edit?"Изменить заметку":"Добавить заметку"),1),(0,o._)("div",_e,[pe,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Title",class:"form__input","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[a.nr,l.title]])]),(0,o._)("div",me,[fe,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Content",class:"form__input","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[a.nr,l.desc]])])]),(0,o._)("div",we,[(0,o._)("div",{class:"btn__cansel",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},"Отмена"),n.edit?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,class:"btn__add",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},"Добавить")),n.edit?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"btn__add",onClick:t[4]||(t[4]=(...e)=>r.changeNote&&r.changeNote(...e))},"Изменить")):(0,o.kq)("",!0)])])])])),_:1})}var Ne={name:"ModalTodo",props:{edit:Boolean,currentId:Number,editNote:Object,lang:String,title:String,desc:String},data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const e={title:this.title,desc:this.desc,date:(new Date).toLocaleDateString(),id:this.id++};this.$emit("addNote",e),this.title="",this.desc=""}else alert("Вы не заполнили")},changeNote(){if(this.desc=this.editNote.desc,this.desc=this.editNote.title,""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.editNote.title,desc:this.editNote.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal()}}}};const be=(0,k.Z)(Ne,[["render",ve]]);var ye=be;const ke={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var Se=ke,Ce={name:"App",components:{Navbar:C,Notes:ie,AddBtn:he,Modal:ye},data(){return{modalWind:!1,edit:!1,note:[],currentId:1,editNote:{},langwords:{},search:"",lang:"ru"}},provide(){return{words:localStorage.words?JSON.parse(localStorage.words):Se}},computed:{filterNotes(){return this.search?this.note.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.note}},methods:{openModal(){this.modalWind=!0,this.edit=!1},closeModal(e){this.modalWind=e},addNote(e){this.note.push(e),this.modalWind=!1},getNotes(){const e=localStorage.note;e&&(this.note=JSON.parse(e))},changeNote(e){this.edit=this.modalWind=!0;let t=this.note.find((t=>t.id==e));this.editNote=t,this.desc=this.editNote.desc,this.title=this.editNote.title},editedNote(e){this.note.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},delNote(e){let t=this.note.findIndex((t=>t.id==e));this.note.splice(t,1)},changeLang(e){this.lang=localStorage.lang=e}},mounted(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langwords=Se,localStorage.words=JSON.stringify(this.langwords)},watch:{note:{handler(){localStorage.note=JSON.stringify(this.note)},deep:!0}}};const De=(0,k.Z)(Ce,[["render",i]]);var ze=De;const Me=(0,a.ri)(ze);Me.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,r=0;r<a.length;r++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],l=a[1],r=a[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var c=r(n)}for(t&&t(a);d<s.length;d++)i=s[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1901)}));a=n.O(a)})();
//# sourceMappingURL=app.d2b508b9.js.map