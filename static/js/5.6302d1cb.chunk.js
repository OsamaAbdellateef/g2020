(this.webpackJsonpsan3etna=this.webpackJsonpsan3etna||[]).push([[5],{356:function(e,t,r){},364:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r.n(n),s=r(26),c=r(28),o=r(25),i=r(32),u=r(33),p=r(34),l=r(0),m=r.n(l),f=(r(356),r(12)),h=r.n(f),d=(r(35),r(21)),b=r(19),y=r(357),U=r.n(y),g=(r(93),Object(l.lazy)((function(){return r.e(3).then(r.bind(null,362))}))),k=h.a.firestore(),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,r,n,s,c=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("###############################################################################################"),window.scrollTo(0,0),t=this.props.set_state,e.next=5,k.collection("users").get().then(console.log("hello there "));case 5:r=e.sent,n=r.docs.map((function(e){return e.data()})),t("currentURL",this.props.match.params),t("nUsers",n),s=this.props.nUsers.filter((function(e){return"worker"==e.signedAs&&e.craft==c.props.currentURL})),t("myCrafts",s);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){!1,this.props.set_state("currentURL",""),console.log("the comp has been unmounted ")}},{key:"componentDidUpdate",value:function(){var e=this;if(this.props.currentURL!==this.props.match.params.categoryId){this.props.set_state("currentURL",this.props.match.params.categoryId);var t=this.props.nUsers.filter((function(t){return"worker"==t.signedAs&&t.craft==e.props.match.params.categoryId}));this.props.set_state("myCrafts",t)}}},{key:"render",value:function(){return m.a.createElement("div",{className:"craft-preview container"},m.a.createElement("div",{className:"row"},this.props.myCrafts.map((function(e){return m.a.createElement(l.Suspense,{key:Math.random(),fallback:m.a.createElement(U.a,{height:100,width:100})},m.a.createElement(g,{key:Math.random(),imageCraftURL:e.imageCraftURL,displayName:e.displayName,address:e.address,phoneNumber:e.phoneNumber,crafterID:e.userID,imagePersonalURL:e.imagePersonalURL,craft:e.craft}))}))))}}]),t}(m.a.Component);t.default=Object(b.b)((function(e){var t=e.user;return{workers:t.workers,plumber:t.plumber,electrician:t.electrician,myCrafts:t.myCrafts,currentURL:t.currentURL,nUsers:t.nUsers}}),(function(e){return{set_state:function(t,r){return e(Object(d.e)(t,r))}}}))(v)}}]);
//# sourceMappingURL=5.6302d1cb.chunk.js.map