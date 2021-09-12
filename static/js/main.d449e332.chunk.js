(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(16),i=n.n(s),o=(n(65),n(5)),l=n(6),u=n(3),d=n(10),j=n(7),b=n(52),m=n.n(b),p=n(1),h=j.a.div(a||(a=Object(l.a)(["\n\n    .container{\n        display: flex;\n        justify-content: center;\n        margin: 20px;\n        padding: 15px;\n        color: #8d8f8f;\n        text-align: justify;\n        flex-wrap: wrap;\n    }\n\n    .container img{\n        margin: 20px;\n        border-radius: 10px;\n        background-color: azure;\n    }\n\n    .container strong{\n        color: azure;\n    }\n\n    .titulo{\n        display: flex;\n        justify-content: center;\n        font-size: 1.5rem;\n    }\n\n    .buttons{\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n    }\n\n    .back{\n        border: none;\n        border-radius: 4px;\n        padding: 10px 20px;\n        background-color: rgb(88, 88, 219);\n        color: white;\n        cursor: pointer;\n    }\n\n    .back:hover{\n        transform: scale(1.05);\n        opacity: 0.8;\n    }\n\n    .play{\n        margin-left: 10px;\n        border: none;\n        border-radius: 4px;\n        padding: 10px 20px;\n        background-color: rgb(211, 31, 8);\n        color: white;\n        cursor: pointer;\n    }\n\n    .play:hover{\n        transform: scale(1.05);\n        opacity: 0.8;\n    }\n\n    .col{\n        max-width: 400px;\n    }\n\n    .trailer{\n        display: flex;\n        justify-content: center;\n    }\n\n"])));function x(){var e=Object(u.h)().id,t=Object(r.useState)(null),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],b=localStorage.getItem("historial");if(Object(r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return c(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return j(e.results)}))}),[e]),!a)return null;if(!l)return[];var x="";l.length>0&&(x="https://www.youtube.com/embed/".concat(l[0].key,"?controls=0;rel=0&amp;autoplay=1"));var f="https://image.tmdb.org/t/p/w300"+a.poster_path;return Object(p.jsx)(h,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("img",{src:f,alt:"{pelicula.title}"}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{className:"titulo",children:Object(p.jsx)("strong",{children:a.title})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Description: "}),""===a.overview?Object(p.jsx)("span",{children:"No description in the server"}):Object(p.jsx)("span",{children:a.overview})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Genres:"})," ",a.genres.map((function(e){return e.name})).join(", ")]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Release date:"})," ",a.release_date]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(d.b,{to:null===b?"/movies-react":"/movies-react/".concat(b),children:Object(p.jsx)("button",{className:"back",children:Object(p.jsx)("strong",{children:"Go Back"})})}),0===l.length?Object(p.jsx)("button",{type:"button",className:"btn btn-secondary  ms-2",disabled:!0,children:Object(p.jsx)("strong",{children:"\u25b6 Trailer"})}):Object(p.jsx)("button",{onClick:function(){m.a.fire({title:'<h2 style="color: white">'.concat(a.title,"</h2> Official Trailer"),html:'<iframe width="450" height="300" src='.concat(x,' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'),confirmButtonText:"Go Back",background:"hsla(0, 0%, 0%, 0.856)"})},className:"play",children:Object(p.jsx)("strong",{children:"\u25b6 Trailer"})})]})]})]})})}var f,g=n(9),O=n.n(g),v=n(15);function y(){return new URLSearchParams(Object(u.g)().search)}function N(e){e.page;var t=e.setPage,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(u.f)(),l=y().get("search");Object(r.useEffect)((function(){s(l||"")}),[l]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),t(1),i.push("/movies-react/?search="+c)},children:[Object(p.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search Movie","aria-label":"Search",value:c,onChange:function(e){s(e.target.value)}}),Object(p.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]})})}var w,k=j.a.div(f||(f=Object(l.a)(["\n\n    .movieCard{\n        list-style: none;\n        font-size: 1.5rem;\n    }\n\n    .movieImg{\n        border-radius: 10px;\n        background-color: azure;\n    }\n\n    .movieImg:hover{\n        transform: scale(1.02);\n        opacity: 0.8;\n    }\n\n    .titulos{\n        display: flex;\n        justify-content: center;\n        color: white;\n    }\n\n    .titulos p{\n        font-size: 20px;\n        margin-right: 0px;\n        text-align: right;\n        width: 150px;\n        height: auto;\n    }\n\n"])));function C(e){var t=e.movie,n="https://image.tmdb.org/t/p/w300"+t.poster_path,a=Object(u.f)();return Object(p.jsx)(k,{children:Object(p.jsxs)("li",{className:"movieCard",children:[Object(p.jsx)(d.b,{onClick:function(e){e.stopPropagation(),localStorage.setItem("historial",a.location.search)},to:"/movies-react/details/"+t.id,children:Object(p.jsx)("img",{width:230,height:345,className:"movieImg",src:n,alt:t.title})}),Object(p.jsxs)("div",{className:"titulos",children:[Object(p.jsx)("span",{children:t.title}),Object(p.jsxs)("p",{className:t.vote_average>=7?"text-success":"text-danger",children:[t.vote_average," ",t.vote_average>=7?"\u2714\ufe0f":"\u274c"]})]})]})})}var I=j.a.div(w||(w=Object(l.a)(["\n\n    .movieGrid{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 230px);\n        gap: 40px;\n        padding: 40px;\n        justify-content: center;\n    }\n"])));function S(e){var t=e.most,n=e.all,a=e.setAll,c=e.page,s=Object(r.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],d=y().get("search");Object(r.useEffect)((function(){a(!0);var e=d?"/search/movie?api_key=d35c832149972307bc3cb723c5d65bf7&query=".concat(d,"&page=").concat(c):"/discover/movie?api_key=d35c832149972307bc3cb723c5d65bf7&page=".concat(c);fetch("https://api.themoviedb.org/3".concat(e)).then((function(e){return e.json()})).then((function(e){return u(e.results)}))}),[d,a,c]);var j=l.filter((function(e){return e.vote_average>=7})),b=l.filter((function(e){return e.vote_average<7}));return Object(p.jsx)(I,{children:Object(p.jsx)("ul",{className:"movieGrid",children:n?l.map((function(e){return Object(p.jsx)(C,{movie:e},e.id)})):t?j.map((function(e){return Object(p.jsx)(C,{movie:e},e.id)})):b.map((function(e){return Object(p.jsx)(C,{movie:e},e.id)}))})})}var M,z,_,J,q,A=n(105);function T(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=d35c832149972307bc3cb723c5d65bf7").then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(A.a,{fade:!0,interval:3e3,className:"m-1 justify-content-center",children:n.map((function(e){return Object(p.jsxs)(A.a.Item,{children:[Object(p.jsx)("img",{height:380,className:"justify-content-center d-felx w-100",src:"https://image.tmdb.org/t/p/original"+e.backdrop_path,alt:"imagen"}),Object(p.jsx)(A.a.Caption,{children:Object(p.jsx)("h3",{className:"text-white bg-dark",children:e.title})})]},e.id)}))})})}var U=j.a.div(M||(M=Object(l.a)(["\n    Font-size: 32px;\n    color: white;\n    text-align: center;\n    margin-top: 20px;\n\n"]))),F=j.a.img(z||(z=Object(l.a)(["\n    width: 35px;\n    margin: 10px 10px;\n"]))),G=j.a.img(_||(_=Object(l.a)(["\n    width: 80px;\n"]))),P=j.a.a(J||(J=Object(l.a)(["\n    cursor: pointer;\n"]))),W=j.a.div(q||(q=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n\n"])));function B(){var e=Object(r.useState)(1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(!0),j=Object(o.a)(u,2),b=j[0],m=j[1],h=function(){m(!0),l(!1),a(1)},x=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),a(n-1),console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),a(n+1),console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(d.b,{onClick:h,to:"/movies-react",className:"navbar-brand text-danger",children:Object(p.jsx)(G,{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631061604/movies-logo-psd-449406_iqoofs.png",alt:"",srcset:""})}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(P,{onClick:function(){l(!0),m(!1)},className:"nav-link","aria-current":"page",children:"\ud83d\udc4d Most voted"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(P,{onClick:function(){l(!1),m(!1)},className:"nav-link",children:"\ud83d\udc4e Least voted"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(P,{onClick:h,className:"nav-link",children:"All.."})})]})}),Object(p.jsx)(d.b,{to:"/movies-react/login",children:Object(p.jsx)(F,{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631059145/Microsoft_Account_c4ealf.svg",alt:"",srcset:""})}),Object(p.jsx)(N,{setPage:a})]})}),Object(p.jsx)(T,{}),Object(p.jsx)(U,{children:b?"\ud83c\udfac All Movies":i?"\ud83d\udc4d Most voted":"\ud83d\udc4e Least voted"}),Object(p.jsxs)(W,{className:"mt-5",children:[n>=2?Object(p.jsx)("button",{className:"btn btn-outline-secondary m-3",onClick:x,children:"\u25c0 previous"}):"",Object(p.jsx)("h3",{className:"text-light m-3",children:n}),Object(p.jsx)("button",{className:"btn btn-outline-secondary m-3",onClick:f,children:"next \u25b6"})]}),Object(p.jsx)(S,{most:i,all:b,setAll:m,page:n}),Object(p.jsxs)(W,{children:[n>=2?Object(p.jsx)("button",{className:"btn btn-outline-secondary m-3",onClick:x,children:"\u25c0 previous"}):"",Object(p.jsx)("h3",{className:"text-light m-3",children:n}),Object(p.jsx)("button",{className:"btn btn-outline-secondary m-3",onClick:f,children:"next \u25b6"})]})]})}var D,Q,Y=n(19),L=n(4),E=n(20),V=n(21),Z=n(23),R=n(22),H=n(26),X=n.n(H),K=n(27),$=n.n(K),ee=n(60),te=n.n(ee),ne=j.a.div(D||(D=Object(l.a)(["\n        \ndisplay: flex;\njustify-content: center;\nmargin: 10px;\npadding: 15px;\ncolor: #8d8f8f;\ntext-align: center;\n\nimg{\n    margin: 10px 0;\n    width: 80px;\n}\n\ninput{\n    margin:20px 0;\n}\n\nbutton{\n    margin-bottom: 20px;\n}\n"]))),ae=function(e){Object(Z.a)(n,e);var t=Object(R.a)(n);function n(){var e;return Object(E.a)(this,n),(e=t.call(this)).registroUsuario=Object(v.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.post("https://apialbum.herokuapp.com/usuario",{id:te.a,apellido_paterno:e.state.usuarios.apellido_paterno,apellido_materno:e.state.usuarios.apellido_materno,nombre:e.state.usuarios.nombre,username:e.state.usuarios.username,password:$()(e.state.usuarios.password)}).then((function(e){alert("Usuario Registrado")})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)}))),e.handleSutmit=function(t){t.preventDefault(),e.registroUsuario()},e.handleChange=function(){var t=Object(v.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({usuarios:Object(L.a)(Object(L.a)({},e.state.usuarios),{},Object(Y.a)({},n.target.name,n.target.value))});case 2:console.log(e.state.usuarios);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={data:[],usuarios:{id:"",apellido_paterno:"",apellido_materno:"",nombre:"",username:"",password:""}},e}return Object(V.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ne,{children:Object(p.jsxs)("form",{className:"form-signin",onSubmit:this.handleSutmit,children:[Object(p.jsx)("img",{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631055194/free-add-user-icon-302-thumb_fl3crp.png",alt:""}),Object(p.jsx)("h3",{children:"Create New Account"}),Object(p.jsx)("input",{type:"text",placeholder:"First Last-name",name:"apellido_paterno",className:"form-control mt-4",autoComplete:"off",onChange:this.handleChange}),Object(p.jsx)("input",{type:"text",placeholder:"Second Last-name",name:"apellido_materno",className:"form-control mt-1",autoComplete:"off",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"text",name:"nombre",className:"form-control mt-1",placeholder:"Name",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"email",name:"username",className:"form-control mt-1",placeholder:"Email",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"Password",name:"password",className:"form-control mt-1",placeholder:"Password",required:"",onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-1",children:"Register"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(d.b,{to:"/movies-react/login",className:"link",children:"Already registered?"})]})})})}}]),n}(r.Component);function re(e){var t=e.trailer;return Object(p.jsx)("div",{children:Object(p.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t[0].key,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}var ce=j.a.div(Q||(Q=Object(l.a)(["\n        \ndisplay: flex;\njustify-content: center;\nmargin: 50px;\npadding: 15px;\ncolor: #8d8f8f;\ntext-align: center;\nflex-wrap: wrap;\n\ninput{\n    margin:20px 0;\n}\n\nimg{\n    margin: 10px 0;\n    width: 100px;\n}\n\nbutton{\n    margin-bottom: 20px;\n}\n"]))),se=function(e){Object(Z.a)(n,e);var t=Object(R.a)(n);function n(){var e;return Object(E.a)(this,n),(e=t.call(this)).handleChange=function(){var t=Object(v.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({usuarios:Object(L.a)(Object(L.a)({},e.state.usuarios),{},Object(Y.a)({},n.target.name,n.target.value))});case 2:console.log(e.state.usuarios);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.iniciarSesion=Object(v.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.get("https://apialbum.herokuapp.com/usuario",{params:{username:e.state.usuarios.username,password:$()(e.state.usuarios.password)}}).then((function(e){return e.data})).then((function(e){if(e.length){var t=e[0];alert("Welcome ".concat(t.nombre," ").concat(t.apellido_paterno))}else alert("The username or password  is incorrect")})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(t){t.preventDefault(),e.iniciarSesion()},e.state={usuarios:{username:"",password:""}},e}return Object(V.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ce,{children:Object(p.jsxs)("form",{className:"form-signin",onSubmit:this.handleSubmit,children:[Object(p.jsx)("img",{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631054459/user-line-logo-2007C82021-seeklogo.com_zyomqc.png",alt:""}),Object(p.jsx)("h1",{className:"h4 mb-3 font-weight-normal",children:"Sign in"}),Object(p.jsx)("input",{type:"email",id:"inputEmail",className:"form-control mt-1",placeholder:"Email",required:"",name:"username",onChange:this.handleChange}),Object(p.jsx)("input",{type:"Password",id:"inputPassword",className:"form-control mt-1",placeholder:"Password",required:"",name:"password",onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Login"}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)(d.b,{to:"/movies-react/register",className:"Link",children:"Create new account"})})]})})})}}]),n}(r.Component),ie=function(e){Object(Z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(se,{})})}}]),n}(r.Component);function oe(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/movies-react/",children:Object(p.jsx)(B,{})}),Object(p.jsx)(u.a,{exact:!0,path:"/movies-react/details/:id",children:Object(p.jsx)(x,{})}),Object(p.jsx)(u.a,{exact:!0,path:"/movies-react/details/trailer/:id",children:Object(p.jsx)(re,{})}),Object(p.jsx)(u.a,{exact:!0,path:"/movies-react/login",children:Object(p.jsx)(ie,{})}),Object(p.jsx)(u.a,{exact:!0,path:"/movies-react/register",children:Object(p.jsx)(ae,{})})]})})}i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(oe,{})}),document.getElementById("root"))},65:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.d449e332.chunk.js.map