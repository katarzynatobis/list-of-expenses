(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(5),r=n.n(l),o=(n(17),n(18),function(e){var t=e.expenseItem,n=e.onDeleteItem;return u.a.createElement("tr",null,u.a.createElement("td",null,t.title),u.a.createElement("td",null,t.amountPln),u.a.createElement("td",null,t.amountEur),u.a.createElement("td",null,u.a.createElement("button",{type:"button",onClick:function(){return n(t.id)},className:"delete-button"},"Delete")))}),i=n(8),s=Object(i.a)(function(e){var t=e.store;return u.a.createElement("table",{cellPadding:"0",cellSpacing:"0"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Title"),u.a.createElement("th",null,"Amount (PLN)"),u.a.createElement("th",null,"Amount (EUR)"),u.a.createElement("th",null,"Options"))),u.a.createElement("tbody",null,t.expensesItems.map(function(e){return u.a.createElement(o,{expenseItem:e,onDeleteItem:t.removeItem,key:e.id})})))}),m=n(2),c=n(3),p=n(4),d=n(10),h=n(9),E=n(11),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onTitleChange=function(e){n.setState({titleInput:e.currentTarget.value})},n.onAmountChange=function(e){var t=e.currentTarget.value;/^[0-9]*[.,]{0,1}[0-9]{0,2}$/.test(t)&&n.setState({amountInput:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.titleInput,u=t.amountInput;n.props.onAddItem(a,parseFloat(u.replace(",","."))),n.setState({titleInput:"",amountInput:""})},n.state={titleInput:"",amountInput:""},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return u.a.createElement("section",null,u.a.createElement("form",{className:"form-add-expense",onSubmit:this.onSubmit},u.a.createElement("div",null,u.a.createElement("label",{className:"input-wrapper"},u.a.createElement("span",{className:"input-description"},"Title of transaction"),u.a.createElement("input",{className:"input",value:this.state.titleInput,onChange:this.onTitleChange,minLength:5})),u.a.createElement("label",{className:"input-wrapper"},u.a.createElement("span",{className:"input-description"},"Amount (in PLN)"),u.a.createElement("input",{className:"input",value:this.state.amountInput,onChange:this.onAmountChange,pattern:"^[0-9]*[.,]{0,1}[0-9]{0,2}$"}))),u.a.createElement("button",{className:"add-button"},"Add")))}}]),t}(u.a.Component),I=function(e){var t=e.sumEur,n=e.sumPln;return u.a.createElement("p",null,"Sum: ",n," PLN (",t," EUR)")},v=Object(m.c)(function(e){var t=e.store;return u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header"},u.a.createElement("h1",null,"List of expenses"),u.a.createElement("p",null,"1EUR = 4,382 PLN")),u.a.createElement("main",null,u.a.createElement(f,{onAddItem:t.addItem}),u.a.createElement(s,{store:t}),u.a.createElement(I,{sumEur:t.sumEur,sumPln:t.sumPln})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(1),P=function(){function e(t,n){Object(c.a)(this,e),this.title=void 0,this.amountPln=void 0,this.id=void 0,this.id=Date.now()+n+"",this.title=t,this.amountPln=n}return Object(p.a)(e,[{key:"amountEur",get:function(){return(4.382*this.amountPln).toFixed(2)}}]),e}(),g=function(){function e(){var t=this;Object(c.a)(this,e),this.expensesItems=[],this.addItem=function(e,n){var a=new P(e,n);t.expensesItems.push(a)},this.removeItem=function(e){t.expensesItems=t.expensesItems.filter(function(t){return t.id!==e})}}return Object(p.a)(e,[{key:"sumPln",get:function(){return this.expensesItems.reduce(function(e,t){return e+t.amountPln},0)}},{key:"sumEur",get:function(){return(4.382*this.sumPln).toFixed(2)}}],[{key:"initStore",value:function(){var t=new e;return t.expensesItems=[{title:"Item 1",amountPln:30.3},{title:"Item 2",amountPln:1214.15}].map(function(e){return new P(e.title,e.amountPln)}),t}}]),e}();Object(b.h)(g,{expensesItems:b.m,sumEur:b.e,sumPln:b.e,removeItem:b.d,addItem:b.d}),r.a.render(u.a.createElement(v,{store:g.initStore()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2f01679a.chunk.js.map