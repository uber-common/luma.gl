# Mesh

A `Mesh` instance holds an arrays of `Geometry` primitives. A `Mesh` is typically used to to create a composite geometry.


* Splitting one mesh into primitives could be useful to limit number of indices per draw call.




## Properties

### primitives : Primitives[]

List of primitives (`Geometry` instances) in this mesh. Note that a primitive can be used in more than one mesh.


## Methods


### constructor(props : Object)

The constructor for the `Mesh` class. Use this to create a new `Mesh`.

```js
const geometry = new Mesh({primitives: ...});
```


### setProps(props : Object)

Updates the specified properties.



## Remarks

* The `Mesh` class is modeled after the [glTF 2.0 mesh](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#meshes), but does not yet support morph `weights`.

