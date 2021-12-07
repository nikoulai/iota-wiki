"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72160],{56487:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(66816),s=t(71871),c=["components"],l={keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},u="Function Definitions",d={unversionedId:"guide/schema/funcs",id:"guide/schema/funcs",isDocsHomePage:!1,title:"Function Definitions",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state.",source:"@site/external/wasp/documentation/docs/guide/schema/funcs.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcs",permalink:"/smart-contracts/guide/schema/funcs",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/funcs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},sidebar:"tutorialSidebar",previous:{title:"Triggering Events",permalink:"/smart-contracts/guide/schema/events"},next:{title:"Limiting Access",permalink:"/smart-contracts/guide/schema/access"}},f=[],m={toc:f};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-definitions"},"Function Definitions"),(0,o.kt)("p",null,"Here is the full schema definition file for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," example. We will now focus on\nits ",(0,o.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," sections. Since they are structured identically we will only need\nto explain the layout of these sections once."),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Dividend",\n  "description": "Simple dividend smart contract",\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  },\n  "funcs": {\n    "init": {\n      "params": {\n        "owner": "AgentID? // optional owner of contract, defaults to contract creator"\n      }\n    },\n    "member": {\n      "access": "owner // only defined owner of contract can add members",\n      "params": {\n        "address": "Address // address of dividend recipient",\n        "factor": "Int64 // relative division factor"\n      }\n    },\n    "divide": {\n    },\n    "setOwner": {\n      "access": "owner // only defined owner of contract can change owner",\n      "params": {\n        "owner": "AgentID // new owner of smart contract"\n      }\n    }\n  },\n  "views": {\n    "getFactor": {\n      "params": {\n        "address": "Address // address of dividend recipient"\n      },\n      "results": {\n        "factor": "Int64 // relative division factor"\n      }\n    }\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"name: Dividend\ndescription: Simple dividend smart contract\nstate:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\nfuncs:\n  init:\n    params:\n      owner: AgentID? // optional owner of contract, defaults to contract creator\n  member:\n    access: owner // only defined owner of contract can add members\n    params:\n      address: Address // address of dividend recipient\n      factor: Int64 // relative division factor\n  divide: {}\n  setOwner:\n    access: owner // only defined owner of contract can change owner\n    params:\n      owner: AgentID // new owner of smart contract\nviews:\n  getFactor:\n    params:\n      address: Address // address of dividend recipient\n    results:\n      factor: Int64 // relative division factor\n")))),(0,o.kt)("p",null,"As you can see each of the ",(0,o.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," sections defines their functions in the\nsame way. The only resulting difference is in the way the schema tool generates code for\nthem. The code generated for Funcs will be able to inspect and modify the smart contract\nstate, whereas the code generated for Views will only be able to inspect the state."),(0,o.kt)("p",null,"Functions are defined as named subsections in the schema definition file. The name of the\nsubsection will become the name of the function. In turn, there can be 3 optional\nsubsections under each function subsection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access")," indicates who is allowed to access the function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," holds the field definitions that describe the function parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"results")," holds the field definitions that describe the function results.")),(0,o.kt)("p",null,"We will now examine each subsection in more detail. In the next section we will first look\nat the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/access"},(0,o.kt)("inlineCode",{parentName:"a"},"access"))," subsection."))}p.isMDXComponent=!0},71871:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},66816:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(87462),a=t(67294),o=t(5730),i=t(54179);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(86881),l=t(86010),u="tabItem_1uMI";function d(e){var n,t,r,o=e.lazy,i=e.block,d=e.defaultValue,f=e.values,m=e.groupId,p=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),w=(0,c.lx)(v,(function(e,n){return e.value===n.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),y=g.tabGroupChoices,k=g.setTabGroupChoices,T=(0,a.useState)(b),O=T[0],x=T[1],N=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==O&&v.some((function(e){return e.value===E}))&&x(E)}var D=function(e){var n=e.currentTarget,t=N.indexOf(n),r=v[t].value;r!==O&&(I(n),x(r),null!=m&&k(m,r))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},p)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":O===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:D,onClick:D},null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function f(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},54179:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);