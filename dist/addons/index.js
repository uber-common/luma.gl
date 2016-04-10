'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerGroup = exports.Fx = undefined;

var _fx = require('./fx');

Object.defineProperty(exports, 'Fx', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fx).default;
  }
});

var _workers = require('./workers');

Object.defineProperty(exports, 'WorkerGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_workers).default;
  }
});

var _helpers = require('./helpers');

Object.keys(_helpers).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});

var _saveBitmap = require('./save-bitmap');

Object.keys(_saveBitmap).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _saveBitmap[key];
    }
  });
});

var _fx2 = _interopRequireDefault(_fx);

var _workers2 = _interopRequireDefault(_workers);

var helpers = _interopRequireWildcard(_helpers);

var saveBitmap = _interopRequireWildcard(_saveBitmap);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
if (typeof window !== 'undefined' && window.LumaGL) {
  window.LumaGL.addons = {
    Fx: _fx2.default,
    WorkerGroup: _workers2.default
  };
  Object.assign(window.LumaGL.addons, helpers);
  Object.assign(window.LumaGL.addons, saveBitmap);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGRvbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozt1Q0FLUTs7OztBQUpSOzs7Ozs0Q0FLUTs7OztBQUpSOztBQUtBOzs7Ozs7Ozs7O0FBSkE7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0lBTlk7O0lBQ0E7Ozs7Ozs7QUFRWixJQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLE1BQVAsRUFBZTtBQUNsRCxTQUFPLE1BQVAsQ0FBYyxNQUFkLEdBQXVCO0FBQ3JCLG9CQURxQjtBQUVyQixrQ0FGcUI7R0FBdkIsQ0FEa0Q7QUFLbEQsU0FBTyxNQUFQLENBQWMsT0FBTyxNQUFQLENBQWMsTUFBZCxFQUFzQixPQUFwQyxFQUxrRDtBQU1sRCxTQUFPLE1BQVAsQ0FBYyxPQUFPLE1BQVAsQ0FBYyxNQUFkLEVBQXNCLFVBQXBDLEVBTmtEO0NBQXBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWZhdWx0IGFzIEZ4fSBmcm9tICcuL2Z4JztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXb3JrZXJHcm91cH0gZnJvbSAnLi93b3JrZXJzJztcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCAqIGFzIHNhdmVCaXRtYXAgZnJvbSAnLi9zYXZlLWJpdG1hcCc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBGeH0gZnJvbSAnLi9meCc7XG5leHBvcnQge2RlZmF1bHQgYXMgV29ya2VyR3JvdXB9IGZyb20gJy4vd29ya2Vycyc7XG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zYXZlLWJpdG1hcCc7XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTHVtYUdMKSB7XG4gIHdpbmRvdy5MdW1hR0wuYWRkb25zID0ge1xuICAgIEZ4OiBGeCxcbiAgICBXb3JrZXJHcm91cDogV29ya2VyR3JvdXBcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih3aW5kb3cuTHVtYUdMLmFkZG9ucywgaGVscGVycyk7XG4gIE9iamVjdC5hc3NpZ24od2luZG93Lkx1bWFHTC5hZGRvbnMsIHNhdmVCaXRtYXApO1xufVxuIl19