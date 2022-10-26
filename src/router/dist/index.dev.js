"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _SearchMovie = _interopRequireDefault(require("../components/SearchMovie.vue"));

var _MovieSingle = _interopRequireDefault(require("../components/MovieSingle.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/movie',
  name: 'SearchMovie',
  component: _SearchMovie["default"]
}, {
  path: '/movie/:id',
  name: 'MovieSingle',
  component: _MovieSingle["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;