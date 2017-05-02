# AnimationFrame

While this class is named to suggest that it is a wrapper for
`requestAnimationFrame`, it provides a number of features related
to initialization and animation of a WebGLRenderingContext.

* Makes it easy to wait for the HTML page to load before creating resources.
* Provides a number of commonly needed variables to the renderFrame method
  as part of the `context` object.
* By default, manages resizing of canvas and viewport which is usually all
  that simpler apps and demos need. Advanced apps can override.


## Usage

Short example:
```
new AnimationFrame({gl: createGLContext({canvas: 'canvas-0'}))
.init(({gl}) => ({
  clipSpaceQuad: new ClipSpaceQuad({gl, fs: CONTEXT_0_FRAGMENT_SHADER})
}))
.frame(({tick, clipSpaceQuad}) => {
  clipSpaceQuad.render({uTime: tick * 0.01});
});
```

To avoid problems with page load timing, move context creation to
the `initContext` method. Also the `setupFrame` method enables the app
to control the resizing of canvas, framebuffer and viewport.
```
new AnimationFrame()
.initContext(() => createGLContext({canvas: 'canvas-0'}))
.init(({gl}) => ({
  clipSpaceQuad: new ClipSpaceQuad({gl, fs: CONTEXT_0_FRAGMENT_SHADER})
}))
.setupFrame(({gl, canvas}) => {
  canvas.width = canvas.clientWidth;
  canvas.style.height = `${canvas.width}px`;
  canvas.height = canvas.width;
  gl.viewport(0, 0, canvas.width, canvas.height);
})
.frame(({tick, clipSpaceQuad}) => {
  clipSpaceQuad.render({uTime: tick * 0.01});
});
```

## Callbacks and the `context` Object

The callbacks that the app supplies will be called with a context object.
The context object will contain the following values:

* `gl` - This `AnimationFrame`'s `WebGLRenderingContext`.
* `canvas` - The canvas associated with the rendering context.
* `width`: The canvas width, in device pixels.
* `height`: The canvas height, in device pixels.
* `aspect`: The canvas aspect ratio (width/height) to update projection matrices
* `pixelRatio`: Pixel ratio of the canvas drawingBuffer.
* `time`: A monotonic value in milliseconds since `AnimationFrame` was created.
* `tick`: A monotonic counter that updates 60 times per second.
* `tock`: A monotonic counter that updates for every frame rendered.

## Remarks:
* You can instantiate multiple `AnimationFrame` classes in parallel,
  rendering into the same or different `WebGLRenderingContext`s. See
  the multicontext example for one way to do this.
* Works both in browser and under Node.js.
* All `AnimationFrame` methods can be chained.


## AnimationFrame Methods

### AnimationFrame constructor

Parameters:
* `gl` - Sets this `AnimationFrame`'s `WebGLRenderingContext`.

Remarks:
* If creating a context using a canvas element specified in HTML, it
  is often helpful to use the `initContext` method callback to create the
  context, since that method's callback is not called until the DOM has
  been fully loaded.


### initContext

Postpones context creation until the page (i.e. all HTML) has been loaded.
At this time it is safe to specify canvas ids when calling `createGLContext`.

* `callback` - function without parameters that returns a
  `WebGLRenderingContext`. This callback will be called exactly once,
  after page load completes.

Remarks:
* The supplied callback function must return a WebGLRenderingContext or
  an error will be thrown.
* This callback registration function should not be called if a
  `WebGLRenderingContext` was supplied to the AnimationFrame constructor.


### init(callback)

* `callback` - function that takes a context object. It will be called
  exactly once, after page load completes and a context has been created.

The callback will be called with an initial context object, containing


### setupFrame(callback)

Supplying this callback overrides the default frame setup code, which
resizes the canvas and the viewport after the window size.

For applications that use a single full screen canvas, this function is
usually not needed.


### frame(callback)

Calling `frame` will automatically start the animation. If this is not
desired, follow immediately with a stop.


### stop

Stops the animation


### start

Restarts the animation
