import{d as Jl,r as c,q as Ql,z as Kl,J as Yl,x as Ne,e as U,o as Gl,p as z,c as V,b as F,g as qe,f as o,n as oe,h as _e,j as P,K as Xl,F as Ae,E as Ee,m as x,t as J,a as v,B as Zl,C as eo,_ as lo}from"./entry.134d9327.js";import{u as oo}from"./composables.f48018c7.js";import{_ as Te,T as nl,U as ao,u as to,n as ro,w as ul,r as Be,S as $e,i as Fe,V as dl}from"./index.537ec403.js";import{o as fl,p as Me,u as io,q as so,r as cl,t as no,g as uo,c as fo,a as co,b as vo,s as mo,h as po,f as yo,w as go,x as ho,y as bo,z as _o,A as Fo,B as Vo,C as ko,D as So,E as Do,F as xo,G as Io,H as Co,I as wo,J as Po,K as Lo,L as Oo,M as No,N as qo,W as Ao,d as Eo,O as To,P as Bo,X as $o}from"./TextElement.vue_vue_type_style_index_0_lang.54470764.js";import{u as Mo}from"./index.fe4d1c15.js";const vl=R=>(Zl("data-v-5e3bd189"),R=R(),eo(),R),Uo={id:"app",ref:"app",class:"ghl-body"},Ro={class:"d-flex"},jo={id:"form-builder",class:"hl_wrapper--inner form-builder"},Ho={class:"loader-container"},zo=["id"],Wo={key:0},Jo=["src"],Qo={key:0},Ko={key:1},Yo={key:2},Go={key:3},Xo={key:4},Zo={class:"fields-container row"},ea={key:19,class:"field-divider"},la={key:3,class:"row"},oa={class:"col-md-12 col-sm-12 col-lg-12 text-center"},aa={key:0,style:{position:"absolute",right:"15px",transform:"translate(-50%, -50%)",top:"30px"}},ta={class:"ghl-button-bar"},ra={key:0,class:"ghl-btn-align ghl-btn-submit"},ia={key:0,id:"nextButton",type:"submit",class:"ghl-button ghl-next-button",name:"nextButton","aria-label":"Next",value:"Submit"},sa={style:{position:"absolute",right:"15px",transform:"translate(-50%, -50%)",top:"30px"}},na={key:1,class:"ghl-btn-align ghl-next-prev"},ua=["disabled"],da=vl(()=>F("span",{class:"right-pointing-triangle"},null,-1)),fa=[da],ca={key:2,class:"ghl-btn-align ghl-next-prev"},va=["disabled"],ma=vl(()=>F("span",{class:"left-pointing-triangle"},null,-1)),pa=[ma],ya={key:1,class:"ghl-progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0"},ga={class:"ghl-progress-bar-text"},ha={key:1,class:"ghl-footer-wrap"},ba=["innerHTML"],_a=Jl({__name:"surveyComponent",props:{surveyData:{type:Object,required:!0},id:{type:String,required:!0},redirect:{type:Boolean,default:!0},source:{type:String,default:""},funnelPreview:{type:Boolean,default:!1},surveyElementClass:{type:String,required:!1},pageUrl:{type:String,default:void 0},baseReferrrer:{type:String,default:void 0},urlParams:{type:Object,default:void 0},stickyContactData:{type:Object,default:void 0},stickyContactFingerprint:{type:String,default:void 0}},emits:["on-submit"],setup(R,{emit:ml}){const m=R,q=c([0]),Ue=c(!0),Ve=Mo(),pl=Ql(),yl={},gl={},hl={},bl={},ke=c(!0),_l={},k=c([]),T=c([]),Fl={},Vl={},Re=c(""),je=c(""),I=c(!0),kl={},He=c(!1),Sl={},H=c(!1),Q=c(""),ze=c(!1),Se=c(),B=c(""),K=c(!1),ue=c("US"),de=c(),ae=c(""),fe=c(""),ce=c(""),w=c(0),Y=c(!1),G=c(!0),y=c([]),X=c(0),Z=c(!1),We=c("slide_question"),te=c(1),A=c(!0),ee=c(!1),j=c([]),re=c(!1),Je=c(""),De=c(""),xe=c(!1),Dl=c([]),Qe=c(!1),xl={},Ke=c(0),ie=c([]),Ye=c(!1),$=c("");c("");const L=c(),ve=c(!1),Il=c(),Cl={},se=c([]),D=c([]),le=c(),me=c(),Ge=c(),pe=c(),E=c(),C=c(!1),e=Kl({phoneCountryIncluded:gl,phoneCountryCode:hl,formattedPhone:yl,isPhoneValidObj:bl,formSurvey:_l,formStyle:Fl,buttonStyle:Vl,company:kl,formFieldsValue:Sl,multiStoreSkipLogic:xl,validationError:Cl}),W=Yl(),Xe=l=>{de.value=l},wl=l=>{ze.value=l},Ie=l=>{const{tag:t,value:a}=l;e.formFieldsValue[t]=a},Pl=l=>{L.value=l},Ll=l=>{Se.value=l},Ol=()=>{Q.value&&le.value&&window.parent.postMessage(["highlevel.setHeight",{height:le.value.clientHeight,id:Q.value}],"*")},ne=l=>{const t=e.phoneCountryIncluded[l.tag],a=e.phoneCountryCode[l.tag];e.formFieldsValue[l.tag]=t;try{const n=window.libphonenumber.parsePhoneNumberFromString(t,a);e.isPhoneValidObj[l.tag]=!!n.isValid(),e.phoneCountryIncluded[l.tag]=n.isValid()?n.number:t,e.phoneCountryCode[l.tag]=n.country?n.country:a,e.formattedPhone[l.tag]=n.isValid()?n.formatNational():t}catch{e.isPhoneValidObj[l.tag]=!1,e.phoneCountryIncluded[l.tag]=t,e.phoneCountryCode[l.tag]=a,e.formattedPhone[l.tag]=t}l.tag==="phone"&&(ae.value=e.formFieldsValue[l.tag],e.formFieldsValue[l.tag]===void 0&&(e.formFieldsValue[l.tag]=null))},Ze=()=>{k.value.forEach((l,t)=>{l.slideData.filter((a,n)=>{if(a.type==="textbox_list"){const i={};a.picklistOptions.forEach(function(r){i[r.id]=r.prefillValue}),e.formFieldsValue[a.tag]=i}else a.type==="source"&&(e.formFieldsValue[a.tag]=a.value||"")})})},el=(l,t,a)=>{const n=l.scrollTop,i=t-n;let r=0;const d=20,h=function(s,f,g,b){return s/=b/2,s<1?g/2*s*s+f:(s--,-g/2*(s*(s-2)-1)+f)},u=function(){r+=d;const s=h(r,n,i,a);l.scrollTop=s,r<a&&setTimeout(u,d)};u()},Nl=()=>{var l,t,a,n;if(m.surveyData){const{country:i,formData:r,locationId:d}=Object.assign({},m.surveyData);if(console.log(m.surveyData),ue.value=i,Q.value=m.id,e.formSurvey=m.surveyData,r.form===void 0)return!1;re.value="stickyContact"in r.form?r.form.stickyContact:!1,ce.value=r.form.fbPixelId,B.value=d;const h=m.surveyElementClass?`.${m.surveyElementClass}${nl}`:nl;if("style"in r.form){const u=r.form.style;e.formStyle={bgColor:u.background,color:u.color,border:u.border.border,borderStyle:u.border.style,borderColor:u.border.color,radius:u.border.radius,width:r.form.width},He.value=u.ac_branding,"bgImage"in u&&u.bgImage!==""&&(Je.value="body {background-image: url("+u.bgImage+");background-size: cover;}")}if("button"in r.form){const u=r.form.button;e.buttonStyle={bgColor:u==null?void 0:u.background,color:u==null?void 0:u.color,border:((l=u==null?void 0:u.border)==null?void 0:l.border)||0,borderColor:((t=u==null?void 0:u.border)==null?void 0:t.color)||ao,radius:(a=u==null?void 0:u.border)==null?void 0:a.radius,padding:(n=u==null?void 0:u.border)==null?void 0:n.padding}}if("customStyle"in r.form&&r.form.customStyle.length>0&&(Re.value=r.form.customStyle),e.formStyle.color&&(je.value=`${h}label{color:#${e.formStyle.color}!important;}`),"company"in r.form&&(e.company=r.form.company),"formLabelVisible"in r.form&&(I.value=r.form.formLabelVisible),"formAction"in r.form&&(Z.value=r.form.formAction.fieldSettingEnable,"headerImageSrc"in r.form.formAction&&r.form.formAction.headerImageSrc.trim().length>0&&(De.value=r.form.formAction.headerImageSrc),"headerFullWidthEnable"in r.form.formAction&&(xe.value=r.form.formAction.headerFullWidthEnable)),"surveyLogicLinkById"in m.surveyData.formData&&(Qe.value=m.surveyData.formData.surveyLogicLinkById),"slides"in m.surveyData.formData){if(k.value=[],T.value=[],Z.value){const u=m.surveyData.formData.slides[0],s=[];u.slideData.length>0&&(s.push({active:u.active,button:u.button,logic:"logic"in u?u.logic:{},slideName:u.slideName,slideData:[]}),u.slideData.map(f=>{const g=s.length-1;if(s[g].slideData.find(_=>_.type!=="img"&&_.type!=="h1"&&_.type!=="html")===void 0)f.hidden?T.value.push(f):(T.value.push(f),s[g].slideData.push(f));else if(f.hidden)T.value.push(f);else{T.value.push(f),s.push({active:u.active,button:u.button,logic:"logic"in u?u.logic:{},slideName:u.slideName,slideData:[]});const _=s.length-1;s[_].slideData.push(f)}})),k.value=s,console.log("FRD: ",k.value),We.value="slide_question",te.value=s.length}else{let u=[];u=m.surveyData.formData.slides;const s=[];u.forEach((f,g)=>{s.push({active:f.active,button:f.button,logic:"logic"in f?f.logic:{},slideName:f.slideName,id:f.id,slideData:[]}),f.slideData.forEach(function(b,_){b.hidden?T.value.push(b):(T.value.push(b),s[g].slideData.push(b))})}),k.value=s.filter(function(f){return f.slideData.length>0}),We.value="slide_question",te.value=k.value.length}te.value===1&&(G.value=!1)}ke.value=!1}},ql=l=>{const{item:t,index:a,checkVal:n,isChecked:i}=l,r=[];if(i)ie.value.push(a),Array.isArray(e.formFieldsValue[t.tag])?e.formFieldsValue[t.tag].push(n):(r.push(n),e.formFieldsValue[t.tag]=r);else{let d=e.formFieldsValue[t.tag].indexOf(n);e.formFieldsValue[t.tag].splice(d,1),d=ie.value.indexOf(a),ie.value.splice(d,1)}Ke.value=Math.max(...ie.value),ge(t)},ll=async l=>{var S;if(K.value)return;for(let p in e.phoneCountryIncluded)e.phoneCountryIncluded[p]&&ne({tag:p});if(await so(e.formFieldsValue)>50*1024*1024){alert("The total size of the attached files cannot be more that 50MB");return}if(y.value=[],l!==void 0&&l){let p=!0;if(p=ol(w.value),!p){const O=document.getElementById("hl_form_builder_main"+$.value);return O&&el(O,O.offsetTop,500),!1}}Y.value=!1;const a=await cl(e.formFieldsValue,L.value);e.formFieldsValue=a.formFieldsValue;const n=await no(W,T.value,e.formFieldsValue);if(e.formFieldsValue=n.formFieldsValue,K.value=!0,e.formFieldsValue.formId=Q.value,e.formFieldsValue.location_id=B.value,ae.value&&(e.formFieldsValue.phone=ae.value),e.formFieldsValue.disqualified=j.value.length>0,re.value){let p;if(m.stickyContactFingerprint&&(p=m.stickyContactFingerprint),!p&&typeof Storage<"u")try{p=localStorage.getItem(B.value)}catch{}p?e.formFieldsValue.contact_id=p:p=to(B.value).value}const i=W.query.contact_id||((S=m.urlParams)==null?void 0:S.contact_id);i&&(e.formFieldsValue.query_contact_id=i);const r=uo(e.formSurvey.locationId);r&&(e.formFieldsValue.sessionId=r);const d=fo();e.formFieldsValue.eventData={...co(m.pageUrl,m.baseReferrrer),fbEventId:d};const h=vo(e.formSurvey.locationId);h&&(e.formFieldsValue.sessionFingerprint=h),Se.value&&(e.formFieldsValue.captchaToken=Se.value);var u=new FormData;let s={};if(Object.keys(e.formFieldsValue).forEach(async p=>{var O;if(e.formFieldsValue[p]instanceof File)u.append(p,e.formFieldsValue[p]);else if((O=e.formFieldsValue[p])!=null&&O.files){const N=Object.values(e.formFieldsValue[p].files);N.length&&await Promise.all(N.map(sl=>{u.append(p,sl)}))}else s[p]=e.formFieldsValue[p]}),m.funnelPreview){let{domain:p,page_url:O}=W.query;p||(p=window.location.hostname,O=window.location.pathname),s.funneEventData={event_type:"optin",domain_name:p,page_url:O,funnel_id:Ve.value.funnelId,page_id:Ve.value.funnelPageId,funnel_step_id:Ve.value.stepId}}u.set("formData",JSON.stringify(s));const g={method:"POST",body:u},b=pl.baseUrl,_=await $fetch(b+"/survey",g);if(_.status){_.surveyData;const p="_ud";let O=_.sessionFingerprint;mo({sessionId:_.sessionId||null,locationId:e.formSurvey.locationId});const N=ro(_.contact,!0);if(ul(p,JSON.stringify(N)),ul(B.value,_.fingerprint),window.parent.postMessage(["set-sticky-contacts",p,JSON.stringify(N),B.value,_.fingerprint],"*"),O&&await po(B.value,O),ml("on-submit",{fingerprint:_.fingerprint}),z(()=>{yo("track",m.surveyData.formData.form.formSubmissionEvent,d)}),m.redirect===!1)return;e.formFieldsValue.disqualified?(H.value=!0,e.formSurvey.formData.form.formAction.endsurveyType==="1"?window.top.location.href=Be(e.formSurvey.formData.form.formAction.endsurveyUrl,N):fe.value=e.formSurvey.formData.form.formAction.endsurveyText!==""?$e(e.formSurvey.formData.form.formAction.endsurveyText,N):"Survey Ended! Please try again"):"formAction"in e.formSurvey.formData.form&&e.formSurvey.formData.form.formAction.actionType==="1"?window.top.location.href=Be(e.formSurvey.formData.form.formAction.redirect_url,N):"redirect_url"in e.formSurvey.formData.form&&e.formSurvey.formData.form.redirect_url!==""?window.top.location.href=Be(e.formSurvey.formData.form.redirect_url,N):(H.value=!0,fe.value=e.formSurvey.formData.form.formAction.thankyouText?$e(e.formSurvey.formData.form.formAction.thankyouText,N):"Thanks for submiting details, Will get back to you soon!"),Y.value=!1,l&&Ce(!0)}else K.value=!1;z(()=>{Le.value&&me.value.scrollIntoView()})},Ce=l=>{l?X.value=100:X.value=Math.round(w.value*100/te.value)},Al=l=>{var t=$o;return!!t.test(l)},ol=l=>{var i,r,d,h,u;const t=cl(e.formFieldsValue,L.value);e.formFieldsValue=t.formFieldsValue;const a=k.value[l].slideData;for(const s of a){const f="id"in s?s.id:s.tag,g=s.type;if(f==="country"&&s.required&&!e.formFieldsValue[f]&&y.value.push({field:`The ${s.label} field is required`,type:"email"}),f==="website"&&e.formFieldsValue[f]&&(Al(e.formFieldsValue[f])||y.value.push({field:`The ${s.label} field is not a valid URL`,type:"website"})),g==="text"||g==="number"||g==="email"||g==="textarea"||g==="large_text"||g==="monetory"||g==="single_options"||g==="date"||g==="website"){let b="question",_="";if(s.tag==="phone"&&ae.value)if(Ue&&(e.isPhoneValidObj[f]===void 0||e.isPhoneValidObj[f]===!0))e.formFieldsValue.phone=ae.value;else{const S={field:"Invalid phone number",type:"phone"};y.value.push(S)}if(g==="date"&&e.formFieldsValue[s.tag]){var n=Fe(e.formFieldsValue[s.tag]).format("YYYY-MM-DD");Fe(n).isValid()?s.tag==="date_of_birth"&&Fe(n).isAfter(Fe())&&y.value.push({field:s.label,type:"future_date"}):y.value.push({field:s.label,type:"invalid_date"})}if(g==="monetory"){let S=(i=e.formFieldsValue[s.tag])==null?void 0:i.replaceAll(",","");S&&isNaN(S)?y.value.push({field:"Invalid Monetory Format",type:"monetory"}):s.required&&!e.formFieldsValue[s.tag]?y.value.push({field:"Monetory Field required!",type:"monetory"}):!isNaN(S)&&S!==""&&(e.formFieldsValue[s.tag]=parseFloat(S).toFixed(2).toString())}if(s.tag==="email"&&((d=(r=e.formFieldsValue[f])==null?void 0:r.trim())==null?void 0:d.length)>0&&(Ao.test(e.formFieldsValue[f])||y.value.push({field:"Invalid Email Address",type:"email"})),e.formFieldsValue[f]===""&&(e.formFieldsValue[f]=null),(!(f in e.formFieldsValue)||e.formFieldsValue[f]===null||e.formFieldsValue[f]===void 0||e.formFieldsValue[f]&&((h=e.formFieldsValue[f])==null?void 0:h.trim().length)<=0)&&s.required===!0){const S={field:_.length>0?_:s.label,type:b};y.value.push(S)}}else if(s.type==="textbox_list"&&s.required===!0){let b={},_=0;const S=e.formFieldsValue[f];for(const p in S)S[p]===""?b={field:s.label,type:"question"}:_++;_<=0&&y.value.push(b)}else if(g==="checkbox"||g==="multiple_options"||g==="radio"){if((!(f in e.formFieldsValue)||e.formFieldsValue[f]===null||e.formFieldsValue[f].length<=0)&&s.required===!0){const b={field:s.label,type:"question"};y.value.push(b)}}else if(g==="captcha"){if(!ze.value){const b={field:"Invalid captcha",type:"captcha"};y.value.push(b)}}else if(g==="phone"){if((!(f in e.formFieldsValue)||e.formFieldsValue[f]===null||((u=e.formFieldsValue[f])==null?void 0:u.trim().length)<=0)&&s.required===!0){const b={field:s.label,type:"question"};y.value.push(b)}if((!Ue||e.isPhoneValidObj[f]===!1)&&e.formFieldsValue[f]){const b={field:"Invalid phone number",type:"phone"};y.value.push(b)}}else if(g==="cascade_dropdown"){let b={},_=0;e.formFieldsValue[f]===void 0&&s.required===!0?(b={field:s.label,type:"question"},y.value.push(b)):e.formFieldsValue[f]!==void 0&&s.required===!0&&(e.formFieldsValue[f].forEach(function(p,O){for(const N in p)p[N]===""&&(b={field:s.label,type:"question"},_++)}),_>0&&y.value.push(b))}else if(g==="file_upload"){if(s.required&&!e.formFieldsValue[f])y.value.push({field:`${s.fieldName} is required`,type:"file_upload"});else if(e.formFieldsValue[f]){let b=e.formFieldsValue[f].files.length;const _=s.picklistOptions;for(let S=0;S<b;S++){const p="."+e.formFieldsValue[f].files[S].name.split(".").pop();if(_.length>0&&_.indexOf(p)===-1){y.value.push({field:`${s.fieldName} - File format is not supported`,type:"file_upload"});break}}}}else g==="signature"?s.required&&!e.formFieldsValue[f]&&y.value.push({field:`${s.fieldName} is required`,type:"file_upload"}):g==="numerical"&&(s.required&&!e.formFieldsValue[f]?y.value.push({field:`${s.fieldName} is required`,type:"numerical"}):e.formFieldsValue[f]&&isNaN(e.formFieldsValue[f])&&y.value.push({field:`${s.fieldName} is not a valid number`,type:"numerical"}))}return y.value.length>0?(z(()=>Ge.value.scrollIntoView({behavior:"smooth"})),!1):!0},we=l=>{if(l.index<0&&l.index===-1)if(e.formSurvey.formData.form.formAction.disqualifiedType==="1")y.value=[],H.value=!0,A.value=!1,window.parent.location=e.formSurvey.formData.form.formAction.disqualifiedUrl;else return y.value=[],H.value=!0,A.value=!1,fe.value=e.formSurvey.formData.form.formAction.disqualifiedText!==""?$e(e.formSurvey.formData.form.formAction.disqualifiedText,e.formFieldsValue):"Survey Disqualified! Please try again",X.value=100,l;else return l.index<0&&l.index===-2&&(y.value=[],ee.value=!0,delete l.index),l},Pe=l=>{tl()},M=l=>{let t={};const a=["header","image","html"];if(Z.value)Pe();else if(t=k.value[w.value],"slideData"in t&&t.slideData.length>1){const n=t.slideData[t.slideData.length-1];(e.formFieldsValue[n.tag]!==void 0||a.indexOf(n.tag)>=0)&&Pe()}else Pe()},El=l=>{ee.value=!1;let t={},a={source:"logic"};if(e.multiStoreSkipLogic={},t=k.value[w.value],t!==void 0&&"logic"in t&&Object.keys(t.logic).length>0&&(l.type==="single_options"||l.type==="checkbox"||l.type==="radio")&&(l.id in t.logic||l.tag in t.logic)){const n=e.formFieldsValue[l.tag],i=t.logic[l.tag];for(const r in i)!Array.isArray(n)&&i[r].optionName===n?a={source:"logic",index:i[r].index}:Array.isArray(n)&&n.indexOf(i[r].optionName)>=0&&l.picklistOptions[Ke.value]===i[r].optionName&&(a={source:"logic",index:i[r].index})}if("index"in a)a=we(a),ee.value&&j.value.indexOf(l.id)<0&&j.value.push(l.id);else{const n=j.value.indexOf(l.id);n>-1&&j.value.splice(n,1)}A.value&&l.type!=="checkbox"&&!Oe.value?M():A.value&&l.type==="checkbox"&&(e.multiStoreSkipLogic=a)},Tl=l=>{ee.value=!1;let t="",a={},n={source:"logic"};if(e.multiStoreSkipLogic={},a=k.value[w.value],a!==void 0&&"logic"in a&&Object.keys(a.logic).length>0&&(l.type==="single_options"||l.type==="checkbox"||l.type==="radio")){const i=[];a.slideData.forEach(d=>{i.push({id:d.tag,value:l.type==="single_options"?l.selectedOption:e.formFieldsValue[d.tag]})});const r=a.logic;i.forEach(d=>{for(const h in r)if(d&&d.id===h)for(const u in r[h])!Array.isArray(d.value)&&r[h][u].optionName===d.value?(t=ye(r[h][u].id),n={source:"logic",index:t}):Array.isArray(d.value)&&d.value.indexOf(r[h][u].optionName)>=0&&(t=ye(r[h][u].id),n={source:"logic",index:t})})}if("index"in n)n=we(n),ee.value&&j.value.indexOf(l.id)<0&&j.value.push(l.id);else{const i=j.value.indexOf(l.id);if(i>-1)j.value.splice(i,1);else{const r=m.surveyData.formData.slides[w.value];let d=r&&r.jumpTo,{slides:h}=m.surveyData.formData,u=null;d&&(h.forEach((s,f)=>{s.id===d&&(u=f)}),u!==null&&(n={source:"logic",index:u}))}}A.value&&l.type!=="checkbox"&&!Oe.value?M():A.value&&l.type==="checkbox"&&(e.multiStoreSkipLogic=n)},ye=l=>{let t;return Z.value?t=k.value.findIndex(a=>{if(a.slideData.filter(i=>i.id===l||i.tag===l).length>0)return!0}):t=k.value.findIndex(a=>a.id===l),t===-1&&(t=w.value+1),l==="endsurvey"?t=-2:l==="disqualify"&&(t=-1),t},ge=l=>{l.type==="single_options"&&(e.formFieldsValue={...e.formFieldsValue,[l.tag]:l.selectedOption}),Qe.value?Tl(l):El(l)},Bl=l=>{const{item:t,event:a}=l;e.formFieldsValue[t.tag]=a.target.value},al=()=>{ve.value=!0,setTimeout(()=>{ve.value=!1},1e3)},tl=()=>{be.value||al();let l={source:"logic"},t="";const a=k.value[w.value];if(a!==void 0&&"logic"in a&&Object.keys(a.logic).length>0){let n=[];const i=a.slideData.filter(r=>r.type!=="img"&&r.type!=="h1"&&r.type!=="html");Z.value?n.push(i[0]):n=i,n.forEach(function(r,d){if(r.id in a.logic&&r.id in e.formFieldsValue&&(r.type==="single_options"||r.type==="checkbox"||r.type==="radio")){const h=a.logic[r.id],u=e.formFieldsValue[r.id];for(const s in h)if(!Array.isArray(u)&&h[s].optionName===u)t=ye(h[s].id),l={source:"logic",index:t};else if(Array.isArray(u)&&u.indexOf(h[s].optionName)>=0){t=ye(h[s].id);const f=e.formFieldsValue[r.tag].map(function(g){return r.picklistOptions.indexOf(g)});r.picklistOptions[Math.max(...f)]===h[s].optionName&&(l={source:"logic",index:t})}}})}if(l&&l.index===-1)return we(l);if(l&&l.index===-2&&(y.value=[],ee.value=!0,delete l.index),l.hasOwnProperty("index"))he(l);else{const n=m.surveyData.formData.slides[w.value];let i=n&&n.jumpTo,{slides:r}=m.surveyData.formData;if(i){let d=null;r.forEach((h,u)=>{h.id===i&&(d=u)}),he(d!==null?{source:"logic",index:d}:l)}else he(l)}},he=l=>{if(ne({tag:"phone"}),y.value=[],ie.value=[],!G.value)return ll(!0),!1;Object.keys(e.multiStoreSkipLogic).length>1&&(l={source:e.multiStoreSkipLogic.source,index:e.multiStoreSkipLogic.index},e.multiStoreSkipLogic={});const t=parseInt(w.value),a=Object.keys(l).length>0&&"index"in l?l.index:t+1;let n=!0;if(n=ol(t),!n){const h=document.getElementById("hl_form_builder_main"+$.value);return h&&el(h,h.offsetTop,500),!1}const i=se.value[t];i.classList.add("ghl-page-rotateSlideOutNext");const r=se.value[a];r.classList.add("ghl-page-current"),r.classList.add("ghl-page-rotateSlideInNext"),pe.value.classList.add("setOverflow"),be.value?(i.classList.remove("ghl-page-rotateSlideOutNext"),i.classList.remove("ghl-page-current"),r.classList.remove("ghl-page-rotateSlideInNext"),pe.value.classList.remove("setOverflow")):setTimeout(()=>{i.classList.remove("ghl-page-rotateSlideOutNext"),i.classList.remove("ghl-page-current"),r.classList.remove("ghl-page-rotateSlideInNext"),pe.value.classList.remove("setOverflow")},1e3),q[q.value.length-1]!=a&&q.value.push(a),w.value=a,(w.value>=1||il.value&&q.value.length>2)&&(Y.value=!0),w.value===te.value-1&&(G.value=!1),Ce(),z(()=>{Le.value&&me.value.scrollIntoView()})},$l=()=>{ne({tag:"phone"}),be.value||al(),y.value=[];const l=q.value[q.value.length-1];if(q.value.length<2){Y.value=!1;return}console.log(q.value,l,"currentIndex");const t=se.value[l];t.classList.add("ghl-page-rotateSlideOutPrev");const a=q.value[q.value.length-2],n=se.value[a];n.classList.add("ghl-page-current"),n.classList.add("ghl-page-rotateSlideInPrev"),Ml(a),be.value?(t.classList.remove("ghl-page-rotateSlideOutPrev"),t.classList.remove("ghl-page-current"),n.classList.remove("ghl-page-rotateSlideInPrev")):setTimeout(()=>{t.classList.remove("ghl-page-rotateSlideOutPrev"),t.classList.remove("ghl-page-current"),n.classList.remove("ghl-page-rotateSlideInPrev")},1e3),q.value.pop(),w.value=a,w.value<=0&&(Y.value=!1),w.value!==k.value.length-1&&(G.value=!0),Ce(),z(()=>{Le.value&&me.value.scrollIntoView()})},Ml=l=>{k.value[l]},Ul=l=>{e.formFieldsValue[l.tag]=""},Rl=l=>{const{date:t,item:a}=l;e.formFieldsValue[a.tag]=t,!Oe.value&&t&&M()};Ne(k,()=>{Ze()}),Ne(()=>m.urlParams,()=>{m.urlParams&&fl(m.urlParams,W,e.phoneCountryIncluded,L.value,e.formFieldsValue,T.value).then(l=>{e.phoneCountryIncluded=l.phoneCountryIncluded,e.formFieldsValue=l.formFieldsValue,L.value=l.formattedCountry})}),Ne(()=>m.stickyContactData,()=>{if(m.stickyContactData&&re.value){if(E.value=k.value.map(l=>l.slideData.map(t=>t.tag)).reduce((l,t)=>[...new Set([...l,...t])],[]),!E.value.length)return;Me(m.stickyContactData,B.value,E.value,e.formFieldsValue,e.phoneCountryIncluded,L.value).then(l=>{e.formFieldsValue=l.formFieldsValue,e.phoneCountryIncluded=l.phoneCountryIncluded,L.value=l.formattedCountry}).catch(l=>{console.error("Failed at fillDataFromCookie",l)})}});const jl=U(()=>(console.log("Loc",dl.find(l=>l.code===ue.value)),dl.find(l=>l.code===ue.value)||{})),rl=U(()=>de.value||ue.value),be=U(()=>{var l,t,a;return(a=(t=(l=e.formSurvey)==null?void 0:l.formData)==null?void 0:t.form)==null?void 0:a.isAnimationDisabled}),Le=U(()=>{var l,t,a;return(a=(t=(l=e.formSurvey)==null?void 0:l.formData)==null?void 0:t.form)==null?void 0:a.isSurveyScrollEnabled}),Hl=U(()=>Object.values(Eo)),il=U(()=>{var l,t,a;return((a=(t=(l=e.formSurvey)==null?void 0:l.formData)==null?void 0:t.form)==null?void 0:a.isBackButtonEnable)&&Y.value}),Oe=U(()=>{var l,t,a;return(a=(t=(l=e.formSurvey)==null?void 0:l.formData)==null?void 0:t.form)==null?void 0:a.disableAutoNavigation}),zl=U(()=>{var l,t,a,n,i,r;return!(((a=(t=(l=e.formSurvey)==null?void 0:l.formData)==null?void 0:t.form)==null?void 0:a.hasOwnProperty("isProgressBarEnabled"))&&((r=(i=(n=e.formSurvey)==null?void 0:n.formData)==null?void 0:i.form)==null?void 0:r.isProgressBarEnabled)===!1)});U(()=>{for(const l in D.value)l.resizeCanvas&&z(()=>{l.resizeCanvas.resizeCanvas()});le.value&&Q.value&&window.parent.postMessage(["highlevel.setHeight",{height:le.value.clientHeight,id:Q.value}],"*")});const Wl=U(()=>m.surveyData!=null&&He.value&&!ke.value&&!H.value);return Nl(),Gl(()=>{if(fl(m.urlParams,W,e.phoneCountryIncluded,L.value,e.formFieldsValue,T.value).then(l=>{e.phoneCountryIncluded=l.phoneCountryIncluded,e.formFieldsValue=l.formFieldsValue,L.value=l.formattedCountry}),Ze(),!m.funnelPreview&&ce.value!==void 0&&ce.value!==""&&z(()=>{go(ce.value,m.surveyData.formData.form.pageViewEvent)}),re.value){if(E.value||(E.value=k.value.map(l=>l.slideData.map(t=>t.tag)).reduce((l,t)=>[...new Set([...l,...t])],[])),!E.value.length)return;Me(void 0,B.value,E.value,e.formFieldsValue,e.phoneCountryIncluded,L.value).then(l=>{e.formFieldsValue=l.formFieldsValue,e.phoneCountryIncluded=l.phoneCountryIncluded,L.value=l.formattedCountry}).catch(l=>{console.error("Failed at fillDataFromCookie",l)})}if(k.value.length&&k.value.forEach((l,t)=>{l.slideData.forEach((a,n)=>{if(a.type==="html"&&a&&"html"in a){const i=a.html.replace(/[‘’]/g,"'").replace(/[“”]/g,'"');Dl.value.push({scriptString:i,index:t,indexChild:n})}})}),z(()=>{window.top!==window.self&&le.value.classList.add("in-iframe"),(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/Android/i))&&(Ye.value=!0)}),$.value=Math.random().toString(36).slice(2),W.query.hasOwnProperty("sticky_contact_help")&&W.query.sticky_contact_help==="true"&&(console.log("%c Sticky Contact data","color: black; font-weight: bold; background-color: white"),console.log("%c ===================","color: black; font-weight: bold; background-color: white"),console.log(JSON.parse(localStorage.getItem("_ud"))),console.log("%c ===================","color: black; font-weight: bold; background-color: white")),m.stickyContactData&&re.value){if(E.value||(E.value=k.value.map(l=>l.slideData.map(t=>t.tag)).reduce((l,t)=>[...new Set([...l,...t])],[])),!E.value.length)return;Me(m.stickyContactData,B.value,E.value,e.formFieldsValue,e.phoneCountryIncluded,L.value).then(l=>{e.formFieldsValue=l.formFieldsValue,e.phoneCountryIncluded=l.phoneCountryIncluded,L.value=l.formattedCountry}).catch(l=>{console.error("Failed at fillDataFromCookie",l)})}C.value=!0}),oo({__dangerouslyDisableSanitizers:["style"],style:[{children:Je.value,type:"text/css"},{children:Re.value,type:"text/css"},{children:je.value,type:"text/css"}]}),(l,t)=>(v(),V("div",{ref:a=>{le.value=a},class:"hl-app"},[F("div",Uo,[F("section",Ro,[F("section",jo,[F("div",Ho,[qe(Te,{loading:o(ke),color:"#188bf6",size:"30px"},null,8,["loading"])]),F("section",{ref:a=>{me.value=a},id:"hl_form_builder_main"+o($),class:"hl_form-builder--main"},[o(De).trim().length>0?(v(),V("div",Wo,[F("div",{class:oe([()=>{o(xe)},"ghl-banner"]),style:_e({maxWidth:o(xe)?"100%":o(e).formStyle.width+"px"})},[F("img",{src:o(De),onLoad:Ol},null,40,Jo)],6)])):P("",!0),F("div",{style:_e({maxWidth:o(e).formStyle.width+"px"}),class:"ghl-form-wrap",ref:a=>{pe.value=a}},[F("form",{id:"_builder-form",style:_e({backgroundColor:"#"+o(e).formStyle.bgColor,color:"#"+o(e).formStyle.color,border:o(e).formStyle.border+"px "+o(e).formStyle.borderStyle+" #"+o(e).formStyle.borderColor,borderRadius:o(e).formStyle.radius+"px",maxWidth:o(e).formStyle.width+"px"}),onSubmit:t[1]||(t[1]=Xl(a=>ll(!0),["prevent"])),name:"builder-form",class:"ghl-survey-form"},[o(y).length?(v(),V("div",{key:0,ref:a=>{Ge.value=a},class:"alert alert-danger",role:"alert"},[F("ul",null,[(v(!0),V(Ae,null,Ee(o(y),(a,n)=>(v(),V("li",{key:n},[F("div",null,[a.type=="question"?(v(),V("span",Qo,'Question, "'+J(a.field)+'" is required.',1)):a.type=="phone"||a.type=="email"||a.type=="file_upload"||a.type=="numerical"||a.type=="captcha"||a.type=="website"?(v(),V("span",Ko,J(a.field),1)):a.type=="future_date"?(v(),V("span",Yo,J(a.field)+" cannot be in the future ",1)):a.type=="invalid_date"?(v(),V("span",Go,J(a.field)+" should have a valid date. ",1)):a.type=="monetory"?(v(),V("span",Xo,J(a.field),1)):P("",!0)])]))),128))])],512)):P("",!0),!o(H)&&o(A)?(v(),V("div",{key:1,class:oe([()=>o(Ye)||o(e).formStyle.width<=600?"ghl-ques-wrap-less":"ghl-ques-wrap-big","ghl-question-set"])},[(v(!0),V(Ae,null,Ee(o(k),(a,n)=>(v(),V("div",{key:n,ref_for:!0,ref:i=>{o(se)[n]=i},class:oe([{"ghl-page-current":n==0},"form-builder--wrap-questions ghl-question"])},[F("div",Zo,[(v(!0),V(Ae,null,Ee(a.slideData,(i,r)=>(v(),V("div",{key:r,class:"menu-field-wrap col-12"},[F("div",{class:oe([r%2==0?"f-even":"f-odd","form-field-container"])},[i.type==="text"&&o(C)?(v(),x(ho,{key:0,kind:"survey",item:i,"form-label-visible":o(I),"phone-country-included":o(e).phoneCountryIncluded,"phone-country-code":o(e).phoneCountryCode,"formatted-phone":o(e).formattedPhone,"location-country":o(rl),"form-fields-value":o(e).formFieldsValue,"phone-country-derived":o(de),onUpdatePhoneCountryDerived:Xe,onCustomFieldPhoneNumberUpdate:ne,onIsSlideMovable:M,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","phone-country-included","phone-country-code","formatted-phone","location-country","form-fields-value","phone-country-derived","onUpdatePhoneCountryDerived","onCustomFieldPhoneNumberUpdate"])):P("",!0),i.type==="phone"&&o(C)?(v(),x(bo,{key:1,kind:"survey",item:i,"form-label-visible":o(I),"phone-country-included":o(e).phoneCountryIncluded,"phone-country-code":o(e).phoneCountryCode,"location-country":o(rl),"formatted-phone":o(e).formattedPhone,"phone-country-derived":o(de),onUpdatePhoneCountryDerived:Xe,onCustomFieldPhoneNumberUpdate:ne,onIsSlideMovable:M,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","phone-country-included","phone-country-code","location-country","formatted-phone","phone-country-derived","onUpdatePhoneCountryDerived","onCustomFieldPhoneNumberUpdate"])):(i.type==="number"||i.type==="numerical")&&o(C)?(v(),x(_o,{key:2,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,onIsSlideMovable:M,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value"])):i.type==="email"&&o(C)?(v(),x(Fo,{key:3,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,onIsSlideMovable:M,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value"])):i.type==="h1"?(v(),x(To,{key:4,item:i,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item"])):i.type==="textbox_list"&&o(C)?(v(),x(Vo,{key:5,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,"local-tag-id":o($),ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value","local-tag-id"])):(i.type==="textarea"||i.type=="large_text")&&o(C)?(v(),x(ko,{key:6,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value"])):i.type==="img"&&"url"in i?(v(),x(Bo,{key:7,kind:"survey",item:i,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item"])):i.type==="html"?(v(),x(So,{key:8,item:i,localTagId:o($)+n+r,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","localTagId"])):i.type==="captcha"&&o(C)?(v(),x(Do,{key:9,kind:"survey",item:i,"form-label-visible":o(I),"captcha-input-value":o(Il),"survey-field-validate":o(y),"local-tag-id":o($),"validation-error":o(e).validationError,onUpdateIsCaptchaVerified:wl,onUpdateCaptchaToken:Ll,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","captcha-input-value","survey-field-validate","local-tag-id","validation-error"])):i.type==="monetory"&&o(C)?(v(),x(xo,{key:10,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,"locale-currency":o(jl),onUpdateFormFieldsValue:Ie,onIsSlideMovable:M,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value","locale-currency"])):i.type==="checkbox"&&o(C)?(v(),x(Io,{key:11,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,"local-tag-id":o($),onHandleCheckBox:ql,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value","local-tag-id"])):i.type==="radio"&&i.picklistOptions&&o(C)?(v(),x(Co,{key:12,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,"local-tag-id":o($),onIsSlideMovable:M,onHandleFieldLogicChange:ge,onResetFieldsValue:Ul,onSetRadioValue:Bl,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value","local-tag-id"])):i.type==="radio"&&i.picklistOptionsImage&&o(C)?(v(),x(wo,{key:13,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,"local-tag-id":o($),onIsSlideMovable:M,onHandleFieldLogicChange:ge,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value","local-tag-id"])):i.type==="select"&&i.tag=="country"&&o(C)?(v(),x(Po,{key:14,kind:"survey",item:i,"form-label-visible":o(I),"formatted-country":o(L),countries:o(Hl),onUpdateFormattedCountry:Pl,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","formatted-country","countries"])):(i.type==="single_options"||i.type==="multiple_options")&&o(C)?(v(),x(Lo,{key:15,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,onHandleFieldLogicChange:ge,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value"])):i.type==="date"&&o(C)?(v(),x(Oo,{key:16,kind:"survey",item:i,"form-label-visible":o(I),"form-fields-value":o(e).formFieldsValue,onDateSelected:Rl,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-label-visible","form-fields-value"])):i.type==="file_upload"&&o(C)?(v(),x(No,{key:17,kind:"survey",item:i,"form-fields-value":o(e).formFieldsValue,"form-label-visible":o(I),onUpdateFormFieldsValue:Ie,ref_for:!0,ref:d=>{o(D)[r]=d}},null,8,["item","form-fields-value","form-label-visible"])):i.type==="signature"&&o(C)?(v(),x(qo,{key:18,kind:"survey",item:i,"form-fields-value":o(e).formFieldsValue,"form-label-visible":o(I),ref_for:!0,ref:d=>{o(D)[r]=d},onUpdateFormFieldsValue:Ie},null,8,["item","form-fields-value","form-label-visible"])):P("",!0),!o(Z)&&o(k)[n].slideData.length>1&&i.type!=="html"&&i.type!=="img"&&i.type!=="h1"&&i.type!=="source"?(v(),V("div",ea)):P("",!0)],2)]))),128))])],2))),128))],2)):P("",!0),o(Wl)?(v(),x(io,{key:2,style:{padding:"30px 0px"},company:o(e).company},null,8,["company"])):P("",!0),o(H)||!o(A)?(v(),V("div",la,[F("div",oa,[F("h3",null,J(o(fe)),1)])])):P("",!0),F("div",{class:oe([{"ghl-footer-preview":R.source==="preview"},"ghl-footer"])},[o(A)?P("",!0):(v(),V("div",aa,[qe(Te,{loading:o(K),color:"#FFFFFF",size:"22px"},null,8,["loading"])])),F("div",ta,[!o(G)&&!o(H)&&o(A)?(v(),V("div",ra,[o(K)?P("",!0):(v(),V("input",ia)),F("div",sa,[qe(Te,{loading:o(K),color:"#FFFFFF",size:"22px"},null,8,["loading"])])])):P("",!0),o(G)&&o(A)?(v(),V("div",na,[F("button",{disabled:o(ve),onClick:t[0]||(t[0]=a=>tl()),type:"button",role:"button",class:"ghl-button ghl-next-button ghl-mobile-next","aria-label":"next button",style:{display:"block"}},fa,8,ua)])):P("",!0),o(il)?(v(),V("div",ca,[F("button",{disabled:o(ve),onClick:$l,type:"button",role:"button",class:"ghl-button ghl-back-button ghl-mobile-back","aria-label":"back button",style:{display:"block"}},pa,8,va)])):P("",!0)]),o(zl)?(v(),V("div",ya,[F("div",ga,J(o(X))+"% ",1),F("div",{class:oe([()=>{o(X)},"ghl-progress-bar-background"])},[F("div",{style:_e({width:o(X)+"%"}),class:"ghl-progress-bar-inner"},null,4)],2)])):P("",!0)],2)],36)],4),"footerHtml"in R.surveyData.formData.form.formAction&&R.surveyData.formData.form.formAction.footerHtml.trim().length>0?(v(),V("div",ha,[F("div",{innerHTML:R.surveyData.formData.form.formAction.footerHtml},null,8,ba)])):P("",!0)],8,zo)])])],512)],512))}});const xa=lo(_a,[["__scopeId","data-v-5e3bd189"]]);export{xa as S};
