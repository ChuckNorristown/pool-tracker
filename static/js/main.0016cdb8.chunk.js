(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),s=(a(16),a(1)),c=a(4),o=a(5),u=a(6),m=a(9),d=a(7),h=a(10),b=(a(18),a(8)),p=a.n(b),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={newPlayer:"",list:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateInput",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addPlayer",value:function(){var e={id:1+Math.random(),value:this.state.newPlayer.slice()},t=Object(s.a)(this.state.list);t.push(e),this.setState({list:t,newPlayer:""})}},{key:"deleteItem",value:function(e){var t=Object(s.a)(this.state.list).filter(function(t){return t.id!==e});this.setState({list:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,{parent:this}),l.a.createElement("form",null,l.a.createElement("label",{className:"player-name"},l.a.createElement("input",{type:"text",required:!0,value:this.state.newPlayer,onChange:function(t){return e.updateInput("newPlayer",t.target.value)}}),l.a.createElement("div",{className:"label-text"},"Add Player")),l.a.createElement("button",{onClick:function(){return e.addPlayer()},disabled:!this.state.newPlayer.length},"Submit")),l.a.createElement("ul",{className:"player-container"},this.state.list.map(function(t){return l.a.createElement("li",{className:"players",key:t.id},l.a.createElement("div",{className:"card"},t.value),l.a.createElement("label",{className:"wins-label"},l.a.createElement("input",{type:"number",min:"0"}),l.a.createElement("div",{className:"label-text"},"wins")),l.a.createElement("label",null,l.a.createElement("input",{type:"number",min:"0"}),l.a.createElement("div",{className:"label-text loss"},"losses")),l.a.createElement("button",{className:"delete-button",onClick:function(){return e.deleteItem(t.id)}},"Delete"))})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0016cdb8.chunk.js.map