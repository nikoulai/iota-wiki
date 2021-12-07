"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35342],{89348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(66816),i=n(71871),u=["components"],l={keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},c="Triggering Events",d={unversionedId:"guide/schema/events",id:"guide/schema/events",isDocsHomePage:!1,title:"Triggering Events",description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",source:"@site/external/wasp/documentation/docs/guide/schema/events.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/events",permalink:"/smart-contracts/guide/schema/events",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/events.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract State",permalink:"/smart-contracts/guide/schema/state"},next:{title:"Function Definitions",permalink:"/smart-contracts/guide/schema/funcs"}},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"triggering-events"},"Triggering Events"),(0,o.kt)("p",null,"Smart contracts do not live in a vacuum. Even though they run in a very limited\nsandbox, from a larger perspective there will have to be a way for users to interact\nwith them. Since smart contracts are essentially event-driven, and requests run\nasynchronously from the user's perspective, there is a need for triggering events by\nthe smart contracts themselves. Of course, it would be possible for users to\nperiodically call a view function to retrieve the latest state of the smart contract,\nbut this burdens the nodes unnecessarily. A better way is to have the smart contracts\ntrigger events that the user can subscribe to and that convey changes to its state."),(0,o.kt)("p",null,"To support events the ISCP sandbox provides a very rudimentary interface. The function\ncall context exposes this interface through its ",(0,o.kt)("inlineCode",{parentName:"p"},"event()")," function, which is passed a\ncompletely arbitrary text string. It is up to the smart contract creator to format\nthis text string and it's up to the user to interpret this text string correctly. This\nis error-prone, inconsistent, and means that a lot of code needs to be written both on\nthe smart contract side that generates these events, and on the client side that handles\nthese events. And with any change to the formatting of these events both ends need to be\nmodified to stay in sync."),(0,o.kt)("p",null,"This is why the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/usage"},"schema tool")," allows you to define your own structured events.\nThe schema tool will generate a structure that will become part of all func call contexts.\nEvents can only be triggered from within a func. They will become part of the state of the\nsmart contract because every event is logged in the core ",(0,o.kt)("inlineCode",{parentName:"p"},"eventlog")," contract.\nTherefore, they cannot be triggered from a view."),(0,o.kt)("p",null,"For each event defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," section of the schema definition file, this\nevents structure will contain a member function that takes the defined types of parameters\nand will automatically encode the event as a consistently formatted string and pass it\nto the ISCP context's ",(0,o.kt)("inlineCode",{parentName:"p"},"event()")," function. The string consists of the name of the event,\na timestamp, and string representations of each field, all separated by vertical bars."),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," section that can be found in the demo ",(0,o.kt)("inlineCode",{parentName:"p"},"fairroulette")," smart contract:"),(0,o.kt)(s.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"events": {\n    "bet": {\n        "address": "Address // address of better",\n        "amount": "Int64 // amount of iotas to bet",\n        "number": "Int64 // number to bet on",\n    },\n    "payout": {\n        "address": "Address // address of winner",\n        "amount": "Int64 // amount of iotas won",\n    },\n    "round": {\n        "number": "Int64 // current betting round number"\n    },\n    "start": {\n    },\n    "stop": {\n    },\n    "winner": {\n        "number": "Int64 // the winning number"\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"events:\n  bet:\n    address: Address // address of better\n    amount: Int64 // amount of iotas to bet\n    number: Int64 // number to bet on\n  payout:\n    address: Address // address of winner\n    amount: Int64 // amount of iotas won\n  round:\n    number: Int64 // current betting round number\n  start:\n  stop:\n  winner:\n    number: Int64 // the winning number\n")))),(0,o.kt)("p",null,"The schema tool will generate ",(0,o.kt)("inlineCode",{parentName:"p"},"events.xx")," which contains the following code for the\nFairRouletteEvents struct:"),(0,o.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package fairroulette\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"\n\ntype FairRouletteEvents struct{}\n\nfunc (e FairRouletteEvents) Bet(address wasmlib.ScAddress, amount int64, number int64) {\n    wasmlib.NewEventEncoder("fairroulette.bet").\n    Address(address).\n    Int64(amount).\n    Int64(number).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Payout(address wasmlib.ScAddress, amount int64) {\n    wasmlib.NewEventEncoder("fairroulette.payout").\n    Address(address).\n    Int64(amount).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Round(number int64) {\n    wasmlib.NewEventEncoder("fairroulette.round").\n    Int64(number).\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Start() {\n    wasmlib.NewEventEncoder("fairroulette.start").\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Stop() {\n    wasmlib.NewEventEncoder("fairroulette.stop").\n    Emit()\n}\n\nfunc (e FairRouletteEvents) Winner(number int64) {\n    wasmlib.NewEventEncoder("fairroulette.winner").\n    Int64(number).\n    Emit()\n}\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\npub struct FairRouletteEvents {\n}\n\nimpl FairRouletteEvents {\n    pub fn bet(&self, address: &ScAddress, amount: i64, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.bet");\n        encoder.address(&address);\n        encoder.int64(amount);\n        encoder.int64(number);\n        encoder.emit();\n    }\n\n    pub fn payout(&self, address: &ScAddress, amount: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.payout");\n        encoder.address(&address);\n        encoder.int64(amount);\n        encoder.emit();\n    }\n\n    pub fn round(&self, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.round");\n        encoder.int64(number);\n        encoder.emit();\n    }\n\n    pub fn start(&self) {\n        EventEncoder::new("fairroulette.start").emit();\n    }\n\n    pub fn stop(&self) {\n        EventEncoder::new("fairroulette.stop").emit();\n    }\n\n    pub fn winner(&self, number: i64) {\n        let mut encoder = EventEncoder::new("fairroulette.winner");\n        encoder.int64(number);\n        encoder.emit();\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib";\n\nexport class FairRouletteEvents {\n    bet(address: wasmlib.ScAddress, amount: i64, number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.bet").\n        address(address).\n        int64(amount).\n        int64(number).\n        emit();\n    }\n\n    payout(address: wasmlib.ScAddress, amount: i64): void {\n        new wasmlib.EventEncoder("fairroulette.payout").\n        address(address).\n        int64(amount).\n        emit();\n    }\n\n    round(number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.round").\n        int64(number).\n        emit();\n    }\n\n    start(): void {\n        new wasmlib.EventEncoder("fairroulette.start").\n        emit();\n    }\n\n    stop(): void {\n        new wasmlib.EventEncoder("fairroulette.stop").\n        emit();\n    }\n\n    winner(number: i64): void {\n        new wasmlib.EventEncoder("fairroulette.winner").\n        int64(number).\n        emit();\n    }\n}\n')))),(0,o.kt)("p",null,"Notice how the generated functions use the WasmLib EventEncoder to encode the\nparameters into a single string before emitting it. Here is the way in which\n",(0,o.kt)("inlineCode",{parentName:"p"},"fairroulette")," emits the ",(0,o.kt)("inlineCode",{parentName:"p"},"bet")," event in its smart contract code:"),(0,o.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    f.Events.Bet(bet.Better.Address(), bet.Amount, bet.Number)\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    f.events.bet(&bet.better.address(), bet.amount, bet.number);\n"))),(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    f.events.bet(bet.better.address(), bet.amount, bet.number);\n")))),(0,o.kt)("p",null,"The smart contract client code can listen in to the event stream and respond to the\nevents it deems noteworthy. The schema tool will shortly also be generating the client\nside code that properly parses these events and passes a type-safe structure to the\nclient code."),(0,o.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/funcs"},"function definitions"),"."))}f.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(5730),s=n(54179);var i=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(86881),l=n(86010),c="tabItem_1uMI";function d(e){var t,n,r,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,E=w.setTabGroupChoices,k=(0,a.useState)(g),T=k[0],x=k[1],N=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&x(O)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==T&&(I(t),x(r),null!=p&&E(p,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:C,onClick:C},null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);