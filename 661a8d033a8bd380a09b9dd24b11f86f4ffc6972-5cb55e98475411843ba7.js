(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2plT":function(t,r,n){"use strict";function e(t,r){if(!t)throw new Error("math.gl assertion ".concat(r))}n.d(r,"a",(function(){return e}))},ARt4:function(t,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"g",(function(){return u})),n.d(r,"c",(function(){return a})),n.d(r,"l",(function(){return o})),n.d(r,"a",(function(){return c})),n.d(r,"k",(function(){return s})),n.d(r,"h",(function(){return h})),n.d(r,"m",(function(){return f})),n.d(r,"j",(function(){return l})),n.d(r,"d",(function(){return v})),n.d(r,"i",(function(){return y})),n.d(r,"n",(function(){return d})),n.d(r,"o",(function(){return b})),n.d(r,"f",(function(){return k})),n.d(r,"e",(function(){return O}));n("QFcT");var e=n("yOd+");function i(t){var r=new e.a(4);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}function u(t,r,n,i){var u=new e.a(4);return u[0]=t,u[1]=r,u[2]=n,u[3]=i,u}function a(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t}function o(t,r,n,e,i){return t[0]=r,t[1]=n,t[2]=e,t[3]=i,t}function c(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t}function s(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t}function h(t){var r=t[0],n=t[1],e=t[2],i=t[3];return Math.hypot(r,n,e,i)}function f(t){var r=t[0],n=t[1],e=t[2],i=t[3];return r*r+n*n+e*e+i*i}function l(t,r){var n=r[0],e=r[1],i=r[2],u=r[3],a=n*n+e*e+i*i+u*u;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=e*a,t[2]=i*a,t[3]=u*a,t}function v(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]}function y(t,r,n,e){var i=r[0],u=r[1],a=r[2],o=r[3];return t[0]=i+e*(n[0]-i),t[1]=u+e*(n[1]-u),t[2]=a+e*(n[2]-a),t[3]=o+e*(n[3]-o),t}function d(t,r,n){var e=r[0],i=r[1],u=r[2],a=r[3];return t[0]=n[0]*e+n[4]*i+n[8]*u+n[12]*a,t[1]=n[1]*e+n[5]*i+n[9]*u+n[13]*a,t[2]=n[2]*e+n[6]*i+n[10]*u+n[14]*a,t[3]=n[3]*e+n[7]*i+n[11]*u+n[15]*a,t}function b(t,r,n){var e=r[0],i=r[1],u=r[2],a=n[0],o=n[1],c=n[2],s=n[3],h=s*e+o*u-c*i,f=s*i+c*e-a*u,l=s*u+a*i-o*e,v=-a*e-o*i-c*u;return t[0]=h*s+v*-a+f*-c-l*-o,t[1]=f*s+v*-o+l*-a-h*-c,t[2]=l*s+v*-c+h*-o-f*-a,t[3]=r[3],t}function k(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}function O(t,r){var n=t[0],i=t[1],u=t[2],a=t[3],o=r[0],c=r[1],s=r[2],h=r[3];return Math.abs(n-o)<=e.b*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-c)<=e.b*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(u-s)<=e.b*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(a-h)<=e.b*Math.max(1,Math.abs(a),Math.abs(h))}var M,p;M=new e.a(4),e.a!=Float32Array&&(M[0]=0,M[1]=0,M[2]=0,M[3]=0),p=M},Ji7U:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n("s4An");function i(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&Object(e.a)(t,r)}},MTwu:function(t,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"e",(function(){return u})),n.d(r,"g",(function(){return a})),n.d(r,"d",(function(){return o})),n.d(r,"c",(function(){return c})),n.d(r,"l",(function(){return s})),n.d(r,"k",(function(){return h})),n.d(r,"m",(function(){return f})),n.d(r,"h",(function(){return l})),n.d(r,"i",(function(){return v})),n.d(r,"j",(function(){return y})),n.d(r,"a",(function(){return d})),n.d(r,"f",(function(){return k}));n("QFcT");var e=n("yOd+");function i(){var t=new e.a(3);return e.a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function u(t,r,n){var i=new e.a(3);return i[0]=t,i[1]=r,i[2]=n,i}function a(t,r){var n=r[0],e=r[1],i=r[2],u=n*n+e*e+i*i;return u>0&&(u=1/Math.sqrt(u)),t[0]=r[0]*u,t[1]=r[1]*u,t[2]=r[2]*u,t}function o(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function c(t,r,n){var e=r[0],i=r[1],u=r[2],a=n[0],o=n[1],c=n[2];return t[0]=i*c-u*o,t[1]=u*a-e*c,t[2]=e*o-i*a,t}function s(t,r,n){var e=r[0],i=r[1],u=r[2],a=n[3]*e+n[7]*i+n[11]*u+n[15];return a=a||1,t[0]=(n[0]*e+n[4]*i+n[8]*u+n[12])/a,t[1]=(n[1]*e+n[5]*i+n[9]*u+n[13])/a,t[2]=(n[2]*e+n[6]*i+n[10]*u+n[14])/a,t}function h(t,r,n){var e=r[0],i=r[1],u=r[2];return t[0]=e*n[0]+i*n[3]+u*n[6],t[1]=e*n[1]+i*n[4]+u*n[7],t[2]=e*n[2]+i*n[5]+u*n[8],t}function f(t,r,n){var e=n[0],i=n[1],u=n[2],a=n[3],o=r[0],c=r[1],s=r[2],h=i*s-u*c,f=u*o-e*s,l=e*c-i*o,v=i*l-u*f,y=u*h-e*l,d=e*f-i*h,b=2*a;return h*=b,f*=b,l*=b,v*=2,y*=2,d*=2,t[0]=o+h+v,t[1]=c+f+y,t[2]=s+l+d,t}function l(t,r,n,e){var i=[],u=[];return i[0]=r[0]-n[0],i[1]=r[1]-n[1],i[2]=r[2]-n[2],u[0]=i[0],u[1]=i[1]*Math.cos(e)-i[2]*Math.sin(e),u[2]=i[1]*Math.sin(e)+i[2]*Math.cos(e),t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t}function v(t,r,n,e){var i=[],u=[];return i[0]=r[0]-n[0],i[1]=r[1]-n[1],i[2]=r[2]-n[2],u[0]=i[2]*Math.sin(e)+i[0]*Math.cos(e),u[1]=i[1],u[2]=i[2]*Math.cos(e)-i[0]*Math.sin(e),t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t}function y(t,r,n,e){var i=[],u=[];return i[0]=r[0]-n[0],i[1]=r[1]-n[1],i[2]=r[2]-n[2],u[0]=i[0]*Math.cos(e)-i[1]*Math.sin(e),u[1]=i[0]*Math.sin(e)+i[1]*Math.cos(e),u[2]=i[2],t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t}function d(t,r){var n=t[0],e=t[1],i=t[2],u=r[0],a=r[1],c=r[2],s=Math.sqrt(n*n+e*e+i*i)*Math.sqrt(u*u+a*a+c*c),h=s&&o(t,r)/s;return Math.acos(Math.min(Math.max(h,-1),1))}var b,k=function(t){var r=t[0],n=t[1],e=t[2];return Math.hypot(r,n,e)};b=i()},ODXe:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n("BsWD");function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(e=(a=o.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,u=c}finally{try{e||null==o.return||o.return()}finally{if(i)throw u}}return n}}(t,r)||Object(e.a)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},QFcT:function(t,r,n){var e=n("I+eb"),i=Math.hypot,u=Math.abs,a=Math.sqrt;e({target:"Math",stat:!0,forced:!!i&&i(1/0,NaN)!==1/0},{hypot:function(t,r){for(var n,e,i=0,o=0,c=arguments.length,s=0;o<c;)s<(n=u(arguments[o++]))?(i=i*(e=s/n)*e+1,s=n):i+=n>0?(e=n/s)*e:n;return s===1/0?1/0:s*a(i)}})},bE5S:function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n("1OyB"),i=n("vuIU"),u=n("Ji7U"),a=n("md7G"),o=n("foSv"),c=n("yeNo"),s=n("2plT");function h(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=Object(o.a)(t);if(r){var i=Object(o.a)(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return Object(a.a)(this,n)}}var f=function(t){Object(u.a)(n,t);var r=h(n);function n(){return Object(e.a)(this,n),r.apply(this,arguments)}return Object(i.a)(n,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"from",value:function(t){return Array.isArray(t)?this.copy(t):this.fromObject(t)}},{key:"fromArray",value:function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;n<this.ELEMENTS;++n)this[n]=t[n+r];return this.check()}},{key:"to",value:function(t){return t===this?this:Object(c.d)(t)?this.toArray(t):this.toObject(t)}},{key:"toTarget",value:function(t){return t?this.to(t):this}},{key:"toArray",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;n<this.ELEMENTS;++n)t[r+n]=this[n];return t}},{key:"toFloat32Array",value:function(){return new Float32Array(this)}},{key:"toString",value:function(){return this.formatString(c.a)}},{key:"formatString",value:function(t){for(var r="",n=0;n<this.ELEMENTS;++n)r+=(n>0?", ":"")+Object(c.c)(this[n],t);return"".concat(t.printTypes?this.constructor.name:"","[").concat(r,"]")}},{key:"equals",value:function(t){if(!t||this.length!==t.length)return!1;for(var r=0;r<this.ELEMENTS;++r)if(!Object(c.b)(this[r],t[r]))return!1;return!0}},{key:"exactEquals",value:function(t){if(!t||this.length!==t.length)return!1;for(var r=0;r<this.ELEMENTS;++r)if(this[r]!==t[r])return!1;return!0}},{key:"negate",value:function(){for(var t=0;t<this.ELEMENTS;++t)this[t]=-this[t];return this.check()}},{key:"lerp",value:function(t,r,n){void 0===n&&(n=r,r=t,t=this);for(var e=0;e<this.ELEMENTS;++e){var i=t[e];this[e]=i+n*(r[e]-i)}return this.check()}},{key:"min",value:function(t){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.min(t[r],this[r]);return this.check()}},{key:"max",value:function(t){for(var r=0;r<this.ELEMENTS;++r)this[r]=Math.max(t[r],this[r]);return this.check()}},{key:"clamp",value:function(t,r){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],t[n]),r[n]);return this.check()}},{key:"add",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var e=0,i=r;e<i.length;e++)for(var u=i[e],a=0;a<this.ELEMENTS;++a)this[a]+=u[a];return this.check()}},{key:"subtract",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var e=0,i=r;e<i.length;e++)for(var u=i[e],a=0;a<this.ELEMENTS;++a)this[a]-=u[a];return this.check()}},{key:"scale",value:function(t){if(Array.isArray(t))return this.multiply(t);for(var r=0;r<this.ELEMENTS;++r)this[r]*=t;return this.check()}},{key:"sub",value:function(t){return this.subtract(t)}},{key:"setScalar",value:function(t){for(var r=0;r<this.ELEMENTS;++r)this[r]=t;return this.check()}},{key:"addScalar",value:function(t){for(var r=0;r<this.ELEMENTS;++r)this[r]+=t;return this.check()}},{key:"subScalar",value:function(t){return this.addScalar(-t)}},{key:"multiplyScalar",value:function(t){for(var r=0;r<this.ELEMENTS;++r)this[r]*=t;return this.check()}},{key:"divideScalar",value:function(t){return this.scale(1/t)}},{key:"clampScalar",value:function(t,r){for(var n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],t),r);return this.check()}},{key:"multiplyByScalar",value:function(t){return this.scale(t)}},{key:"check",value:function(){if(c.a.debug&&!this.validate())throw new Error("math.gl: ".concat(this.constructor.name," some fields set to invalid numbers'"));return this}},{key:"validate",value:function(){for(var t=this.length===this.ELEMENTS,r=0;r<this.ELEMENTS;++r)t=t&&Number.isFinite(this[r]);return t}},{key:"ELEMENTS",get:function(){return Object(s.a)(!1),0}},{key:"elements",get:function(){return this}}]),n}(function(t){function r(){var r=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(r,Object.getPrototypeOf(this)),r}return r.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t,r}(Array))},fOPP:function(t,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return a})),n.d(r,"c",(function(){return c}));var e=n("yeNo");function i(t,r){if(t.length!==r)return!1;for(var n=0;n<t.length;++n)if(!Number.isFinite(t[n]))return!1;return!0}function u(t){if(!Number.isFinite(t))throw new Error("Invalid number ".concat(t));return t}function a(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(e.a.debug&&!i(t,r))throw new Error("math.gl: ".concat(n," some fields set to invalid numbers'"));return t}var o={};function c(t,r){o[t]||(o[t]=!0,console.warn("".concat(t," has been removed in version ").concat(r,", see upgrade guide for more information")))}},foSv:function(t,r,n){"use strict";function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(r,"a",(function(){return e}))},"kh/P":function(t,r,n){"use strict";n.d(r,"a",(function(){return T}));var e=n("ODXe"),i=n("1OyB"),u=n("vuIU"),a=n("Ji7U"),o=n("md7G"),c=n("foSv"),s=n("fOPP"),h=n("bE5S"),f=n("yeNo"),l=n("2plT");function v(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=Object(c.a)(t);if(r){var i=Object(c.a)(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t){Object(a.a)(n,t);var r=v(n);function n(){return Object(i.a)(this,n),r.apply(this,arguments)}return Object(u.a)(n,[{key:"toString",value:function(){var t="[";if(f.a.printRowMajor){t+="row-major:";for(var r=0;r<this.RANK;++r)for(var n=0;n<this.RANK;++n)t+=" ".concat(this[n*this.RANK+r])}else{t+="column-major:";for(var e=0;e<this.ELEMENTS;++e)t+=" ".concat(this[e])}return t+="]"}},{key:"getElementIndex",value:function(t,r){return r*this.RANK+t}},{key:"getElement",value:function(t,r){return this[r*this.RANK+t]}},{key:"setElement",value:function(t,r,n){return this[r*this.RANK+t]=Object(s.a)(n),this}},{key:"getColumn",value:function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Array(this.RANK).fill(-0),n=t*this.RANK,e=0;e<this.RANK;++e)r[e]=this[n+e];return r}},{key:"setColumn",value:function(t,r){for(var n=t*this.RANK,e=0;e<this.RANK;++e)this[n+e]=r[e];return this}},{key:"ELEMENTS",get:function(){return Object(l.a)(!1),0}},{key:"RANK",get:function(){return Object(l.a)(!1),0}}]),n}(h.a),d=n("vtVt"),b=(n("QFcT"),n("yOd+"));function k(t,r,n){var e=r[0],i=r[1],u=r[2],a=r[3],o=r[4],c=r[5],s=r[6],h=r[7],f=r[8],l=r[9],v=r[10],y=r[11],d=r[12],b=r[13],k=r[14],O=r[15],M=n[0],p=n[1],E=n[2],m=n[3];return t[0]=M*e+p*o+E*f+m*d,t[1]=M*i+p*c+E*l+m*b,t[2]=M*u+p*s+E*v+m*k,t[3]=M*a+p*h+E*y+m*O,M=n[4],p=n[5],E=n[6],m=n[7],t[4]=M*e+p*o+E*f+m*d,t[5]=M*i+p*c+E*l+m*b,t[6]=M*u+p*s+E*v+m*k,t[7]=M*a+p*h+E*y+m*O,M=n[8],p=n[9],E=n[10],m=n[11],t[8]=M*e+p*o+E*f+m*d,t[9]=M*i+p*c+E*l+m*b,t[10]=M*u+p*s+E*v+m*k,t[11]=M*a+p*h+E*y+m*O,M=n[12],p=n[13],E=n[14],m=n[15],t[12]=M*e+p*o+E*f+m*d,t[13]=M*i+p*c+E*l+m*b,t[14]=M*u+p*s+E*v+m*k,t[15]=M*a+p*h+E*y+m*O,t}function O(t,r,n){var e=n[0],i=n[1],u=n[2];return t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t[3]=r[3]*e,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=r[7]*i,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=r[11]*u,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function M(t,r,n,e,i){var u,a=1/Math.tan(r/2);return t[0]=a/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(u=1/(e-i),t[10]=(i+e)*u,t[14]=2*i*e*u):(t[10]=-1,t[14]=-2*e),t}function p(t,r,n,e){var i,u,a,o,c,s,h,f,l,v,y=r[0],d=r[1],k=r[2],O=e[0],M=e[1],p=e[2],E=n[0],m=n[1],g=n[2];return Math.abs(y-E)<b.b&&Math.abs(d-m)<b.b&&Math.abs(k-g)<b.b?function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}(t):(h=y-E,f=d-m,l=k-g,i=M*(l*=v=1/Math.hypot(h,f,l))-p*(f*=v),u=p*(h*=v)-O*l,a=O*f-M*h,(v=Math.hypot(i,u,a))?(i*=v=1/v,u*=v,a*=v):(i=0,u=0,a=0),o=f*a-l*u,c=l*i-h*a,s=h*u-f*i,(v=Math.hypot(o,c,s))?(o*=v=1/v,c*=v,s*=v):(o=0,c=0,s=0),t[0]=i,t[1]=o,t[2]=h,t[3]=0,t[4]=u,t[5]=c,t[6]=f,t[7]=0,t[8]=a,t[9]=s,t[10]=l,t[11]=0,t[12]=-(i*y+u*d+a*k),t[13]=-(o*y+c*d+s*k),t[14]=-(h*y+f*d+l*k),t[15]=1,t)}E=new b.a(2),b.a!=Float32Array&&(E[0]=0,E[1]=0),m=E;var E,m,g=n("MTwu"),j=n("ARt4");function R(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=Object(c.a)(t);if(r){var i=Object(c.a)(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return Object(o.a)(this,n)}}var N=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),S=Object.freeze([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),w=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL0ROW3:3,COL1ROW0:4,COL1ROW1:5,COL1ROW2:6,COL1ROW3:7,COL2ROW0:8,COL2ROW1:9,COL2ROW2:10,COL2ROW3:11,COL3ROW0:12,COL3ROW1:13,COL3ROW2:14,COL3ROW3:15}),A={},T=function(t){Object(a.a)(n,t);var r=R(n);function n(t){var e;return Object(i.a)(this,n),e=r.call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),1===arguments.length&&Array.isArray(t)?e.copy(t):e.identity(),e}return Object(u.a)(n,[{key:"INDICES",get:function(){return w}},{key:"ELEMENTS",get:function(){return 16}},{key:"RANK",get:function(){return 4}}],[{key:"IDENTITY",get:function(){return A.IDENTITY=A.IDENTITY||Object.freeze(new n(N)),A.IDENTITY}},{key:"ZERO",get:function(){return A.ZERO=A.ZERO||Object.freeze(new n(S)),A.ZERO}}]),Object(u.a)(n,[{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this[4]=t[4],this[5]=t[5],this[6]=t[6],this[7]=t[7],this[8]=t[8],this[9]=t[9],this[10]=t[10],this[11]=t[11],this[12]=t[12],this[13]=t[13],this[14]=t[14],this[15]=t[15],this.check()}},{key:"set",value:function(t,r,n,e,i,u,a,o,c,s,h,f,l,v,y,d){return this[0]=t,this[1]=r,this[2]=n,this[3]=e,this[4]=i,this[5]=u,this[6]=a,this[7]=o,this[8]=c,this[9]=s,this[10]=h,this[11]=f,this[12]=l,this[13]=v,this[14]=y,this[15]=d,this.check()}},{key:"setRowMajor",value:function(t,r,n,e,i,u,a,o,c,s,h,f,l,v,y,d){return this[0]=t,this[1]=i,this[2]=c,this[3]=l,this[4]=r,this[5]=u,this[6]=s,this[7]=v,this[8]=n,this[9]=a,this[10]=h,this[11]=y,this[12]=e,this[13]=o,this[14]=f,this[15]=d,this.check()}},{key:"toRowMajor",value:function(t){return t[0]=this[0],t[1]=this[4],t[2]=this[8],t[3]=this[12],t[4]=this[1],t[5]=this[5],t[6]=this[9],t[7]=this[13],t[8]=this[2],t[9]=this[6],t[10]=this[10],t[11]=this[14],t[12]=this[3],t[13]=this[7],t[14]=this[11],t[15]=this[15],t}},{key:"identity",value:function(){return this.copy(N)}},{key:"fromQuaternion",value:function(t){return function(t,r){var n=r[0],e=r[1],i=r[2],u=r[3],a=n+n,o=e+e,c=i+i,s=n*a,h=e*a,f=e*o,l=i*a,v=i*o,y=i*c,d=u*a,b=u*o,k=u*c;t[0]=1-f-y,t[1]=h+k,t[2]=l-b,t[3]=0,t[4]=h-k,t[5]=1-s-y,t[6]=v+d,t[7]=0,t[8]=l+b,t[9]=v-d,t[10]=1-s-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}(this,t),this.check()}},{key:"frustum",value:function(t){var r=t.left,e=t.right,i=t.bottom,u=t.top,a=t.near,o=t.far;return o===1/0?n._computeInfinitePerspectiveOffCenter(this,r,e,i,u,a):function(t,r,n,e,i,u,a){var o=1/(n-r),c=1/(i-e),s=1/(u-a);t[0]=2*u*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*c,t[6]=0,t[7]=0,t[8]=(n+r)*o,t[9]=(i+e)*c,t[10]=(a+u)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*u*2*s,t[15]=0}(this,r,e,i,u,a,o),this.check()}},{key:"lookAt",value:function(t,r,n){if(1===arguments.length){var e=t;t=e.eye,r=e.center,n=e.up}return p(this,t,r=r||[0,0,0],n=n||[0,1,0]),this.check()}},{key:"ortho",value:function(t){var r=t.left,n=t.right,e=t.bottom,i=t.top,u=t.near,a=void 0===u?.1:u,o=t.far;return function(t,r,n,e,i,u,a){var o=1/(r-n),c=1/(e-i),s=1/(u-a);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(r+n)*o,t[13]=(i+e)*c,t[14]=(a+u)*s,t[15]=1}(this,r,n,e,i,a,void 0===o?500:o),this.check()}},{key:"orthographic",value:function(t){var r=t.fovy,e=void 0===r?45*Math.PI/180:r,i=t.aspect,u=void 0===i?1:i,a=t.focalDistance,o=void 0===a?1:a,c=t.near,s=void 0===c?.1:c,h=t.far,f=void 0===h?500:h;if(e>2*Math.PI)throw Error("radians");var l=e/2,v=o*Math.tan(l),y=v*u;return(new n).ortho({left:-y,right:y,bottom:-v,top:v,near:s,far:f})}},{key:"perspective",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.fovy,n=void 0===r?void 0:r,e=t.fov,i=void 0===e?45*Math.PI/180:e,u=t.aspect,a=void 0===u?1:u,o=t.near,c=void 0===o?.1:o,s=t.far,h=void 0===s?500:s;if((n=n||i)>2*Math.PI)throw Error("radians");return M(this,n,a,c,h),this.check()}},{key:"determinant",value:function(){return r=(t=this)[0],n=t[1],e=t[2],i=t[3],u=t[4],a=t[5],o=t[6],c=t[7],s=t[8],h=t[9],f=t[10],l=t[11],v=t[12],y=t[13],d=t[14],b=t[15],(r*a-n*u)*(f*b-l*d)-(r*o-e*u)*(h*b-l*y)+(r*c-i*u)*(h*d-f*y)+(n*o-e*a)*(s*b-l*v)-(n*c-i*a)*(s*d-f*v)+(e*c-i*o)*(s*y-h*v);var t,r,n,e,i,u,a,o,c,s,h,f,l,v,y,d,b}},{key:"getScale",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),t[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),t[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),t}},{key:"getTranslation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0];return t[0]=this[12],t[1]=this[13],t[2]=this[14],t}},{key:"getRotation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.getScale(r||[-0,-0,-0]),e=1/n[0],i=1/n[1],u=1/n[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*u,t[3]=0,t[4]=this[4]*e,t[5]=this[5]*i,t[6]=this[6]*u,t[7]=0,t[8]=this[8]*e,t[9]=this[9]*i,t[10]=this[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}},{key:"getRotationMatrix3",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-0,-0,-0,-0,-0,-0,-0,-0,-0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.getScale(r||[-0,-0,-0]),e=1/n[0],i=1/n[1],u=1/n[2];return t[0]=this[0]*e,t[1]=this[1]*i,t[2]=this[2]*u,t[3]=this[4]*e,t[4]=this[5]*i,t[5]=this[6]*u,t[6]=this[8]*e,t[7]=this[9]*i,t[8]=this[10]*u,t}},{key:"transpose",value:function(){return function(t,r){if(t===r){var n=r[1],e=r[2],i=r[3],u=r[6],a=r[7],o=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=n,t[6]=r[9],t[7]=r[13],t[8]=e,t[9]=u,t[11]=r[14],t[12]=i,t[13]=a,t[14]=o}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15]}(this,this),this.check()}},{key:"invert",value:function(){return function(t,r){var n=r[0],e=r[1],i=r[2],u=r[3],a=r[4],o=r[5],c=r[6],s=r[7],h=r[8],f=r[9],l=r[10],v=r[11],y=r[12],d=r[13],b=r[14],k=r[15],O=n*o-e*a,M=n*c-i*a,p=n*s-u*a,E=e*c-i*o,m=e*s-u*o,g=i*s-u*c,j=h*d-f*y,R=h*b-l*y,N=h*k-v*y,S=f*b-l*d,w=f*k-v*d,A=l*k-v*b,T=O*A-M*w+p*S+E*N-m*R+g*j;T&&(T=1/T,t[0]=(o*A-c*w+s*S)*T,t[1]=(i*w-e*A-u*S)*T,t[2]=(d*g-b*m+k*E)*T,t[3]=(l*m-f*g-v*E)*T,t[4]=(c*N-a*A-s*R)*T,t[5]=(n*A-i*N+u*R)*T,t[6]=(b*p-y*g-k*M)*T,t[7]=(h*g-l*p+v*M)*T,t[8]=(a*w-o*N+s*j)*T,t[9]=(e*N-n*w-u*j)*T,t[10]=(y*m-d*p+k*O)*T,t[11]=(f*p-h*m-v*O)*T,t[12]=(o*R-a*S-c*j)*T,t[13]=(n*S-e*R+i*j)*T,t[14]=(d*M-y*E-b*O)*T,t[15]=(h*E-f*M+l*O)*T)}(this,this),this.check()}},{key:"multiplyLeft",value:function(t){return k(this,t,this),this.check()}},{key:"multiplyRight",value:function(t){return k(this,this,t),this.check()}},{key:"rotateX",value:function(t){return function(t,r,n){var e=Math.sin(n),i=Math.cos(n),u=r[4],a=r[5],o=r[6],c=r[7],s=r[8],h=r[9],f=r[10],l=r[11];r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=u*i+s*e,t[5]=a*i+h*e,t[6]=o*i+f*e,t[7]=c*i+l*e,t[8]=s*i-u*e,t[9]=h*i-a*e,t[10]=f*i-o*e,t[11]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateY",value:function(t){return function(t,r,n){var e=Math.sin(n),i=Math.cos(n),u=r[0],a=r[1],o=r[2],c=r[3],s=r[8],h=r[9],f=r[10],l=r[11];r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=u*i-s*e,t[1]=a*i-h*e,t[2]=o*i-f*e,t[3]=c*i-l*e,t[8]=u*e+s*i,t[9]=a*e+h*i,t[10]=o*e+f*i,t[11]=c*e+l*i}(this,this,t),this.check()}},{key:"rotateZ",value:function(t){return function(t,r,n){var e=Math.sin(n),i=Math.cos(n),u=r[0],a=r[1],o=r[2],c=r[3],s=r[4],h=r[5],f=r[6],l=r[7];r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=u*i+s*e,t[1]=a*i+h*e,t[2]=o*i+f*e,t[3]=c*i+l*e,t[4]=s*i-u*e,t[5]=h*i-a*e,t[6]=f*i-o*e,t[7]=l*i-c*e}(this,this,t),this.check()}},{key:"rotateXYZ",value:function(t){var r=Object(e.a)(t,3),n=r[0],i=r[1],u=r[2];return this.rotateX(n).rotateY(i).rotateZ(u)}},{key:"rotateAxis",value:function(t,r){return function(t,r,n,e){var i,u,a,o,c,s,h,f,l,v,y,d,k,O,M,p,E,m,g,j,R,N,S,w,A=e[0],T=e[1],L=e[2],P=Math.hypot(A,T,L);P<b.b||(A*=P=1/P,T*=P,L*=P,i=Math.sin(n),a=1-(u=Math.cos(n)),o=r[0],c=r[1],s=r[2],h=r[3],f=r[4],l=r[5],v=r[6],y=r[7],d=r[8],k=r[9],O=r[10],M=r[11],p=A*A*a+u,E=T*A*a+L*i,m=L*A*a-T*i,g=A*T*a-L*i,j=T*T*a+u,R=L*T*a+A*i,N=A*L*a+T*i,S=T*L*a-A*i,w=L*L*a+u,t[0]=o*p+f*E+d*m,t[1]=c*p+l*E+k*m,t[2]=s*p+v*E+O*m,t[3]=h*p+y*E+M*m,t[4]=o*g+f*j+d*R,t[5]=c*g+l*j+k*R,t[6]=s*g+v*j+O*R,t[7]=h*g+y*j+M*R,t[8]=o*N+f*S+d*w,t[9]=c*N+l*S+k*w,t[10]=s*N+v*S+O*w,t[11]=h*N+y*S+M*w,r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]))}(this,this,t,r),this.check()}},{key:"scale",value:function(t){return Array.isArray(t)?O(this,this,t):O(this,this,[t,t,t]),this.check()}},{key:"translate",value:function(t){return function(t,r,n){var e,i,u,a,o,c,s,h,f,l,v,y,d=n[0],b=n[1],k=n[2];r===t?(t[12]=r[0]*d+r[4]*b+r[8]*k+r[12],t[13]=r[1]*d+r[5]*b+r[9]*k+r[13],t[14]=r[2]*d+r[6]*b+r[10]*k+r[14],t[15]=r[3]*d+r[7]*b+r[11]*k+r[15]):(e=r[0],i=r[1],u=r[2],a=r[3],o=r[4],c=r[5],s=r[6],h=r[7],f=r[8],l=r[9],v=r[10],y=r[11],t[0]=e,t[1]=i,t[2]=u,t[3]=a,t[4]=o,t[5]=c,t[6]=s,t[7]=h,t[8]=f,t[9]=l,t[10]=v,t[11]=y,t[12]=e*d+o*b+f*k+r[12],t[13]=i*d+c*b+l*k+r[13],t[14]=u*d+s*b+v*k+r[14],t[15]=a*d+h*b+y*k+r[15])}(this,this,t),this.check()}},{key:"transform",value:function(t,r){return 4===t.length?(r=j.n(r||[-0,-0,-0,-0],t,this),Object(s.b)(r,4),r):this.transformAsPoint(t,r)}},{key:"transformAsPoint",value:function(t,r){switch(t.length){case 2:r=function(t,r,n){var e=r[0],i=r[1];return t[0]=n[0]*e+n[4]*i+n[12],t[1]=n[1]*e+n[5]*i+n[13],t}(r||[-0,-0],t,this);break;case 3:r=g.l(r||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(r,t.length),r}},{key:"transformAsVector",value:function(t,r){switch(t.length){case 2:r=Object(d.a)(r||[-0,-0],t,this);break;case 3:r=Object(d.c)(r||[-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return Object(s.b)(r,t.length),r}},{key:"makeRotationX",value:function(t){return this.identity().rotateX(t)}},{key:"makeTranslation",value:function(t,r,n){return this.identity().translate([t,r,n])}},{key:"transformPoint",value:function(t,r){return Object(s.c)("Matrix4.transformPoint","3.0"),this.transformAsPoint(t,r)}},{key:"transformVector",value:function(t,r){return Object(s.c)("Matrix4.transformVector","3.0"),this.transformAsPoint(t,r)}},{key:"transformDirection",value:function(t,r){return Object(s.c)("Matrix4.transformDirection","3.0"),this.transformAsVector(t,r)}}],[{key:"_computeInfinitePerspectiveOffCenter",value:function(t,r,n,e,i,u){var a=2*u/(n-r),o=2*u/(i-e),c=(n+r)/(n-r),s=(i+e)/(i-e),h=-2*u;return t[0]=a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=c,t[9]=s,t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=h,t[15]=0,t}}]),n}(y)},md7G:function(t,r,n){"use strict";n.d(r,"a",(function(){return u}));var e=n("U8pU"),i=n("JX7q");function u(t,r){return!r||"object"!==Object(e.a)(r)&&"function"!=typeof r?Object(i.a)(t):r}},vtVt:function(t,r,n){"use strict";function e(t,r,n){var e=r[0],i=r[1],u=n[3]*e+n[7]*i||1;return t[0]=(n[0]*e+n[4]*i)/u,t[1]=(n[1]*e+n[5]*i)/u,t}function i(t,r,n){var e=r[0],i=r[1],u=r[2],a=n[3]*e+n[7]*i+n[11]*u||1;return t[0]=(n[0]*e+n[4]*i+n[8]*u)/a,t[1]=(n[1]*e+n[5]*i+n[9]*u)/a,t[2]=(n[2]*e+n[6]*i+n[10]*u)/a,t}function u(t,r,n){var e=r[0],i=r[1];return t[0]=n[0]*e+n[2]*i,t[1]=n[1]*e+n[3]*i,t[2]=r[2],t}n.d(r,"a",(function(){return e})),n.d(r,"c",(function(){return i})),n.d(r,"b",(function(){return u}))},"yOd+":function(t,r,n){"use strict";n.d(r,"b",(function(){return e})),n.d(r,"a",(function(){return i})),n.d(r,"c",(function(){return u}));n("QFcT");var e=1e-6,i="undefined"!=typeof Float32Array?Float32Array:Array,u=Math.random;Math.PI;Math.hypot||(Math.hypot=function(){for(var t=0,r=arguments.length;r--;)t+=arguments[r]*arguments[r];return Math.sqrt(t)})},yeNo:function(t,r,n){"use strict";n.d(r,"a",(function(){return i})),n.d(r,"c",(function(){return a})),n.d(r,"d",(function(){return o})),n.d(r,"e",(function(){return s})),n.d(r,"b",(function(){return h}));n("RHh3"),n("KQm4"),n("2plT"),Math.PI;var e=1/180*Math.PI,i={};function u(t){return Math.round(t/i.EPSILON)*i.EPSILON}function a(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.precision,e=void 0===n?i.precision||4:n;return t=u(t),"".concat(parseFloat(t.toPrecision(e)))}function o(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function c(t,r,n){if(o(t)){n=n||((i=t).clone?i.clone():new Array(i.length));for(var e=0;e<n.length&&e<t.length;++e)n[e]=r(t[e],e,n);return n}var i;return r(t)}function s(t,r){return c(t,(function(t){return t*e}),r)}function h(t,r,n){var e=i.EPSILON;n&&(i.EPSILON=n);try{if(t===r)return!0;if(o(t)&&o(r)){if(t.length!==r.length)return!1;for(var u=0;u<t.length;++u)if(!h(t[u],r[u]))return!1;return!0}return t&&t.equals?t.equals(r):r&&r.equals?r.equals(t):!(!Number.isFinite(t)||!Number.isFinite(r))&&Math.abs(t-r)<=i.EPSILON*Math.max(1,Math.abs(t),Math.abs(r))}finally{i.EPSILON=e}}i.EPSILON=1e-12,i.debug=!1,i.precision=4,i.printTypes=!1,i.printDegrees=!1,i.printRowMajor=!0}}]);