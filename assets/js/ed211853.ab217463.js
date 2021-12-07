"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33819],{22808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={keywords:["ISCP","Smart Contracts","Core Concepts","scaling","flexibility"],description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",image:"/img/logo/WASP_logo_dark.png"},s="ISCP",l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"ISCP",description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",source:"@site/external/wasp/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/smart-contracts/overview",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Core Concepts","scaling","flexibility"],description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts"}},u=[{value:"Scaling and Fees",id:"scaling-and-fees",children:[],level:2},{value:"Custom Chains",id:"custom-chains",children:[],level:2},{value:"Flexibility",id:"flexibility",children:[],level:2},{value:"What is Wasp?",id:"what-is-wasp",children:[],level:2},{value:"Feedback",id:"feedback",children:[],level:2}],h={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iscp"},"ISCP"),(0,r.kt)("p",null,"ISCP stands for IOTA Smart Contract Protocol. It is IOTA's solution for running smart contracts on top of the IOTA tangle. With ISCP we bring scalable and flexible smart contracts into the IOTA ecosystem by allowing anyone to spin up a smart contract blockchain and anchor it to the IOTA tangle. "),(0,r.kt)("p",null,"Allowing multiple blockchains to anchor to the tangle will solve several problems with smart contracts."),(0,r.kt)("h2",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many transactions per second before it needs to decide on which transactions it needs to postpone until other blocks are produced, as there is no processing power available for them on that chain. This eventually results in high fees on many chains, and limited functionality. "),(0,r.kt)("p",null,"As we allow many chains (which can communicate with other chains) to be anchored to the IOTA tangle, we can simply add additional chains once this becomes a problem. This results in lower fees over solutions that just use a single blockchain for all their smart contracts. "),(0,r.kt)("h2",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Given that anyone can start a new chain, and set the rules for that chain, a lot is possible. Not only do you have full control over how the fees are handled on the chain you set up, but you also have full control over the validators and access to your chain. You can even spin up a private blockchain with no public data besides the state hash that is anchored to the main IOTA tangle. This allows parties that need private blockchains to use the security of the public IOTA network without actually exposing their blockchain to the public."),(0,r.kt)("h2",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"You can run multiple types of virtual machines on any chain. We are starting with\n",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/Wasm")," based smart contracts, followed by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM")," based smart contracts, but eventually all kinds of virtual machines can be supported in a ISCP chain depending on the demand. "),(0,r.kt)("p",null,"ISCP is more complex compared to conventional smart contracts, but this provides freedom and flexibility to allow the usage of smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"what-is-wasp"},"What is Wasp?"),(0,r.kt)("p",null,"Wasp is the node software that we have built to let you validate smart contracts as a part of a committee while using a virtual machine of your choice. Multiple Wasp nodes connect and form a committee of validators. When they reach consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making it immutable. "),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are very eager to receive your feedback about your experiences with the IOTA Smart Contracts Beta. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSd4jcmLzCPUNDIijEwGzuWerO23MS0Jmgzszgs-D6_awJUWow/viewform"},"this form")," to share your developer experience with us. This feedback will help us improve the product in follow up releases."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);