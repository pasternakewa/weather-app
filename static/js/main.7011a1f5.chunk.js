(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(4),i=n.n(o),r=(n(9),n(2)),s=(n(10),n(0)),d=function(t){var e=t.weatherIconId,n=t.alt;return Object(s.jsx)("img",{style:{width:100,height:100},src:"".concat("http://openweathermap.org/img/wn/").concat(e,"@2x.png"),alt:n})},l=function(t){var e=t.value,n=t.onChange,c=t.onKeyPress;return Object(s.jsx)("div",{children:Object(s.jsx)("input",{className:"form__input",value:e,onChange:n,onKeyPress:c})})};var u=function(){var t,e,n,a,o,i,u,j,h=Object(c.useState)(!0),b=Object(r.a)(h,2),p=b[0],g=b[1],v=Object(c.useState)(),f=Object(r.a)(v,2),O=f[0],m=f[1],x=Object(c.useState)(),w=Object(r.a)(x,2),y=w[0],C=w[1],I=Object(c.useState)(""),F=Object(r.a)(I,2),P=F[0],S=F[1];Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,n=function(t){var e=t.latitude,n=t.longitude;return"".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(e,"&lon=").concat(n,"&appid=").concat("d653cb26970b9927981d167dcdb1f0fc")}({latitude:e.latitude,longitude:e.longitude});_(n)}),g(!1))}),[]);var _=function(t){g(!0);var e=t||function(t){return"".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(t,"&units=metric&appid=").concat("d653cb26970b9927981d167dcdb1f0fc")}(P);fetch(e).then((function(t){return t.json()})).then((function(t){if(200!==t.cod)throw new Error(t.message);C(t),m(),S(t.name),g(!1)})).catch((function(t){g(!1),m(t.toString()),C()}))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"background__shape"}),Object(s.jsxs)("div",{className:"weather-container",children:[Object(s.jsx)(l,{value:P,onChange:function(t){var e=t.target;return[S(e.value)]},onKeyPress:function(t){13===t.charCode&&_()}}),Object(s.jsx)("button",{className:"form__button",onClick:function(){return _()},children:"Submit"}),y&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{style:{fontWeight:"bold"},children:[y.name,", ",null===(t=y.sys)||void 0===t?void 0:t.country]}),Object(s.jsxs)("p",{children:[null===(e=y.main)||void 0===e?void 0:e.temp,"\u2103"]}),Object(s.jsx)(d,{weatherIconId:null===(n=y.weather)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.icon,alt:null===(o=y.weather)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.description}),Object(s.jsx)("p",{children:null===(u=y.weather)||void 0===u||null===(j=u[0])||void 0===j?void 0:j.description})]}),O&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:[O,"."]}),Object(s.jsx)("p",{children:"Please enter a valid city and try again."})]}),!O&&(p||!y)&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{weatherIconId:"50d",alt:"Fog"}),Object(s.jsx)("p",{children:"I'm a little foggy..."}),Object(s.jsx)("p",{children:"Please enter a city or allow access to location."})]})]})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7011a1f5.chunk.js.map