(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),u=n(23),i=n(6),j=n.n(i),l=n(11),b=n(10),d=n(8),h=n(2),f=n(0),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(f.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"steelblue"};var O=p,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:t}),"/"===c.pathname&&Object(f.jsx)(O,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var m=x,v=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"Copyright \xa9 2021"}),Object(f.jsx)(d.b,{to:"/about",children:"About"})]})},k=n(22),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(f.jsxs)("h3",{children:[t.text,""," ",Object(f.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})," "]}),Object(f.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(f.jsx)(f.Fragment,{children:t.map((function(e,t){return Object(f.jsx)(g,{task:e,onDelete:n,onToggle:r},t)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(b.a)(o,2),i=u[0],j=u[1],l=Object(r.useState)(!1),d=Object(b.a)(l,2),h=d[0],p=d[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:i,reminder:h}),s(""),j(""),p(!1)):alert("Please add Task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control\r from-control-check",children:[Object(f.jsx)("label",{children:"Set Reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},C=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h5",{children:"For more information please watch crash course using the bellow link"}),Object(f.jsx)("a",{href:"https://www.youtube.com/watch?v=w7ejDZ8SWv8",children:"ReactJS Crash Course 2021"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(d.b,{to:"/",children:"Go Back"})]})},T=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),i=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(u.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:p(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(i.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(d.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m,{onAdd:function(){return c(!n)},showAdd:n}),Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(w,{onAdd:k}),i.length>0?Object(f.jsx)(y,{tasks:i,onDelete:g,onToggle:T}):"No task to show"]})}}),Object(f.jsx)(h.a,{path:"/about",component:C}),Object(f.jsx)(v,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.eba4f443.chunk.js.map