(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{1974:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return n(3326)}])},3835:function(t,e,n){"use strict";n.d(e,{e:function(){return u},y:function(){return s}});var r=n(9486),i=n(6972),a=n(1864);async function u(t){let e=a.join("../thesaurus/projects","project_"+t.toString()+".md"),n=await fetch(e),u=await n.blob(),s=await u.text(),o=await (0,r.j)().use(i.Z).process(s),c=o.toString();return c}async function s(t){let e=a.join("../thesaurus/writtings","writting_"+t.toString()+".md"),n=await fetch(e),u=await n.blob(),s=await u.text(),o=await (0,r.j)().use(i.Z).process(s),c=o.toString();return c}},3326:function(t,e,n){"use strict";n.r(e);var r=n(5893),i=n(1163),a=n(7294),u=n(3835);let s=()=>{let[t,e]=(0,a.useState)({}),n=(0,i.useRouter)(),s=n.query.id?n.query.id.toString():"";return(0,a.useEffect)(()=>{let t=async t=>{let n=(0,u.e)(t);console.log(await n),e(await n)};t(parseInt(s))},[s]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"articles",dangerouslySetInnerHTML:{__html:t.toString()}})})};e.default=s}},function(t){t.O(0,[504,774,888,179],function(){return t(t.s=1974)}),_N_E=t.O()}]);