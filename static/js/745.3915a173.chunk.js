"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[745],{8035:function(e,s,a){a.d(s,{Z:function(){return t}});var i="AuthNavigate_navlink__pwLbA",r=a(1087),n=a(184);function t(e){var s=e.formType,a="register"===s?"/login":"/register",t="register"===s?"Log In":"Sign up";return(0,n.jsx)(r.OL,{className:i,to:a,children:t})}},2150:function(e,s,a){a.d(s,{Z:function(){return t}});var i="AuthBtn_button__TD255",r="AuthBtn_icon__ah2ei",n=a(184);function t(e){var s=e.title,a=e.icon;return(0,n.jsxs)("button",{className:i,type:"submit",children:[s,(0,n.jsx)("svg",{className:r,children:(0,n.jsx)("use",{href:a})})]})}},745:function(e,s,a){a.r(s),a.d(s,{default:function(){return F}});var i=a(4165),r=a(5861),n=a(9439),t=a(6864),l=a(9434),o=a(7689),c=a(2791),d=a(6727),m=(0,d.Ry)().shape({email:(0,d.Z_)().email("This is an ERROR email").matches(/^[a-zA-Z0-9@.]+$/,"Email must contain only Latin characters").required("Email is required"),password:(0,d.Z_)().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^\S*$/,"Password must not contain spaces")}),_=a(5769),g="LoginForm_bgimages__giGbD",u=a(8035),p=a(2150),b=a(4793),v=a(5822),h=a(8978),x=a(8820),Z=a(184),j={email:"",password:""},f=function(){var e=(0,l.I0)(),s=(0,o.s0)(),a=(0,c.useState)("password"),d=(0,n.Z)(a,2),f=d[0],F=d[1],R=(0,c.useState)((0,Z.jsx)(x.p3W,{})),I=(0,n.Z)(R,2),N=I[0],w=I[1],k=(0,c.useState)(!1),L=(0,n.Z)(k,2),y=L[0],T=L[1],A=function(){"password"===f?(w((0,Z.jsx)(x.w8I,{})),F("text")):(w((0,Z.jsx)(x.p3W,{})),F("password"))},V=function(){var a=(0,r.Z)((0,i.Z)().mark((function a(r,n){var t,l;return(0,i.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=n.resetForm,T(!0),a.prev=2,a.next=5,e((0,v.Ib)(r));case 5:if((l=a.sent).hasOwnProperty("error")){a.next=13;break}return console.log("Login successful:",l),a.next=10,s("/user/calendar");case 10:t(),a.next=14;break;case 13:console.error("Login rejected:",l);case 14:a.next=19;break;case 16:a.prev=16,a.t0=a.catch(2),console.error("Login rejected:",a.t0);case 19:return a.prev=19,T(!1),a.finish(19);case 22:case"end":return a.stop()}}),a,null,[[2,16,19,22]])})));return function(e,s){return a.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:y?_.Z.spinner:_.Z.hidden,children:[(0,Z.jsx)(h.Z,{}),";"]}),(0,Z.jsxs)("div",{className:_.Z.container,children:[(0,Z.jsx)("div",{className:g}),(0,Z.jsx)(t.J9,{const:!0,initialValues:j,validationSchema:m,onSubmit:V,children:function(e){var s=e.values,a=e.errors,i=e.touched;return(0,Z.jsxs)(t.l0,{autoComplete:"off",className:_.Z.form,children:[(0,Z.jsx)("h1",{className:_.Z.title,children:"Log In"}),(0,Z.jsxs)("label",{className:a.email&&i.email?_.Z.isInvalidLabel:i.email?_.Z.isValidLabel:_.Z.label,children:[(0,Z.jsx)("p",{className:_.Z.labelText,children:"Email"}),(0,Z.jsx)(t.gN,{id:"email",name:"email",type:"email",placeholder:"Enter email",value:s.email,className:a.email&&i.email?_.Z.isInvalid:i.email?_.Z.isValid:_.Z.input}),i.email&&(0,Z.jsx)("span",{className:_.Z.validationIcon,children:a.email?(0,Z.jsx)(x.sQg,{className:_.Z.invalidIcon}):(0,Z.jsx)(x.KP3,{className:_.Z.validIcon})}),(0,Z.jsx)("div",{className:_.Z.feedback,children:i.email&&!a.email?(0,Z.jsx)("div",{className:_.Z.validFeedback,children:"This is an CORRECT email"}):(0,Z.jsx)(t.Bc,{name:"email",component:"div",className:_.Z.invalidFeedback})})]}),(0,Z.jsxs)("label",{className:a.password&&i.password?_.Z.isInvalidLabel:i.password?_.Z.isValidLabel:_.Z.label,children:[(0,Z.jsx)("p",{className:_.Z.labelText,children:"Password"}),(0,Z.jsx)(t.gN,{id:"password",name:"password",type:f,placeholder:"Enter password",className:a.password&&i.password?_.Z.isInvalid:i.password?_.Z.isValid:_.Z.input}),(0,Z.jsx)("button",{className:_.Z.btnToggle,type:"button",onClick:A,children:(0,Z.jsx)("div",{className:_.Z.spanIcon,children:N})}),(0,Z.jsx)("div",{className:_.Z.feedback,children:(0,Z.jsx)(t.Bc,{name:"password",component:"div",className:_.Z.invalidFeedback})})]}),(0,Z.jsx)(p.Z,{title:"Log In",icon:"".concat(b.Z,"#log-in-01")})]})}}),(0,Z.jsx)(u.Z,{formType:"login"})]})]})};function F(){return(0,Z.jsx)("div",{children:(0,Z.jsx)(f,{})})}},5769:function(e,s){s.Z={container:"RegisterForm_container__Xyyo6",form:"RegisterForm_form__Q5Jhf",title:"RegisterForm_title__GYy4A",label:"RegisterForm_label__oS2A1",input:"RegisterForm_input__ri5a0",bgImages:"RegisterForm_bgImages__k30sU",bgimages:"RegisterForm_bgimages__J91Fr",bgImagesMsg:"RegisterForm_bgImagesMsg__RE-a5",bgImagesText:"RegisterForm_bgImagesText__6+zb7",span:"RegisterForm_span__AeXsn",spanIcon:"RegisterForm_spanIcon__yiKzN",labelText:"RegisterForm_labelText__LNKe7",feedback:"RegisterForm_feedback__eMOAQ",invalidFeedback:"RegisterForm_invalidFeedback__R8sfQ",validFeedback:"RegisterForm_validFeedback__G7iC1",isInvalidLabel:"RegisterForm_isInvalidLabel__iuJAM",isValidLabel:"RegisterForm_isValidLabel__YKGHl",isValid:"RegisterForm_isValid__pk6z3",isInvalid:"RegisterForm_isInvalid__VxQrK",validationIcon:"RegisterForm_validationIcon__B2CxV",validIcon:"RegisterForm_validIcon__sLsPJ",invalidIcon:"RegisterForm_invalidIcon__c+hns",btnToggle:"RegisterForm_btnToggle__ayAHo",spinner:"RegisterForm_spinner__89A-v",hidden:"RegisterForm_hidden__O8tKU"}}}]);
//# sourceMappingURL=745.3915a173.chunk.js.map