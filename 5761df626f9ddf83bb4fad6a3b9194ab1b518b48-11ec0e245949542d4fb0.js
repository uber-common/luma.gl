(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{DhAv:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("xmzN"),n=r("WFpA");function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var o=function(){function e(e){this.gl=e,this._programCache={},this._getUniforms={},this._registeredModules={},this._hookFunctions=[],this._defaultModules=[],this._hashes={},this._hashCounter=0,this.stateHash=0,this._useCounts={}}e.getDefaultProgramManager=function(t){return t.luma=t.luma||{},t.luma.defaultProgramManager=t.luma.defaultProgramManager||new e(t),t.luma.defaultProgramManager};var t=e.prototype;return t.addDefaultModule=function(e){this._defaultModules.find((function(t){return t.name===e.name}))||this._defaultModules.push(e),this.stateHash++},t.removeDefaultModule=function(e){var t="string"==typeof e?e:e.name;this._defaultModules=this._defaultModules.filter((function(e){return e.name!==t})),this.stateHash++},t.addShaderHook=function(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e),this.stateHash++},t.get=function(e){var t=this;void 0===e&&(e={});for(var r,a=e,o=a.vs,u=void 0===o?"":o,f=a.fs,d=void 0===f?"":f,h=a.defines,c=void 0===h?{}:h,l=a.inject,g=void 0===l?{}:l,m=a.varyings,v=void 0===m?[]:m,b=a.bufferMode,p=void 0===b?35981:b,y=a.transpileToGLSL100,_=void 0!==y&&y,O=this._getModuleList(e.modules),M=this._getHash(u),A=this._getHash(d),j=O.map((function(e){return t._getHash(e.name)})).sort(),C=v.map((function(e){return t._getHash(e)})),S=Object.keys(c).sort(),x=Object.keys(g).sort(),w=[],I=[],F=s(S);!(r=F()).done;){var B=r.value;w.push(this._getHash(B)),w.push(this._getHash(c[B]))}for(var P,D=s(x);!(P=D()).done;){var T=P.value;I.push(this._getHash(T)),I.push(this._getHash(g[T]))}var E=M+"/"+A+"D"+w.join("/")+"M"+j.join("/")+"I"+I.join("/")+"V"+C.join("/")+"H"+this.stateHash+"B"+p+(_?"T":"");if(!this._programCache[E]){var k=Object(i.a)(this.gl,{vs:u,fs:d,modules:O,inject:g,defines:c,hookFunctions:this._hookFunctions,transpileToGLSL100:_});this._programCache[E]=new n.a(this.gl,{hash:E,vs:k.vs,fs:k.fs,varyings:v,bufferMode:p}),this._getUniforms[E]=k.getUniforms||function(e){},this._useCounts[E]=0}return this._useCounts[E]++,this._programCache[E]},t.getUniforms=function(e){return this._getUniforms[e.hash]||null},t.release=function(e){var t=e.hash;this._useCounts[t]--,0===this._useCounts[t]&&(this._programCache[t].delete(),delete this._programCache[t],delete this._getUniforms[t],delete this._useCounts[t])},t._getHash=function(e){return void 0===this._hashes[e]&&(this._hashes[e]=this._hashCounter++),this._hashes[e]},t._getModuleList=function(e){void 0===e&&(e=[]);for(var t=new Array(this._defaultModules.length+e.length),r={},i=0,n=0,s=this._defaultModules.length;n<s;++n){var a=this._defaultModules[n],o=a.name;t[i++]=a,r[o]=!0}for(var u=0,f=e.length;u<f;++u){var d=e[u],h=d.name;r[h]||(t[i++]=d,r[h]=!0)}return t.length=i,t},e}()},GInI:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r("JX7q"),n=r("dI71"),s=r("73Rc"),a=r("lHlH"),o=r("98Cc"),u=r("3LCa"),f=r("BunF"),d=function(e){function t(t,r){var n;return void 0===r&&(r={}),Object(a.a)(t),(n=e.call(this,t,r)||this).initialize(r),n.stubRemovedMethods("TransformFeedback","v6.0",["pause","resume"]),Object.seal(Object(i.a)(n)),n}Object(n.a)(t,e),t.isSupported=function(e){return Object(a.h)(e)};var r=t.prototype;return r.initialize=function(e){var t=this;return void 0===e&&(e={}),this.buffers={},this.unused={},this.configuration=null,this.bindOnUse=!0,Object(f.a)(this.buffers)||this.bind((function(){return t._unbindBuffers()})),this.setProps(e),this},r.setProps=function(e){"program"in e&&(this.configuration=e.program&&e.program.configuration),"configuration"in e&&(this.configuration=e.configuration),"bindOnUse"in e&&(e=e.bindOnUse),"buffers"in e&&this.setBuffers(e.buffers)},r.setBuffers=function(e){var t=this;return void 0===e&&(e={}),this.bind((function(){for(var r in e)t.setBuffer(r,e[r])})),this},r.setBuffer=function(e,t){var r=this,i=this._getVaryingIndex(e),n=this._getBufferParams(t),s=n.buffer,o=n.byteSize,u=n.byteOffset;return i<0?(this.unused[e]=s,a.i.warn((function(){return r.id+" unused varying buffer "+e}))(),this):(this.buffers[i]=t,this.bindOnUse||this._bindBuffer(i,s,u,o),this)},r.begin=function(e){return void 0===e&&(e=s.a.POINTS),this.gl.bindTransformFeedback(s.a.TRANSFORM_FEEDBACK,this.handle),this._bindBuffers(),this.gl.beginTransformFeedback(e),this},r.end=function(){return this.gl.endTransformFeedback(),this._unbindBuffers(),this.gl.bindTransformFeedback(s.a.TRANSFORM_FEEDBACK,null),this},r._getBufferParams=function(e){var t,r,i;return e instanceof u.a==!1?(i=e.buffer,r=e.byteSize,t=e.byteOffset):i=e,void 0===t&&void 0===r||(t=t||0,r=r||i.byteLength-t),{buffer:i,byteOffset:t,byteSize:r}},r._getVaryingInfo=function(e){return this.configuration&&this.configuration.getVaryingInfo(e)},r._getVaryingIndex=function(e){if(this.configuration)return this.configuration.getVaryingInfo(e).location;var t=Number(e);return Number.isFinite(t)?t:-1},r._bindBuffers=function(){if(this.bindOnUse)for(var e in this.buffers){var t=this._getBufferParams(this.buffers[e]),r=t.buffer,i=t.byteSize,n=t.byteOffset;this._bindBuffer(e,r,n,i)}},r._unbindBuffers=function(){if(this.bindOnUse)for(var e in this.buffers)this._bindBuffer(e,null)},r._bindBuffer=function(e,t,r,i){void 0===r&&(r=0);var n=t&&t.handle;return n&&void 0!==i?this.gl.bindBufferRange(s.a.TRANSFORM_FEEDBACK_BUFFER,e,n,r,i):this.gl.bindBufferBase(s.a.TRANSFORM_FEEDBACK_BUFFER,e,n),this},r._createHandle=function(){return this.gl.createTransformFeedback()},r._deleteHandle=function(){this.gl.deleteTransformFeedback(this.handle)},r._bindHandle=function(e){this.gl.bindTransformFeedback(s.a.TRANSFORM_FEEDBACK,this.handle)},t}(o.a)},"UD/Y":function(e,t,r){"use strict";r.d(t,"a",(function(){return D}));var i=r("73Rc"),n=r("lHlH"),s=r("DhAv"),a=r("BunF"),o=r("Iq2B"),u=r("IObG"),f=r("WFpA"),d=r("WrWi"),h=r("3LCa"),c=r("GInI"),l=r("62vL"),g=r("Ifu7");function m(e,t){void 0===t&&(t={});var r=t.isInteger,i=void 0!==r&&r;if(Array.isArray(e)||ArrayBuffer.isView(e))return function(e,t){for(var r=t.maxElts,i=void 0===r?16:r,n=t.size,s=void 0===n?1:n,a="[",o=0;o<e.length&&o<i;++o)o>0&&(a+=","+(o%s==0?" ":"")),a+=m(e[o],t);return""+a+(e.length>i?"...":"]")}(e,t);if(!Number.isFinite(e))return String(e);if(Math.abs(e)<1e-16)return i?"0":"0.";if(i)return e.toFixed(0);if(Math.abs(e)>100&&Math.abs(e)<1e4)return e.toFixed(0);var n=e.toPrecision(2);return n.indexOf(".0")===n.length-2?n.slice(0,-1):n}function v(e,t,r,i){var n,s,a=e.gl;if(!t)return(s={})[i]="null",s["Format "]="N/A",s;var o,u,f,d="NOT PROVIDED",c=1,g=0,v=0;if(r&&(d=r.type,c=r.size,o=-1!==(d=String(d).replace("Array","")).indexOf("nt")),t instanceof h.a){var b,p,y=t,_=y.getDebugData(),O=_.data;if(u=_.changed?"*":"",f=O,g=(v=y.byteLength)/O.BYTES_PER_ELEMENT/c,r)p=(r.divisor>0?"I ":"P ")+" "+g+" (x"+c+"="+v+" bytes "+Object(l.a)(a,d)+")";else o=!0,p=v+" bytes";return(b={})[i]=""+u+m(f,{size:c,isInteger:o}),b["Format "]=p,b}return f=t,c=t.length,o=-1!==(d=String(t.constructor.name).replace("Array","")).indexOf("nt"),(n={})[i]=m(f,{size:c,isInteger:o})+" (constant)",n["Format "]=c+"x"+d+" (constant)",n}function b(e,t){var r=t.type,i=t.size,n=Object(g.b)(r,i);return n?e+" ("+n.name+")":e}function p(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _(e){var t=e.header,r=void 0===t?"Uniforms":t,i=e.program,n=e.uniforms,s=e.undefinedOnly,a=void 0!==s&&s;Object(o.a)(i);for(var u,f=i._uniformSetters,d={},h=Object.keys(f).sort(),c=0,l=p(h);!(u=l()).done;){var g=u.value;g.match(".*_.*")||g.match(".*Matrix")||O({table:d,header:r,uniforms:n,uniformName:g,undefinedOnly:a})&&c++}for(var v,b=p(h);!(v=b()).done;){var y=v.value;y.match(".*Matrix")&&O({table:d,header:r,uniforms:n,uniformName:y,undefinedOnly:a})&&c++}for(var _,M=p(h);!(_=M()).done;){var A=_.value;d[A]||O({table:d,header:r,uniforms:n,uniformName:A,undefinedOnly:a})&&c++}var j=0,C={};if(!a)for(var S in n){var x,w=n[S];if(!d[S])j++,C[S]=((x={Type:"NOT USED: "+w})[r]=m(w),x)}return{table:d,count:c,unusedTable:C,unusedCount:j}}function O(e){var t,r=e.table,i=e.header,n=e.uniforms,s=e.uniformName,a=e.undefinedOnly,o=n[s],u=function(e){return null!=e}(o);return(!a||!u)&&(r[s]=((t={})[i]=u?m(o):"N/A",t["Uniform Type"]=u?o:"NOT PROVIDED",t),!0)}function M(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function j(e){var t=e.accessor,r=t.type,i=t.size,n=Object(g.b)(r,i);return n?n.name+" "+e.name:e.name}var C=r("rePB");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){Object(C.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={POSITION:"positions",NORMAL:"normals",COLOR_0:"colors",TEXCOORD_0:"texCoords",TEXCOORD_1:"texCoords1",TEXCOORD_2:"texCoords2"};function I(e,t){var r=(t||{}).attributeMap,i=void 0===r?w:r;return i&&i[e]||e}function F(e,t){var r;switch(e){case"texCoords":case"texCoord1":case"texCoord2":case"texCoord3":r="uvs";break;case"vertices":case"positions":case"normals":case"pickingColors":r="vectors"}switch(r){case"vectors":t.size=t.size||3;break;case"uvs":t.size=t.size||2}Object(o.a)(Number.isFinite(t.size),"attribute "+e+" needs size")}var B=function(){},P={},D=function(){function e(e,t){void 0===t&&(t={});var r=t.id,i=void 0===r?Object(a.c)("model"):r;Object(o.a)(Object(n.g)(e)),this.id=i,this.gl=e,this.id=t.id||Object(a.c)("Model"),this.lastLogTime=0,this.animated=!1,this.initialize(t)}var t=e.prototype;return t.initialize=function(e){this.props={},this.programManager=e.programManager||s.a.getDefaultProgramManager(this.gl),this._programManagerState=-1,this._managedProgram=!1;var t=e.program,r=void 0===t?null:t,n=e.vs,a=e.fs,u=e.modules,f=e.defines,d=e.inject,h=e.varyings,c=e.bufferMode,l=e.transpileToGLSL100;this.programProps={program:r,vs:n,fs:a,modules:u,defines:f,inject:d,varyings:h,bufferMode:c,transpileToGLSL100:l},this.program=null,this.vertexArray=null,this._programDirty=!0,this.userData={},this.needsRedraw=!0,this._attributes={},this.attributes={},this.uniforms={},this.pickable=!0,this._checkProgram(),this.setUniforms(Object.assign({},this.getModuleUniforms(e.moduleSettings))),this.drawMode=void 0!==e.drawMode?e.drawMode:i.a.TRIANGLES,this.vertexCount=e.vertexCount||0,this.geometryBuffers={},this.isInstanced=e.isInstanced||e.instanced||e.instanceCount>0,this._setModelProps(e),this.geometry={},Object(o.a)(void 0!==this.drawMode&&Number.isFinite(this.vertexCount),"Model needs drawMode and vertexCount")},t.setProps=function(e){this._setModelProps(e)},t.delete=function(){for(var e in this._attributes)this._attributes[e]!==this.attributes[e]&&this._attributes[e].delete();this._managedProgram&&(this.programManager.release(this.program),this._managedProgram=!1),this.vertexArray.delete(),this._deleteGeometryBuffers()},t.getDrawMode=function(){return this.drawMode},t.getVertexCount=function(){return this.vertexCount},t.getInstanceCount=function(){return this.instanceCount},t.getAttributes=function(){return this.attributes},t.getProgram=function(){return this.program},t.setProgram=function(e){var t=e.program,r=e.vs,i=e.fs,n=e.modules,s=e.defines,a=e.inject,o=e.varyings,u=e.bufferMode,f=e.transpileToGLSL100;this.programProps={program:t,vs:r,fs:i,modules:n,defines:s,inject:a,varyings:o,bufferMode:u,transpileToGLSL100:f},this._programDirty=!0},t.getUniforms=function(){return this.uniforms},t.setDrawMode=function(e){return this.drawMode=e,this},t.setVertexCount=function(e){return Object(o.a)(Number.isFinite(e)),this.vertexCount=e,this},t.setInstanceCount=function(e){return Object(o.a)(Number.isFinite(e)),this.instanceCount=e,this},t.setGeometry=function(e){return this.drawMode=e.drawMode,this.vertexCount=e.getVertexCount(),this._deleteGeometryBuffers(),this.geometryBuffers=function(e,t,r){var n={},s=t.indices;for(var a in t.attributes){var u=t.attributes[a],f=I(a,r);if("indices"===a)s=u;else if(u.constant)n[f]=u.value;else{var d=u.value,c=x({},u);delete c.value,n[f]=[new h.a(e,d),c],F(a,c)}}if(s){var l=s.value||s;Object(o.a)(l instanceof Uint16Array||l instanceof Uint32Array,'attribute array for "indices" must be of integer type');var g={size:1,isIndexed:void 0===s.isIndexed||s.isIndexed};n.indices=[new h.a(e,{data:l,target:i.a.ELEMENT_ARRAY_BUFFER}),g]}return n}(this.gl,e),this.vertexArray.setAttributes(this.geometryBuffers),this},t.setAttributes=function(e){if(void 0===e&&(e={}),Object(a.a)(e))return this;var t={};for(var r in e){var i=e[r];t[r]=i.getValue?i.getValue():i}return this.vertexArray.setAttributes(t),this},t.setUniforms=function(e){return void 0===e&&(e={}),Object.assign(this.uniforms,e),this},t.getModuleUniforms=function(e){this._checkProgram();var t=this.programManager.getUniforms(this.program);return t?t(e):{}},t.updateModuleSettings=function(e){var t=this.getModuleUniforms(e||{});return this.setUniforms(t)},t.clear=function(e){return Object(u.a)(this.program.gl,e),this},t.draw=function(e){void 0===e&&(e={}),this._checkProgram();var t,r=e,i=r.moduleSettings,s=void 0===i?null:i,a=r.framebuffer,o=r.uniforms,u=void 0===o?{}:o,f=r.attributes,d=void 0===f?{}:f,h=r.transformFeedback,c=void 0===h?this.transformFeedback:h,l=r.parameters,g=void 0===l?{}:l,m=r.vertexArray,v=void 0===m?this.vertexArray:m;this.setAttributes(d),this.updateModuleSettings(s),this.setUniforms(u),n.i.priority>=2&&(t=this._logDrawCallStart(2));var b=this.vertexArray.getDrawParams(),p=this.props,y=p.isIndexed,_=void 0===y?b.isIndexed:y,O=p.indexType,M=void 0===O?b.indexType:O,A=p.indexOffset,j=void 0===A?b.indexOffset:A,C=p.vertexArrayInstanced;(void 0===C?b.isInstanced:C)&&!this.isInstanced&&n.i.warn("Found instanced attributes on non-instanced model",this.id)();var S=this.isInstanced,x=this.instanceCount,w=this.props,I=w.onBeforeRender,F=void 0===I?B:I,D=w.onAfterRender,T=void 0===D?B:D;F(),this.program.setUniforms(this.uniforms);var E=this.program.draw(Object.assign(P,e,{logPriority:t,uniforms:null,framebuffer:a,parameters:g,drawMode:this.getDrawMode(),vertexCount:this.getVertexCount(),vertexArray:v,transformFeedback:c,isIndexed:_,indexType:M,isInstanced:S,instanceCount:x,offset:_?j:0}));return T(),n.i.priority>=2&&this._logDrawCallEnd(t,v,a),E},t.transform=function(e){void 0===e&&(e={});var t,r=e,n=r.discard,s=void 0===n||n,a=r.feedbackBuffers,o=r.unbindModels,u=void 0===o?[]:o,f=e.parameters;(a&&this._setFeedbackBuffers(a),s)&&(f=Object.assign({},f,((t={})[i.a.RASTERIZER_DISCARD]=s,t)));u.forEach((function(e){return e.vertexArray.unbindBuffers()}));try{this.draw(Object.assign({},e,{parameters:f}))}finally{u.forEach((function(e){return e.vertexArray.bindBuffers()}))}return this},t.render=function(e){return void 0===e&&(e={}),n.i.warn("Model.render() is deprecated. Use Model.setUniforms() and Model.draw()")(),this.setUniforms(e).draw()},t._setModelProps=function(e){Object.assign(this.props,e),"uniforms"in e&&this.setUniforms(e.uniforms),"pickable"in e&&(this.pickable=e.pickable),"instanceCount"in e&&(this.instanceCount=e.instanceCount),"geometry"in e&&this.setGeometry(e.geometry),"attributes"in e&&this.setAttributes(e.attributes),"_feedbackBuffers"in e&&this._setFeedbackBuffers(e._feedbackBuffers)},t._checkProgram=function(){if(this._programDirty||this.programManager.stateHash!==this._programManagerState){var e=this.programProps.program;if(e)this._managedProgram=!1;else{var t=this.programProps,r=t.vs,i=t.fs,n=t.modules,s=t.inject,a=t.defines,u=t.varyings,h=t.bufferMode,c=t.transpileToGLSL100;e=this.programManager.get({vs:r,fs:i,modules:n,inject:s,defines:a,varyings:u,bufferMode:h,transpileToGLSL100:c}),this.program&&this._managedProgram&&this.programManager.release(this.program),this._programManagerState=this.programManager.stateHash,this._managedProgram=!0}Object(o.a)(e instanceof f.a,"Model needs a program"),this._programDirty=!1,e!==this.program&&(this.program=e,this.vertexArray?this.vertexArray.setProps({program:this.program,attributes:this.vertexArray.attributes}):this.vertexArray=new d.a(this.gl,{program:this.program}),this.setUniforms(Object.assign({},this.getModuleUniforms())))}},t._deleteGeometryBuffers=function(){for(var e in this.geometryBuffers){var t=this.geometryBuffers[e][0]||this.geometryBuffers[e];t instanceof h.a&&t.delete()}},t._setAnimationProps=function(e){this.animated&&Object(o.a)(e,"Model.draw(): animated uniforms but no animationProps")},t._setFeedbackBuffers=function(e){if(void 0===e&&(e={}),Object(a.a)(e))return this;var t=this.program.gl;return this.transformFeedback=this.transformFeedback||new c.a(t,{program:this.program}),this.transformFeedback.setBuffers(e),this},t._logDrawCallStart=function(e){var t=e>3?0:1e4;if(!(Date.now()-this.lastLogTime<t))return this.lastLogTime=Date.now(),n.i.group(2,">>> DRAWING MODEL "+this.id,{collapsed:n.i.level<=2})(),e},t._logDrawCallEnd=function(e,t,r,i){if(void 0!==e){var s=function(e){var t=e.vertexArray,r=e.header,i=void 0===r?"Attributes":r;if(!t.configuration)return{};var n={};t.elements&&(n.ELEMENT_ARRAY_BUFFER=v(t,t.elements,null,i));var s=t.values;for(var a in s){var o=t._getAttributeInfo(a);if(o){var u=a+": "+o.name,f=t.accessors[o.location];f&&(u=a+": "+b(o.name,f)),n[u]=v(t,s[a],f,i)}}return n}({vertexArray:t,header:this.id+" attributes",attributes:this._attributes}),a=_({header:this.id+" uniforms",program:this.program,uniforms:Object.assign({},this.program.uniforms,r)}),o=a.table,u=a.unusedTable,f=a.unusedCount,d=_({header:this.id+" uniforms",program:this.program,uniforms:Object.assign({},this.program.uniforms,r),undefinedOnly:!0}),h=d.table;d.count>0&&n.i.log("MISSING UNIFORMS",Object.keys(h))(),f>0&&n.i.log("UNUSED UNIFORMS",Object.keys(u))();var c=function(e){for(var t,r={},i="Accessors for "+e.id,n=M(e.attributeInfos);!(t=n()).done;){var s,a=t.value;if(a)r["in "+j(a)]=((s={})[i]=JSON.stringify(a.accessor),s)}for(var o,u=M(e.varyingInfos);!(o=u()).done;){var f,d=o.value;if(d)r["out "+j(d)]=((f={})[i]=JSON.stringify(d.accessor),f)}return r}(this.vertexArray.configuration);n.i.table(e,s)(),n.i.table(e,o)(),n.i.table(e+1,c)(),i&&i.log({logLevel:2,message:"Rendered to "+i.id}),n.i.groupEnd(2,">>> DRAWING MODEL "+this.id)()}},e}()}}]);