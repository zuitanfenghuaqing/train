(self.webpackChunktrain=self.webpackChunktrain||[]).push([[321],{7321:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>y}),e(2438);var i=e(9552),a=e(5061),r=e(6610),o=e(5991),c=e(3349),s=e(379),l=e(6070),u=e(7608),A=e(6156),p=e(7294);const d=function(t){(0,s.Z)(a,t);var n,e,i=(n=a,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=(0,u.Z)(n);if(e){var a=(0,u.Z)(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return(0,l.Z)(this,t)});function a(t){var n;return(0,r.Z)(this,a),(n=i.call(this,t)).state={list:[{url:"/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories",name:"all"},{url:"/repositories?q=stars:3E1+language:javascript&sort=stars&order=desc&type=Repositories",name:"JavaScript"},{url:"/repositories?q=stars:3E1+language:ruby&sort=stars&order=desc&type=Repositories",name:"ruby"},{url:"/repositories?q=stars:3E1+language:java&sort=stars&order=desc&type=Repositories",name:"Java"},{url:"/repositories?q=stars:3E1+language:css&sort=stars&order=desc&type=Repositories",name:"css"},{url:"/repositories?q=stars:3E1+language:python&sort=stars&order=desc&type=Repositories",name:"Python"}],active:0},n}return(0,o.Z)(a,[{key:"componentDidMount",value:function(){var t=this.state.list;this.props.callback(t[0].url)}},{key:"render",value:function(){var t=this,n=this.state,e=n.list,i=n.active;return p.createElement("div",null,p.createElement("div",{style:{textAlign:"center",padding:"30px 0"}},e.map((function(n,e){return p.createElement("span",{style:{marginRight:"30px",display:"inline-block",cursor:"pointer"},className:i===e?"item-active":"",onClick:function(){return t.checked(n.url,e)},key:e},n.name)}))),p.createElement("span",null))}},{key:"checked",value:function(t,n){this.props.callback(t),this.setState({active:n})}}]),a}(p.Component);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){(0,A.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t){if(t.status>=200&&t.status<300)return t;throw t}function g(t){return t.json()}const v=function(t){(0,s.Z)(d,t);var n,i,a=(n=d,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,u.Z)(n);if(i){var a=(0,u.Z)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,l.Z)(this,t)});function d(t){var n;return(0,r.Z)(this,d),n=a.call(this,t),(0,A.Z)((0,c.Z)(n),"inputChange",(function(t,e){var i=t.nativeEvent.data;n.setState((0,A.Z)({},"sub".concat(e),!Boolean(i)))})),n.state={sub0:1,sub1:1},n}return(0,o.Z)(d,[{key:"render",value:function(){var t=this,n=this.state,i=n.sub0,a=n.sub1;return p.createElement("div",{className:"battle-content"},p.createElement("div",{className:"title-block"},"Instructions"),p.createElement("div",null,["Enter two Github","Battle","See the winner"].map((function(t,n){return p.createElement("div",{key:n},p.createElement("div",null,t),p.createElement("div",null,p.createElement("img",{src:e(17)("./".concat(["user","fight","star"][n],".png")),alt:""})))}))),p.createElement("div",{className:"title-block"},"Instructions"),p.createElement("section",{className:"row submit-box"},p.createElement("div",null,p.createElement("div",null,"Player One"),p.createElement("div",null,p.createElement("input",{type:"text",onInput:function(n){return t.inputChange(n,"0")}}),p.createElement("button",{disabled:i},"Submit"))),p.createElement("div",null,p.createElement("div",null,"Player Two"),p.createElement("div",null,p.createElement("input",{type:"text",onInput:function(n){return t.inputChange(n,"1")}}),p.createElement("button",{disabled:a},"Submit")))))}}]),d}(p.Component);var E=e(246),b=e.n(E);e(5135);var y=function(t){(0,s.Z)(y,t);var n,f,E=(n=y,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,u.Z)(n);if(f){var i=(0,u.Z)(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return(0,l.Z)(this,t)});function y(t){var n;return(0,r.Z)(this,y),n=E.call(this,t),(0,A.Z)((0,c.Z)(n),"callBack",(function(t){n.setState({origin:t,loading:!0,data:[]},(function(){n.iData(1)}))})),(0,A.Z)((0,c.Z)(n),"iData",(function(t){var e=n.state,i=e.data,r=e.origin;(function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(i,a){var r={method:e};"GET"!==e&&(r=h(h({},r),{},{body:JSON.stringify(n||{})})),r.headers=(0,A.Z)({},"Content-Type","application/json; charset=UTF-8"),"localhost"!==window.location.hostname&&(t="https://api.github.com/search".concat(t)),fetch(t,r).then(m).then(g).then((function(t){i(t)})).catch((function(t){a(t)}))}))})("".concat(r,"&page=").concat(t)).then((function(t){n.setState({data:[].concat((0,a.Z)(i),(0,a.Z)(t.items)),hasMore:!0})})).catch((function(t){console.log(t)})).finally((function(t){n.setState({loading:!1})}))})),(0,A.Z)((0,c.Z)(n),"itemChange",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n.setState({loading:!0,hasMore:!1},(function(){return n.iData(t)}))})),n.state={hasMore:!0,data:[],active:sessionStorage.tabKey?Number(sessionStorage.tabKey):0,origin:"",loading:!0},n}return(0,o.Z)(y,[{key:"render",value:function(){var t=this,n=this.state,a=n.data,r=void 0===a?[]:a,o=n.active,c=n.hasMore,s=n.loading;return p.createElement("div",{className:"main-content"},p.createElement(i.Z,{spinning:s,wrapperClassName:"loading-box"},p.createElement("div",{className:"top-menu"},["Popular","Battle"].map((function(n,e){return p.createElement("span",{key:e,className:Number(o)===e?"active":"",onClick:function(){sessionStorage.tabKey=e,t.setState({active:e})}},n)}))),p.createElement("div",null,o?p.createElement(v,null):p.createElement(p.Fragment,null,p.createElement(d,{callback:this.callBack}),p.createElement("div",{style:{display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"space-evenly"}},p.createElement(b(),{initialLoad:!1,pageStart:1,loadMore:this.itemChange,hasMore:c,useWindow:!0},"                   ",r.length?r.map((function(t,n){var i=t.name,a=t.stargazers_count,r=t.forks_count,o=t.owner.avatar_url;return p.createElement("div",{key:n,style:{flex:"0 0 calc((100% / 4) - 15px)",marginRight:n+1/4?"15px":"0",width:"calc(100% / 4 - 15px)",backgroundColor:"rgb(235,235,235)",padding:"30px 25px",marginBottom:"20px"}},p.createElement("h3",{style:{textAlign:"center",color:"rgb(200,112,97s)",fontSize:"25px"}},"#",++n),p.createElement("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"100% 100%",width:"93px",height:"93px",margin:"0 auto"}}),p.createElement("div",{style:{textAlign:"center",color:"rgb(200,112,97)",fontSize:"18px",margin:"30px 0"}},t.name),["user","star","fen"].map((function(t,n){return p.createElement("div",{key:n},p.createElement("span",{style:{backgroundSize:"100% 100%",verticalAlign:"sub",marginRight:"20px",backgroundImage:"url( ".concat(e(17)("./"+t+".png"),")"),display:"inline-block",width:"20px",height:"20px"}}),p.createElement("span",{style:{fontWeight:"600"}},[i,a,r][n]))})),p.createElement("div",null,p.createElement("span",null),p.createElement("span",null,"--")))})):null))))))}}]),y}(p.Component)},6813:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var i=e(4015),a=e.n(i),r=e(3645),o=e.n(r)()(a());o.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.item-active {\n  color: #be3e1e;\n}\n.main-content {\n  padding: 20px 40px;\n}\n.main-content .top-menu span {\n  display: inline-block;\n  cursor: pointer;\n  font-size: 18px;\n}\n.main-content .top-menu span:hover,\n.main-content .top-menu span.active {\n  color: #1890ff;\n}\n.main-content .top-menu span:nth-child(1) {\n  margin-right: 30px;\n}\n.main-content .top-menu ~ div > div:nth-child(2) > div {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.row {\n  display: flex;\n  width: 100%;\n}\n.battle-content .title-block {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin: 20px 0;\n}\n.battle-content > div:nth-child(2) {\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n}\n.battle-content > div:nth-child(2) > div > div {\n  margin: 8px 16px;\n}\n.battle-content > div:nth-child(2) > div > div:nth-child(2) {\n  background-color: #eee;\n  padding: 32px;\n}\n.battle-content > div:nth-child(2) > div img {\n  width: 120px;\n}\n.battle-content .submit-box {\n  justify-content: center;\n}\n.battle-content .submit-box > div {\n  margin-right: 30px ;\n}\n.battle-content .submit-box > div > div:nth-child(1) {\n  margin: 20px 0;\n}\n.battle-content .submit-box input {\n  width: 250px;\n  height: 32px;\n  line-height: 32px;\n}\n.battle-content .submit-box button {\n  padding: 5px;\n}\n/**\n*antd\n*/\n.ant-spin-nested-loading > div > .ant-spin {\n  max-height: 100%;\n  height: 100%;\n}\n.ant-spin-nested-loading > div > .ant-spin > span {\n  position: fixed !important;\n  top: 50%;\n}\n","",{version:3,sources:["webpack://./src/page/style.less"],names:[],mappings:"AAAA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AACF;AACA;EACE,cAAA;AACF;AACA;EACE,kBAAA;AACF;AACA;EAEI,qBAAA;EACA,eAAA;EACA,eAAA;AAAJ;AACI;;EACE,cAAA;AAEN;AAAI;EACE,kBAAA;AAEN;AAEA;EAEE,aAAA;EACA,WAAA;EACA,eAAA;EACA,6BAAA;AADF;AAGA;EACE,aAAA;EACA,WAAA;AADF;AAGA;EAEI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;AAFJ;AAIE;EACE,eAAA;EACA,aAAA;EACA,uBAAA;AAFJ;AAIM;EACE,gBAAA;AAFR;AAIM;EACE,sBAAA;EACA,aAAA;AAFR;AAJI;EASI,YAAA;AAFR;AAlBA;EAyBI,uBAAA;AAJJ;AAKI;EACE,mBAAA;AAHN;AAIM;EACE,cAAA;AAFR;AA3BA;EAiCM,YAAA;EACA,YAAA;EACA,iBAAA;AAHN;AAhCA;EAsCM,YAAA;AAHN;AACA;;CAEC;AAOD;EACE,gBAAA;EACA,YAAA;AALF;AAME;EACE,0BAAA;EACA,QAAA;AAJJ",sourcesContent:["*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.item-active{\n  color: rgb(190, 62, 30);\n}\n.main-content{\n  padding: 20px 40px;\n}\n.main-content .top-menu{\n  span{\n    display: inline-block;\n    cursor: pointer;\n    font-size: 18px;\n    &:hover, &.active{\n      color: #1890ff;\n    }\n    &:nth-child(1){\n      margin-right: 30px;\n    }\n  }\n}\n.main-content .top-menu~div > div:nth-child(2) > div{\n  width: 100%;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.row{\n  display: flex;\n  width: 100%;\n}\n.battle-content{\n  .title-block{\n    font-size: 24px;\n    font-weight: 600;\n    text-align: center;\n    margin: 20px 0;\n  }\n  & > div:nth-child(2){\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    & > div{\n      &> div{\n        margin: 8px 16px;\n      }\n      &>div:nth-child(2){\n        background-color: #eee;\n        padding: 32px;\n      }\n      img{\n        width: 120px;\n      }\n    }\n  }\n  .submit-box{\n    justify-content: center;\n    &>div{\n      margin-right:30px ;\n      &>div:nth-child(1){\n        margin: 20px 0;\n      }\n    }\n    input{\n      width: 250px;\n      height: 32px;\n      line-height: 32px;\n    }\n    button{\n      padding: 5px;\n    }\n  }\n}\n/**\n*antd\n*/\n.ant-spin-nested-loading > div > .ant-spin{\n  max-height: 100%;\n  height: 100%;\n  & >span{\n    position: fixed !important;\n    top:50%;\n  }\n}\n"],sourceRoot:""}]);const c=o},5135:(t,n,e)=>{"use strict";var i=e(3379),a=e.n(i),r=e(7795),o=e.n(r),c=e(695),s=e.n(c),l=e(9216),u=e.n(l),A=e(6813),p={styleTagTransform:function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}},setAttributes:function(t){var n=e.nc;n&&t.setAttribute("nonce",n)},insert:function(t){var n=s()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}};p.domAPI=o(),p.insertStyleElement=u();var d=a()(A.default,p);if(!A.default.locals||t.hot.invalidate){var f=!A.default.locals,h=f?A:A.default.locals;t.hot.accept(6813,(n=>{A=e(6813),function(t,n,e){if(!t&&n||t&&!n)return!1;var i;for(i in t)if((!e||"default"!==i)&&t[i]!==n[i])return!1;for(i in n)if(!(e&&"default"===i||t[i]))return!1;return!0}(h,f?A:A.default.locals,f)?(h=f?A:A.default.locals,d(A.default)):t.hot.invalidate()}))}t.hot.dispose((function(){d()})),A.default&&A.default.locals&&A.default.locals},2639:(t,n,e)=>{"use strict";t.exports=e.p+"998224d8a30efa7b8b5a.png"},5302:(t,n,e)=>{"use strict";t.exports=e.p+"a177dff81e3e285a75d6.png"},6638:(t,n,e)=>{"use strict";t.exports=e.p+"ca6898311702d6bd8656.png"},370:(t,n,e)=>{"use strict";t.exports=e.p+"dd02ea1d38102f1ea6dd.png"},17:(t,n,e)=>{var i={"./fen.png":2639,"./fight.png":5302,"./star.png":6638,"./user.png":370};function a(t){var n=r(t);return e(n)}function r(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=17}}]);
//# sourceMappingURL=321.js.map