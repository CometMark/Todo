(this["webpackJsonpp-2"]=this["webpackJsonpp-2"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(7),l=n.n(a),r=(n(13),n(6)),o=n(4),j=(n(14),function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:e.submitHandler,className:"form_content",children:[Object(c.jsx)("input",{placeholder:"Create a new todo...",maxLength:"90",type:"text",onChange:e.task,value:e.inputTask,size:"70",className:"inputTask"}),Object(c.jsx)("button",{disabled:!e.inputTask,type:"submit",className:e.inputTask?"btn":"disBtn",children:"Add"})]}),Object(c.jsxs)("div",{className:"list",children:[e.toDoList.map((function(t,n){return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"single_task",children:[Object(c.jsx)("input",{unchecked:!0,type:"checkbox",className:"check",style:{margin:"0 10px 0px 0"}}),Object(c.jsx)("label",{style:{position:"relative",bottom:"2px"},children:t})]}),Object(c.jsx)("p",{onClick:function(){return e.delHandler(n)},children:"\u2715"})]},n)})),Object(c.jsx)("div",{class:"last_column",children:Object(c.jsx)("p",{style:{padding:"10px 15px 15px 15px",margin:"10px 0 10px 0",fontWeight:"700",fontSize:"12px",color:"hsl(234, 21%, 29%)"},children:e.toDoList.length+" items left"})})]})]})}),u=(n(15),function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)([]),l=Object(o.a)(a,2),u=l[0],d=l[1],b=Object(s.useState)(!0),p=Object(o.a)(b,2);p[0],p[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{display:"inline-flex"},children:Object(c.jsx)("h1",{className:"head",children:"T O D O"})}),Object(c.jsx)(j,{toDoList:u,delHandler:function(e){return function(e){var t=Object(r.a)(u);t.splice(e,1),d(t)}(e)},submitHandler:function(e){d([].concat(Object(r.a)(u),[n])),e.preventDefault(),i("")},task:function(e){i(e.target.value)},inputTask:n})]})});n(16);var d=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.705c0007.chunk.js.map