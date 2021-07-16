(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1Wne":function(t,n,i){"use strict";i.r(n),i.d(n,"default",(function(){return w}));var e=i("dI71"),o=i("q1tI"),r=i.n(o),a=i("z0FI"),c=i("LG3w"),s=i("UD/Y"),l=i("HGgG"),u=i("bjw9"),g=i("3LCa"),h=i("2urO"),d=i("IObG"),f=i("lHlH"),v=i("Wmn6"),p=i("kh/P"),m=i("aI42"),b=2*Math.PI,_=Object(m.b)(),y=function(t){function n(){return t.apply(this,arguments)||this}Object(e.a)(n,t),n.getInfo=function(){return"\n<p>\nTransform feedback on an instanced cube\n</p>\n"};var i=n.prototype;return i.onInitialize=function(t){var n=t.gl;if(this.demoNotSupported=!Object(f.h)(n),this.demoNotSupported)return{};Object(f.m)(n,{depthTest:!0,depthFunc:n.LEQUAL});for(var i=new g.a(n,new Float32Array([3,3,-3,3,3,-3,-3,-3])),e=new Float32Array(12),o=0;o<4;++o){var r=3*o,a=_(),u=_(),d=_(),m=Math.sqrt(a*a+u*u+d*d);e[r]=a/m,e[r+1]=u/m,e[r+2]=d/m}var y=new g.a(n,e),w=new g.a(n,new Float32Array([_()*b,_()*b,_()*b,_()*b])),L=new h.a(n,{data:"vis-logo.png"}),O=[0,0,10],C=(new p.a).lookAt({eye:O}),P=new p.a,x=new c.a(n,{vs:"\n  attribute float rotations;\n\n  varying float vRotation;\n\n  void main() {\n    vRotation = rotations + 0.01;\n  }\n",sourceBuffers:{rotations:w},feedbackMap:{rotations:"vRotation"},elementCount:4});return{model:new s.a(n,{vs:"  attribute vec3 positions;\n  attribute vec3 normals;\n  attribute vec2 texCoords;\n  attribute vec2 offsets;\n  attribute vec3 axes;\n  attribute float rotations;\n\n  uniform mat4 uView;\n  uniform mat4 uProjection;\n\n  varying vec3 vPosition;\n  varying vec3 vNormal;\n  varying vec2 vUV;\n\n  void main(void) {\n    float s = sin(rotations);\n    float c = cos(rotations);\n    float t = 1.0 - c;\n    float xt = axes.x * t;\n    float yt = axes.y * t;\n    float zt = axes.z * t;\n    float xs = axes.x * s;\n    float ys = axes.y * s;\n    float zs = axes.z * s;\n\n    mat3 rotationMat = mat3(\n        axes.x * xt + c,\n        axes.y * xt + zs,\n        axes.z * xt - ys,\n        axes.x * yt - zs,\n        axes.y * yt + c,\n        axes.z * yt + xs,\n        axes.x * zt + ys,\n        axes.y * zt - xs,\n        axes.z * zt + c\n    );\n\n    vPosition = rotationMat * positions;\n    vPosition.xy += offsets;\n    vNormal = rotationMat * normals;\n    vUV = texCoords;\n    gl_Position = uProjection * uView * vec4(vPosition, 1.0);\n  }\n",fs:"  precision highp float;\n\n  uniform sampler2D uTexture;\n  uniform vec3 uEyePosition;\n\n  varying vec3 vPosition;\n  varying vec3 vNormal;\n  varying vec2 vUV;\n\n  void main(void) {\n    vec3 materialColor = texture2D(uTexture, vec2(vUV.x, 1.0 - vUV.y)).rgb;\n    vec3 surfaceColor = lighting_getLightColor(materialColor, uEyePosition, vPosition, normalize(vNormal));\n\n    gl_FragColor = vec4(surfaceColor, 1.0);\n  }\n",geometry:new l.a,attributes:{offsets:[i,{divisor:1}],axes:[y,{divisor:1}],rotations:[w,{divisor:1}]},uniforms:{uTexture:L,uEyePosition:O,uView:C},modules:[v.a],moduleSettings:{material:{specularColor:[255,255,255]},lights:[{type:"ambient",color:[255,255,255]},{type:"point",color:[255,255,255],position:[4,8,4]}]},instanceCount:4}),transform:x,projectionMatrix:P}},i.onRender=function(t){var n=t.gl,i=t.aspect,e=t.model,o=t.transform,r=t.projectionMatrix;this.demoNotSupported||(r.perspective({fov:Math.PI/3,aspect:i}),o.run(),Object(d.a)(n,{color:[0,0,0,1],depth:!0}),e.setAttributes({rotations:[o.getBuffer("vRotation"),{divisor:1}]}).setUniforms({uProjection:r}).draw(),o.swap())},i.onFinalize=function(t){var n=t.model,i=t.transform;this.demoNotSupported||(i.delete(),n.delete())},i.getAltText=function(){return"THIS DEMO REQUIRES WEBGL 2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},n}(u.a);"undefined"==typeof window||window.website||(new y).start();var w=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n.prototype.render=function(){var t=this.props.pageContext,n=t&&t.exampleConfig||{};return r.a.createElement(a.a,{AnimationLoop:y,exampleConfig:n})},n}(r.a.Component)},HGgG:function(t,n,i){"use strict";i.d(n,"a",(function(){return f}));var e=i("rePB"),o=i("dI71"),r=i("PG+Z"),a=i("BunF");function c(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function s(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){Object(e.a)(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var l=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),u=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),g=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),h=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),d={POSITION:{size:3,value:new Float32Array(u)},NORMAL:{size:3,value:new Float32Array(g)},TEXCOORD_0:{size:2,value:new Float32Array(h)}},f=function(t){function n(n){void 0===n&&(n={});var i=n.id,e=void 0===i?Object(a.c)("cube-geometry"):i;return t.call(this,s(s({},n),{},{id:e,indices:{size:1,value:new Uint16Array(l)},attributes:s(s({},d),n.attributes)}))||this}return Object(o.a)(n,t),n}(r.a)},"PG+Z":function(t,n,i){"use strict";i.d(n,"a",(function(){return l}));var e=i("rePB"),o=i("vuIU"),r=i("BunF"),a=i("Iq2B");function c(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},l=function(){function t(t){void 0===t&&(t={});var n=t,i=n.id,e=void 0===i?Object(r.c)("geometry"):i,o=n.drawMode,a=void 0===o?s.TRIANGLES:o,c=n.attributes,l=void 0===c?{}:c,u=n.indices,g=void 0===u?null:u,h=n.vertexCount,d=void 0===h?null:h;this.id=e,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(l,g),this.vertexCount=d||this._calculateVertexCount(this.attributes,this.indices)}Object(o.a)(t,null,[{key:"DRAW_MODE",get:function(){return s}}]);var n=t.prototype;return n.getVertexCount=function(){return this.vertexCount},n.getAttributes=function(){return this.indices?function(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){Object(e.a)(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}({indices:this.indices},this.attributes):this.attributes},n._print=function(t){return"Geometry "+this.id+" attribute "+t},n._setAttributes=function(t,n){for(var i in n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),t){var e=t[i];e=ArrayBuffer.isView(e)?{value:e}:e,Object(a.a)(ArrayBuffer.isView(e.value),this._print(i)+": must be typed array or object with value as typed array"),"POSITION"!==i&&"positions"!==i||e.size||(e.size=3),"indices"===i?(Object(a.a)(!this.indices),this.indices=e):this.attributes[i]=e}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},n._calculateVertexCount=function(t,n){if(n)return n.value.length;var i=1/0;for(var e in t){var o=t[e],r=o.value,c=o.size;!o.constant&&r&&c>=1&&(i=Math.min(i,r.length/c))}return Object(a.a)(Number.isFinite(i)),i},Object(o.a)(t,[{key:"mode",get:function(){return this.drawMode}}]),t}()},Wmn6:function(t,n,i){"use strict";i.d(n,"a",(function(){return c}));var e=i("xGy9"),o="\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n",r={};function a(t){if(void 0===t&&(t=r),!("material"in t))return{};var n=t.material;return n?function(t){var n=t.ambient,i=void 0===n?.35:n,e=t.diffuse,o=void 0===e?.6:e,r=t.shininess,a=void 0===r?32:r,c=t.specularColor;return{lighting_uAmbient:i,lighting_uDiffuse:o,lighting_uShininess:a,lighting_uSpecularColor:(void 0===c?[30,30,30]:c).map((function(t){return t/255}))}}(n):{lighting_uEnabled:!1}}e.a;var c={name:"phong-lighting",dependencies:[e.a],fs:o,defines:{LIGHTING_FRAGMENT:1},getUniforms:a}},aI42:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return o}));var e=function(){function t(){}t.getInfo=function(){return""};var n=t.prototype;return n.start=function(){},n.stop=function(){},n.delete=function(){},n.onFinalize=function(){},n.waitForRender=function(){return Promise.resolve()},n._setDisplay=function(){},n._getCanvas=function(t){var n;if(void 0===t&&(t={}),t.canvas){n=document.getElementById(t.canvas);var i=window.devicePixelRatio||1;n.height=n.clientHeight*i,n.width=n.clientWidth*i}else(n=document.createElement("canvas")).width=800,n.height=600,document.body.appendChild(n);return n},n._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var n,i;if(this.container=document.createElement("div"),t.canvas){var e=document.getElementById(t.canvas);this.parent=e.parentElement,n=e.clientWidth,i=e.clientHeight,this.container.style.position="relative",this.container.style.top="-"+i+"px"}else this.parent=document.body,n=800,i=800;return this.container.style.width=n+"px",this.container.style.height=i+"px",this.parent.appendChild(this.container),this.container},n._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function o(){var t=1,n=1;return function(){return t=Math.sin(17.23*n),n=Math.cos(27.92*t),(i=1432.71*Math.abs(t*n))-Math.floor(i);var i}}},xGy9:function(t,n,i){"use strict";i.d(n,"a",(function(){return s}));var e="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n\n // Constant-Linear-Exponential\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n";function o(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=t[Symbol.iterator]()).next.bind(i)}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var a={lightSources:{}};function c(t){var n=void 0===t?{}:t,i=n.color,e=void 0===i?[0,0,0]:i,o=n.intensity,r=void 0===o?1:o;return e.map((function(t){return t*r/255}))}var s={name:"lights",vs:e,fs:e,getUniforms:function t(n){if(void 0===n&&(n=a),"lightSources"in n){var i=n.lightSources||{},e=i.ambientLight,r=i.pointLights,s=i.directionalLights;return e||r&&r.length>0||s&&s.length>0?Object.assign({},function(t){var n=t.ambientLight,i=t.pointLights,e=void 0===i?[]:i,o=t.directionalLights,r=void 0===o?[]:o,a={};return a["lighting_uAmbientLight.color"]=n?c(n):[0,0,0],e.forEach((function(t,n){a["lighting_uPointLight["+n+"].color"]=c(t),a["lighting_uPointLight["+n+"].position"]=t.position,a["lighting_uPointLight["+n+"].attenuation"]=t.attenuation||[1,0,0]})),a.lighting_uPointLightCount=e.length,r.forEach((function(t,n){a["lighting_uDirectionalLight["+n+"].color"]=c(t),a["lighting_uDirectionalLight["+n+"].direction"]=t.direction})),a.lighting_uDirectionalLightCount=r.length,a}({ambientLight:e,pointLights:r,directionalLights:s}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in n){for(var l,u={pointLights:[],directionalLights:[]},g=o(n.lights||[]);!(l=g()).done;){var h=l.value;switch(h.type){case"ambient":u.ambientLight=h;break;case"directional":u.directionalLights.push(h);break;case"point":u.pointLights.push(h)}}return t({lightSources:u})}return{}},defines:{MAX_LIGHTS:3}}}}]);