(this["webpackJsonpcripto-react"]=this["webpackJsonpcripto-react"]||[]).push([[0],{26:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a,c,o,r,i,s,l,d,b,j,u,p,f=t(1),m=t.n(f),O=t(19),x=t.n(O),h=(t(26),t(6)),g=t.n(h),v=t(7),k=t(4),y=t(2),w=t(3),S=t.p+"static/media/cryptomonedas.51f1d2ed.png",C=t(0),E=w.a.label(a||(a=Object(y.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]))),F=w.a.select(c||(c=Object(y.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    outline: none;\n    font-size: 1rem;\n"]))),D=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),o=c[0],r=c[1];return[o,function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E,{children:e}),Object(C.jsxs)(F,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(C.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(e){return Object(C.jsx)("option",{value:e.codigo,children:e.nombre},e.codigo)}))]})]})},r]},z=w.a.label(o||(o=Object(y.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]))),I=w.a.select(r||(r=Object(y.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    outline: none;\n    font-size: 1rem;\n"]))),A=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),o=c[0],r=c[1];return[o,function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(z,{children:e}),Object(C.jsxs)(I,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(C.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(e){return Object(C.jsxs)("option",{value:e.CoinInfo.Name,children:[e.CoinInfo.FullName," (",e.CoinInfo.Name,") "]},e.CoinInfo.Id)}))]})]})},r]},P=t(8),N=t.n(P),B=w.a.p(i||(i=Object(y.a)(['\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: "Bebas Neue", cursive;\n']))),L=function(e){var n=e.mensaje;return Object(C.jsx)(B,{children:n})},U=w.a.input(s||(s=Object(y.a)(["\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #326ac0;\n    cursor: pointer;\n  }\n"]))),T=function(e){var n=e.saveMoneda,t=e.saveCriptomoneda,a=Object(f.useState)([]),c=Object(k.a)(a,2),o=c[0],r=c[1],i=Object(f.useState)(!1),s=Object(k.a)(i,2),l=s[0],d=s[1],b=D("Elige tu moneda","",[{codigo:"USD",nombre:"Dolar de Estados Unidos"},{codigo:"MXN",nombre:"Peso Mexicano"},{codigo:"EUR",nombre:"Euro"},{codigo:"GBP",nombre:"Libra Esterlina"},{codigo:"ARS",nombre:"Peso Argentino"}]),j=Object(k.a)(b,2),u=j[0],p=j[1],m=A("Elige tu criptomoneda","",o),O=Object(k.a)(m,2),x=O[0],h=O[1];Object(f.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,N.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,r(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u&&""!==x?(d(!1),n(u),t(x)):d(!0)},children:[l?Object(C.jsx)(L,{mensaje:"todos los campos son obligatorios"}):null,Object(C.jsx)(p,{}),Object(C.jsx)(h,{}),Object(C.jsx)(U,{type:"submit",value:"Calcular"})]})},H=w.a.div(l||(l=Object(y.a)(["\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n"]))),M=w.a.p(d||(d=Object(y.a)(["\n  font-size: 18px;\n  span {\n    font-weight: bold;\n  }\n"]))),R=w.a.p(b||(b=Object(y.a)(["\n  font-size: 30px;\n  span {\n    font-weight: bold;\n  }\n"]))),Y=function(e){var n=e.resultado;return 0===Object.keys(n).length?null:(console.log(n),Object(C.jsxs)(H,{children:[Object(C.jsxs)(R,{children:["El precio es: ",Object(C.jsx)("span",{children:n.PRICE})]}),Object(C.jsxs)(M,{children:["El precio m\xe1s alto del d\xeda: ",Object(C.jsx)("span",{children:n.HIGHDAY})]}),Object(C.jsxs)(M,{children:["El precio m\xe1s bajo del d\xeda: ",Object(C.jsx)("span",{children:n.LOWDAY})]}),Object(C.jsxs)(M,{children:["Variaci\xf3n \xfaltimas 24 horas: ",Object(C.jsx)("span",{children:n.CHANGEPCT24HOUR})]}),Object(C.jsxs)(M,{children:["\xdatima actualizaci\xf3n: ",Object(C.jsx)("span",{children:n.LASTUPDATE})]})]}))},G=(t(51),function(){return Object(C.jsxs)("div",{class:"sk-chase",children:[Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"})]})}),J=w.a.div(j||(j=Object(y.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]))),V=w.a.img(u||(u=Object(y.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]))),W=w.a.h1(p||(p=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n  &::after {\n    content: "";\n    width: 100px;\n    height: 6px;\n    background-color: #66a2fe;\n    display: block;\n  }\n'])));var X=function(){var e=Object(f.useState)(""),n=Object(k.a)(e,2),t=n[0],a=n[1],c=Object(f.useState)(""),o=Object(k.a)(c,2),r=o[0],i=o[1],s=Object(f.useState)({}),l=Object(k.a)(s,2),d=l[0],b=l[1],j=Object(f.useState)(!1),u=Object(k.a)(j,2),p=u[0],m=u[1];return Object(f.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(r,"&tsyms=").concat(t),e.next=5,N.a.get(n);case 5:a=e.sent,m(!0),setTimeout((function(){m(!1),console.log(a.data.DISPLAY[r][t]),b(a.data.DISPLAY[r][t])}),1e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,t]),Object(C.jsxs)(J,{children:[Object(C.jsx)("div",{children:Object(C.jsx)(V,{src:S,alt:"imagen cripto"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(W,{children:"Cotiza Criptomonedas al instante"}),Object(C.jsx)(T,{saveMoneda:a,saveCriptomoneda:i}),function(e){return e?Object(C.jsx)(G,{}):Object(C.jsx)(Y,{resultado:d})}(p)]})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),o(e),r(e)}))};x.a.render(Object(C.jsx)(m.a.StrictMode,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),q()}},[[52,1,2]]]);
//# sourceMappingURL=main.83e794d3.chunk.js.map