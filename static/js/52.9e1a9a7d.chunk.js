(this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[]).push([[52],{531:function(e,t,a){"use strict";var n=a(555);a(557);n.initializeApp({apiKey:"AIzaSyDT8vtFi9U-hOJw6Gk6k8LOx9Jya8KBDgc",authDomain:"ukrmemeswiki.firebaseapp.com",databaseURL:"https://ukrmemeswiki.firebaseio.com",projectId:"ukrmemeswiki",storageBucket:"",messagingSenderId:"925209845247",appId:"1:925209845247:web:aab80a95594b9e604f1bca",measurementId:"G-5MV7LGZSB9"});var r=n.firestore();t.a=r},919:function(e,t,a){"use strict";a.r(t);var n=a(579),r=a(602),c=a(542),o=a(2),l=a.n(o),i=a(611),u=a(781),s=a(500),m=a(501),f=a(505),d=a(504),b=a(506),p=a(646),E=a(647),O=a(529),h=a(502),g=(a(782),a(783)),j=a.n(g),k=a(784),v=a.n(k),y=a(531),w=a(788),S=a.n(w);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.default=function(e){var t=Object(o.useState)((function(){return i.EditorState.createEmpty()})),a=Object(c.a)(t,2),g=a[0],k=a[1],w=Object(o.useState)(""),C=Object(c.a)(w,2),D=C[0],x=C[1],I=Object(o.useState)([]),J=Object(c.a)(I,2),L=J[0],N=J[1],U=Object(o.useState)([]),A=Object(c.a)(U,2),B=A[0],F=A[1],G=Object(o.useMemo)((function(){return j()(Object(i.convertToRaw)(g.getCurrentContent()))}),[g]);Object(o.useEffect)((function(){y.a.collection("categories").get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,name:e.id})})),F(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}),[]);return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12",sm:"6"},l.a.createElement(f.a,null,l.a.createElement(d.a,null,"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440"),l.a.createElement(b.a,null,l.a.createElement(s.a,null,l.a.createElement(m.a,{xs:"12"},l.a.createElement(p.a,null,l.a.createElement(E.a,{htmlFor:"name"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),l.a.createElement(O.a,{type:"text",required:!0,value:D,onChange:function(e){var t=e.target;x(t.value)}})))),l.a.createElement(p.a,null,l.a.createElement(E.a,{htmlFor:"name"},"\u0422\u0435\u043a\u0441\u0442"),l.a.createElement(u.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"article-editor",onEditorStateChange:k,toolbar:{link:{linkCallback:function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}},embedded:{embedCallback:function(e){var t=/<iframe.*? src="(.*?)"/.exec(S()(e));return t&&t[1]||e}}}})),l.a.createElement("div",null,l.a.createElement(v.a,{tags:L,suggestions:B,handleDelete:function(e){N(L.filter((function(t,a){return a!==e})))},handleAddition:function(e){N([].concat(Object(r.a)(L),[e]))},autofocus:!1,placeholder:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"})),l.a.createElement(s.a,null,l.a.createElement(h.a,{block:!0,color:"primary",disabled:!D||!g,onClick:function(){var t=L.map((function(e){return e.id}));y.a.collection("articles").doc(D).set({text:G,categories:L.length?t:void 0}).then((function(){console.log("Document successfully written!"),e.history.push("/home")})).catch((function(e){console.error("Error writing document: ",e)}))}},"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"))))),l.a.createElement(m.a,{xs:"12",sm:"6"},l.a.createElement(f.a,{className:"result-card"},l.a.createElement(d.a,null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),l.a.createElement(b.a,null,l.a.createElement("h1",null,D),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:G}}))))))}}}]);
//# sourceMappingURL=52.9e1a9a7d.chunk.js.map