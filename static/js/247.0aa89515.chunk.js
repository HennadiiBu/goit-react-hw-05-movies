"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{377:function(t,e,r){var n=r(861),c=r(757),a=r.n(c),u=r(243),o="https://api.themoviedb.org/3/",i="bb7e126d2686992af4848a036ba19fca",s=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("".concat(o,"trending/").concat("movie","/").concat("day","?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("".concat(o,"search/movie?query=").concat(e,"&api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("".concat(o,"movie/").concat(e,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v={fetchTrendingDayMovie:s,fetchSearchQueryMovie:p,fetchDetailsMovie:l,fetchCreditsMovie:f,fetchReviewsMovie:h,BASE_URL_IMAGE:function(){return"https://image.tmdb.org/t/p/w500"}};e.Z=v},247:function(t,e,r){r.r(e);var n=r(439),c=r(377),a=r(791),u=r(689),o=r(184);e.default=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],i=e[1],s=(0,u.UO)().movieId,p=(0,a.useState)(null),l=(0,n.Z)(p,2),f=l[0],h=l[1];return(0,a.useEffect)((function(){c.Z.fetchCreditsMovie(s).then(h).catch((function(t){return i(t),console.log(r)}))}),[r,s]),(0,o.jsx)(o.Fragment,{children:f?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Cast:"}),(0,o.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"10px",listStyle:"none"},children:f.cast.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:t.profile_path?"".concat(c.Z.BASE_URL_IMAGE()).concat(t.profile_path):"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:"actor ".concat(t.original_name),style:{width:"200px",height:"300px",objectFit:"contain"}}),(0,o.jsx)("h3",{children:t.original_name})]})},t.id)}))})]}):(0,o.jsx)("p",{children:"Actors list not found"})})}}}]);
//# sourceMappingURL=247.0aa89515.chunk.js.map