"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86971],{96647:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=n(66816),i=n(71871),c=["components"],l={keywords:["testing","solo testing environment","function context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",image:"/img/logo/WASP_logo_dark.png"},u="Testing Smart Contracts",d={unversionedId:"guide/schema/test",id:"guide/schema/test",isDocsHomePage:!1,title:"Testing Smart Contracts",description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",source:"@site/external/wasp/documentation/docs/guide/schema/test.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/test",permalink:"/smart-contracts/guide/schema/test",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/test.mdx",tags:[],version:"current",frontMatter:{keywords:["testing","solo testing environment","function context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Posting Asynchronous Requests",permalink:"/smart-contracts/guide/schema/post"},next:{title:"Example Tests",permalink:"/smart-contracts/guide/schema/examples"}},m=[],p={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-smart-contracts"},"Testing Smart Contracts"),(0,r.kt)("p",null,"Testing of smart contracts happens in the\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/solo/what-is-solo"},"Solo testing environment"),". This enables synchronous,\ndeterministic testing of smart contract functionalities without the overhead of\nhaving to start nodes, set up a committee, and send transactions over the Tangle. Instead,\nyou can use Go's built-in test environment in combination with Solo to deploy chains and\nsmart contracts and simulate transactions."),(0,r.kt)("p",null,"Solo directly interacts with the ISCP code, and uses all the data types that are\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/documentation/docs/misc/coretypes.md"},"defined in the ISCP code"),"\ndirectly. Because they run in a sandboxed environment our Wasm smart contracts cannot\naccess these types directly. Therefore, WasmLib implements its\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/types"},"own versions")," of these data types, and the VM layer acts as a data\ntype translator between both systems."),(0,r.kt)("p",null,"The impact of this type transformation used to be that to be able to write tests in the\nsolo environment the user also needed to know about the ISCP-specific data types and type\nconversion functions, and exactly how to properly pass such data in and out of smart\ncontract function calls. This burdened the user with an unnecessary increased learning\ncurve."),(0,r.kt)("p",null,"With the introduction of the schema tool, we were able to remove this impedance mismatch\nand allow the users to test smart contract functionality in terms of the WasmLib data types\nand functions that they are already familiar with. To that end, we introduced a new ISCP\nfunction context that specifically works with the Solo testing environment. We aimed to\nsimplify the testing of smart contracts as much as possible, keeping the full Solo\ninterface hidden as much as possible, but available when necessary."),(0,r.kt)("p",null,"The only concession we still have to make is to the language used. Because Solo only works\nin the Go language environment, we have to use the Go language version of the interface\ncode that the schema tool generates when testing our smart contracts. Because WasmLib\nprogramming for Rust, TypeScript, and Go are practically identical, we feel that this is\nnot unsurmountable. They only differ where language idiosyncrasies force differences in\nsyntax or naming conventions. This hurdle used to be a lot bigger, when direct programming\nof Solo had to be used, and type conversions had to be done manually. Now we get to use\nthe generated compile-time type-checked interface to our smart contract functions that we\nare already familiar with."),(0,r.kt)("p",null,"Let's look at the simplest way of initializing a smart contract by using the new\n",(0,r.kt)("inlineCode",{parentName:"p"},"SoloContext")," in a test function:"),(0,r.kt)(s.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestDeploy(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n    require.NoError(t, ctx.ContractExists(dividend.ScName))\n}\n")))),(0,r.kt)("p",null,"The first line will automatically create a new chain, and upload and deploy the provided\nexample ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," contract to this chain. It returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"SoloContext")," for further use. The\nsecond line verifies the existence of the deployed contract on the chain associated with\nthe context."),(0,r.kt)("p",null,"Here is another part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," test code, where you can see how we wrap repetitive\ncalls to smart contract functions that are used in multiple tests:"),(0,r.kt)(s.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func dividendMember(ctx *wasmsolo.SoloContext, agent *wasmsolo.SoloAgent, factor int64) {\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Address().SetValue(agent.ScAddress())\n    member.Params.Factor().SetValue(factor)\n    member.Func.TransferIotas(1).Post()\n}\n\nfunc dividendDivide(ctx *wasmsolo.SoloContext, amount int64) {\n    divide := dividend.ScFuncs.Divide(ctx)\n    divide.Func.TransferIotas(amount).Post()\n}\n\nfunc dividendGetFactor(ctx *wasmsolo.SoloContext, member3 *wasmsolo.SoloAgent) int64 {\n    getFactor := dividend.ScFuncs.GetFactor(ctx)\n    getFactor.Params.Address().SetValue(member3.ScAddress())\n    getFactor.Func.Call()\n    value := getFactor.Results.Factor().Value()\n    return value\n}\n")))),(0,r.kt)("p",null,"As you can see, we pass the SoloContext and the parameters to the wrapper functions,\nthen use the context to create a function descriptor for the wrapped function, pass any\nparameters through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," proxy, and then either post the function request or call\nthe function. Any results returned are extracted through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Results")," proxy, and returned\nby the wrapper."),(0,r.kt)("p",null,"There is hardly difference in the way the function interface is used with the ISCP\nfunction context in WasmLib and with the SoloContext. This makes for seamless testing of\nsmart contracts."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/examples"},"next section")," we will go deeper into how the helper member functions\nof the SoloContext are used to simplify tests."))}h.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),r=n(5730),s=n(54179);var i=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(86881),l=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,r=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),w=b.tabGroupChoices,k=b.setTabGroupChoices,x=(0,o.useState)(y),T=x[0],S=x[1],C=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=w[p];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&S(O)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(N(t),S(a),null!=p&&k(p,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:P,onClick:P},null!=n?n:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);