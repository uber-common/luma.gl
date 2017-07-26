# Geometry Module

A geometry holds a set of attributes (native JavaScript arrays)
(vertices, normals, texCoords, indices) and a drawType.

| **Class** | **Description** |
| --- | --- | --- |
| [`Geometry`](/#/documentation/api-reference/geometry) | Base class, holds vertex attributes and drawType |
| [`ConeGeometry`](/#/documentation/api-reference/geometry#ConeGeometry) | Vertex attributes for a cone |
| [`CubeGeometry`](/#/documentation/api-reference/geometry#CubeGeometry) | Vertex attributes for a cube |
| [`IcoSphereGeometry`](/#/documentation/api-reference/geometry#IcoSphereGeometry) | Vertex attributes for an icosahedron |
| [`PlaneGeometry`](/#/documentation/api-reference/geometry#PlaneGeometry) | Vertex attributes for a plane |
| [`SphereGeometry`](/#/documentation/api-reference/geometry#SphereGeometry) | Vertex attributes for a sphere |
| [`SphereGeometry`](/#/documentation/api-reference/geometry#SphereGeometry) | Vertex attributes for a sphere |

It should be fairly straightforward to use other primitives, e.g. from npm modules. As long as you have a number of attributes you can wrap them in a `Geometry` or set them directly on a `Model` or a `Program`.

