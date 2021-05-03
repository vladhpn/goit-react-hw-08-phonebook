(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={title:"styles_title__1YmCD",form:"styles_form__3BTQv",label:"styles_label__1Ku7G",input:"styles_input__2RtgK",text:"styles_text__2Muy-",button:"styles_button__3_r4I"}},25:function(t,e,n){t.exports={title:"styles_title__2ThQ_",label:"styles_label__1EQMF",text:"styles_text__H1lwr",input:"styles_input__3cObw"}},31:function(t,e,n){t.exports={list:"styles_list__xjOlh",item:"styles_item__wRJt2",button:"styles_button__AJHCf"}},47:function(t,e,n){t.exports={Spinner:"styles_Spinner__-QfTi"}},97:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(23),s=n.n(r),o=n(7),u=n(20),i=n(28),l=n(3),b=n(45),j=n.n(b),h=n(22),d=n(13),O=n.n(d),f=Object(l.b)("contacts/fetchContactsRequest"),p=Object(l.b)("contacts/fetchContactsSuccess"),m=Object(l.b)("contacts/fetchContactsError"),g={addContactRequest:Object(l.b)("contacts/addContactRequest"),addContactSuccess:Object(l.b)("contacts/addContactSuccess"),addContactError:Object(l.b)("contacts/addContactError"),deleteContactRequest:Object(l.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(l.b)("contacts/deleteContactSuccess"),deleteContactError:Object(l.b)("contacts/deleteContactError"),fetchContactsRequest:f,fetchContactsSuccess:p,fetchContactsError:m,changeFilter:Object(l.b)("contacts/ChangeFilter")};O.a.defaults.baseURL="https://connections-api.herokuapp.com";var x,C,v,y,S,_,k=function(){return function(t){t(g.fetchContactsRequest()),O.a.get("/contacts").then((function(e){var n=e.data;return t(g.fetchContactsSuccess(n))})).catch((function(e){return t(g.fetchContactsError(e))}))}},w=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(g.addContactRequest()),O.a.post("/contacts",c).then((function(e){var n=e.data;return t(g.addContactSuccess(n))})).catch((function(e){return t(g.addContactError(e))}))}},R=function(t){return function(e){e(g.deleteContactRequest()),O.a.delete("/contacts/".concat(t)).then((function(){return e(g.deleteContactSuccess(t))})).catch((function(t){return e(g.deleteContactError(t))}))}},E=n(2),q=n(8),L=g.fetchContactsRequest,A=g.fetchContactsSuccess,N=g.fetchContactsError,F=g.addContactRequest,D=g.addContactSuccess,I=g.addContactError,B=g.deleteContactRequest,U=g.deleteContactSuccess,z=g.deleteContactError,M=g.changeFilter,J=Object(l.c)([],(x={},Object(E.a)(x,A,(function(t,e){return e.payload})),Object(E.a)(x,D,(function(t,e){return[].concat(Object(i.a)(t),[e.payload])})),Object(E.a)(x,U,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),x)),T=Object(l.c)(!1,(C={},Object(E.a)(C,L,(function(){return!0})),Object(E.a)(C,A,(function(){return!1})),Object(E.a)(C,N,(function(){return!1})),Object(E.a)(C,F,(function(){return!0})),Object(E.a)(C,D,(function(){return!1})),Object(E.a)(C,I,(function(){return!1})),Object(E.a)(C,B,(function(){return!0})),Object(E.a)(C,U,(function(){return!1})),Object(E.a)(C,"deleteContactError",z),Object(E.a)(C,I,(function(){return!1})),C)),Q=Object(l.c)("",Object(E.a)({},M,(function(t,e){return e.payload}))),W=Object(q.b)({contacts:J,filter:Q,loading:T}),H=n(27),Z=function(t){return t.contacts.contacts},K=function(t){return t.contacts.filter},P={getContacts:Z,getFilter:K,getVisibleContacts:Object(H.a)([Z,K],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getIsLoading:function(t){return t.contacts.loading}},V=Object(l.b)("auth/registerRequest"),Y=Object(l.b)("auth/registerSucces"),G=Object(l.b)("auth/registerError"),$=Object(l.b)("auth/loginRequest"),X=Object(l.b)("auth/loginSucces"),tt=Object(l.b)("auth/loginError"),et=Object(l.b)("auth/logoutRequest"),nt=Object(l.b)("auth/logoutSucces"),ct=Object(l.b)("auth/logoutError"),at=Object(l.b)("auth/getCurrentUserRequest"),rt=Object(l.b)("auth/getCurrentUserSucces"),st=Object(l.b)("auth/getCurrentUserError"),ot=(v={registerRequest:V,registerSuccess:Y},Object(E.a)(v,"registerSuccess",Y),Object(E.a)(v,"registerError",G),Object(E.a)(v,"loginRequest",$),Object(E.a)(v,"loginSuccess",X),Object(E.a)(v,"loginError",tt),Object(E.a)(v,"logoutRequest",et),Object(E.a)(v,"logoutSuccess",nt),Object(E.a)(v,"logoutError",ct),Object(E.a)(v,"getCurrentUserRequest",at),Object(E.a)(v,"getCurrentUserSuccess",rt),Object(E.a)(v,"getCurrentUserError",st),v),ut={name:null,email:null},it=Object(l.c)(ut,(y={},Object(E.a)(y,ot.registerSuccess,(function(t,e){return e.payload.user})),Object(E.a)(y,ot.loginSuccess,(function(t,e){return e.payload.user})),Object(E.a)(y,ot.logoutSuccess,(function(){return ut})),y)),lt=Object(l.c)(null,(S={},Object(E.a)(S,ot.registerSuccess,(function(t,e){return e.payload.token})),Object(E.a)(S,ot.loginSuccess,(function(t,e){return e.payload.token})),Object(E.a)(S,ot.logoutSuccess,(function(){return null})),S)),bt=Object(l.c)(null,(_={},Object(E.a)(_,ot.registerError,(function(t,e){return e.payload})),Object(E.a)(_,ot.loginError,(function(t,e){return e.payload})),Object(E.a)(_,ot.logoutError,(function(t,e){return e.payload})),_)),jt=Object(q.b)({user:it,token:lt,error:bt}),ht=n(21),dt=n.n(ht),Ot=n(30);O.a.defaults.baseURL="https://connections-api.herokuapp.com";var ft=function(t){O.a.defaults.headers.common.Authorization="Bearer ".concat(t)},pt=function(){O.a.defaults.headers.common.Authorization=""},mt={register:function(t){return function(){var e=Object(Ot.a)(dt.a.mark((function e(n){var c;return dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(ot.registerRequest()),e.prev=1,e.next=4,O.a.post("/users/signup",t);case 4:c=e.sent,ft(c.data.token),n(ot.registerSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(ot.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(Ot.a)(dt.a.mark((function e(n){var c;return dt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(ot.loginRequest()),e.prev=1,e.next=4,O.a.post("/users/login",t);case 4:c=e.sent,ft(c.data.token),n(ot.loginSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(ot.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(Ot.a)(dt.a.mark((function t(e){return dt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(ot.logoutRequest()),t.prev=1,t.next=4,O.a.post("/users/logout");case 4:pt(),e(ot.logoutSuccess),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(ot.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},gt=function(t){return t.auth.token},xt=function(t){return t.auth.user.name},Ct=[].concat(Object(i.a)(Object(l.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[j.a]),vt=Object(l.a)({reducer:{auth:jt,contacts:W},middleware:Ct,devTools:!1}),yt=n(16),St=n(17),_t=n(19),kt=n(18),wt=n(6),Rt=n(1),Et=function(){return Object(Rt.jsx)("h1",{children:"Hello"})},qt=n(31),Lt=n.n(qt),At=Object(o.b)((function(t){return{contacts:P.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(R(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(Rt.jsxs)(Rt.Fragment,{children:[Object(Rt.jsx)("ul",{className:Lt.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(Rt.jsxs)("li",{className:Lt.a.item,children:[Object(Rt.jsxs)("p",{children:[c,":"]}),Object(Rt.jsx)("p",{children:a}),Object(Rt.jsx)("button",{className:Lt.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})," "]})})),Nt=n(29),Ft=n(15),Dt=n.n(Ft),It=function(t){Object(_t.a)(n,t);var e=Object(kt.a)(n);function n(){var t;Object(yt.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(E.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;if(t.props.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return Nt.b.warning("".concat(n," is already in contacts")),void t.reset();t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(St.a)(n,[{key:"render",value:function(){return Object(Rt.jsxs)(Rt.Fragment,{children:[Object(Rt.jsx)("h1",{className:Dt.a.title,children:"Phone book"}),Object(Rt.jsxs)("form",{onSubmit:this.handleSubmit,className:Dt.a.form,children:[Object(Rt.jsxs)("label",{className:Dt.a.label,children:[Object(Rt.jsx)("span",{className:Dt.a.text,children:"Name"}),Object(Rt.jsx)("input",{className:Dt.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(Rt.jsxs)("label",{className:Dt.a.label,children:[Object(Rt.jsx)("span",{className:Dt.a.text,children:"Phone"}),Object(Rt.jsx)("input",{className:Dt.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(Rt.jsxs)("button",{className:Dt.a.button,type:"submit",children:[Object(Rt.jsx)("span",{className:Dt.a.content,children:"Add contact"})," "]})]})]})}}]),n}(c.Component),Bt=Object(o.b)((function(t){return{contacts:t.contacts.contacts}}),(function(t){return{onSubmit:function(e,n){return t(w(e,n))}}}))(It),Ut=n(25),zt=n.n(Ut),Mt=Object(o.b)((function(t){return{value:P.getFilter(t)}}),(function(t){return{onChange:function(e){return t(g.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(Rt.jsxs)(Rt.Fragment,{children:[Object(Rt.jsx)("h2",{className:zt.a.title,children:"Contacts"}),Object(Rt.jsxs)("label",{className:zt.a.label,children:[Object(Rt.jsx)("span",{className:zt.a.text,children:"Find contacts by name"}),Object(Rt.jsx)("input",{className:zt.a.input,type:"text",value:e,onChange:n})]})," "]})})),Jt=function(t){Object(_t.a)(n,t);var e=Object(kt.a)(n);function n(){return Object(yt.a)(this,n),e.apply(this,arguments)}return Object(St.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(Rt.jsxs)(Rt.Fragment,{children:[Object(Rt.jsx)(Bt,{}),Object(Rt.jsx)(Mt,{}),Object(Rt.jsx)(At,{})]})}}]),n}(c.Component),Tt=Object(o.b)(null,(function(t){return{fetchContacts:function(){return t(k())}}}))(Jt),Qt="/",Wt="/register",Ht="/login",Zt="/contacts",Kt={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},Pt=function(){return Object(Rt.jsxs)("nav",{children:[Object(Rt.jsx)(u.b,{to:Qt,exact:!0,style:Kt.link,activeStyle:Kt.activeLink,children:"Main"}),Object(Rt.jsx)(u.b,{to:Zt,exact:!0,style:Kt.link,activeStyle:Kt.activeLink,children:"Your Contacts"})]})},Vt={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},Yt={onLogout:mt.logOut},Gt=Object(o.b)((function(t){return{name:xt(t)}}),Yt)((function(t){t.avatar;var e=t.name,n=t.onLogout;return Object(Rt.jsxs)("div",{style:Vt.container,children:[Object(Rt.jsxs)("span",{style:Vt.name,children:["Welcome, ",e," "]}),Object(Rt.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})})),$t={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},Xt=function(){return Object(Rt.jsxs)("div",{children:[Object(Rt.jsx)(u.b,{to:Wt,exact:!0,style:$t.link,activeStyle:$t.activeLink,children:"Register"}),Object(Rt.jsx)(u.b,{to:Ht,exact:!0,style:$t.link,activeStyle:$t.activeLink,children:"Login"})]})},te={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},ee=Object(o.b)((function(t){return{isAuthenticated:gt(t)}}))((function(t){var e=t.isAuthenticated;return Object(Rt.jsxs)("header",{style:te.header,children:[Object(Rt.jsx)(Pt,{}),e?Object(Rt.jsx)(Gt,{}):Object(Rt.jsx)(Xt,{})]})})),ne={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},ce=function(t){Object(_t.a)(n,t);var e=Object(kt.a)(n);function n(){var t;Object(yt.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",email:"",password:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(E.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onRegister(t.state),t.setState({name:"",email:"",password:""})},t}return Object(St.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.email,c=t.password;return Object(Rt.jsxs)("div",{children:[Object(Rt.jsx)("h1",{children:"Register"}),Object(Rt.jsxs)("form",{onSubmit:this.handleSubmit,style:ne.form,autoComplete:"off",children:[Object(Rt.jsxs)("label",{style:ne.label,children:["\u0418\u043c\u044f",Object(Rt.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(Rt.jsxs)("label",{style:ne.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(Rt.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange})]}),Object(Rt.jsxs)("label",{style:ne.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(Rt.jsx)("input",{type:"password",name:"password",value:c,onChange:this.handleChange})]}),Object(Rt.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),n}(c.Component),ae={onRegister:mt.register},re=Object(o.b)(null,ae)(ce),se={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},oe=function(t){Object(_t.a)(n,t);var e=Object(kt.a)(n);function n(){var t;Object(yt.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={email:"",password:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(E.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onLogin(t.state),t.setState({name:"",email:"",password:""})},t}return Object(St.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(Rt.jsxs)("div",{children:[Object(Rt.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(Rt.jsxs)("form",{onSubmit:this.handleSubmit,style:se.form,autoComplete:"off",children:[Object(Rt.jsxs)("label",{style:se.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(Rt.jsx)("input",{type:"email",name:"email",value:e,onChange:this.handleChange})]}),Object(Rt.jsxs)("label",{style:se.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(Rt.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(Rt.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),n}(c.Component),ue={onLogin:mt.logIn},ie=Object(o.b)(null,ue)(oe);n(46),n(94),n(47);n(95),n(96);var le=function(t){Object(_t.a)(n,t);var e=Object(kt.a)(n);function n(){return Object(yt.a)(this,n),e.apply(this,arguments)}return Object(St.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(Rt.jsxs)(Rt.Fragment,{children:[Object(Rt.jsx)(ee,{}),Object(Rt.jsxs)(wt.c,{children:[Object(Rt.jsx)(wt.a,{exact:!0,path:Qt,component:Et}),Object(Rt.jsx)(wt.a,{path:Wt,component:re}),Object(Rt.jsx)(wt.a,{path:Ht,component:ie}),Object(Rt.jsx)(wt.a,{path:Zt,component:Tt})]}),Object(Rt.jsx)(Nt.a,{})]})}}]),n}(c.Component),be=Object(o.b)((function(t){return{isLoadingContacts:P.getIsLoading(t)}}),(function(t){return{fetchContacts:function(){return t(k())}}}))(le);s.a.render(Object(Rt.jsx)(a.a.StrictMode,{children:Object(Rt.jsx)(o.a,{store:vt,children:Object(Rt.jsx)(u.a,{children:Object(Rt.jsx)(be,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.044363dc.chunk.js.map