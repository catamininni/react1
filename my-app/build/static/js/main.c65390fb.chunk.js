(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var i=t(1),n=t.n(i),a=t(16),o=t.n(a),s=(t(22),t(23),t(24),t(0));var r=function(){return Object(s.jsx)("div",{className:"icono",children:Object(s.jsx)("i",{class:"fas fa-shopping-cart"})})},j=t(7);var d=function(){return Object(s.jsxs)("nav",{className:"topnav",children:[Object(s.jsx)(r,{}),Object(s.jsx)(j.b,{to:"/",children:"Inicio"}),Object(s.jsx)(j.b,{to:"/product/:id",children:"Productos"}),Object(s.jsx)(j.b,{to:""})]})},u=(t(31),t(8)),m=(t(32),t(33),function(e){var c=e.name,t=e.price,i=e.img,n=e.stock;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h1",{children:c}),Object(s.jsx)("img",{src:i,alt:"",width:"700px",height:"300px"}),Object(s.jsxs)("h2",{children:["$",t]}),Object(s.jsx)("h1",{children:n})]})}),p=function(){var e=Object(i.useState)([]),c=Object(u.a)(e,2),t=c[0],n=c[1];return Object(i.useEffect)((function(){var e;(e=[{id:1,name:"Computadora Mac",price:3e5,img:"./images/apple1.jpeg"},{id:2,name:"Computadora Lenovo",price:25e4,img:"./images/lenovo-01-2.jpeg"},{id:3,name:"Computadora Asus",price:2e5,img:"./images/asus.jpg"}],new Promise((function(c,t){setTimeout((function(){c(e)}),2e3)}))).then((function(e){return n(e)})).catch((function(e){return console.log(e.message)}))}),[]),Object(s.jsx)("div",{className:"row",children:t.map((function(e){return Object(s.jsx)(j.b,{to:"/products/".concat(e.id),children:Object(s.jsx)("div",{className:"col-4 row__itemlist",children:Object(s.jsx)(m,{id:e.id,name:e.name,price:e.price,img:e.img})})})}))})},l=(t(34),t(35),t(2)),b=function(){var e=Object(i.useState)([]),c=Object(u.a)(e,2),t=c[0],n=c[1],a=Object(l.f)().id;return Object(i.useEffect)((function(){var e,c=[{id:1,name:"Computadora Mac",price:3e5,img:"./images/apple1.jpeg",description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."},{id:2,name:"Computadora Lenovo",price:25e4,img:"./images/lenovo-01-2.jpeg",description:"Computadora Lenovo. Color gris oscuro, sin usar y con 258 espacio de memoria."},{id:3,name:"Computadora Asus",price:2e5,img:"./images/asus.jpg",description:"Computadora Asus. Color gris claro, espaciado, usada con caja abierta, 13 inch ."}].filter((function(e){return e.id==a}));Object(u.a)(c,1)[0];(e=t,new Promise((function(c,t){setTimeout((function(){c(e)}),1e3)}))).then((function(e){return n(e)}))}),[]),Object(s.jsx)("div",{className:"row",children:localItems.map((function(e){return Object(s.jsx)(Link,{to:"/products/".concat(e.id),children:Object(s.jsx)("div",{className:"col-4 row__itemlist",children:Object(s.jsx)(Item,{id:e.id,name:e.name,price:e.price,img:e.img})})})}))})};var h=function(){return Object(s.jsx)("div",{cla:!0,ssName:"App",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(p,{})}),Object(s.jsx)(l.a,{path:"/products/:id",children:Object(s.jsx)(b,{})}),Object(s.jsx)(l.a,{path:"/informacion/:id",children:Object(s.jsx)("h3",{children:"Mas informacion..."})})]})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(c){var t=c.getCLS,i=c.getFID,n=c.getFCP,a=c.getLCP,o=c.getTTFB;t(e),i(e),n(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),f()}},[[36,1,2]]]);
//# sourceMappingURL=main.c65390fb.chunk.js.map