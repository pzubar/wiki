!function(e){function c(c){for(var r,f,a=c[0],o=c[1],i=c[2],u=0,s=[];u<a.length;u++)f=a[u],Object.prototype.hasOwnProperty.call(n,f)&&n[f]&&s.push(n[f][0]),n[f]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(l&&l(c);s.length;)s.shift()();return d.push.apply(d,i||[]),t()}function t(){for(var e,c=0;c<d.length;c++){for(var t=d[c],r=!0,f=1;f<t.length;f++){var o=t[f];0!==n[o]&&(r=!1)}r&&(d.splice(c--,1),e=a(a.s=t[0]))}return e}var r={},f={5:0},n={5:0},d=[];function a(c){if(r[c])return r[c].exports;var t=r[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var c=[];f[e]?c.push(f[e]):0!==f[e]&&{7:1,8:1}[e]&&c.push(f[e]=new Promise((function(c,t){for(var r="static/css/"+({}[e]||e)+"."+{0:"31d6cfe0",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",7:"2fe65d49",8:"fa4a79a6",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0",39:"31d6cfe0",40:"31d6cfe0",41:"31d6cfe0",42:"31d6cfe0",43:"31d6cfe0",44:"31d6cfe0",45:"31d6cfe0",46:"31d6cfe0",47:"31d6cfe0",48:"31d6cfe0",49:"31d6cfe0",50:"31d6cfe0",51:"31d6cfe0",52:"31d6cfe0",53:"31d6cfe0",54:"31d6cfe0",55:"31d6cfe0",56:"31d6cfe0",57:"31d6cfe0",58:"31d6cfe0",59:"31d6cfe0",60:"31d6cfe0",61:"31d6cfe0",62:"31d6cfe0",63:"31d6cfe0",64:"31d6cfe0"}[e]+".chunk.css",n=a.p+r,d=document.getElementsByTagName("link"),o=0;o<d.length;o++){var i=(l=d[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===r||i===n))return c()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){var l;if((i=(l=u[o]).getAttribute("data-href"))===r||i===n)return c()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=c,s.onerror=function(c){var r=c&&c.target&&c.target.src||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");d.code="CSS_CHUNK_LOAD_FAILED",d.request=r,delete f[e],s.parentNode.removeChild(s),t(d)},s.href=n,document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){f[e]=0})));var t=n[e];if(0!==t)if(t)c.push(t[2]);else{var r=new Promise((function(c,r){t=n[e]=[c,r]}));c.push(t[2]=r);var d,o=document.createElement("script");o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=function(e){return a.p+"static/js/"+({}[e]||e)+"."+{0:"522836f8",1:"0d4b3290",2:"625c9ff5",3:"f0c23c3c",7:"c9c13285",8:"30283e15",9:"f0eb6821",10:"5ec92413",11:"7dd7cc9b",12:"430a92e1",13:"fcc88a09",14:"c6d51817",15:"8bdef080",16:"445e52ae",17:"e3c38a97",18:"3a000467",19:"bc34e0a5",20:"ca38bf43",21:"e11cf00c",22:"a6429e21",23:"c874a0ba",24:"2b363e88",25:"0e429f01",26:"129362f6",27:"18ddaaa9",28:"e56b1d0e",29:"077cccae",30:"92639b18",31:"ca8274a4",32:"217a44e6",33:"56f0e9ce",34:"b61c7d7a",35:"2ebce080",36:"79c9a844",37:"9f524cbc",38:"f090262f",39:"6e2cd040",40:"e153ea00",41:"16aeb9f5",42:"e50edc82",43:"50332677",44:"040eb127",45:"2157958d",46:"ab193d29",47:"1a6e328f",48:"a9930e32",49:"e6f73728",50:"c228b544",51:"93d08186",52:"7379d882",53:"fb13c582",54:"7af07cc7",55:"3313dd7a",56:"640986fa",57:"f9001f42",58:"b248f137",59:"a78056c0",60:"d79d6edd",61:"d704bad3",62:"9c63ae7f",63:"82a48d13",64:"05cd7397"}[e]+".chunk.js"}(e);var i=new Error;d=function(c){o.onerror=o.onload=null,clearTimeout(u);var t=n[e];if(0!==t){if(t){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+f+")",i.name="ChunkLoadError",i.type=r,i.request=f,t[1](i)}n[e]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:o})}),12e4);o.onerror=o.onload=d,document.head.appendChild(o)}return Promise.all(c)},a.m=e,a.c=r,a.d=function(e,c,t){a.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,c){if(1&c&&(e=a(e)),8&c)return e;if(4&c&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var r in e)a.d(t,r,function(c){return e[c]}.bind(null,r));return t},a.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(c,"a",c),c},a.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a.p="/wiki/",a.oe=function(e){throw console.error(e),e};var o=this.webpackJsonpUkrPolitWiki=this.webpackJsonpUkrPolitWiki||[],i=o.push.bind(o);o.push=c,o=o.slice();for(var u=0;u<o.length;u++)c(o[u]);var l=i;t()}([]);
//# sourceMappingURL=runtime-main.bbb48e3d.js.map