import{_ as K,a as Q}from"./Pagination.ebea6016.js";import{_ as G}from"./index.0ec42dec.js";import{t as H,K as W,P as X,w as R,J as Y}from"./@element-plus.23948b62.js";import{E as s,a as L}from"./element-plus.07374abd.js";import{r as Z,z as ee,a6 as ae,ag as te,I as h,k,A as le,Q as n,v as t,B as D,J as d,D as N,l as A,O as f}from"./@vue.343e7179.js";const x=b=>{let m=b.target;(m.nodeName=="I"||m.nodeName=="SPAN")&&(m=b.target.parentNode),m.blur()};const ne={class:"container"},oe={class:"handle-box"},de=f("\u641C\u7D22"),ie=f("\u6E05\u9664 "),se=f(" \u6DFB \u52A0"),ce=f(" \u5220 \u9664"),re=f(" \u7F16\u8F91 "),ue=f("\u5220\u9664 "),pe={class:"dialog-footer"},ge=f("\u53D6 \u6D88"),fe=f("\u6DFB \u52A0"),he=f("\u66F4 \u65B0"),_e={props:{page:Object,query:Object,data:Object,form:Object,getData:Function,apis:Object},emits:["emitIsDisabled","emitIsShowSearched"],setup(b,{expose:m,emit:S}){const p=b,w=Z(),e=ee({searched:[],isShowSearched:!1,selectedList:[],showDialog:!1,addOrUpdate:!0,pageTotal:0,idx:"-1",reIndex:-1}),{page:i,query:o,data:_,form:c}=ae(p);te(()=>{o.value.id.length==0&&v(),e.pageTotal=_.value.length||o.value.pageSize,S("emitIsShowSearched",e.isShowSearched)});function C(l){x(l),p.apis.read_datas(o.value.id).then(a=>{a.code==200?(console.log("\u88AB\u641C\u7D22\u7684\u6570\u636E--",a.data),e.isShowSearched=!0,e.searched.splice(0,1,a.data)):s.warning("\u7F16\u53F7\u4E0D\u5B58\u5728")}).catch(()=>{s.error("\u641C\u7D22\u6570\u636E\u5931\u8D25!")})}function O(l){x(l),v()}function I(l){l.length==0&&(e.selectedList=[]),l.forEach((a,r)=>{e.selectedList.splice(r,1,{index:r,id:a.id})})}function j(l){x(l),L.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{e.selectedList.map(a=>{p.apis.delete_data(a.id).then(r=>{r.code===200?(_.value.splice(a.index,1),v(!0),s.success(`\u5220\u9664\u7F16\u53F7\u4E3A ${a.id} \u7684\u6570\u636E\u6210\u529F\uFF01`)):s.warning(`\u5220\u9664\u7F16\u53F7\u4E3A ${a.id} \u7684\u6570\u636E\u5931\u8D25\uFF01`)}).catch(()=>{s.error("\u5220\u9664\u6570\u636E\u5931\u8D25\uFF01")})})}).catch(()=>{})}function B(l){x(l),Object.keys(c.value.data).forEach(a=>c.value.data[a]=""),e.showDialog=e.addOrUpdate=!0,S("emitIsDisabled",!1)}function E(){e.showDialog=!1,e.addOrUpdate=!0,w.value.validate(l=>{i.value.pageName=="\u9009\u8BFE"&&c.value.data.grade===""&&(c.value.data.grade=0),l?p.apis.create_data(c.value.data).then(a=>{a.code==200?(_.value.push(a.data),s.success(`\u6210\u529F\u6DFB\u52A0\u7F16\u53F7\u4E3A ${a.data.id} \u7684${i.value.pageName}\u4FE1\u606F\uFF01`),v(!0)):s.warning(`${i.value.pageName}\u4FE1\u606F\u586B\u5199\u6709\u8BEF\uFF0C\u6DFB\u52A0\u5931\u8D25\uFF01`)}).catch(()=>{s.error(`\u6DFB\u52A0${i.value.pageName}\u4FE1\u606F\u5931\u8D25\uFF01`)}):s.warning(`${i.value.pageName}\u4FE1\u606F\u4E0D\u7B26\u5408\u6821\u9A8C\u89C4\u5219\uFF0C\u6DFB\u52A0\u5931\u8D25\uFF01`),w.value.resetFields()})}function T(l,a){Object.keys(c.value.data).forEach(r=>{c.value.data[r]=a[r]}),e.showDialog=!0,e.addOrUpdate=!1,e.idx=a.id,e.reIndex=l,S("emitIsDisabled",!0)}function P(){e.showDialog=e.addOrUpdate=!1,i.value.pageName=="\u9009\u8BFE"&&c.value.data.grade===""&&(c.value.data.grade=0),w.value.validate(l=>{l?p.apis.update_data(e.idx,c.value.data).then(a=>{Object.keys(a.data).forEach(r=>{_.value[e.reIndex][r]=a.data[r]}),o.value.id.length!=0&&(e.searched[0]=c.value.data,console.log("\u6211\u6267\u884C\u4E86",e.searched[0])),p.getData(),s.success(`\u4FEE\u6539${i.value.pageName}ID\u4E3A ${e.idx} \u6210\u529F\uFF01`)}).catch(()=>{s.error(`\u4FEE\u6539${i.value.pageName}\u4FE1\u606F\u5931\u8D25\uFF01`)}):s.warning(`\u586B\u5199${i.value.pageName}\u4E0D\u7B26\u5408\u6821\u9A8C\u89C4\u5219\uFF0C\u4FEE\u6539\u5931\u8D25\uFF01`)})}function U(l,a){L.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{p.apis.delete_data(a.id).then(r=>{r.code===200?(_.value.splice(l,1),v(!0),s.success(`\u5220\u9664\u7F16\u53F7\u4E3A ${a.id} \u7684${i.value.pageName}\u4FE1\u606F\u6210\u529F\uFF01`)):s.warning(`\u5220\u9664\u7F16\u53F7\u4E3A ${a.id} \u7684${i.value.pageName}\u4FE1\u606F\u5931\u8D25\uFF01`)}).catch(()=>{s.error(`\u5220\u9664${i.value.pageName}\u4FE1\u606F\u5931\u8D25\uFF01`)})}).catch(()=>{})}function V(l){o.value.currentPage=l,p.getData()}function v(l=!1){o.value.id="",e.isShowSearched=!1,l&&p.getData()}return m({state:e,page:i,query:o,data:_,form:c,handleSearch:C,handleRemove:O,handleSelectionChange:I,handleSelectedDelete:j,handleAdd:B,saveAdd:E,handleEdit:T,saveEdit:P,handleDelete:U,pageIndex:V,removeSearch:v}),(l,a)=>{const r=h("el-input"),g=h("el-button"),z=h("el-col"),q=h("el-row"),$=h("el-table-column"),F=h("el-table"),J=h("el-form"),M=h("el-dialog");return k(),le("div",null,[n(K,{"icon-name":t(i).iconName,"page-name":t(i).pageName},null,8,["icon-name","page-name"]),D("div",ne,[D("div",oe,[n(q,null,{default:d(()=>[n(z,{span:16},{default:d(()=>[n(r,{modelValue:t(o).id,"onUpdate:modelValue":a[0]||(a[0]=u=>t(o).id=u),maxlength:"11",placeholder:"\u7F16\u53F7",class:"grid-content handle-input mr10"},null,8,["modelValue"]),N(l.$slots,"filter",{},void 0,!0),n(g,{type:"primary",icon:t(H),disabled:!/(^[1-9]\d*$)/.test(t(o).id),onClick:C},{default:d(()=>[de]),_:1},8,["icon","disabled"]),n(g,{type:"primary",icon:t(W),disabled:t(o).id.length==0,onClick:O},{default:d(()=>[ie]),_:1},8,["icon","disabled"])]),_:3}),n(z,{span:8},{default:d(()=>[n(g,{type:"primary",icon:t(X),class:"grid-content float-right",onClick:B},{default:d(()=>[se]),_:1},8,["icon"]),n(g,{type:"danger",icon:t(R),class:"grid-content float-right mr10",disabled:t(e).selectedList.length==0,onClick:j},{default:d(()=>[ce]),_:1},8,["icon","disabled"])]),_:1})]),_:3})]),n(F,{data:t(e).isShowSearched?t(e).searched:t(_).slice((t(o).currentPage-1)*t(o).pageSize,t(o).currentPage*t(o).pageSize),border:"",stripe:"",class:"table","max-height":"578","default-sort":{prop:"id",order:"ascending"},onSelectionChange:I},{default:d(()=>[n($,{type:"selection",width:"80",align:"center"}),n($,{label:"\u5E8F\u53F7",type:"index",width:"80",align:"center",fixed:"",index:u=>u+1+(t(o).currentPage-1)*t(o).pageSize},null,8,["index"]),N(l.$slots,"tableColumn",{},void 0,!0),n($,{label:"\u64CD\u4F5C",width:"220",align:"center",fixed:"right"},{default:d(u=>[n(g,{type:"text",icon:t(Y),onClick:y=>T(u.$index,u.row)},{default:d(()=>[re]),_:2},1032,["icon","onClick"]),n(g,{type:"text",icon:t(R),class:"red",onClick:y=>U(u.$index,u.row)},{default:d(()=>[ue]),_:2},1032,["icon","onClick"])]),_:1})]),_:3},8,["data"]),n(Q,{"page-size":t(o).pageSize,"page-total":t(e).pageTotal,disabled:t(e).isShowSearched,onPageIndex:V},null,8,["page-size","page-total","disabled"])]),n(M,{title:`${t(e).addOrUpdate?"\u6DFB\u52A0\u4FE1\u606F":"\u7F16\u8F91\u4FE1\u606F"}`,modelValue:t(e).showDialog,"onUpdate:modelValue":a[2]||(a[2]=u=>t(e).showDialog=u),width:"30%"},{footer:d(()=>[D("span",pe,[n(g,{onClick:a[1]||(a[1]=u=>t(e).showDialog=!1)},{default:d(()=>[ge]),_:1}),t(e).addOrUpdate?(k(),A(g,{key:0,type:"primary",onClick:E},{default:d(()=>[fe]),_:1})):(k(),A(g,{key:1,type:"primary",onClick:P},{default:d(()=>[he]),_:1}))])]),default:d(()=>[n(J,{"status-icon":"","label-width":"100px",ref:(u,y)=>{y.formRef=u,w.value=u},model:t(c).data,rules:t(c).rules},{default:d(()=>[N(l.$slots,"showDialog",{},void 0,!0)]),_:3},8,["model","rules"])]),_:3},8,["title","modelValue"])])}}};var Se=G(_e,[["__scopeId","data-v-6ab6019b"]]);export{Se as B};