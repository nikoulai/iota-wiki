"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58570],{68006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={keywords:["Smart Contracts","EVM","Solidity","limitations","fees","sand-boxed"],description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or ISCP. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address...",image:"/img/logo/WASP_logo_dark.png"},c="EVM Limitations within ISCP",l={unversionedId:"guide/evm/limitations",id:"guide/evm/limitations",isDocsHomePage:!1,title:"EVM Limitations within ISCP",description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or ISCP. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address...",source:"@site/external/wasp/documentation/docs/guide/evm/limitations.md",sourceDirName:"guide/evm",slug:"/guide/evm/limitations",permalink:"/smart-contracts/guide/evm/limitations",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/evm/limitations.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","EVM","Solidity","limitations","fees","sand-boxed"],description:"EVM based smart contract limitations. The current implementation is fully sand-boxed and not aware of IOTA or ISCP. You start an EVM chain with a new supply of EVM specific tokens assigned to a single address...",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"EVM/Solidity Based Smart Contracts",permalink:"/smart-contracts/guide/evm/introduction"},next:{title:"Creating an EVM Chain",permalink:"/smart-contracts/guide/evm/create-chain"}},u=[],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evm-limitations-within-iscp"},"EVM Limitations within ISCP"),(0,a.kt)("p",null,"The current experimental EVM support for ISCP allows developers to get a preview of EVM based smart contract solutions on top of IOTA. There are some limitations you should be aware of at the time, which we will be addressing in the months to come:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The current implementation is fully sand-boxed and not aware of IOTA or ISCP"),". It currently can not communicate with non-EVM smart contracts, nor can it interact with assets outside the EVM sandbox yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"You start an EVM chain with a new supply of EVM specific tokens assigned to a single address")," (the main token on the chain which is used for gas as well, comparable to ETH on the Ethereum network). These new tokens are in no way connected to IOTA, or any other token, but are specific for that chain for now."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Because EVM runs inside an ISCP smart contract, any fees that need to be paid for that ISCP smart contract have to be taken into account")," while invoking a function on that contract. To support this right now the JSON-RPC gateway uses the wallet account connected to it. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"You need to manually deposit some IOTA to the chain")," you are using to be able to invoke these functions. We are planning to resolve this at a later phase in a more user-friendly way.")),(0,a.kt)("p",null,"Overall these are temporary solutions, the next release of ISCP will see a lot of these improved or resolved."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);