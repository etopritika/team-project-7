"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[786],{8035:function(e,a,s){s.d(a,{Z:function(){return l}});var i="AuthNavigate_navlink__pwLbA",r=s(1087),n=s(184);function l(e){var a=e.formType,s="register"===a?"/login":"/register",l="register"===a?"Log In":"Sign up";return(0,n.jsx)(r.OL,{className:i,to:s,children:l})}},2150:function(e,a,s){s.d(a,{Z:function(){return l}});var i="AuthBtn_button__TD255",r="AuthBtn_icon__ah2ei",n=s(184);function l(e){var a=e.title,s=e.icon;return(0,n.jsxs)("button",{className:i,type:"submit",children:[a,(0,n.jsx)("svg",{className:r,children:(0,n.jsx)("use",{href:s})})]})}},9786:function(e,a,s){s.r(a),s.d(a,{default:function(){return j}});var i=s(5861),r=s(9439),n=s(4687),l=s.n(n),t=s(5705),c=s(9434),o=s(2791),m=s(5147),d=s(6727),u=(0,d.Ry)().shape({name:(0,d.Z_)().min(3,"Too Short!").max(36,"Too Long!").required("Required!"),email:(0,d.Z_)().email("Invalid email!").required("Required!"),password:(0,d.Z_)().min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol").required("Required!")}),_=s(5769),g=s(4793),p=s(8035),b=s(2150),h=s(7689),x=s(8820),Z=s(184),v={name:"",email:"",password:""},f=function(){var e=(0,c.I0)(),a=(0,h.s0)(),s=(0,o.useState)("password"),n=(0,r.Z)(s,2),d=n[0],f=n[1],j=(0,o.useState)((0,Z.jsx)(x.p3W,{})),N=(0,r.Z)(j,2),w=N[0],F=N[1],R=function(){"password"===d?(F((0,Z.jsx)(x.w8I,{})),f("text")):(F((0,Z.jsx)(x.p3W,{})),f("password"))},I=function(){var s=(0,i.Z)(l().mark((function s(i,r){var n,t;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=r.resetForm,s.prev=1,s.next=4,e((0,m.z2)(i));case 4:return t=s.sent,console.log("Registration successful:",t),s.next=8,a("/user/calendar");case 8:n(),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),console.error("Registration rejected:",s.t0);case 14:case"end":return s.stop()}}),s,null,[[1,11]])})));return function(e,a){return s.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:_.Z.container,children:[(0,Z.jsx)("div",{className:_.Z.bgImages}),(0,Z.jsx)("div",{className:_.Z.bgImagesMsg,children:(0,Z.jsxs)("p",{className:_.Z.bgImagesText,children:["Quickly ",(0,Z.jsx)("span",{className:_.Z.span,children:"register"})," and familiarize yourself with the application!"]})}),(0,Z.jsx)(t.J9,{const:!0,initialValues:v,validationSchema:u,onSubmit:I,children:function(e){var a=e.errors,s=e.touched;return(0,Z.jsxs)(t.l0,{autoComplete:"off",className:_.Z.form,children:[(0,Z.jsx)("h1",{className:_.Z.title,children:"Sign Up"}),(0,Z.jsxs)("label",{className:a.name&&s.name?_.Z.isInvalidLabel:s.name?_.Z.isValidLabel:_.Z.label,children:[(0,Z.jsx)("p",{className:_.Z.labelText,children:"Name"}),(0,Z.jsx)(t.gN,{id:"name",name:"name",type:"name",placeholder:"Enter your name",className:a.name&&s.name?_.Z.isInvalid:s.name?_.Z.isValid:_.Z.input}),(0,Z.jsx)("div",{className:_.Z.feedback,children:(0,Z.jsx)(t.Bc,{name:"name",component:"div",className:_.Z.invalidFeedback})})]}),(0,Z.jsxs)("label",{className:a.email&&s.email?_.Z.isInvalidLabel:s.email?_.Z.isValidLabel:_.Z.label,children:["Email",(0,Z.jsx)(t.gN,{id:"email",name:"email",type:"email",placeholder:"Enter email",className:a.email&&s.email?_.Z.isInvalid:s.email?_.Z.isValid:_.Z.input}),(0,Z.jsx)("div",{className:_.Z.feedback,children:(0,Z.jsx)(t.Bc,{name:"email",component:"div",className:_.Z.invalidFeedback})})]}),(0,Z.jsxs)("label",{className:a.password&&s.password?_.Z.isInvalidLabel:s.password?_.Z.isValidLabel:_.Z.label,children:["Password",(0,Z.jsx)(t.gN,{id:"password",name:"password",type:d,placeholder:"Enter password",className:a.password&&s.password?_.Z.isInvalid:s.password?_.Z.isValid:_.Z.input}),(0,Z.jsx)("button",{className:_.Z.btnToggle,type:"button",onClick:R,children:(0,Z.jsx)("div",{className:_.Z.spanIcon,children:w})}),(0,Z.jsx)("div",{className:_.Z.feedback,children:(0,Z.jsx)(t.Bc,{name:"password",component:"div",className:_.Z.invalidFeedback})})]}),(0,Z.jsx)(b.Z,{title:"Sign Up",icon:"".concat(g.Z,"#log-in-01")})]})}}),(0,Z.jsx)(p.Z,{formType:"register"})]})})};function j(){return(0,Z.jsx)("div",{children:(0,Z.jsx)(f,{})})}},5769:function(e,a){a.Z={container:"RegisterForm_container__Xyyo6",form:"RegisterForm_form__Q5Jhf",title:"RegisterForm_title__GYy4A",label:"RegisterForm_label__oS2A1",input:"RegisterForm_input__ri5a0",bgImages:"RegisterForm_bgImages__k30sU",bgimages:"RegisterForm_bgimages__J91Fr",bgImagesMsg:"RegisterForm_bgImagesMsg__RE-a5",bgImagesText:"RegisterForm_bgImagesText__6+zb7",span:"RegisterForm_span__AeXsn",spanIcon:"RegisterForm_spanIcon__yiKzN",labelText:"RegisterForm_labelText__LNKe7",feedback:"RegisterForm_feedback__eMOAQ",invalidFeedback:"RegisterForm_invalidFeedback__R8sfQ",isInvalidLabel:"RegisterForm_isInvalidLabel__iuJAM",isValidLabel:"RegisterForm_isValidLabel__YKGHl",isInvalid:"RegisterForm_isInvalid__VxQrK",btnToggle:"RegisterForm_btnToggle__ayAHo",isValid:"RegisterForm_isValid__pk6z3"}}}]);
//# sourceMappingURL=786.85993410.chunk.js.map