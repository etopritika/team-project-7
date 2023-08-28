"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[786],{8035:function(e,a,s){s.d(a,{Z:function(){return l}});var i="AuthNavigate_navlink__pwLbA",r=s(1087),n=s(184);function l(e){var a=e.formType,s="register"===a?"/login":"/register",l="register"===a?"Log In":"Sign up";return(0,n.jsx)(r.OL,{className:i,to:s,children:l})}},2150:function(e,a,s){s.d(a,{Z:function(){return l}});var i="AuthBtn_button__TD255",r="AuthBtn_icon__ah2ei",n=s(184);function l(e){var a=e.title,s=e.icon;return(0,n.jsxs)("button",{className:i,type:"submit",children:[a,(0,n.jsx)("svg",{className:r,children:(0,n.jsx)("use",{href:s})})]})}},9786:function(e,a,s){s.r(a),s.d(a,{default:function(){return f}});var i=s(5861),r=s(9439),n=s(4687),l=s.n(n),t=s(5705),c=s(9434),o=s(2791),m=s(5147),d=s(6727),_=(0,d.Ry)().shape({name:(0,d.Z_)().min(3,"Too Short!").max(36,"Too Long!").required("Required!"),email:(0,d.Z_)().email("This is an ERROR email").required("Required!"),password:(0,d.Z_)().min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol").required("Required!")}),u=s(5769),g=s(4793),p=s(8035),b=s(2150),x=s(7689),h=s(8820),v=s(184),Z={name:"",email:"",password:""},j=function(){var e=(0,c.I0)(),a=(0,x.s0)(),s=(0,o.useState)("password"),n=(0,r.Z)(s,2),d=n[0],j=n[1],f=(0,o.useState)((0,v.jsx)(h.p3W,{})),N=(0,r.Z)(f,2),R=N[0],F=N[1],I=function(){"password"===d?(F((0,v.jsx)(h.w8I,{})),j("text")):(F((0,v.jsx)(h.p3W,{})),j("password"))},w=function(){var s=(0,i.Z)(l().mark((function s(i,r){var n,t;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=r.resetForm,s.prev=1,s.next=4,e((0,m.z2)(i));case 4:return t=s.sent,console.log("Registration successful:",t),s.next=8,a("/user/calendar");case 8:n(),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),console.error("Registration rejected:",s.t0);case 14:case"end":return s.stop()}}),s,null,[[1,11]])})));return function(e,a){return s.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:u.Z.container,children:[(0,v.jsx)("div",{className:u.Z.bgImages}),(0,v.jsx)("div",{className:u.Z.bgImagesMsg,children:(0,v.jsxs)("p",{className:u.Z.bgImagesText,children:["Quickly ",(0,v.jsx)("span",{className:u.Z.span,children:"register"})," and familiarize yourself with the application!"]})}),(0,v.jsx)(t.J9,{const:!0,initialValues:Z,validationSchema:_,onSubmit:w,children:function(e){var a=e.errors,s=e.touched;return(0,v.jsxs)(t.l0,{autoComplete:"off",className:u.Z.form,children:[(0,v.jsx)("h1",{className:u.Z.title,children:"Sign Up"}),(0,v.jsxs)("label",{className:a.name&&s.name?u.Z.isInvalidLabel:s.name?u.Z.isValidLabel:u.Z.label,children:[(0,v.jsx)("p",{className:u.Z.labelText,children:"Name"}),(0,v.jsx)(t.gN,{id:"name",name:"name",type:"name",placeholder:"Enter your name",className:a.name&&s.name?u.Z.isInvalid:s.name?u.Z.isValid:u.Z.input}),(0,v.jsx)("div",{className:u.Z.feedback,children:(0,v.jsx)(t.Bc,{name:"name",component:"div",className:u.Z.invalidFeedback})})]}),(0,v.jsxs)("label",{className:a.email&&s.email?u.Z.isInvalidLabel:s.email?u.Z.isValidLabel:u.Z.label,children:[(0,v.jsx)("p",{className:u.Z.labelText,children:"Email"}),(0,v.jsx)(t.gN,{id:"email",name:"email",type:"email",placeholder:"Enter email",className:a.email&&s.email?u.Z.isInvalid:s.email?u.Z.isValid:u.Z.input}),s.email&&(0,v.jsx)("span",{className:u.Z.validationIcon,children:a.email?(0,v.jsx)(h.sQg,{className:u.Z.invalidIcon}):(0,v.jsx)(h.KP3,{className:u.Z.validIcon})}),(0,v.jsx)("div",{className:u.Z.feedback,children:s.email&&!a.email?(0,v.jsx)("div",{className:u.Z.validFeedback,children:"This is an CORRECT email"}):(0,v.jsx)(t.Bc,{name:"email",component:"div",className:u.Z.invalidFeedback})})]}),(0,v.jsxs)("label",{className:a.password&&s.password?u.Z.isInvalidLabel:s.password?u.Z.isValidLabel:u.Z.label,children:[(0,v.jsx)("p",{className:u.Z.labelText,children:"Password"}),(0,v.jsx)(t.gN,{id:"password",name:"password",type:d,placeholder:"Enter password",className:a.password&&s.password?u.Z.isInvalid:s.password?u.Z.isValid:u.Z.input}),(0,v.jsx)("button",{className:u.Z.btnToggle,type:"button",onClick:I,children:(0,v.jsx)("div",{className:u.Z.spanIcon,children:R})}),(0,v.jsx)("div",{className:u.Z.feedback,children:(0,v.jsx)(t.Bc,{name:"password",component:"div",className:u.Z.invalidFeedback})})]}),(0,v.jsx)(b.Z,{title:"Sign Up",icon:"".concat(g.Z,"#log-in-01")})]})}}),(0,v.jsx)(p.Z,{formType:"register"})]})})};function f(){return(0,v.jsx)("div",{children:(0,v.jsx)(j,{})})}},5769:function(e,a){a.Z={container:"RegisterForm_container__Xyyo6",form:"RegisterForm_form__Q5Jhf",title:"RegisterForm_title__GYy4A",label:"RegisterForm_label__oS2A1",input:"RegisterForm_input__ri5a0",bgImages:"RegisterForm_bgImages__k30sU",bgimages:"RegisterForm_bgimages__J91Fr",bgImagesMsg:"RegisterForm_bgImagesMsg__RE-a5",bgImagesText:"RegisterForm_bgImagesText__6+zb7",span:"RegisterForm_span__AeXsn",spanIcon:"RegisterForm_spanIcon__yiKzN",labelText:"RegisterForm_labelText__LNKe7",feedback:"RegisterForm_feedback__eMOAQ",invalidFeedback:"RegisterForm_invalidFeedback__R8sfQ",validFeedback:"RegisterForm_validFeedback__G7iC1",isInvalidLabel:"RegisterForm_isInvalidLabel__iuJAM",isValidLabel:"RegisterForm_isValidLabel__YKGHl",isInvalid:"RegisterForm_isInvalid__VxQrK",validationIcon:"RegisterForm_validationIcon__B2CxV",validIcon:"RegisterForm_validIcon__sLsPJ",invalidIcon:"RegisterForm_invalidIcon__c+hns",btnToggle:"RegisterForm_btnToggle__ayAHo",isValid:"RegisterForm_isValid__pk6z3"}}}]);
//# sourceMappingURL=786.250fb21d.chunk.js.map