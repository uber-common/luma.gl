# Upgrade Guide


## Upgrading from V3 to V4

V4 is a major release and a number of previously deprecated features have been removed in luma.gl V4. In addition a number of additional deprecations have been made.


## Removed Features

Some previously deprecated classes and functions have been removed in luma.gl v4

| Symbol               | Replacement      | Comment |
| ---                  | ---              | --- |
| `Vec3`               | `Vector3`        | New math library |
| `Mat4`               | `Matrix4`        | New math library |
| `Quat`               | `Quaternion`     | New math library |


## Deprecated Features

Some classes and functions have been deprecated in luma.gl v4. They will continue to function in V4, but will generate a warning in the console. These functions are expected to be removed in a future major version of luma.gl.

| Symbol               | Replacement      | Comment |
| ---                  | ---              | --- |
| `withState`          | `withParameters` | New WebGL state management |
| `glContextWithState` | `withParameters` | New WebGL state management |


## Details

### math

The deprecated math library (`Vec3`, `Mat4`, `Quat`) has now been removed.

The new Math library is based on `gl-matrix` and uses Array subclassing so that objects are directly usable with luma.gl. Note that luma.gl now works directly with JavaScript arrays (a `Vector3` is just a 3 element array) and you can use any math library as long as you convert objects to arrays before passing data to luma.gl.


## Upgrading from V2 to V3

V3 was a fairly minor release, a number of deprecations were made.

## Deprecations

| Symbol               | Replacement      | Comment |
| ---                  | ---              | --- |
| `Vec3`               | `Vector3`        | New math library |
| `Mat4`               | `Matrix4`        | New math library |
| `Quat`               | `Quaternion`     | New math library |
