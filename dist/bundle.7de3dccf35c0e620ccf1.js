(()=>{"use strict";var e,t={703:(e,t,n)=>{var r,a,o,i,c,l,s=n(294),u=n(935),m=n(739),d=n(163);function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g,p,b=d.ZP.div(r||(r=f(["\n  position: relative;\n  width: 90%;\n  max-width: 1200px;\n  margin: 1em auto 0;\n  background-color: rgba(0, 7, 15, 0.56);\n  padding-bottom: 1em;\n  ",";\n  @media (min-width: 900px) {\n    padding: 0 5em 1em 5em;\n  }\n"])),(function(e){return e.gameboard&&(0,d.iv)(a||(a=f(["\n            padding-bottom: 0.6em;\n            margin-bottom: 2em;\n            margin-top: 0"])))})),h=d.ZP.p(o||(o=f(["\n      width: 90%;\n      max-width: 700px;\n      text-align: center;\n      margin: 0 auto;\n      padding-bottom: 2em;\n      color: #fdefef;\n    "]))),y=d.ZP.div(i||(i=f(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1em;\n  margin-bottom: 2em;\n  transition: all 0.2s ease-in-out;\n  ",";\n  @media (min-width: 700px) {\n    gap: 3em\n  }\n  \n"])),(function(e){return e.start&&(0,d.iv)(c||(c=f(["\n            padding-bottom: 2em"])))})),v=d.ZP.button(l||(l=f(["\n  background-color: ",";\n\n  border: 2px solid ",";\n\n  &:hover {\n    background-color: #AFB3F7;\n    border: 2px solid #7479ff;\n    transform: scale(1.1);\n  }\n;\n\n  &:focus {\n    background-color: #AFB3F7;\n    border: 2px solid #82ddf0;\n    transform: scale(1.1);\n    outline: 2px solid #82ddf0;\n  }\n;\n"])),(function(e){return e.easy?"#ffd166":e.hard?"#ffafcc":"#82ddf0"}),(function(e){return e.easy?"#faa13c":e.hard?"#f66b92":"#00a5bd"}));function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w,S,E,j,O,k,C=d.ZP.button(g||(g=x(["\n  font-size: ",";\n  background-color: ",";\n  border: ",";\n\n  &:hover {\n    background-color: ",";\n    border: 2px solid ",";\n    transform: ",";;\n  }\n"])),(function(e){return e.active?"1.2rem":"1rem"}),(function(e){return e.active?"#F47AE1":"rgba(0, 7, 15, 0.56)"}),(function(e){return e.active?"2px solid #f66b92":"2px solid rgba(0, 7, 15, 0.56)"}),(function(e){return e.active?"#AFB3F7":"rgba(0, 7, 15, 0.56)"}),(function(e){return e.active?"#7479ff":"rgba(0, 7, 15, 0.56)"}),(function(e){return e.active?"scale(1.1)":"none"})),A=d.ZP.div(p||(p=x(["\n  padding: 2em 1em 0 1em;\n  text-align: center;\n"])));function M(){return s.createElement(b,null,s.createElement(I,null),s.createElement(h,null,"This is Sailor Moon inspired memory game. Your job is to click every character but only once. If you get all of the characters you win! ",s.createElement("br",null)," Good luck ✨"))}function I(){return s.createElement(A,null,s.createElement("img",{src:m,alt:"sailor moon logo"}))}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var G,T,W,z=d.ZP.div(w||(w=P(["\n  position: fixed;\n  width: 90%;\n  max-width: 650px;\n  padding: 1em 1em 0;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 10px solid #dfb0ff;\n  background-color: rgba(255, 255, 255, 0.92);\n  text-align: center;\n\n\n  & > h2 {\n    font-weight: 400;\n    text-align: center;\n    font-size: 2rem;\n    text-decoration: underline;\n    padding: 0 0 0.5em;\n    @media (min-width: 500px) {\n      font-size: 3rem;\n    }\n  }\n"]))),F=d.ZP.div(S||(S=P(["\n  ",";\n  ",";\n  ",";\n  @media (min-width: 550px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"])),(function(e){return e.message_point_cont&&(0,d.iv)(E||(E=P(["\n            //margin: 0 auto;\n            margin: 1em auto;\n            width: 100%;\n            max-width: 350px;\n            padding: 0 0.2em 0.5em;\n            border-bottom: 2px solid #dfb0ff;"])))}),(function(e){return e.messsage_txt_cont&&(0,d.iv)(j||(j=P(["\n            flex-direction: column;\n            text-align: center;"])))}),(function(e){return e.message_last_level&&(0,d.iv)(O||(O=P(["\n            width: 95%;\n            max-width: 500px;\n            margin: 0 auto;\n            padding-bottom: 1em;\n\n          "])))})),H=d.ZP.div(k||(k=P(["\n  width: 90%;\n  max-width: 300px;\n  position: fixed;\n  top: 5%;\n  right: 5%;\n  padding: 0.5em 0;\n  text-align: center;\n  border: 10px solid #f66b92;\n  background-color: rgba(255, 255, 255, 0.92);\n  -webkit-box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);\n  -moz-box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);\n  box-shadow: 3px 3px 12px 0 rgba(50, 50, 50, 0.45);\n  transition: all 0.8s ease-in-out;\n  opacity: 0;\n\n  & > p {\n    font-size: 0.9rem;\n    font-weight: 700;\n    text-transform: uppercase;\n  }\n"])));function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Z=d.ZP.main(G||(G=_(["\n      display: flex;\n      justify-content: space-evenly;\n      flex-wrap: wrap;\n      gap: 2em;\n      margin-bottom: 2em;\n      padding-top: 1em;\n    "]))),B=d.ZP.section(T||(T=_(["\n      display: flex;\n      justify-content: space-around;\n      gap: 1em;\n      flex-direction: column-reverse;\n      padding: 1em;\n      text-align: center;\n      background-color: rgba(0, 7, 15, 0.41);\n      color: #e0e0e0;\n      font-weight: 700;\n      letter-spacing: 0.1em;\n      ",";\n\n      @media (min-width: 550px) {\n        flex-direction: row;\n        align-items: center;\n      }\n    "])),(function(e){return e.primary&&(0,d.iv)(W||(W=_(["\n                position: -webkit-sticky; /* Safari */\n                position: sticky;\n                top: 0;\n                font-size: 1.2rem;\n                background-color: rgba(0, 7, 15, 0.71)"])))}));const N=function(e){return e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))};var U,L;function $(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var D=d.ZP.img(U||(U=$(["\n      width: 100%;\n      max-height: 170px;\n      object-fit: cover;\n      object-position: center top;\n    "]))),Y=d.ZP.div(L||(L=$(["\n      display: flex;\n      flex-direction: column-reverse;\n      width: 100%;\n      max-width: 180px;\n      margin-top: 2em;\n      text-align: center;\n      background: #FFDDE1; /* fallback for old browsers */\n      background: -webkit-linear-gradient(to bottom, #ffdde1, #ee9ca7); /* Chrome 10-25, Safari 5.1-6 */\n      background: linear-gradient(to bottom, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      border: 10px solid palevioletred;\n      transition: all 0.2s ease-in-out;\n\n      &:hover {\n        transform: scale(1.1);\n      }\n    ;\n\n      & > h3 {\n        padding: 0.5em 0;\n        margin-bottom: 0;\n        font-size: 1.5rem;\n      }\n    "])));function J(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const R=function(e){var t=e.obj,n=e.stateObj;return s.createElement(Y,{onClick:function(){return function(e,t){var n=t.id;(function(e,t){var n=e.clickedCards;if(n.length>0)for(var r=0;r<n.length;r++)if(t===n[r])return e.setGameIsOver(!0),!0;return!1})(e,n)||(e.setClickedCards((function(e){return[].concat(J(e),[n])})),e.setCurrentScore((function(e){return e+1})),((r=e).currentScore===r.highScore||r.currentScore>=r.highScore)&&(r.setHighScore((function(e){return e+1})),r.setHighScoreAnimation(!0),setTimeout((function(){r.setHighScoreAnimation(!1)}),2500)),function(e){(e.currentScore===e.maxScore-1||e.currentScore>=e.maxScore)&&e.setUserWon(!0)}(e),e.setCurrentCards((function(){return N(e.currentCards)})));var r}(n,t)},id:t.id},s.createElement("h3",null,t.name),s.createElement(D,{src:t.image,alt:t.description}))};const K=function(e){var t=e.stateObj;return s.createElement(s.Fragment,null,s.createElement(B,null,s.createElement("p",null,"Max score ",t.maxScore),s.createElement("p",null,"Difficulty level: ",t.gameMode)),s.createElement(B,{primary:!0},s.createElement("p",null,"Current Score ",t.currentScore),s.createElement("p",null,"High score ",t.highScore),s.createElement(v,{onClick:function(){return t.setCurrentCards(N(t.currentCards))}},"Shuffle")))};var V=n(802),q=n(959),X=n(293),ee=n(877),te=n(502),ne=n(204),re=n(384),ae=n(871),oe=n(989),ie=n(451),ce=n(474),le=n(480),se=n(96),ue=n(511),me=n(635),de=n(201),fe=n(166),ge=n(983),pe=n(766),be=n(647),he=n(246),ye=n(873),ve=n(780),xe=n(205);const we=[{name:"Artemis",image:te,description:"White cat with moon circle in his forehead",id:(0,ee.v4)()},{name:"DD-Girls",image:ne,description:"Five different color villain looking women",id:(0,ee.v4)()},{name:"Luna",image:re,id:(0,ee.v4)(),description:""},{name:"Princess Kakyuu",image:ae,description:"Black cat with moon circle in his forehead",id:(0,ee.v4)()},{name:"Queen Nehelenia",image:oe,description:"Black haired woman with green and white dress",id:(0,ee.v4)()},{name:"Queen Beryl",image:ie,description:"Red haired woman with long staff and purple dress",id:(0,ee.v4)()},{name:"Queen Serenity",image:ce,description:"White haired woman with gray eyes",id:(0,ee.v4)()},{name:"Sailor Chibi Moon",image:le,description:"Little girl in a pink sailor outfit",id:(0,ee.v4)()},{name:"Sailor Jupiter",image:se,description:"Brown haired woman with white and green colored sailor outfit",id:(0,ee.v4)()},{name:"Sailor Mars",image:ue,description:"Black haired woman with green and white sailor outfit ",id:(0,ee.v4)()},{name:"Sailor Moon",image:me,description:"Main character with long blond hair",id:(0,ee.v4)()},{name:"Sailor Venus",image:de,description:"Blond haired woman with yellow sailor outfit",id:(0,ee.v4)()},{name:"Sailor Galaxia",image:fe,description:"Royalty with long sword and gold armor",id:(0,ee.v4)()},{name:"Sailor Mercury",image:ge,description:"Woman with short blue hair and blue sailor outfit",id:(0,ee.v4)()},{name:"Sailor Neptune",image:pe,description:"Little girl with green hair and green and blue colored sailor outfit",id:(0,ee.v4)()},{name:"Sailor Pluto",image:be,description:"Green hair and sailor outfit with long staff",id:(0,ee.v4)()},{name:"Sailor Saturn",image:he,description:"Shiny black hair, purple sailor outfit and long staff",id:(0,ee.v4)()},{name:"Sailor Starlight's",image:ve,description:"Three short haired woman with black bikinis",id:(0,ee.v4)()},{name:"Sailor Uranus",image:ye,description:"Woman with short blond hair",id:(0,ee.v4)()},{name:"Tuxedo Mask",image:xe,description:"A man with tuxedo, black cape and a hat",id:(0,ee.v4)()}];const Se=function(e){var t,n=N(we);switch(e){case"Easy":t=8;break;case"Medium":t=12;break;case"Hard":t=20}return n.filter((function(e,n){return n<t}))};function Ee(e){je(e),setTimeout((function(){"Hard"===e.gameMode?e.setUserWon(!1):e.setGameIsOver(!1)}),1e3),e.setCurrentCards((function(){return Se(e.gameMode)}))}function je(e){e.setCurrentScore(0),e.setClickedCards([]),e.setSlideAnimation(!0)}var Oe=n(545);function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ae(e){return e.stateObj.gameIsOver?s.createElement(v,{onClick:function(){return Ee(e.stateObj)},hard:!0},"Try Again"):s.createElement(v,{onClick:function(){return je(t=e.stateObj),setTimeout((function(){t.setUserWon(!1)}),1e3),void("Easy"===t.gameMode?(t.setGameMode("Medium"),t.setCurrentCards((function(){return Se("Medium")}))):"Medium"===t.gameMode&&(t.setGameMode("Hard"),t.setCurrentCards((function(){return Se("Hard")}))));var t},hard:!0},"Next level 🡢")}const Me=function(e){var t=e.stateObj,n=ke((0,s.useState)(!1),2),r=n[0],a=n[1],o=r?"toggleOut":"toggleIn";return t.setSlideAnimation=a,e.lastLevelWon?s.createElement(z,{className:o},s.createElement("img",{style:{maxHeight:"200px"},src:e.image.img,alt:e.image.description}),s.createElement("h2",null,"✨ Congratulations ✨"),s.createElement(F,{message_last_level:!0},s.createElement("div",null,s.createElement("p",null,"You beat the hardest level! "),s.createElement("p",null,"You deserve the title of Sailor Guardian and this staff to keep you safe in your future adventures.")),s.createElement("img",{style:{transform:"rotate(20deg)"},src:Oe,alt:"moon staff"})),s.createElement(y,null,s.createElement(v,{onClick:function(){return location.reload()},easy:!0},"🡠 Home"),s.createElement(v,{onClick:function(){return Ee(t)},hard:!0},"Play Again"))):s.createElement(z,{className:o},s.createElement("h2",null,e.header),s.createElement(F,null,s.createElement(F,{messsage_txt_cont:!0},s.createElement("p",null,e.children),s.createElement(F,{message_point_cont:!0},s.createElement("p",null,"Your points: ",t.currentScore," "),s.createElement("p",null,"Max points: ",t.maxScore," ")),s.createElement(y,null,s.createElement(v,{onClick:function(){return location.reload()},easy:!0},"🡠 Home"),s.createElement(Ae,{stateObj:t}))),s.createElement("img",{src:e.image.img,alt:e.image.description})))};var Ie={gameOver:{img:V,description:"sailor moon crying"},userWon:{img:q,description:"sailor moon winking"},lastLevelWon:{img:X,description:"sailor guardians"}};const Pe=function(e){var t=e.stateObj;return t.gameIsOver?s.createElement(Me,{image:Ie.gameOver,header:"Game over",stateObj:t},"Unfortunately you clicked the same character twice and LOST!"):t.userWon&&"Hard"!==t.gameMode?s.createElement(Me,{image:Ie.userWon,header:"✨ Congratulations ✨",stateObj:t},"You got all of the characters without clicking the same character twice."):t.userWon&&"Hard"===t.gameMode?s.createElement(Me,{image:Ie.lastLevelWon,stateObj:t,lastLevelWon:!0}):s.createElement(s.Fragment,null)};const Ge=function(e){return"Easy"===e?8:"Medium"===e?12:20};function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return We(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return We(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ze=function(e){var t,n,r,a=Te((0,s.useState)(Se(e.gameMode)),2),o=a[0],i=a[1],c=Te((0,s.useState)([]),2),l=c[0],u=c[1],m=Te((0,s.useState)(19),2),d=m[0],f=m[1],g=Te((0,s.useState)(0),2),p=g[0],h=g[1],y=Te((0,s.useState)(!1),2),v=y[0],x=y[1],w=Te((0,s.useState)(!1),2),S=w[0],E=w[1],j=Te((0,s.useState)(!1),2),O=j[0],k=j[1],C=O?"high-score_animation":"hidden",A=Ge(e.gameMode),M={currentScore:d,setCurrentScore:f,highScore:p,setHighScore:h,currentCards:o,setCurrentCards:i,clickedCards:l,setClickedCards:u,gameMode:e.gameMode,setGameMode:e.setGameMode,maxScore:A,gameIsOver:S,setGameIsOver:E,userWon:v,setUserWon:x,setHighScoreAnimation:k};return t="highScore",n=h,r=p,(0,s.useEffect)((function(){localStorage.getItem(t)?n(JSON.parse(localStorage.getItem(t))):n(r)}),[]),function(e,t){(0,s.useEffect)((function(){localStorage.setItem(e,JSON.stringify(t))}),[t])}("highScore",p),s.createElement(b,{gameboard:!0},s.createElement(K,{stateObj:M}),s.createElement(Z,null,o.map((function(e){return s.createElement(R,{stateObj:M,obj:e,key:e.id})}))),s.createElement(Pe,{stateObj:M}),s.createElement(H,{className:C},s.createElement("p",null,"✨ New high score ✨")))};function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return He(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return He(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function He(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _e(e){return e.difficultySelected?s.createElement("div",{className:"slide-up"},s.createElement(h,null,"Then you can start the game when you are ready. ",s.createElement("br",null)," Good luck ✨"),s.createElement(y,{start:"true"},s.createElement(C,{active:e.difficultySelected,onClick:function(){e.difficultySelected?e.setGameIsStarted(!0):console.log("Difficulty level not yet selected")}},"start"))):s.createElement(s.Fragment,null)}const Ze=function(e){var t=Fe((0,s.useState)(!1),2),n=t[0],r=t[1];function a(t){e.setGameMode(t),r(!0)}return s.createElement(b,null,s.createElement(I,null),s.createElement(h,null,"This is Sailor Moon memory game. ",s.createElement("br",null)," Your job is to click every character but only once. If you get all of the characters you win!"),s.createElement(h,null,"First select difficulty level:"),s.createElement(y,null,s.createElement(v,{onClick:function(){return a("Easy")},easy:!0},"Easy"),s.createElement(v,{onClick:function(){return a("Medium")}},"Medium"),s.createElement(v,{onClick:function(){return a("Hard")},hard:!0},"Hard")),s.createElement(_e,{difficultySelected:n,setGameIsStarted:e.setGameIsStarted}))};function Be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Ue=function(){var e=Be((0,s.useState)(""),2),t=e[0],n=e[1],r=Be((0,s.useState)(!1),2),a=r[0],o=r[1];return a?s.createElement(s.Fragment,null,s.createElement(M,null),s.createElement(ze,{gameMode:t,setGameMode:n})):s.createElement(Ze,{setGameMode:n,setGameIsStarted:o})};u.render(s.createElement(Ue,null),document.getElementById("root"))},502:(e,t,n)=>{e.exports=n.p+"images/a00dbfd2292788da45cb.png"},480:(e,t,n)=>{e.exports=n.p+"images/893b0b449bdd1067f50b.png"},96:(e,t,n)=>{e.exports=n.p+"images/9c97c97b361bccd0cf6b.png"},511:(e,t,n)=>{e.exports=n.p+"images/fa770785236c0cf31c0f.png"},983:(e,t,n)=>{e.exports=n.p+"images/a6359e4118128706135d.png"},635:(e,t,n)=>{e.exports=n.p+"images/bd0f5555f771a51caf22.png"},766:(e,t,n)=>{e.exports=n.p+"images/8fcc8675d1436e1ec7f9.png"},989:(e,t,n)=>{e.exports=n.p+"images/f316a6e8a77574770781.jpg"},647:(e,t,n)=>{e.exports=n.p+"images/4d8ce8f9777082b786f8.png"},246:(e,t,n)=>{e.exports=n.p+"images/6238106482e403d14ca3.png"},873:(e,t,n)=>{e.exports=n.p+"images/be41f60b2262de39c9a7.png"},201:(e,t,n)=>{e.exports=n.p+"images/b62eef461aa388cf9306.png"},802:(e,t,n)=>{e.exports=n.p+"images/753f626f0c9afaaa0d73.png"},204:(e,t,n)=>{e.exports=n.p+"images/04cb392930c1d2bdbf30.png"},959:(e,t,n)=>{e.exports=n.p+"images/848ca387baca96252b60.png"},384:(e,t,n)=>{e.exports=n.p+"images/fa32038396564f34790b.png"},871:(e,t,n)=>{e.exports=n.p+"images/d5505adb83dbae57fbf2.png"},451:(e,t,n)=>{e.exports=n.p+"images/5928bfd5a714461370e2.jpg"},474:(e,t,n)=>{e.exports=n.p+"images/fca5fd2ba35a17585b5f.jpg"},166:(e,t,n)=>{e.exports=n.p+"images/dad26af84c766b835800.jpg"},545:(e,t,n)=>{e.exports=n.p+"images/6c8a5e55af7beb650505.png"},780:(e,t,n)=>{e.exports=n.p+"images/384f6e27f393f81efb2c.jpg"},739:(e,t,n)=>{e.exports=n.p+"images/e47dc052cc86e08131ac.png"},205:(e,t,n)=>{e.exports=n.p+"images/a1181b3132a44e9da75c.jpg"},293:(e,t,n)=>{e.exports=n.p+"images/53b568cee0bbe6d7b325.png"}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,a,o]=e[s],c=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,o<i&&(i=o));c&&(e.splice(s--,1),t=a())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,c,l]=n,s=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);for(l&&l(r),t&&t(n);s<i.length;s++)o=i[s],r.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0;r.O()},n=self.webpackChunkmemory_game=self.webpackChunkmemory_game||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[216],(()=>r(703)));a=r.O(a)})();
//# sourceMappingURL=bundle.7de3dccf35c0e620ccf1.js.map