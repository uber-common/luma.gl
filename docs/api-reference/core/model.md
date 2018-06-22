# Model

For most luma.gl  applications, the `Model` class is probably the most important class. It holds all the data necessary to draw an object in luma.gl, e.g.:
* **shaders** (via a [`Program`](/docs/api-reference/webgl/program.md) instance)
* **shader modules** [see `Shader Modules`](/docs/api-reference/shadertools/README.md)
* **vertex attributes** (e.g. a [`Geometry`](/docs/api-reference/core/geometry.md) instance, plus any additional attributes for instanced rendering)
* **uniforms** these can also reference textures.

It offers:
- Simple boolean flags for selecting indexed and/or instanced rendering.
- A "unified" render method that binds all attributes, uniforms and textures, selects (uses) the program, and calls the right gl draw call for the model.
- Setting buffers and more.


## Usage

### Provide attribute data using Geometry object

Create model object by passing shaders, uniforms, geometry and render it by passing updated uniforms.

```js
// construct the model.
const model =  new Model(gl, {
  vs: VERTEX_SHADER,
  fs: FRAGMENT_SHADER,
  uniforms: {uSampler: texture},
  geometry: geometryObject,
})

// and on each frame update any uniforms (typically matrices) and call render.
model.render({
  uPMatrix: currentProjectionMatrix,
  uMVMatrix: current ModelViewMatrix
});
```

### Provide attribute data using Buffer

When using `Buffer` objects, data remains on GPU and same `Buffer` object can be shared between multiple models.

```js
// construct the model.
const model =  new Model(gl, {
  vs: VERTEX_SHADER,
  fs: FRAGMENT_SHADER,
  uniforms: {uSampler: texture},
  attributes: {
    attributeName1: bufferObject,
    attributeName2: {data: new Float32Array(...), size: 3, type: GL.FLOAT} // new buffer object will be constructed
  }
  drawMode: gl.TRIANGLE_FAN,
  vertexCount: 3,
})

// and on each frame update any uniforms (typically matrices) and call render.
model.render({
  uPMatrix: currentProjectionMatrix,
  uMVMatrix: current ModelViewMatrix
});
```

### Provide attribute data using VertexArray object

A `VertexArray` object can be build and passed to `Model.draw()` to provide attribute data. Attribute data can be changed by changing `VertexArray` object.

```js
// construct the model.
const model =  new Model(gl, {
  vs: VERTEX_SHADER,
  fs: FRAGMENT_SHADER,
  uniforms: {uSampler: texture},
  drawMode: gl.TRIANGLE_FAN,
  vertexCount: 3,
})

const ATTRIBUTE1_LOCATION = 0;
const ATTRIBUTE2_LOCATION = 1;
const vertexArray1 = new VertexArray(gl, {
  buffers: {
    [ATTRIBUTE1_LOCATION]: buffer1,
    [ATTRIBUTE2_LOCATION]: buffer2
  }
});
const vertexArray2 = new VertexArray(gl, {
  buffers: {
    [ATTRIBUTE1_LOCATION]: buffer3,
    [ATTRIBUTE2_LOCATION]: buffer4
  }
});

//Render using attribute data from vertexArray1.
model.draw({
  uniforms: {
    uPMatrix: currentProjectionMatrix,
    uMVMatrix: current ModelViewMatrix
  },
  vertexArray: vertexArray1
});

// Switch attribute data to vertexArray2
model.draw({
  uniforms: {
    uPMatrix: currentProjectionMatrix,
    uMVMatrix: current ModelViewMatrix
  },
  vertexArray: vertexArray2
});
```

## Constructor

### Model(gl: WebGLRenderingContext, props: Object)

The constructor for the Model class. Use this to create a new Model.

* `vs` - (VertexShader|*string*) - A vertex shader object, or source as a string.
* `fs` - (FragmentShader|*string*) - A fragment shader object, or source as a string.
* `varyings` (WebGL2) - An array of vertex shader output variables, that needs to be recorded (used in TransformFeedback flow).
* `bufferMode` (WebGL2) - Mode to be used when recording vertex shader outputs (used in TransformFeedback flow). Default value is `gl.SEPARATE_ATTRIBS`.
* `modules` - shader modules to be applied.
* `moduleSettings` - any uniforms needed by shader modules.
* `program` - pre created program to use, when provided, vs, ps and modules are not used.
* `shaderCache` - (ShaderCache) - Compiled shader (Vertex and Fragment) are cached in this object very first time they got compiled and then retrieved when same shader is used. When using multiple Model objects with duplicate shaders, use the same shaderCache object for better performance.
* `isInstanced` - default value is false.
* `instanceCount` - default value is 0.
* `vertexCount` - when not provided will be deduced from `geometry` object.
* `uniforms` - uniform values to be used for drawing.
* `geometry` - geometry object, from which attributes, vertex count and drawing mode are deduced.
* `onBeforeRender` - function to be called before every time this model is drawn.
* `onAfterRender` - function to be called after every time this model is drawn.

### delete() : Model

Free WebGL resources associated with this model


## Methods

### setNeedsRedraw() : Model

Set the redraw flag for the model. It is recommended that the redraw flag is a string so that redraw reasons can be traced.


### getNeedsRedraw() : Boolean

* clearRedrawFlags - clear the redraw flag

Gets the value of the redraw flag.


### setDrawMode() : Model

Sets the WebGL `drawMode`.

`GL.POINTS` etc.


### getDrawMode() : Enum

Gets the WebGL drawMode


### setVertexCount() : Model

Sets the number of vertices


### getVertexCount() : GLInt

Gets vertex count

Note: might be autocalculated from `Geometry`


### setInstanceCount() : Model

How many instances will be rendered


### getInstanceCount() : GLInt

Defaults to 0


### getProgram() : Program

Get model's `Program` instance


### setGeometry() : Model

Get model's `Geometry` instance


### getAttributes() : Object

Get a map of named attributes


### setAttributes(attributes : Object) : Model

Sets map of attributes (Attribute instances)


### getUniforms() : Object

Returns map of currently stored uniforms


### setUniforms(uniforms : Object) : Model

Stores named uniforms {key, value}


### updateModuleSettings(moduleSettings : Object) : Model


### draw(options) : Model

Renders the model with provided uniforms, attributes and samplers

```js
model.draw({
  moduleSettings = null,
  uniforms = {},
  attributes = {},
  samplers = {},
  parameters = {},
  settings,
  framebuffer = null,
  vertexArray = null,
  transformFeedback = null
});
```

* `moduleSettings`=`null` (Object) - any uniforms needed by shader modules.
* `uniforms`=`{}` (Object) - uniform values to be used for drawing.
* `attributes`=`{}` (Object) - attribute definitions to be used for drawing.
* `samplers`=`{}` (Object) - texture mappings to be used for drawing.
* `parameters`=`{}` (Object) - temporary gl settings to be applied to this draw call.
* `framebuffer`=`null` (`Framebuffer`) - if provided, renders into the supplied framebuffer, otherwise renders to the default framebuffer.
* `transformFeedback` - an instance `TranformFeedback` object, that gets activated for this rendering.
* `vertexArray` - an instance of `VertexArray` object, that holds required buffer bindings for vertex shader inputs.


### transform(options) : Model

Renders the model with provided uniforms, attributes and samplers, with rasterization turned off.

```js
model.transform({
  moduleSettings = null,
  uniforms = {},
  attributes = {},
  samplers = {},
  parameters = {},
  settings,
  framebuffer = null,
  vertexArray = null,
  transformFeedback = null
});
```
