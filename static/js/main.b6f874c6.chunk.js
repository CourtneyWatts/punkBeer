(this.webpackJsonppunkbeer=this.webpackJsonppunkbeer||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/beers_banner.c017c4b5.jpg"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(16),a(17),a(18),a(1)),s=a(2),l=a(4),u=a(3),m=a(6),d=a(5),p=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={ok:!0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Filterbar-container"},r.a.createElement("div",{className:"Filterbar-sort-options"},r.a.createElement("p",null,"Sort By: "),r.a.createElement("select",{onChange:this.props.onChange,value:this.props.is_expenditure},r.a.createElement("option",{defaultValue:!0}," - - - -"),r.a.createElement("option",{value:"strongest"},"Strength"),r.a.createElement("option",{value:"name"},"Name"))))}}]),t}(n.Component)),h=a(7),v=(a(20),function(e){return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"Beercard-container d-flex-col text-center mb-5"},r.a.createElement("img",{src:e.img}),r.a.createElement("div",{className:"Beercard-name"},r.a.createElement("h4",{className:" mt-2"},e.name)),r.a.createElement("p",{className:"Beercard-abv"},"Alc: ",e.abv,"%"),r.a.createElement("p",{className:"Beercard-description"},e.description.substring(0,98),"...")))}),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],sortBy:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;if(t)return r.a.createElement("div",null,"Error: ",t.message);if(a){var c=Object(h.a)(n);return"strongest"===this.props.sortBy?c=Object(h.a)(n).sort((function(e,t){return t.abv-e.abv})):"name"===this.props.sortBy&&(c=Object(h.a)(n).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))),c=c.map((function(e){return r.a.createElement(v,{key:e.id,name:e.name,img:e.image_url,description:e.description,abv:e.abv})})),r.a.createElement("div",{className:"row"},c)}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),f=a(10),E=a.n(f),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sortBy:null},a.handleSort=a.handleSort.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSort",value:function(e){console.log(e.target.value),this.setState({sortBy:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid banner",style:{backgroundImage:"url(".concat(E.a,")")}},r.a.createElement("h1",{className:!0},"Punk Beers")),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(p,{onChange:this.handleSort}),r.a.createElement(b,{sortBy:this.state.sortBy})))}}]),t}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b6f874c6.chunk.js.map