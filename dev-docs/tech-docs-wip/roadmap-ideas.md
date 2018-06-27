# WebGL Feature Ideas

A scratchpad for roadmap ideas...


## Resource Management

### Stats

The Resource class will track allocations and initializations of resources, making it easy to see when your application is not reusing resources.


### Context Loss

The typical life cycle of a WebGL resource looks something like this:

1) Creating a handle
2) Initializing a handle
3) Using the handle
4) Destroying a handle (either explicitly or by letting it be garbage collected)

Context loss can happen at any time between 1 and 4, at which time resources will be invalidated and handles will have to be recreated and reinitialized.

The subclasses will store initialization parameters so that the object can be automatically recreated in case of context loss.



## Implemented

### Vertex Attributes (v6.0)

Consolidates vertex attributes handling using VertexAttributeObjects


## Rejected

### Sharing Resources between WebGL contexts

> The `WEBGL_shared_resources` extension that underpinned this idea was rejected.

The `Resource` class could be extended (`SharedResource`?) to implement context sharing support as soon as the [`WEBGL_shared_resources`](https://www.khronos.org/registry/webgl/extensions/WEBGL_shared_resources/) extension becomes available in a major browser.

The assumption is that an async `aquire` method will be available that will change the gl context stored in the `Resource`.
