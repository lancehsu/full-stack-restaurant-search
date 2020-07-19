(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){e.exports=n(148)},129:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(10),i=n.n(o),l=n(8),u=n(95),s=n(217),m=n(23),d=n(96),f=n(97),p=n(68),E=n(98),v=n.n(E),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.darkMode,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MODE":return void 0===t.payload?!e:t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.dialogIsOpen,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DIALOG":return!0;case"CLOSE_DIALOG":return!1;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.restaurants,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RESTAURANTS_SUCCESS":return t.payload;case"GET_RESTAURANTS_FAILURE":return e;case"RESET_RESTAURANTS":return k.restaurants;default:return e}},y=n(44),O=n(104),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.favorites,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FAVORITES_SUCCESS":return t.payload;case"POST_FAVORITES_SUCCESS":return e.concat(t.payload);case"PUT_FAVORITES_SUCCESS":var n=Object(O.a)(e),a=n.findIndex((function(e){return e._id===t.payload._id}));return n[a]=Object(y.a)({},n[a],{name:t.payload.name,restaurants:t.payload.restaurants}),n;case"DELETE_FAVORITES_SUCCESS":var r=e.findIndex((function(e){return e.name===t.payload}));return e.slice(0,r).concat(e.slice(r+1));case"REQUEST_FAVORITES_FAILURE":default:return e}},j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.message,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_MESSAGE":return{open:!0,content:n.payload.content,confirmFunction:null!==(e=n.payload.confirmFunction)&&void 0!==e?e:null};case"CLOSE_MESSAGE":return k.message;default:return t}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.user,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return t.payload;case"LOGIN_FAILURE":return e;case"LOGOUT":return k.user;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.inviteKeys,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INVITE_KEY":return e.concat(t.payload);case"CLEAR_INVITE_KEYS":return k.inviteKeys;default:return e}},k={user:null,inviteKeys:[],darkMode:!1,message:{open:!1,confirmFunction:null,content:""},dialogIsOpen:!1,restaurants:[],favorites:[]},A=Object(m.combineReducers)({user:C,darkMode:h,message:j,dialogIsOpen:b,restaurants:g,favorites:S,inviteKeys:w}),I={key:"root",storage:v.a},_=Object(p.a)(I,A),T=function(e){var t=[d.a],n=m.applyMiddleware.apply(void 0,t),a=Object(f.composeWithDevTools)(n),r=Object(m.createStore)(_,e,a);return{store:r,persistor:Object(p.b)(r)}},R=n(50),F=n(12),L=n(215),N=n(103),M=n(216),U=(n(129),n(29)),G=n(54),x=n(193),D=n(197),P=n(196),W=n(192),V=n(194),B=n(195),H=n(107),z=n(105);!function(e){e.sun="0",e.mon="1",e.tue="2",e.wed="3",e.thu="4",e.fri="5",e.sat="6"}(a||(a={}));var K=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Q=function(e){switch(e){case a.sun:return"sun";case a.mon:return"mon";case a.tue:return"tue";case a.wed:return"wed";case a.thu:return"thu";case a.fri:return"fri";case a.sat:return"sat";default:return console.error("Wrong date number"),""}},q=function(e,t){if(-1===e&&-1===t)return"";var n=!0,a=0|e,r=60*(e-a);a>12&&(a-=12,n=!1);var c=!0,o=0|t,i=60*(t-o);o>12&&(o-=12,c=!1);var l="".concat(a,":").concat(r>=10?r:"0".concat(r)," ").concat(n?"AM":"PM"),u="".concat(o,":").concat(i>=10?i:"0".concat(i)," ").concat(c?"AM":"PM");return"".concat(l,"\n-").concat(u)},J=n(28),Y=n.n(J),$=function(e,t){return{type:"SHOW_MESSAGE",payload:{open:!0,content:e,confirmFunction:null!==t&&void 0!==t?t:null}}},X=function(e){return{type:"GET_FAVORITES_SUCCESS",payload:e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n){var a=n().user;return Y.a.get("/api/favorites/".concat(e),{headers:{Authorization:"bearer ".concat(null===a||void 0===a?void 0:a.token)}}).then((function(e){200===e.status&&t(X(e.data))})).catch((function(e){alert(e),console.error(e),t({type:"REQUEST_FAVORITES_FAILURE"})}))}},ee=function(e,t){return function(n,a){var r=a().user;return Y.a.put("/api/favorites/".concat(e),t,{headers:{Authorization:"bearer ".concat(null===r||void 0===r?void 0:r.token)}}).then((function(a){var r,c=a.data;(n(function(e){return{type:"PUT_FAVORITES_SUCCESS",payload:e}}(c)),t.remove)||(void 0===t.name?n($("".concat(null===(r=t.restaurant)||void 0===r?void 0:r.name," added to ").concat(e))):n($("Rename success")))})).catch((function(e){alert(e),console.error(e),n({type:"REQUEST_FAVORITES_FAILURE"})}))}},te=n(190),ne=n(191),ae=n(11),re=n(221),ce=n(108),oe=n(185),ie=n(186),le=n(189),ue=n(222),se=n(223),me=function(e){var t=e.children,n=e.title,a=e.menuItems,o=c.a.useRef(null),i=Object(r.useState)(!1),l=Object(ae.a)(i,2),u=l[0],s=l[1],m=function(){s((function(e){return!e}))},d=function(e){o.current&&o.current.contains(e.target)||s(!1)},f=function(e){"Tab"===e.key&&(e.preventDefault(),s(!1))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(re.a,{title:n},c.a.createElement(ce.a,{ref:o,disableRipple:!0,onClick:m},t)),c.a.createElement(oe.a,{open:u,anchorEl:o.current,role:void 0,transition:!0},(function(e){var t=e.TransitionProps,n=e.placement;return c.a.createElement(ie.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),c.a.createElement(H.a,null,c.a.createElement(le.a,{onClickAway:d},c.a.createElement(ue.a,{autoFocusItem:u,id:"menu-list-grow",onKeyDown:f},a.map((function(e){return c.a.createElement(se.a,{key:e.name,onClick:function(){e.onClick(),m()}},e.name)}))))))})))},de=Object(r.memo)((function(e){var t=e.restaurant,n=e.favorites,a=e.user,r=Object(F.g)(),o=Object(l.b)();if(null===a)return c.a.createElement("div",null);if(0===n.length)return c.a.createElement(te.a,{color:"inherit",onClick:function(){o($("No favorite created. Create one?",(function(){r.push("/favorites"),o({type:"OPEN_DIALOG"})})))}},c.a.createElement(ne.a,null));var i=n.map((function(e){return{name:e.name,onClick:function(){o(ee(e.name,{restaurant:t,remove:!1}))}}}));return c.a.createElement(me,{menuItems:i,title:"Add to favorite list"},c.a.createElement(ne.a,null))})),fe=function(e,t,n){return function(a){var r=n.hour,c=n.min,o=n.am,i=t.reduce((function(e,t){return"".concat(e,",").concat(t)})),l=0===r.length?"":(parseInt(r)+(o||12===parseInt(r)?0:12)+(0===c.length?0:parseInt(c))/60).toString();return Y.a.get("/api/restaurants?name=".concat(e,"&dates=").concat(i,"&time=").concat(l)).then((function(e){var t=e.data;a(function(e){return{type:"GET_RESTAURANTS_SUCCESS",payload:e}}(t))})).catch((function(e){var t;a((t=e,console.error(t),alert(t),{type:"GET_RESTAURANTS_FAILURE"}))}))}},pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return{favorites:e.favorites,restaurants:e.restaurants,user:e.user}})),n=t.restaurants,a=t.user,o=t.favorites;return Object(r.useEffect)((function(){null!==a&&e(Z())}),[a,e]),Object(r.useEffect)((function(){return function(){e({type:"RESET_RESTAURANTS"})}}),[e]),c.a.createElement(W.a,{style:{gridArea:"5 / 1 / 12 / 13",width:"90%"},component:H.a},c.a.createElement(x.a,{stickyHeader:!0},c.a.createElement(V.a,null,c.a.createElement(B.a,null,c.a.createElement(P.a,null,"Name"),K.map((function(e){return c.a.createElement(P.a,{key:e},e)})),c.a.createElement(P.a,null))),c.a.createElement(D.a,null,n.map((function(e,t){return c.a.createElement(B.a,{key:t},c.a.createElement(P.a,{component:"th",scope:"row"},e.name),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[0].open,e[0].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[1].open,e[1].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[2].open,e[2].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[3].open,e[3].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[4].open,e[4].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[5].open,e[5].close)),c.a.createElement(P.a,{style:{whiteSpace:"pre-line"},align:"right"},q(e[6].open,e[6].close)),c.a.createElement(P.a,null,c.a.createElement(de,{restaurant:e,favorites:o,user:a})))})))))},Ee=n(21),ve=n(201),he=n(200),be=n(224),ge=n(13),ye=n(152),Oe=n(198),Se=Object(r.memo)((function(e){var t=e.dateOptions,n=e.setDateOptions,a=Object(U.a)(),r=Object.keys(t);return c.a.createElement("div",{style:{display:"flex"}},r.map((function(e){return c.a.createElement(Oe.a,{key:e,style:{backgroundColor:t[e]?a.palette.grey[600]:a.palette.grey[500],borderRadius:"0.1em"},onClick:function(){n((function(t){return Object(y.a)({},t,Object(Ee.a)({},e,!t[e]))}))}},Q(e).replace(/^\w/,(function(e){return e.toUpperCase()})))})))})),je=n(199),Ce=Object(r.memo)((function(e){var t=e.setSearchTime,n=Object(r.useState)(""),a=Object(ae.a)(n,2),o=a[0],i=a[1],l=Object(r.useState)(""),u=Object(ae.a)(l,2),s=u[0],m=u[1],d=Object(r.useState)(!1),f=Object(ae.a)(d,2),p=f[0],E=f[1];return Object(r.useEffect)((function(){t({hour:o,min:s,am:p})}),[o,s,p,t]),c.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"30%",justifyContent:"space-evenly"}},c.a.createElement(je.a,{placeholder:"00",type:"number",style:{width:"3em"},value:o,onChange:function(e){var t=e.target.value;if(0===t.length)i("");else if(parseInt(t)<1)i("12");else{var n=parseInt(t)%13;i((n>0?n:1).toString())}}}),c.a.createElement(G.a,{variant:"h5",color:"primary"},":"),c.a.createElement(je.a,{placeholder:"00",type:"number",style:{width:"3em"},value:s,onChange:function(e){var t=e.target.value;if(0===t.length)m("");else if(parseInt(t)<0)m("60");else{var n=parseInt(t);m((n%60).toString())}}}),c.a.createElement(Oe.a,{variant:"contained",onClick:function(){E((function(e){return!e}))}},p?"AM":"PM"))})),we=Object(he.a)((function(e){return Object(be.a)({container:{gridArea:"2 / 1 / 4 / 13",display:"flex",flexFlow:"column",alignItems:"center",width:"100%"},searchContainer:{padding:"1em",width:"80%",display:"flex",justifyContent:"space-evenly"},dateSelectorContainer:{width:"80%",padding:"1em",display:"flex",justifyContent:"space-around"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.b)(e.palette.common.white,.35),"&:hover":{backgroundColor:Object(ge.b)(e.palette.common.white,.55)},width:"80%"},searchIcon:{padding:e.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{width:"100%",color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}})})),ke=Object(r.memo)((function(){var e,t=we(),n=Object(l.b)(),o=Object(r.useState)(""),i=Object(ae.a)(o,2),u=i[0],s=i[1],m=(new Date).getDay().toString(),d=Object(r.useRef)((e={},Object(Ee.a)(e,a.sun,!1),Object(Ee.a)(e,a.mon,!1),Object(Ee.a)(e,a.tue,!1),Object(Ee.a)(e,a.wed,!1),Object(Ee.a)(e,a.thu,!1),Object(Ee.a)(e,a.fri,!1),Object(Ee.a)(e,a.sat,!1),e)),f=Object(r.useState)(d.current),p=Object(ae.a)(f,2),E=p[0],v=p[1],h=Object(r.useState)({hour:"",min:"",am:!1}),b=Object(ae.a)(h,2),g=b[0],O=b[1],S=Object(r.useState)(!1),j=Object(ae.a)(S,2),C=j[0],w=j[1],k=Object(r.useMemo)((function(){return Object.keys(E).filter((function(e){return E[e]}))}),[E]);Object(r.useEffect)((function(){d.current=Object(y.a)({},d.current,Object(Ee.a)({},m,!0)),v(d.current)}),[m,v]);var A=Object(r.useCallback)((function(){n(fe(u,k,g)),s(""),O({hour:"",min:"",am:!1}),w(!1),v(d.current)}),[u,k,g,n,v,s,O,w]);return Object(r.useEffect)((function(){var e=function(e){"Enter"===e.key&&A()};if(C)return window.addEventListener("keypress",e),function(){return window.removeEventListener("keypress",e)}}),[C,k,u,g,A]),c.a.createElement("div",{className:t.container},c.a.createElement("div",{className:t.searchContainer},c.a.createElement("div",{className:t.search},c.a.createElement("div",{className:t.searchIcon},c.a.createElement(ve.a,null)),c.a.createElement(ye.a,{placeholder:"Enter Restaurant Name...",classes:{root:t.inputRoot,input:t.inputInput},value:u,onFocus:function(){w(!0)},onBlur:function(){w(!1)},onChange:function(e){s(e.target.value)},inputProps:{"aria-label":"search"}})),c.a.createElement(Oe.a,{variant:"contained",color:"primary",onClick:function(){A()}},"Search")),c.a.createElement("div",{className:t.dateSelectorContainer},c.a.createElement(Se,{dateOptions:E,setDateOptions:v}),c.a.createElement(Ce,{setSearchTime:O})))})),Ae=function(){var e=Object(U.a)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ke,null),c.a.createElement(pe,null),c.a.createElement("a",{style:{gridArea:"12 / 11 / 13 / 13",width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",color:e.palette.getContrastText("dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50])},href:"https://dryicons.com/free-icons/restaurant"},c.a.createElement(G.a,{variant:"body1"},"Icon by Dryicons")))},Ie=n(202),_e=n(203),Te=n(204),Re=n(205),Fe=n(218),Le=function(e){var t=e.editMode,n=e.favoriteName,a=e.favoriteEditName,r=e.setFavoriteEditName,o=e.setIsSearchFieldFocus;return t?c.a.createElement(Fe.a,{value:a,size:"medium",onChange:function(e){r(e.target.value)},onFocus:function(){o(!0)},onBlur:function(){o(!1)}}):c.a.createElement(G.a,{variant:"h4"},n)},Ne=Object(he.a)((function(e){return Object(be.a)({editModeCard:{minHeight:"9em","&:hover":{cursor:"default"},width:"80%"},normalCard:{minHeight:"9em","&:hover":{backgroundColor:Object(ge.b)(e.palette.common.white,.55)},width:"80%",cursor:"pointer"}})})),Me=function(e){var t=e.editMode,n=e.url,a=e.favorite,o=e.selfDelete,i=e.selfEditName,l=Ne(),u=Object(F.g)(),s=Object(r.useState)(!1),m=Object(ae.a)(s,2),d=m[0],f=m[1],p=Object(r.useState)(a.name),E=Object(ae.a)(p,2),v=E[0],h=E[1];return Object(r.useEffect)((function(){var e=function(e){"Enter"===e.key&&i(v)};if(d)return window.addEventListener("keypress",e),function(){return window.removeEventListener("keypress",e)}}),[d,v,i]),c.a.createElement(Ie.a,{className:t?l.editModeCard:l.normalCard,onClick:function(){t||u.push(n)},elevation:3},c.a.createElement(_e.a,{title:c.a.createElement(Le,{favoriteName:a.name,editMode:t,favoriteEditName:v,setFavoriteEditName:h,setIsSearchFieldFocus:f}),disableTypography:!0,action:c.a.createElement(te.a,{size:"small",style:{display:t?void 0:"none",color:"#ff1744"},onClick:o},c.a.createElement(Te.a,null))}),c.a.createElement(Re.a,{style:{display:t?void 0:"none"}},c.a.createElement(Oe.a,{variant:"contained",onClick:function(){i(v)}},"Confirm")))},Ue=function(e){var t=e.editMode,n=Object(l.b)(),a=Object(l.c)((function(e){return e.favorites}));return Object(r.useEffect)((function(){n(Z())}),[n]),c.a.createElement("div",{style:{gridArea:"4 / 2 / 12 / 12",width:"100%",overflow:"scroll",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(5, 1fr)",gap:"3em"}},a.map((function(e){return c.a.createElement(Me,{key:e.name,editMode:t,favorite:e,url:"/favorites/".concat(e.name),selfEditName:function(t){n(ee(e.name,{name:t,remove:!1}))},selfDelete:function(){n($('It will delete all items in "'.concat(e.name,'", confirm?'),(function(){var t;n((t=e.name,function(e,n){var a=n().user;return Y.a.delete("/api/favorites/".concat(t),{headers:{Authorization:"bearer ".concat(null===a||void 0===a?void 0:a.token)}}).then((function(t){var n=t.data;e(function(e){return{type:"DELETE_FAVORITES_SUCCESS",payload:e}}(n.name))})).catch((function(t){alert(t),console.error(t),e({type:"REQUEST_FAVORITES_FAILURE"})}))}))})))}})})))},Ge=n(210),xe=n(220),De=n(209),Pe=n(208),We=n(207),Ve=n(206),Be=function(){var e=Object(l.c)((function(e){return e.dialogIsOpen})),t=Object(l.b)(),n=Object(r.useState)(""),a=Object(ae.a)(n,2),o=a[0],i=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(Oe.a,{color:"primary",startIcon:c.a.createElement(Ve.a,null),style:{gridColumn:"11 / span 1"},onClick:function(){t({type:"OPEN_DIALOG"})}},"Add"),c.a.createElement(xe.a,{open:e,onClose:function(){t({type:"CLOSE_DIALOG"})}},c.a.createElement(We.a,null,"Add a new Favorite List"),c.a.createElement(Pe.a,null,c.a.createElement(Fe.a,{margin:"dense",label:"Name",fullWidth:!0,value:o,onChange:function(e){i(e.target.value)}})),c.a.createElement(De.a,null,c.a.createElement(Oe.a,{variant:"contained",color:"secondary",onClick:function(){i(""),t({type:"CLOSE_DIALOG"})}},"Cancel"),c.a.createElement(Oe.a,{variant:"contained",color:"primary",onClick:function(){""!==o?(t(function(e){return function(t,n){var a=n().user;return Y.a.post("/api/favorites/".concat(e),{},{headers:{Authorization:"bearer ".concat(null===a||void 0===a?void 0:a.token)}}).then((function(n){var a=n.data;t(null!==a?function(e){return{type:"POST_FAVORITES_SUCCESS",payload:e}}(a):$("".concat(e," has been created!")))})).catch((function(e){alert(e),console.error(e),t({type:"REQUEST_FAVORITES_FAILURE"})}))}}(o.toString())),i(""),t({type:"CLOSE_DIALOG"})):t($("Empty name is not valid"))}},"Submit"))))},He=Object(he.a)((function(e){return Object(be.a)({editModeOnBtn:{gridArea:" 3 / 2 / 4 / 3",backgroundColor:e.palette.primary.light},normalBtn:{gridArea:" 3 / 2 / 4 / 3","&:hover":{backgroundColor:e.palette.primary.dark}}})})),ze=function(){var e=Object(r.useState)(!1),t=Object(ae.a)(e,2),n=t[0],a=t[1],o=He();return c.a.createElement(c.a.Fragment,null,c.a.createElement(G.a,{style:{gridArea:"2 / 1 / 3 / 13",display:"flex",justifyContent:"center",width:"100%"},variant:"h3",color:"textPrimary"},"Favorites"),c.a.createElement(Oe.a,{color:"primary",className:n?o.editModeOnBtn:o.normalBtn,startIcon:c.a.createElement(Ge.a,null),onClick:function(){a((function(e){return!e}))}},"Edit"),c.a.createElement(Be,null),c.a.createElement(Ue,{editMode:n}))},Ke=function(e){var t=e.editMode,n=e.restaurant,a=e.selfDelete,r=function(e){e.name,e._id,e.__v;var t=Object(z.a)(e,["name","_id","__v"]);return Object.keys(t).filter((function(e){return-1!==t[e].open&&-1!==t[e].close})).map((function(e){return parseInt(e)})).sort().map((function(e){var n=e.toString(),a=t[n],r=a.open,c=a.close;return"".concat(Q(n).replace(/^\w/,(function(e){return e.toUpperCase()}))," ").concat(q(r,c))}))}(n);return c.a.createElement(Ie.a,{style:{minHeight:"18em"},elevation:3},c.a.createElement(_e.a,{style:{height:"30%",minHeight:"3.5em"},title:n.name,titleTypographyProps:{variant:"h6"},action:c.a.createElement(te.a,{size:"small",style:{display:t?void 0:"none",color:"#ff1744"},onClick:a},c.a.createElement(Te.a,null))}),c.a.createElement(Re.a,null,r.map((function(e,t){return c.a.createElement(G.a,{key:t,color:"textSecondary",variant:"body2"},e)}))))},Qe=function(e){var t=e.editMode,n=e.favoriteName,a=Object(l.b)(),o=Object(l.c)((function(e){var t;return null!==(t=e.favorites.find((function(e){return e.name===n})))&&void 0!==t?t:null}));return Object(r.useEffect)((function(){a(Z())}),[a]),null===o?c.a.createElement(F.a,{to:"/favorites"}):c.a.createElement("div",{style:{gridArea:"4 / 2 / 13 / 12",width:"100%",overflow:"scroll",display:"grid",gridTemplate:"repeat(2, 1fr) / repeat(4, 1fr)",gap:"3em"}},o.restaurants.map((function(e){return c.a.createElement(Ke,{key:e.name,editMode:t,restaurant:e,selfDelete:function(){a(ee(o.name,{restaurant:e,remove:!0}))}})})))},qe=Object(he.a)((function(e){return Object(be.a)({editModeOnBtn:{gridArea:" 3 / 2 / 4 / 3",backgroundColor:e.palette.primary.light},normalBtn:{gridArea:" 3 / 2 / 4 / 3","&:hover":{backgroundColor:e.palette.primary.dark}}})})),Je=function(){var e=Object(l.b)(),t=Object(F.g)(),n=Object(F.h)().content,a=qe(),o=Object(r.useState)(!1),i=Object(ae.a)(o,2),u=i[0],s=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(G.a,{style:{gridArea:"2 / 1 / 3 / 13",display:"flex",justifyContent:"center",width:"100%"},variant:"h3",color:"textPrimary"},n),c.a.createElement(Oe.a,{color:"primary",className:u?a.editModeOnBtn:a.normalBtn,startIcon:c.a.createElement(Ge.a,null),onClick:function(){s((function(e){return!e}))}},"Edit"),c.a.createElement(Oe.a,{color:"primary",startIcon:c.a.createElement(Ve.a,null),style:{gridColumn:"11 / span 1"},onClick:function(){e($("Go search and add restaurants",(function(){t.push("/")})))}},"Add"),c.a.createElement(Qe,{favoriteName:n,editMode:u}))},Ye=function(e){return{palette:{type:e?"dark":"light",primary:{light:"#f28933",main:"#ef6c00",dark:"#a74b00",contrastText:"#fff"},secondary:{light:"#616161",main:"#e0e0e0",dark:"#212121",contrastText:"#000"},common:{white:"#bdbdbd"}},typography:{button:{textTransform:"none"}}}},$e=n(211),Xe=n(212),Ze=n(213),et=n(214),tt=function(e){return{type:"CHANGE_MODE",payload:e}},nt=function(){var e=Object(l.b)(),t=Object(r.useState)(!1),n=Object(ae.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(""),u=Object(ae.a)(i,2),s=u[0],m=u[1],d=Object(r.useState)(""),f=Object(ae.a)(d,2),p=f[0],E=f[1],v=Object(r.useState)(""),h=Object(ae.a)(v,2),b=h[0],g=h[1],y=function(){m(""),E(""),g("")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Oe.a,{color:"inherit",style:{margin:"0.5em 0.2em"},onClick:function(){return o(!0)}},"Register"),c.a.createElement(xe.a,{open:a,onClose:function(){return o(!1)}},c.a.createElement(We.a,null,"Register"),c.a.createElement(Pe.a,null,c.a.createElement(Fe.a,{required:!0,autoFocus:!0,margin:"dense",label:"Email",type:"email",fullWidth:!0,value:s,onChange:function(e){m(e.target.value)}}),c.a.createElement(Fe.a,{required:!0,margin:"dense",label:"Password",type:"password",fullWidth:!0,value:p,onChange:function(e){E(e.target.value)}}),c.a.createElement(Fe.a,{margin:"dense",label:"Name",type:"name",fullWidth:!0,value:b,onChange:function(e){g(e.target.value)}})),c.a.createElement(De.a,null,c.a.createElement(Oe.a,{variant:"contained",color:"secondary",onClick:function(){o(!1),y()}},"Cancel"),c.a.createElement(Oe.a,{variant:"contained",color:"primary",onClick:function(){0===s.length&&e($("Email can't be empty")),0===p.length&&e($("Password can't be empty")),Y.a.post("/api/user/signup",{name:b,username:s,password:p}).then((function(t){t.data;e($("Sign up success")),o(!1),y()})).catch((function(t){var n=t.response.data;e($("".concat(n.err.message))),o(!1),y()}))}},"Signup"))))},at=function(){var e=Object(l.b)(),t=Object(r.useState)(""),n=Object(ae.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(""),u=Object(ae.a)(i,2),s=u[0],m=u[1],d=Object(r.useState)(!1),f=Object(ae.a)(d,2),p=f[0],E=f[1],v=function(){E(!1),o(""),m("")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Oe.a,{variant:"outlined",color:"inherit",onClick:function(){return E(!0)}},"Login"),c.a.createElement(xe.a,{open:p,onClose:function(){return E(!1)}},c.a.createElement(We.a,null,"Login"),c.a.createElement(Pe.a,null,c.a.createElement(Fe.a,{autoFocus:!0,margin:"dense",label:"Email",type:"email",fullWidth:!0,value:a,onChange:function(e){o(e.target.value)}}),c.a.createElement(Fe.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,value:s,onChange:function(e){m(e.target.value)}}),c.a.createElement(nt,null)),c.a.createElement(De.a,null,c.a.createElement(Oe.a,{variant:"contained",onClick:function(){v()},color:"secondary"},"Cancel"),c.a.createElement(Oe.a,{variant:"contained",onClick:function(){e(function(e,t){return function(n){return Y.a.post("/api/user/login",{username:e,password:t}).then((function(t){var a=t.data;a.success&&(console.info(a.status),n(function(e){return{type:"LOGIN_SUCCESS",payload:e}}({email:e,name:a.name,token:a.token})))})).catch((function(e){var t=e.response.data;!1===t.success&&n($("".concat(t.status,": ").concat(t.err.message))),n({type:"LOGIN_FAILURE"})}))}}(a,s)),v()},color:"primary"},"Login"))))},rt=n(225),ct=Object(r.memo)((function(){var e=Object(l.b)(),t=Object(F.g)(),n=Object(l.c)((function(e){return e.user})),a=[{name:"Logout",onClick:function(){e({type:"LOGOUT"})}}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(re.a,{title:"Favorites"},c.a.createElement(te.a,{color:"inherit",onClick:function(){t.push("/favorites")}},c.a.createElement(ne.a,null))),c.a.createElement(me,{menuItems:a,title:"Setting"},c.a.createElement(rt.a,null,""===(null===n||void 0===n?void 0:n.name)?null===n||void 0===n?void 0:n.email:null===n||void 0===n?void 0:n.name)))})),ot=Object(r.memo)((function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return{darkMode:e.darkMode,user:e.user}})),n=t.darkMode,a=t.user,r=Object(F.g)();return c.a.createElement($e.a,{style:{gridArea:"1 / 1 / 2 / 13"},position:"sticky"},c.a.createElement(Xe.a,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(ce.a,{color:"inherit",onClick:function(){r.push("/")}},c.a.createElement(G.a,{color:"inherit",variant:"h6"},"Restaurant Search")),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"center",width:"12%"}},c.a.createElement(re.a,{title:n?"Light":"Dark"},c.a.createElement(te.a,{color:"inherit",onClick:function(){e(tt())}},n?c.a.createElement(Ze.a,null):c.a.createElement(et.a,null))),null!==a?c.a.createElement(ct,null):c.a.createElement(at,null))))})),it=Object(he.a)((function(e){return Object(be.a)({container:{width:"100vw",height:"100vh",display:"grid",gridTemplate:"repeat(12, 1fr) / repeat(12, 1fr)",justifyItems:"center",gridGap:e.spacing(3)}})})),lt=function(e){var t=e.children,n=it();return c.a.createElement("div",{className:n.container},t)},ut=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.message}));return c.a.createElement(xe.a,{open:t.open,onClose:function(){e({type:"CLOSE_MESSAGE"})}},c.a.createElement(Pe.a,null,c.a.createElement(G.a,{variant:"body1"},t.content)),c.a.createElement(De.a,null,null!==t.confirmFunction&&c.a.createElement(Oe.a,{variant:"contained",color:"secondary",onClick:function(){e({type:"CLOSE_MESSAGE"})}},"Cancel"),c.a.createElement(Oe.a,{variant:"contained",color:"primary",onClick:function(){null!==t.confirmFunction&&t.confirmFunction(),e({type:"CLOSE_MESSAGE"})}},"Confirm")))},st=function(){var e=Object(l.c)((function(e){return e.darkMode})),t=Object(l.b)(),n=Object(L.a)("(prefers-color-scheme: dark)"),a=Object(r.useMemo)((function(){return Object(N.a)(Ye(e))}),[e]);return Object(r.useEffect)((function(){t(tt(n))}),[n,t]),Object(r.useEffect)((function(){document.body.style.backgroundColor=e?a.palette.grey[900]:a.palette.grey[50]}),[e,a.palette.grey]),c.a.createElement(R.a,null,c.a.createElement(M.a,{theme:a},c.a.createElement(lt,null,c.a.createElement(ot,null),c.a.createElement(ut,null),c.a.createElement(F.d,null,c.a.createElement(F.b,{path:"/favorites/:content",component:Je}),c.a.createElement(F.b,{path:"/favorites",component:ze}),c.a.createElement(F.b,{path:"/",component:Ae})))))},mt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function dt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ft=T(k),pt=ft.store,Et=ft.persistor;i.a.render(c.a.createElement(l.a,{store:pt},c.a.createElement(u.a,{loading:c.a.createElement(s.a,null),persistor:Et},c.a.createElement(st,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");mt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):dt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):dt(t,e)}))}}()}},[[118,1,2]]]);
//# sourceMappingURL=main.1578a7e4.chunk.js.map