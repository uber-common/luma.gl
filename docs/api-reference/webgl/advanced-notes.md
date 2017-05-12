### WebGL Notes (Advanced)

This is a scratch pad with various notes made during research of the luma.gl API that currently don't fit cleanly into the docs (e.g. becasue too much detail).

#### About Buffer Binding Points

This section can be skipped as the luma.gl API will handle binding (and unbinding) of buffers to the appropriate "targets". Still it can be good to have some understanding of buffer binding points as these feature prominently in the WebGL API.

Rather than taking buffers as arguments, WebGL functions that operate on buffers expect any necessary buffers to have been bound to various specific "binding points" or "targets" before the function is called.

In WebGL1 there are only two binding points:

* `GL.ELEMENT_ARRAY_BUFFER` - used by `drawElements` (and `drawElementsInstanced`)
* `GL.ARRAY_BUFFER` - used by `vertexAttribPointer` (and `vertexAttribIPointer`)

However, WebGL2 allows buffers to be used in a number of additional contexts:

* `GL.PIXEL_PACK_BUFFER` - used by `readPixels`
* `GL.PIXEL_UNPACK_BUFFER` - used by `texImage2D`, `texSubImage2D`, `texImage3D`, `texSubImage3D`
* `GL.TRANSFORM_FEEDBACK_BUFFER` - `beginTransformFeedback`
* `GL.UNIFORM_BUFFER` - `drawArrays` and `drawArraysInstanced`, `drawElements` and `drawElementsInstanced` (requires `uniformBlockBinding` to have been called).

In addition, some WebGL2 functions (such as `copyBufferSubData`, `getBufferSubData`) allow the app to specify which buffer binding point to use. For these applications WebGL2 also provides two extra, "virtual" binding points (in the sense that no WebGL function unconditionally uses them).

* `GL.COPY_READ_BUFFER`: Buffer for copying from one buffer object to another.
* `GL.COPY_WRITE_BUFFER`: Buffer for copying from one buffer object to another.

A primary reason to use these targets is to avoid overwriting other binding points (which can be important when integrating with external WebGL code), so luma.gl will use these bindings when possible (but only for methods that are WebGL2 specific).

Also note that `GL.TRANSFORM_FEEDBACK_BUFFER` and `GL.UNIFORM_BUFFER` bindings are special in that they have multiple binding points and they need to be bound to a certain "index" to affect WebGL state (using `bindBufferBase` or `bindBufferRange`)

