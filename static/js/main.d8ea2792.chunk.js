(this["webpackJsonpclicky-gam"]=this["webpackJsonpclicky-gam"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(3),i=s.n(r),n=(s(12),s(4)),d=s(5),o=s(7),h=s(6),l=(s.p,s(13),s(0));var j=function(e){var t="";switch(e.charId){case 1:t="./images/fry.jpg";break;case 2:t="./images/Turanga-Leela.png";break;case 3:t="./images/Bender_Rodriguez.png";break;case 4:t="./images/AmyWong.png";break;case 5:t="./images/Professor-Farnsworth.png";break;case 6:t="./images/Hermes-Conrad.jpg";break;case 7:t="./images/zoidberg.jpg";break;case 8:t="./images/Scruffy.jpg";break;case 9:t="./images/Zapp-Brannigan.jpeg";break;case 10:t="./images/Kif-Kroker.png";break;case 11:t="./images/Morbo.jpg";break;case 12:t="./images/Nibbler.jpg"}return console.log(e),Object(l.jsxs)("div",{className:"card",style:{height:"20rem",width:"20rem"},children:[Object(l.jsx)("img",{src:t,style:{height:"17rem",width:"20rem"},alt:"Character ID: "+e.charId}),Object(l.jsx)("button",{onClick:function(){e.onPickedChange(e.charId)},className:"btn-primary",children:"Select"})]})},g=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(n.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={order:[1,2,3,4,5,6,7,8,9,10,11,12],picked:[],topScore:0,status:"Click 'submit' on a picture to start. Don't select the same character twice!"},e.newOrder=function(){for(var t=e.state.order.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),c=[e.state.order[s],e.state.order[t]];e.state.order[t]=c[0],e.state.order[s]=c[1]}},e.onPickedChange=function(t){if(e.state.picked.includes(t))e.setState({picked:[]}),e.state.status="Oops! That's wrong. Try again";else{var s=e.state.picked;s.push(t),e.setState({picked:s}),e.state.picked.length>e.state.topScore&&(e.state.topScore=e.state.picked.length),e.state.status="Correct! Keep going"}},e}return Object(d.a)(s,[{key:"render",value:function(){return this.newOrder(),console.log(this.state.order),console.log(this.state.picked),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"jumbotron bg-dark text-center text-white",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("h1",{children:"CLICKY GAME"})}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("h2",{children:this.state.status})}),Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsxs)("h1",{children:["Current Score: ",this.state.picked.length]}),Object(l.jsxs)("h1",{children:["Top Score: ",this.state.topScore]})]})]})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{id:this.state.order[0],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[0]})}),Object(l.jsx)("div",{id:this.state.order[1],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[1]})}),Object(l.jsx)("div",{id:this.state.order[2],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[2]})}),Object(l.jsx)("div",{id:this.state.order[3],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[3]})}),Object(l.jsx)("div",{id:this.state.order[4],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[4]})}),Object(l.jsx)("div",{id:this.state.order[5],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[5]})}),Object(l.jsx)("div",{id:this.state.order[6],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[6]})}),Object(l.jsx)("div",{id:this.state.order[7],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[7]})}),Object(l.jsx)("div",{id:this.state.order[8],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[8]})}),Object(l.jsx)("div",{id:this.state.order[9],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[9]})}),Object(l.jsx)("div",{id:this.state.order[10],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[10]})}),Object(l.jsx)("div",{id:this.state.order[11],className:"col-3 text-center",children:Object(l.jsx)(j,{onPickedChange:this.onPickedChange,charId:this.state.order[11]})})]})]})}}]),s}(c.Component),b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d8ea2792.chunk.js.map