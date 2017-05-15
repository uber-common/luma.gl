# Shader



## Usage

Create a pair of shaders
```js
const fs = new VertexShader(gl, {});
const fs = new FragmentShader(gl, {});
```


## Members

* `handle` - holds the underlying `WebGLShader` object


## Methods

### constructor




## Remarks

* Shader sources: A Program needs to be constructed with two strings containing source code for vertex and fragment shaders.
* Default Shaders: luma.gl comes with a set of default shaders that can be used for basic rendering and picking.
