"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36370],{93605:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={keywords:["ISCP","Smart Contracts","Rust","poc","proof of concept","node","nvm","tutorial","JavaScript","TypeScript","Wasm"],description:"An example game project with frontend and contract, demonstrating the development, setup, and interaction with a smart contract.",image:"/img/logo/WASP_logo_dark.png"},s="Fair Roulette",d={unversionedId:"guide/example_projects/fair_roulette",id:"guide/example_projects/fair_roulette",isDocsHomePage:!1,title:"Fair Roulette",description:"An example game project with frontend and contract, demonstrating the development, setup, and interaction with a smart contract.",source:"@site/external/wasp/documentation/docs/guide/example_projects/fair_roulette.md",sourceDirName:"guide/example_projects",slug:"/guide/example_projects/fair_roulette",permalink:"/smart-contracts/guide/example_projects/fair_roulette",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/example_projects/fair_roulette.md",tags:[],version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Rust","poc","proof of concept","node","nvm","tutorial","JavaScript","TypeScript","Wasm"],description:"An example game project with frontend and contract, demonstrating the development, setup, and interaction with a smart contract.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"ERC20 Example",permalink:"/smart-contracts/guide/evm/examples/ERC20"},next:{title:"Contributing",permalink:"/smart-contracts/contribute"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Mandatory Setup",id:"mandatory-setup",children:[],level:2},{value:"Technicalities",id:"technicalities",children:[{value:"Fundamentals",id:"fundamentals",children:[{value:"On Ledger Requests",id:"on-ledger-requests",children:[],level:4},{value:"Off Ledger Requests",id:"off-ledger-requests",children:[],level:4},{value:"Funds",id:"funds",children:[],level:4},{value:"Conclusion",id:"conclusion",children:[],level:4}],level:3},{value:"Implementation",id:"implementation",children:[],level:3},{value:"The Smart Contract",id:"the-smart-contract",children:[{value:"Dependencies",id:"dependencies",children:[],level:4},{value:"Building the Contract",id:"building-the-contract",children:[],level:4}],level:3},{value:"The Frontend",id:"the-frontend",children:[],level:3},{value:"The Communication Layer",id:"the-communication-layer",children:[{value:"The Wasp Client",id:"the-wasp-client",children:[],level:4},{value:"The Fairroulette Service",id:"the-fairroulette-service",children:[{value:"PlaceBetOnLedger",id:"placebetonledger",children:[],level:5},{value:"CallView",id:"callview",children:[],level:5}],level:4},{value:"Dependencies",id:"dependencies-1",children:[],level:4},{value:"Install Dependencies",id:"install-dependencies",children:[],level:4},{value:"Configuration",id:"configuration",children:[],level:4},{value:"Building The Fronted",id:"building-the-fronted",children:[],level:4}],level:3}],level:2},{value:"Deployment",id:"deployment",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fair-roulette"},"Fair Roulette"),(0,i.kt)("p",null,"Fair roulette is an example reference implementation which demonstrates the development, setup, and interaction with a smart contract."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Fair roulette example project is a simple betting game in which players can bet on a number within a certain range."),(0,i.kt)("p",null,"The game consists of many rounds in which the player will try to bet on the right number to win a share of the bet funds."),(0,i.kt)("p",null,"A round is running for a certain amount of time. In the example its 60 seconds. In this timeframe, incoming bets will be added to a list of bets. After 60 seconds have passed, a winning number will be randomly generated and all players who made the right guess will receive their share of the pot."),(0,i.kt)("p",null,"If no round is ",(0,i.kt)("em",{parentName:"p"},"active")," when a bet gets placed, the round gets initiated immediately."),(0,i.kt)("p",null,"The random number is generated by the native randomness of the ISCP consensus.\nIt is unpredictable by anybody, including an individual validator node.\nTherefore the roulette is Fair."),(0,i.kt)("h2",{id:"mandatory-setup"},"Mandatory Setup"),(0,i.kt)("p",null,"The mandatory setup consists out of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.iota.org/goshimmer/welcome"},"GoShimmer")," node >= 0.7.5v (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/commit/25c827e8326a"},"25c827e8326a"),")"),(0,i.kt)("li",{parentName:"ul"},"1 Beta ",(0,i.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Wasp node"),"."),(0,i.kt)("li",{parentName:"ul"},"1 Static file server (nginx, Apache, fasthttp)")),(0,i.kt)("h2",{id:"technicalities"},"Technicalities"),(0,i.kt)("p",null,"Before you dive into the contents of the project, you should take a look at important fundamentals."),(0,i.kt)("h3",{id:"fundamentals"},"Fundamentals"),(0,i.kt)("p",null,"Wasp is part of the IOTA ecosystem that enables the execution of smart contracts. These contracts run logic and are allowed to do state (change) requests towards the Tangle. You will need a GoShimmer node to be able to store state. It receives state change requests and, if valid, saves them onto the Tangle. "),(0,i.kt)("p",null,"There are two ways to interact with smart contracts."),(0,i.kt)("h4",{id:"on-ledger-requests"},"On Ledger Requests"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests"},"On-ledger Requests")),(0,i.kt)("p",null,"On-ledger requests are sent to GoShimmer nodes. Wasp periodically requests new On-ledger requests from GoShimmer nodes, and handles them accordingly. These messages are validated through the network and take some time to be processed. "),(0,i.kt)("h4",{id:"off-ledger-requests"},"Off Ledger Requests"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests"},"Off-ledger Requests")),(0,i.kt)("p",null,"Off-ledger requests are directly sent to Wasp nodes and do not require validation through GoShimmer nodes. They are therefore faster. However, they require an initial deposit of funds to a chain account as this account will initiate required On-ledger requests on behalf of the desired contract or player."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example uses On-ledger requests to initiate a betting request. A method to invoke Off-ledger requests is implemented inside the frontend."),(0,i.kt)("p",{parentName:"div"},"See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/7b3ddc54891ccf021c7aaa32db35d88361fade16/contracts/rust/fairroulette/frontend/src/lib/fairroulette_client/fair_roulette_service.ts#L133"},"placeBetOffLedger")))),(0,i.kt)("h4",{id:"funds"},"Funds"),(0,i.kt)("p",null,"As these requests cost some fees, and to be able to bet with real tokens, the player will need a source of funds.  "),(0,i.kt)("p",null,"As the game runs on a testnet, you can request funds from the GoShimmer faucets inside the network. "),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/goshimmer/tutorials/obtain_tokens"},"How to Obtain Tokens From the Faucet")),(0,i.kt)("p",null,"After you have acquired some funds, they will reside inside an address that is handled by a wallet."),(0,i.kt)("p",null,"For this PoC, we have implemented a very narrowed-down wallet that runs inside the browser itself, mostly hidden from the player. "),(0,i.kt)("p",null,"In the future, we want to provide a solution that enables the use of ",(0,i.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly")," or MetaMask as a secure external wallet."),(0,i.kt)("h4",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"To interact with a smart contract, you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Wasp node that hosts the contract"),(0,i.kt)("li",{parentName:"ul"},"A GoShimmer node to interact with the tangle"),(0,i.kt)("li",{parentName:"ul"},"Funds from a GoShimmer faucet"),(0,i.kt)("li",{parentName:"ul"},"A client that invokes the contract by either an On Ledger request or Off Ledger request. In this example, the Frontend acts as the client.")),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The PoC consists of two projects residing in ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts/wasm/fairroulette"),"."),(0,i.kt)("p",null,"One is the smart contract itself. Its boilerplate was generated using the new ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/intro"},"Schema tool")," which is shipped with this beta release.\nThe contract logic is written in Rust, but the same implementation can be achieved interchangeably with Golang which is demonstrated in the root folder and ",(0,i.kt)("inlineCode",{parentName:"p"},"./src"),"."),(0,i.kt)("p",null,"The second project is an interactive frontend written in TypeScript, made reactive with the light Svelte framework. You can find it in the sub-folder ",(0,i.kt)("inlineCode",{parentName:"p"},"./frontend"),".\nThis frontend sends On-ledger requests to place bets towards the fair roulette smart contract and makes use of the GoShimmer faucet to request funds."),(0,i.kt)("h3",{id:"the-smart-contract"},"The Smart Contract"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/core_concepts/smart-contract-anatomy"},"Anatomy of a Smart Contract")),(0,i.kt)("p",null,"As the smart contract is the only actor that is allowed to modify state in the context of the game, it needs to handle a few tasks such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validating and accepting placed bets"),(0,i.kt)("li",{parentName:"ul"},"Starting and ending a betting round"),(0,i.kt)("li",{parentName:"ul"},"Generating a ",(0,i.kt)("strong",{parentName:"li"},"random")," winning number "),(0,i.kt)("li",{parentName:"ul"},"Sending payouts to the winners"),(0,i.kt)("li",{parentName:"ul"},"Emitting status updates through the event system")),(0,i.kt)("p",null,"Any incoming bet will be validated. This includes the amount of tokens which have been bet and also the number on which the player bet on. For example, any number over 8 or under 1 will be rejected."),(0,i.kt)("p",null,"If the bet is valid and no round is active, the round state will be changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", marking an active round. The bet will be the first of a list of bets. "),(0,i.kt)("p",null,"A delayed function call will be activated which executes ",(0,i.kt)("strong",{parentName:"p"},"after 60 seconds"),". "),(0,i.kt)("p",null,"This function is the payout function that generates a random winning number, and pays out the winners of the round. After this, the round state will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," indicating the end of the round.   "),(0,i.kt)("p",null,"If a round is already active, the bet will be appended to the list of bets and await processing. "),(0,i.kt)("p",null,"All state changes such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"round started")," ,",(0,i.kt)("inlineCode",{parentName:"p"},"round ended"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"placed bets"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"payout of the winners")," are published as events.  Events are published as messages through a public web socket."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/wasm-pack/quickstart.html"},"wasm-pack"))),(0,i.kt)("h4",{id:"building-the-contract"},"Building the Contract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd contracts/wasm/fairroulette\nwasm-pack build \n")),(0,i.kt)("h3",{id:"the-frontend"},"The Frontend"),(0,i.kt)("p",null,"The frontend has two main tasks."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Visualize the contract's state"),":  This includes the list of all placed bets, if a round is currently active and how long it's still going. Any payouts will be shown as well, including a fancy animation in case the player has won. The player can also see his current available funds, his seed, and his current address."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The seed is the key to your funds. We display the seed for demonstration purposes only in this PoC.\n",(0,i.kt)("strong",{parentName:"p"},"Never share your seed with anyone under any circumstance."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enable the player to request funds and participate in the game by placing bets"),": This is done by showing the player a list of eight numbers, a selection of the amount of funds to bet, and a bet placing button. "),(0,i.kt)("p",{parentName:"li"},"As faucet requests require minimal proof of work, the calculation happens inside a web worker to prevent freezing the browser UI."),(0,i.kt)("p",{parentName:"li"},"To provide the frontend with the required events, it subscribes to the public web socket of Wasp to receive state changes. "),(0,i.kt)("p",{parentName:"li"},"These state change events look like this:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"vmmsg kUUCRkhjD4EGAxv3kM77ay3KMbo51UhaEoCr14TeVHc5 df79d138: fairroulette.bet.placed 2sYqEZ5GM1BnqkZ88yJgPH3CdD9wKqfgGKY1j8FYDSZb3ao5wu 531819 2")," "),(0,i.kt)("p",{parentName:"li"},"This event displays a placed bet from the address ",(0,i.kt)("inlineCode",{parentName:"p"},"12sYqEZ5GM1BnqkZ88yJgPH3CdD9wKqfgGKY1j8FYDSZb3ao5wu"),", a bet of ",(0,i.kt)("inlineCode",{parentName:"p"},"531819i")," on the number ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),". Originating from the smart contract ID ",(0,i.kt)("inlineCode",{parentName:"p"},"df79d138"),"."),(0,i.kt)("p",{parentName:"li"},'However, there is a bit more to the concept than to simply subscribe to a web socket and "perform requests".'))),(0,i.kt)("h3",{id:"the-communication-layer"},"The Communication Layer"),(0,i.kt)("p",null,"On and Off Ledger requests have a predefined structure. They need to get encoded strictly and include a list of transactions provided by Goshimmer. They also need to get signed by the client using the private key originating from a seed.  "),(0,i.kt)("p",null,"Wasp uses the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/goshimmer/protocol_specification/components/advanced_outputs"},"ExtendedLockedOutput")," message type, which enables certain additional properties such as: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A fallback address and a fallback timeout"),(0,i.kt)("li",{parentName:"ul"},"Unlockable by AliasUnlockBlock (if address is of Misaddress type)"),(0,i.kt)("li",{parentName:"ul"},"A time lock (execution after deadline)"),(0,i.kt)("li",{parentName:"ul"},"A data payload for arbitrary metadata (size limits apply)")),(0,i.kt)("p",null,"This data payload is required to act on smart contracts as it contains: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The smart contract ID to be selected"),(0,i.kt)("li",{parentName:"ul"},"The function ID to be executed"),(0,i.kt)("li",{parentName:"ul"},"A list of arguments to be passed into the function ")),(0,i.kt)("p",null,"As we do not expect contract and frontend developers to write their own implementation, we have separated the communication layer into two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-fairroulette-service"},"The fairroulette_service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-wasp-client"},"The wasp_client"))),(0,i.kt)("h4",{id:"the-wasp-client"},"The Wasp Client"),(0,i.kt)("p",null,"The wasp client is an example implementation of the communication protocol."),(0,i.kt)("p",null,"It provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A basic wallet functionality"),(0,i.kt)("li",{parentName:"ul"},"Hashing algorithms"),(0,i.kt)("li",{parentName:"ul"},"A web worker to provide proof of work "),(0,i.kt)("li",{parentName:"ul"},"Construction of On/Off Ledger requests"),(0,i.kt)("li",{parentName:"ul"},"Construction of smart contract arguments and payloads"),(0,i.kt)("li",{parentName:"ul"},"Generation of seeds (including their private keys and addresses)"),(0,i.kt)("li",{parentName:"ul"},"Serialization of data into binary messages"),(0,i.kt)("li",{parentName:"ul"},"Deserialization of smart contract state")),(0,i.kt)("p",null,"This wasp_client can be seen as a soon-to-be external library. For now, this is a PoC client library shipped with the project. However, in the future , we want to provide a library you can simply include in your project."),(0,i.kt)("h4",{id:"the-fairroulette-service"},"The Fairroulette Service"),(0,i.kt)("p",null,"This service is meant to be a high-level implementation of the actual app. In other words: it's the service that app or frontend developers would concentrate on. "),(0,i.kt)("p",null,"It does not construct message types, nor does it interact with GoShimmer directly. Besides subscribing to the web socket event system of Wasp, it does not interact directly with Wasp either. Such communications are handled by the ",(0,i.kt)("a",{parentName:"p",href:"#the-wasp-client"},(0,i.kt)("inlineCode",{parentName:"a"},"wasp_client")),"."),(0,i.kt)("p",null,"The fairroulette service is a mere wrapper around smart contract invocation calls. It accesses the smart contract state through the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp_client")," and does minimal decoding of data. "),(0,i.kt)("p",null,"Let's take a look into three parts of this service to make this more clear."),(0,i.kt)("p",null,"This service comprises two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#placebetonledger"},"PlaceBetOnLedger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#callview"},"CallView"))),(0,i.kt)("h5",{id:"placebetonledger"},"PlaceBetOnLedger"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/7b3ddc54891ccf021c7aaa32db35d88361fade16/contracts/rust/fairroulette/frontend/src/lib/fairroulette_client/fair_roulette_service.ts#L149"},"placeBetOnLedger")," function is responsible for sending On-Ledger bet requests. It constructs a simple OnLedger object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The smart contract ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"fairroulette")," "),(0,i.kt)("li",{parentName:"ul"},"The function to invoke: ",(0,i.kt)("inlineCode",{parentName:"li"},"placeBet")," "),(0,i.kt)("li",{parentName:"ul"},"An argument: ",(0,i.kt)("inlineCode",{parentName:"li"},"-number")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is the number the player would bet on, the winning number  ")))),(0,i.kt)("p",null,"This transaction also requires an address to send the request to, and also a variable amount of funds over ",(0,i.kt)("inlineCode",{parentName:"p"},"0i"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For Wasp, the address to send funds to is the chainId."))),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/misc/coretypes"},"CoreTypes")," and ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/solo/invoking-sc"},"Invoking")),(0,i.kt)("h5",{id:"callview"},"CallView"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/7b3ddc54891ccf021c7aaa32db35d88361fade16/contracts/rust/fairroulette/frontend/src/lib/fairroulette_client/fair_roulette_service.ts#L165"},"callView")," function is responsible for calling smart contract view functions. "),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/solo/view-sc"},"Calling a view")," "),(0,i.kt)("p",null,"To give access to the smart contracts state, you can use view functions to return selected parts of the state. "),(0,i.kt)("p",null,"In this use case, you can poll the state of the contract at the initial page load of the frontend.\nState changes that happen afterwards are published through the websocket event system."),(0,i.kt)("p",null,"You can find examples to guide you in building similar functions in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Frontend: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/7b3ddc54891ccf021c7aaa32db35d88361fade16/contracts/rust/fairroulette/frontend/src/lib/fairroulette_client/fair_roulette_service.ts#L181"},"getRoundStatus")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Smart Contract: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/7b3ddc54891ccf021c7aaa32db35d88361fade16/contracts/rust/fairroulette/src/fairroulette.rs#L312"},"view_round_status")))),(0,i.kt)("p",null,"Since data returned by the views is encoded in Base64, the frontend needs to decode this by using simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," methods.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"view_round_status")," view returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt16")," which has a state of either ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". "),(0,i.kt)("p",null,"This means that to get a proper value from a view call, you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"readUInt16LE")," to decode the matching value."),(0,i.kt)("h4",{id:"dependencies-1"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"NodeJS >= 14"),(0,i.kt)("br",{parentName:"li"}),"If you use a different version of node, you can use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," to switch node versions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM"))),(0,i.kt)("h4",{id:"install-dependencies"},"Install Dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your frontend directory ( contracts/wasm/fairroulette/frontend for example)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd  contracts/wasm/fairroulette/frontend\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))),(0,i.kt)("h4",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The frontend requires that you create a config file. You can copy the template from ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts/wasm/fairroulette/frontend/config.dev.sample.js"),", and rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.dev.js")," inside the same folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp config.dev.sample.js config.dev.js\n")),(0,i.kt)("p",null,"Make sure to update the config values according to your setup."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId")," is the chainId which gets defined after ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain#deploy-the-iscp-chain"},"deploying a chain"),".  You can get your chain id from your dashboard, or list all chains by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasp-cli chain list\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"waspWebSocketUrl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"waspApiUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"goShimmerApiUrl")," are dependent on the location of your Wasp and GoShimmer nodes. Make sure to keep the path of the ",(0,i.kt)("inlineCode",{parentName:"p"},"waspWeb SocketUrl")," (",(0,i.kt)("inlineCode",{parentName:"p"},"/chain/%chainId/ws"),") at the end. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"seed")," can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," or a predefined 44 length seed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"seed")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," a new seed will be generated as soon a user opens the page. A predefined seed will be set for all users. This can be useful for development purposes. "),(0,i.kt)("h4",{id:"building-the-fronted"},"Building The Fronted"),(0,i.kt)("p",null,"You can build the frontend by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd contracts/wasm/fairroulette/frontend\nnpm run build_worker\n")),(0,i.kt)("p",null,"After this, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," which will run a development server that exposes the transpiled frontend on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:5000")),"."),(0,i.kt)("p",null,"If you want to expose the dev server to the public, it might be required to bind the server to any endpoint like ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST=0.0.0.0 PORT=5000 npm run dev"),"."),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"You should follow the ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain#deploy-the-iscp-chain"},"Deployment")," documentation until you reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy-contract")," command."),(0,i.kt)("p",null,"The deployment of a contract requires funds to be deposited to the ",(0,i.kt)("strong",{parentName:"p"},"chain"),".\nYou can do this by executing the following command from the directory where your Wasp node was configured: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasp-cli chain deposit IOTA:10000\n")),(0,i.kt)("p",null,"Make sure to ",(0,i.kt)("a",{parentName:"p",href:"#building-the-contract"},"Build")," the contract before deploying it. "),(0,i.kt)("p",null,"Now, you can deploy the contract with a wasmtime configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'wasp-cli chain deploy-contract wasmtime fairroulette "fairroulette"  contracts/wasm/fairroulette/pkg/fairroulette_bg.wasm\n')))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);