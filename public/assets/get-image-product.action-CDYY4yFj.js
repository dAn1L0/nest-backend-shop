var ut=i=>{throw TypeError(i)};var J=(i,t,s)=>t.has(i)||ut("Cannot "+s);var e=(i,t,s)=>(J(i,t,"read from private field"),s?s.call(i):t.get(i)),p=(i,t,s)=>t.has(i)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),u=(i,t,s,r)=>(J(i,t,"write to private field"),r?r.call(i,s):t.set(i,s),s),f=(i,t,s)=>(J(i,t,"access private method"),s);import{S as mt,a1 as ct,a2 as O,s as X,a3 as N,a4 as Ct,a5 as lt,a6 as dt,a7 as Ot,a8 as St,a9 as wt,aa as ft,v as It,ab as Qt,Q as Et,ac as Ut,x as Dt,B as Ft,y as Tt,l as $,z as pt,C as xt,D as bt,A as Pt}from"./index-DV-68wpA.js";var y,n,W,v,U,A,I,C,H,_,z,D,F,Q,B,o,V,Y,Z,q,tt,et,st,it,Rt,gt,jt=(gt=class extends mt{constructor(t,s){super();p(this,o);p(this,y);p(this,n);p(this,W);p(this,v);p(this,U);p(this,A);p(this,I);p(this,C);p(this,H);p(this,_);p(this,z);p(this,D);p(this,F);p(this,Q);p(this,B,new Set);this.options=s,u(this,y,t),u(this,C,null),u(this,I,ct()),this.options.experimental_prefetchInRender||e(this,I).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(e(this,n).addObserver(this),vt(e(this,n),this.options)?f(this,o,V).call(this):this.updateResult(),f(this,o,tt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return rt(e(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return rt(e(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,o,et).call(this),f(this,o,st).call(this),e(this,n).removeObserver(this)}setOptions(t,s){const r=this.options,c=e(this,n);if(this.options=e(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof O(this.options.enabled,e(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(this,o,it).call(this),e(this,n).setOptions(this.options),r._defaulted&&!X(this.options,r)&&e(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:e(this,n),observer:this});const h=this.hasListeners();h&&yt(e(this,n),c,this.options,r)&&f(this,o,V).call(this),this.updateResult(s),h&&(e(this,n)!==c||O(this.options.enabled,e(this,n))!==O(r.enabled,e(this,n))||N(this.options.staleTime,e(this,n))!==N(r.staleTime,e(this,n)))&&f(this,o,Y).call(this);const l=f(this,o,Z).call(this);h&&(e(this,n)!==c||O(this.options.enabled,e(this,n))!==O(r.enabled,e(this,n))||l!==e(this,Q))&&f(this,o,q).call(this,l)}getOptimisticResult(t){const s=e(this,y).getQueryCache().build(e(this,y),t),r=this.createResult(s,t);return Mt(this,r)&&(u(this,v,r),u(this,A,this.options),u(this,U,e(this,n).state)),r}getCurrentResult(){return e(this,v)}trackResult(t,s){const r={};return Object.keys(t).forEach(c=>{Object.defineProperty(r,c,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(c),s==null||s(c),t[c])})}),r}trackProp(t){e(this,B).add(t)}getCurrentQuery(){return e(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=e(this,y).defaultQueryOptions(t),r=e(this,y).getQueryCache().build(e(this,y),s);return r.fetch().then(()=>this.createResult(r,s))}fetch(t){return f(this,o,V).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),e(this,v)))}createResult(t,s){var ht;const r=e(this,n),c=this.options,h=e(this,v),l=e(this,U),g=e(this,A),x=t!==r?t.state:e(this,W),{state:w}=t;let d={...w},E=!1,a;if(s._optimisticResults){const b=this.hasListeners(),M=!b&&vt(t,s),k=b&&yt(t,r,s,c);(M||k)&&(d={...d,...wt(w.data,t.options)}),s._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:S,errorUpdatedAt:P,status:R}=d;if(s.select&&d.data!==void 0)if(h&&d.data===(l==null?void 0:l.data)&&s.select===e(this,H))a=e(this,_);else try{u(this,H,s.select),a=s.select(d.data),a=ft(h==null?void 0:h.data,a,s),u(this,_,a),u(this,C,null)}catch(b){u(this,C,b)}else a=d.data;if(s.placeholderData!==void 0&&a===void 0&&R==="pending"){let b;if(h!=null&&h.isPlaceholderData&&s.placeholderData===(g==null?void 0:g.placeholderData))b=h.data;else if(b=typeof s.placeholderData=="function"?s.placeholderData((ht=e(this,z))==null?void 0:ht.state.data,e(this,z)):s.placeholderData,s.select&&b!==void 0)try{b=s.select(b),u(this,C,null)}catch(M){u(this,C,M)}b!==void 0&&(R="success",a=ft(h==null?void 0:h.data,b,s),E=!0)}e(this,C)&&(S=e(this,C),a=e(this,_),P=Date.now(),R="error");const j=d.fetchStatus==="fetching",L=R==="pending",G=R==="error",at=L&&j,ot=a!==void 0,m={status:R,fetchStatus:d.fetchStatus,isPending:L,isSuccess:R==="success",isError:G,isInitialLoading:at,isLoading:at,data:a,dataUpdatedAt:d.dataUpdatedAt,error:S,errorUpdatedAt:P,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>x.dataUpdateCount||d.errorUpdateCount>x.errorUpdateCount,isFetching:j,isRefetching:j&&!L,isLoadingError:G&&!ot,isPaused:d.fetchStatus==="paused",isPlaceholderData:E,isRefetchError:G&&ot,isStale:nt(t,s),refetch:this.refetch,promise:e(this,I)};if(this.options.experimental_prefetchInRender){const b=K=>{m.status==="error"?K.reject(m.error):m.data!==void 0&&K.resolve(m.data)},M=()=>{const K=u(this,I,m.promise=ct());b(K)},k=e(this,I);switch(k.status){case"pending":t.queryHash===r.queryHash&&b(k);break;case"fulfilled":(m.status==="error"||m.data!==k.value)&&M();break;case"rejected":(m.status!=="error"||m.error!==k.reason)&&M();break}}return m}updateResult(t){const s=e(this,v),r=this.createResult(e(this,n),this.options);if(u(this,U,e(this,n).state),u(this,A,this.options),e(this,U).data!==void 0&&u(this,z,e(this,n)),X(r,s))return;u(this,v,r);const c={},h=()=>{if(!s)return!0;const{notifyOnChangeProps:l}=this.options,g=typeof l=="function"?l():l;if(g==="all"||!g&&!e(this,B).size)return!0;const T=new Set(g??e(this,B));return this.options.throwOnError&&T.add("error"),Object.keys(e(this,v)).some(x=>{const w=x;return e(this,v)[w]!==s[w]&&T.has(w)})};(t==null?void 0:t.listeners)!==!1&&h()&&(c.listeners=!0),f(this,o,Rt).call(this,{...c,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,o,tt).call(this)}},y=new WeakMap,n=new WeakMap,W=new WeakMap,v=new WeakMap,U=new WeakMap,A=new WeakMap,I=new WeakMap,C=new WeakMap,H=new WeakMap,_=new WeakMap,z=new WeakMap,D=new WeakMap,F=new WeakMap,Q=new WeakMap,B=new WeakMap,o=new WeakSet,V=function(t){f(this,o,it).call(this);let s=e(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(Ct)),s},Y=function(){f(this,o,et).call(this);const t=N(this.options.staleTime,e(this,n));if(lt||e(this,v).isStale||!dt(t))return;const r=Ot(e(this,v).dataUpdatedAt,t)+1;u(this,D,setTimeout(()=>{e(this,v).isStale||this.updateResult()},r))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(e(this,n)):this.options.refetchInterval)??!1},q=function(t){f(this,o,st).call(this),u(this,Q,t),!(lt||O(this.options.enabled,e(this,n))===!1||!dt(e(this,Q))||e(this,Q)===0)&&u(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||St.isFocused())&&f(this,o,V).call(this)},e(this,Q)))},tt=function(){f(this,o,Y).call(this),f(this,o,q).call(this,f(this,o,Z).call(this))},et=function(){e(this,D)&&(clearTimeout(e(this,D)),u(this,D,void 0))},st=function(){e(this,F)&&(clearInterval(e(this,F)),u(this,F,void 0))},it=function(){const t=e(this,y).getQueryCache().build(e(this,y),this.options);if(t===e(this,n))return;const s=e(this,n);u(this,n,t),u(this,W,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},Rt=function(t){It.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(e(this,v))}),e(this,y).getQueryCache().notify({query:e(this,n),type:"observerResultsUpdated"})})},gt);function Lt(i,t){return O(t.enabled,i)!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function vt(i,t){return Lt(i,t)||i.state.data!==void 0&&rt(i,t,t.refetchOnMount)}function rt(i,t,s){if(O(t.enabled,i)!==!1){const r=typeof s=="function"?s(i):s;return r==="always"||r!==!1&&nt(i,t)}return!1}function yt(i,t,s,r){return(i!==t||O(r.enabled,i)===!1)&&(!s.suspense||i.state.status!=="error")&&nt(i,s)}function nt(i,t){return O(t.enabled,i)!==!1&&i.isStaleByTime(N(t.staleTime,i))}function Mt(i,t){return!X(i.getCurrentResult(),t)}function kt(i=""){if(!Qt())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=Ut(i),s=Et(t);if(!s)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return s}function At(i,t,s){const r=kt(),c=Dt(()=>{const a=Ft(t);typeof a.enabled=="function"&&(a.enabled=a.enabled());const S=r.defaultQueryOptions(a);return S._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",S}),h=new i(r,c.value),l=Tt(h.getCurrentResult());let g=()=>{};$(r.isRestoring,a=>{a||(g(),g=h.subscribe(S=>{pt(l,S)}))},{immediate:!0});const T=()=>{h.setOptions(c.value),pt(l,h.getCurrentResult())};$(c,T),xt(()=>{g()});const x=(...a)=>(T(),l.refetch(...a)),w=()=>new Promise((a,S)=>{let P=()=>{};const R=()=>{if(c.value.enabled!==!1){h.setOptions(c.value);const j=h.getOptimisticResult(c.value);j.isStale?(P(),h.fetchOptimistic(c.value).then(a,L=>{bt(c.value.throwOnError,[L,h.getCurrentQuery()])?S(L):a(h.getCurrentResult())})):(P(),a(j))}};R(),P=$(c,R)});$(()=>l.error,a=>{if(l.isError&&!l.isFetching&&bt(c.value.throwOnError,[a,h.getCurrentQuery()]))throw a});const E=Pt(l);for(const a in l)typeof l[a]=="function"&&(E[a]=l[a]);return E.suspense=w,E.refetch=x,E}function Vt(i,t){return At(jt,i)}const Wt=i=>i.includes("http")?i:`http://localhost:3000/api/files/product/${i}`;export{Vt as a,Wt as g,kt as u};
