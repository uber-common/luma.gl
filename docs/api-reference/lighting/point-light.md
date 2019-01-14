# PointLight

Create a point light source which emits from a point in all directions.Point lights attenuation is not available. At most 5 directional lights can be supported.


## Usage

Create a point light source with color, intensity and position.
```js
const pointLight= new PointLight({
  color: [128, 128, 0],
  intensity: 2.0,
  position: [0, 0, 200]
});
```

## Methods

### constructor

The constructor for the `PointLight` class. Use this to create a new `PointLight`.

```js
const pointLight = new PointLight({color, intensity, position});
```
#### Parameters

* `color` - (*array*,)  RGB color of point light source, default value is `[255, 255, 255]`.
* `intensity` - (*number*) Strength of point light source, default value is `1.0`.
* `position` - (*array*,)  Location of point light source, default value is `[0, 0, 1]`.
