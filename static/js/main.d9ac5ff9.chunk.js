(this.webpackJsonppolishnotation=this.webpackJsonppolishnotation||[]).push([[0],{54:function(e,t,a){e.exports=a(64)},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(59),a(60),a(37)),i=a(23),s=a(104),u=a(102),d=a(106),f=a(103),m=a(4),p=a(97),b=Object(m.a)((function(e){return{root:{height:55,color:"#fff",backgroundColor:"#79cea1","&:hover":{backgroundColor:"#79cea1"}}}}))(p.a),h=a(98),g=a(107),E=a(108),v=Object(h.a)((function(e){return Object(g.a)({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff"},"& label.Mui-focused":{color:"orange"}},input:{color:"#000"},focused:{}})})),j=function(e){var t=v(e);return r.a.createElement(E.a,Object.assign({InputProps:{classes:t,disableUnderline:!0}},e))},O=function(e){var t=e.handleClick,a=Object(n.useState)(""),o=Object(i.a)(a,2),c=o[0],l=o[1];return r.a.createElement(u.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(d.a,{mb:6},r.a.createElement(f.a,{variant:"h3",align:"center",style:{maxWidth:380,color:"#93edd9",fontFamily:"'Roboto', sans-serif",fontWeight:100}},"Expression Evaluator")),r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,md:6,xs:12},r.a.createElement(j,{variant:"filled",type:"number",fullWidth:!0,value:c,onChange:function(e){l(e.target.value)},label:"Please enter a number"})),r.a.createElement(u.a,{item:!0,md:6,xs:12},r.a.createElement(b,{fullWidth:!0,onClick:function(){return t(c)}},"Add Number"))))},k=a(36),y=a(44),x=a(45),C=a(101),I=a(110),W=a(105),w=a(111),S=Object(h.a)((function(e){return Object(g.a)({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,"& label.Mui-focused":{color:"#3f51b5"},"& .MuiFilledInput-root":{background:"transparent"}},focused:{}})})),R=function(e){var t=e.label,a=e.options,n=Object(x.a)(e,["label","options"]),o=S(n);return r.a.createElement(C.a,{fullWidth:!0,variant:"filled",classes:o},r.a.createElement(I.a,null,t),r.a.createElement(W.a,Object.assign({},n,{disableUnderline:!0}),a.map((function(e){return r.a.createElement(w.a,{value:e}," ",e," ")}))))},M=function(e){var t=e.handleClick,a=e.formattedState,o=e.solution,c=Object(n.useState)({operand:"",operator:""}),l=Object(i.a)(c,2),s=l[0],m=l[1],p=function(e){var t=e.target,a=t.name,n=t.value;console.log(a),m(Object(y.a)({},s,Object(k.a)({},a,n)))},h=s.operand,g=s.operator;return r.a.createElement(u.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(d.a,{mb:6,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.a.createElement(u.a,{spacing:2,container:!0,alignItems:"center",justify:"center"},a.map((function(e){return r.a.createElement(u.a,{item:!0,key:"".concat(e,"+").concat(9999*Math.random())},r.a.createElement(d.a,{p:6,style:{backgroundColor:"#ecf5f7",borderRadius:10}},r.a.createElement(f.a,{variant:"h4"}," ",e)))}))),r.a.createElement(f.a,{variant:"h2",align:"center"},"="),r.a.createElement(f.a,{variant:"h2",align:"center",style:{maxWidth:380,color:"#93edd9",fontFamily:"'Roboto', sans-serif",fontWeight:100}},o)),r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,md:4,xs:6},r.a.createElement(R,{fullWidth:!0,value:g,onChange:p,label:"Operator",name:"operator",options:["+","-","*","/"]})),r.a.createElement(u.a,{item:!0,md:4,xs:6},r.a.createElement(j,{label:"Operand",type:"number",fullWidth:!0,value:h,onChange:p,name:"operand",variant:"filled"})),r.a.createElement(u.a,{item:!0,md:4,xs:12},r.a.createElement(b,{fullWidth:!0,onClick:function(){return t([h,g])}},"Add Operation"))))},F=function(e){var t=e.solution,a=e.stack,n=e.updateState;return r.a.createElement(s.a,{maxWidth:"sm"},a.length>0&&r.a.createElement(M,{formattedState:a,solution:t,handleClick:n}),a.length<1&&r.a.createElement(O,{handleClick:n}))},A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),s=Object(i.a)(c,2),u=s[0],d=s[1],f=function(){var e=function(e){if(!(e.length<=2)){var t=["+","-","*","/"],a=[],n=0;for(a.push(e[n]),n++;n<=e.length;){var r=e[n],o=t.indexOf(r);if(o<0)a.push(e[n]);else{if(0==o){var c=parseInt(a.splice(-1)[0],10),l=parseInt(a.splice(-1)[0],10);a.push(c+l)}if(1==o){c=parseInt(a.splice(-1)[0],10),l=parseInt(a.splice(-1)[0],10);a.push(l-c)}if(2==o){c=parseInt(a.splice(-1)[0],10),l=parseInt(a.splice(-1)[0],10);a.push(c*l)}if(3==o){c=parseInt(a.splice(-1)[0],10),l=parseInt(a.splice(-1)[0],10);a.push(l/c)}}n++}return parseInt(a[0],10)}}(a);d(e||a[0])};return Object(n.useEffect)((function(){f()}),[a]),r.a.createElement(F,{solution:u,stack:a,updateState:function(e){o([].concat(Object(l.a)(a),Object(l.a)(e)))}})};var B=function(){return r.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.d9ac5ff9.chunk.js.map