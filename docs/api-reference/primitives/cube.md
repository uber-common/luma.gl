# Cube

Create a white cube.

### Usage

```js
var whiteCube = new Cube(gl, {
      colors: [1, 1, 1, 1]
    });
```


### constructor

Creates a Cube model. Inherits methods from [Model](Model).


Use this to create a new Cube. Accepts the same properties and options as Model constructor but has preset for `vertices`, `normals` and `indices`.

`var model = new Cube(gl, options);`
