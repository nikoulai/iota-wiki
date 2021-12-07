"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95952],{55956:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","return","panic","error","sender"]},c="Return of Tokens in Case of Failure",l={unversionedId:"guide/solo/reimbursed-funds",id:"guide/solo/reimbursed-funds",isDocsHomePage:!1,title:"Return of Tokens in Case of Failure",description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",source:"@site/external/wasp/documentation/docs/guide/solo/reimbursed-funds.md",sourceDirName:"guide/solo",slug:"/guide/solo/reimbursed-funds",permalink:"/smart-contracts/guide/solo/reimbursed-funds",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/solo/reimbursed-funds.md",tags:[],version:"current",frontMatter:{description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","return","panic","error","sender"]},sidebar:"tutorialSidebar",previous:{title:"Sending Tokens to a Smart Contract",permalink:"/smart-contracts/guide/solo/sending-funds"},next:{title:"Sending Tokens From ISCP to the Tangle",permalink:"/smart-contracts/guide/solo/sending-funds-sc"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"return-of-tokens-in-case-of-failure"},"Return of Tokens in Case of Failure"),(0,a.kt)("p",null,"What if you attach tokens to a request, send it to the smart\ncontract and the smart contract fails (panics)? The panics may occur for\nwhatever reason: it may be due to wrong parameters, or it may be a runtime\nerror or a bug. What will happen with your tokens?"),(0,a.kt)("p",null,"The following test demonstrates the situation when the request results in a\npanic in the smart contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial7(t *testing.T) {\n env := solo.New(t, false, false, seed)\n chain := env.NewChain(nil, "ex7")\n\n err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n require.NoError(t, err)\n\n contractAgentID := iscp.NewAgentID(chain.ChainID.AsAddress(), iscp.Hn("example1"))\n\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n\n // we start with these balances on address and on chain\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // empty\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // empty\n\n // missing parameter, request will panic\n req := solo.NewCallParams("example1", "storeString").WithIotas(42)\n _, err = chain.PostRequestSync(req, userWallet)\n require.Error(t, err)\n\n // assert balances didn\'t change on address and on chain\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // still empty\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // still empty\n}\n')),(0,a.kt)("p",null,"The programmer forgets the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"paramString")," and the program panics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"42:16.438200900 PANIC TestTutorial7.ex7 vmcontext/log.go:12 string parameter not found\n...\n42:16.441706100 INFO TestTutorial7.ex7 solo/run.go:148 REQ: 'tx/[1]3ZWV9c8MrDPMnyJjEnF8HUuMzUmMNed4Gtg5A1SWgqDD: 'panic in VM: string parameter not found''\n")),(0,a.kt)("p",null,"You can see that all sent 42 tokens are returned to the sender's address."),(0,a.kt)("p",null,"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM:\nreturns all tokens (minus fees) to the sender (to the sender's address in the example above)."))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);