(this.webpackJsonpactual=this.webpackJsonpactual||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},30:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(5),u=a(3),i=a(2),s=a(19),m=function(){return s.get("https://www.cbr-xml-daily.ru/daily_json.js")},d={dollar:null,euro:null,date:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(i.a)(Object(i.a)({},e),{},{dollar:t.dollar,euro:t.euro});case"SET_DOLLAR":return Object(i.a)(Object(i.a)({},e),{},{dollar:t.dollar});case"SET_EURO":return Object(i.a)(Object(i.a)({},e),{},{euro:t.euro});case"SET_DATE":return Object(i.a)(Object(i.a)({},e),{},{date:t.date});default:return e}},E=a(20),f=Object(u.c)({App:p}),h=Object(u.d)(f,Object(u.a)(E.a));window.store=h;var _=h,b=a(21),g=a(22),D=a(24),v=a(23),O=(a(54),function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"total"},r.a.createElement("div",{className:"total__header"},r.a.createElement("h3",null,"\u041a\u0443\u0440\u0441 \u043d\u0430 ",e.formatDate.getDate()>9?e.formatDate.getDate():"0"+e.formatDate.getDate(),".",e.formatDate.getMonth()>9?e.formatDate.getMonth():"0"+e.formatDate.getMonth(),".",e.formatDate.getFullYear())),r.a.createElement("div",{className:"total__main"},r.a.createElement("div",{className:"total__main-item total__income"},r.a.createElement("h4",null,"\u0414\u043e\u043b\u043b\u0430\u0440 "),r.a.createElement("p",{className:"total__money total__money-income"},e.dollar," \u20bd")),r.a.createElement("div",{className:"total__main-item total__expenses"},r.a.createElement("h4",null,"\u0415\u0432\u0440\u043e"),r.a.createElement("p",{className:"total__money total__money-expenses"},e.euro," \u20bd")))),r.a.createElement("section",{className:"operation"},r.a.createElement("h3",null,"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"),r.a.createElement("div",{id:"form"},r.a.createElement("label",null,r.a.createElement("button",{type:"submit",className:"operation__add",onClick:function(t){e.getDollar()}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0443\u0440\u0441 \u0434\u043e\u043b\u043b\u0430\u0440\u0430")),r.a.createElement("label",null,r.a.createElement("button",{type:"submit",className:"operation__add",onClick:function(t){e.getEuro()}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0443\u0440\u0441 \u0415\u0432\u0440\u043e")),r.a.createElement("button",{type:"submit",className:"operation__add",onClick:function(t){e.getRate()}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"))),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.cbr-xml-daily.ru/",className:"cb-href"},"\u041a\u0443\u0440\u0441\u044b \u0426\u0411 \u0420\u0424 \u0432 XML \u0438 JSON, API"))))}),y=function(e){Object(D.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.getDate()}},{key:"render",value:function(){var e=new Date(this.props.date);return r.a.createElement(O,{dollar:this.props.dollar,euro:this.props.euro,getEuro:this.props.getEuro,getDollar:this.props.getDollar,getRate:this.props.getRate,formatDate:e})}}]),a}(r.a.Component),j=Object(c.b)((function(e){return{dollar:e.App.dollar,euro:e.App.euro,date:e.App.date}}),{getEuro:function(){return function(e){m().then((function(t){var a=t.data.Valute.EUR.Value;e(function(e){return{type:"SET_EURO",euro:e}}(a))}))}},getDollar:function(){return function(e){m().then((function(t){var a=t.data.Valute.USD.Value;e(function(e){return{type:"SET_DOLLAR",dollar:e}}(a))}))}},getRate:function(){return function(e){return m().then((function(t){var a=t.data.Valute.USD.Value,n=t.data.Valute.EUR.Value;e(function(e,t){return{type:"SET_INITIALIZED",dollar:e,euro:t}}(a,n))}))}},getDate:function(){return function(e){return m().then((function(t){e({type:"SET_DATE",date:t.data.Date})}))}}})(y);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:_},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.9f60f354.chunk.js.map