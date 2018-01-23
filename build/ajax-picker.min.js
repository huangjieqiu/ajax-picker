(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AjaxPicker"] = factory();
	else
		root["AjaxPicker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3)
__webpack_require__(1)
__webpack_require__(0)

function $id(id) {
  return document.getElementById(id)
}

function loop(begin, end, func) {
  for (var i = begin; i < end; i++) {
    if (func(i)) break
  }
}

var vendor = (function () {
  var elementStyle = document.createElement('div').style
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

function prefixStyle(style) {
  if (!vendor || vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toLocaleUpperCase() + style.substring(1)
}

var transform = prefixStyle('transform')
var transitionDuration = prefixStyle('transitionDuration')
var transitionDelay = prefixStyle('transitionDelay')
var DURATION = 300
var HEIGHT = 40
var WIN_W = window.innerWidth
function AjaxPicker(config) {
  this.input = config.input
  this.container = config.container
  this.title = config.title
  this.tipText = config.tipText
  this.renderArr = config.renderArr
  this.success = config.success
  this.curIdx = 0
  this.renderIdx = 0
  this.touch = {
    rect: {}
  }
  this.temResults = []
  this.checkTipText()
  this.initDom()
  this.binding()
}

AjaxPicker.prototype = {
  constructor: AjaxPicker,
  checkTipText: function () {
    if (!this.tipText || !this.tipText.length) {
      this.tipText = ['请选择']
      return
    }
    this.tipText = [].concat(this.tipText)
  },
  initDom: function () {
    var html = ''
    html += '<div class="ajaxPicker-wrapper" id="ajaxPicker-wrapper-' + this.container + '">' +
      '<div class="ajaxPicker-container"><div class="ajaxPicker-title">' +
      '<div class="ajaxPicker-title-text">' + this.title + '</div>' +
      '<div class="ajaxPicker-close" id="ajaxPicker-close-' + this.container + '"></div></div>' +
      '<div class="ajaxPicker-current" id="ajaxPicker-current-' + this.container + '">' +
      '<ul><li class="ajaxPicker-current-item ajaxPicker-current-on" index="0">' + this.tipText[0] + '</li></ul>' +
      '<span class="ajaxPicker-current-line" id="ajaxPicker-current-line-' + this.container + '"></span></div>' +
      '<div class="ajaxPicker-content" id="ajaxPicker-content-' + this.container + '">' +
      '</div></div></div>'
    $id(this.container).innerHTML = html

    this.content = $id('ajaxPicker-content-' + this.container)
    this.current = $id('ajaxPicker-current-' + this.container).children[0]
    this.curLine = $id('ajaxPicker-current-line-' + this.container)

    var list, li, _this = this

    loop(1, this.renderArr.length, function (i) {
      li = document.createElement('li')
      li.setAttribute('index', i)
      _this.current.appendChild(li)
    })

    loop(0, this.renderArr.length, function (i) {
      list = document.createElement('div')
      list.style.width = WIN_W + 'px'
      list.id = 'ajaxPicker-content-list-' + _this.container + '-' + i
      list.className = "ajaxPicker-content-list"
      list.setAttribute('index', i)
      list.innerHTML = '<ul></ul><div class="ajaxPicker-loading-wrapper"><div class="ajaxPicker-loading"></div></div>'
      _this.content.style.width = (WIN_W * (i + 1)) + 'px'
      _this.content.appendChild(list)
    })

    var rect = this.current.children[0].getBoundingClientRect()
    this.curLine.style.width = rect.width + 'px'
    this.curLine.style.left = rect.left + 'px'
  },
  binding: function () {
    var html = document.getElementsByTagName('html')[0]
    var wrapper = $id('ajaxPicker-wrapper-' + this.container)
    var closeBtn = $id('ajaxPicker-close-' + this.container)
    var input = $id(this.input)
    var li, rect, level, index, value, id, siblings, next, renderFn, duration, curChild, left = 0, minLeft = 0, offsetWidth = 0, moveX = 0, moveY = 0, deltaX = 0, deltaY = 0, percent = 0, _this = this

    window.onresize = function () {
      var width = 0
      loop(0, _this.content.children.length, function (i) {
        _this.content.children[i].style.width = window.innerWidth + 'px'
        width += window.innerWidth
      })
      _this.content.style.width = width + 'px'
      _this.content.style[transitionDuration] = '0ms'
      _this.curLine.style[transitionDuration] = '0ms'
      _this.curLine.style[transitionDelay] = '0ms'
      _this.content.style[transform] = 'translate3d(-' + (_this.curIdx * window.innerWidth) + 'px, 0, 0)'
      curChild = _this.current.children[_this.curIdx]
      rect = curChild.getBoundingClientRect()
      _this.curLine.style.left = rect.left + 'px'
      _this.curLine.style.width = rect.width + 'px'
      _this.curLine.style.bottom = _this.current.clientHeight - (curChild.offsetTop + HEIGHT)
    }

    input.addEventListener('touchstart', function () {
      wrapper.classList.add('ajaxPicker-show')
      html.classList.add('alpha')
      if (_this.renderIdx === 0 && !_this.temResults.length) {
        var renderFn = _this.renderArr[0]
        renderFn()
      }
    }, false)

    wrapper.addEventListener('touchstart', function (e) {
      if (e.target === this) {
        this.classList.remove('ajaxPicker-show')
        html.classList.remove('alpha')
      }
    }, false)

    closeBtn.addEventListener('touchstart', function () {
      wrapper.classList.remove('ajaxPicker-show')
      html.classList.remove('alpha')
    }, false)

    this.content.addEventListener('touchstart', function (e) {
      _this.touch.startX = e.touches[0].clientX
      _this.touch.startY = e.touches[0].clientY
      _this.touch.moved = false
    }, false)

    this.content.addEventListener('touchmove', function (e) {
      moveX = e.touches[0].clientX
      moveY = e.touches[0].clientY
      deltaX = moveX - _this.touch.startX
      deltaY = moveY - _this.touch.startY

      if (Math.abs(deltaY) > Math.abs(deltaX)) return

      left = -(_this.curIdx * WIN_W)
      minLeft = -(_this.renderIdx * WIN_W)
      offsetWidth = Math.min(0, Math.max(minLeft, left + deltaX))
      if (offsetWidth >=0 || offsetWidth <= minLeft) return
      if (!_this.touch.moved) _this.touch.moved = true
      e.preventDefault()
      this.style[transitionDuration] = '0ms'
      this.style[transform] = 'translate3d(' + offsetWidth + 'px, 0, 0)'

      percent = Math.abs(deltaX / WIN_W)
      _this.touch.targetIdx = (percent >= 0.1) ? (deltaX < 0) ? _this.curIdx + 1 : _this.curIdx - 1 : _this.curIdx
      _this.touch.rect = _this.current.children[_this.touch.targetIdx].getBoundingClientRect()
    }, false)

    this.content.addEventListener('touchend', function () {
      if (!_this.touch.moved) return
      _this.changeCurrent({
        width: _this.touch.rect.width,
        left: _this.touch.rect.left,
        bottom: _this.current.clientHeight - (_this.current.children[_this.touch.targetIdx].offsetTop + HEIGHT)
      }, _this.touch.targetIdx, DURATION, DURATION)
    }, false)

    this.current.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() === 'li') {
        li = e.target
        rect = li.getBoundingClientRect()
        index = parseInt(li.getAttribute('index'))
        _this.changeCurrent({
          width: rect.width,
          left: rect.left,
          bottom: _this.current.clientHeight - (li.offsetTop + HEIGHT)
        }, index, DURATION)
      }
    }, false)

    this.content.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() === 'li') {
        li = e.target
        level = parseInt(li.getAttribute('level'))
        index = parseInt(li.getAttribute('index'))
        id = li.getAttribute('id')
        value = li.getAttribute('value')
        if (!li.classList.contains('ajaxPicker-content-on')) {
          duration = 0
          siblings = this.children[level].querySelectorAll('li')
          loop(0, siblings.length, function (i) {
            siblings[i].classList.remove('ajaxPicker-content-on')
          })

          li.classList.add('ajaxPicker-content-on')
          _this['result' + (level + 1)] = {
            value: value,
            id: id,
            index: index
          }
          _this.temResults.splice(level, 1, {value: value, id: id})
          while (_this.temResults.length > (level + 1)) {
            _this.temResults.pop()
          }
          curChild = _this.current.children
          loop(level, curChild.length, function (i) {
            curChild[i].innerHTML = ''
            curChild[i].classList.remove('ajaxPicker-current-item', 'ajaxPicker-current-on')
          })

          curChild[level].innerHTML = value
          curChild[level].classList.add('ajaxPicker-current-item')
          if (!curChild[level + 1]) {
            rect = curChild[level].getBoundingClientRect()
            _this.curLine.style.width = rect.width + 'px'
            _this.curLine.style.left = rect.left + 'px'
            _this.curLine.style.bottom = _this.current.clientHeight
            _this.success(_this.temResults)
            wrapper.classList.remove('ajaxPicker-show')
            html.classList.remove('alpha')
            return
          }
          curChild[level + 1].innerHTML = _this.tipText[level + 1] || _this.tipText[level] || _this.tipText[0]
          curChild[level + 1].classList.add('ajaxPicker-current-item', 'ajaxPicker-current-on')
          this.children[level + 1].querySelector('ul').innerHTML = ''
          this.children[level + 1].querySelector('.ajaxPicker-loading-wrapper').classList.remove('ajaxPicker-hide')
          _this.renderIdx = level + 1
          renderFn = _this.renderArr[level + 1]
          renderFn()
        } else {
          duration = DURATION
        }

        if (!curChild[level + 1]) {
          wrapper.classList.remove('ajaxPicker-show')
          html.classList.remove('alpha')
          return
        }
        next = _this.current.children[level + 1]
        rect = next.getBoundingClientRect()
        _this.changeCurrent({
          width: rect.width,
          left: rect.left,
          bottom: _this.current.clientHeight - (next.offsetTop + HEIGHT)
        }, level + 1, duration)
      }
    }, false)
  },
  changeCurrent: function (rect, idx, dur, delay) {
    this.curLine.style[transitionDuration] = dur + 'ms'
    this.curLine.style.width = rect.width + 'px'
    this.curLine.style.left = rect.left + 'px'
    this.curLine.style.bottom = rect.bottom + 'px'
    this.curLine.style[transitionDelay] = (delay || 0) + 'ms'
    this.content.style[transitionDuration] = DURATION + 'ms'
    this.content.style[transform] = 'translate3d(' + -(idx * WIN_W) + 'px,' + '0, 0)'
    this.curIdx = idx
  },
  render: function (arr) {
    var _this = this
    if (arr && arr.length) {
      var list = $id('ajaxPicker-content-list-' + this.container + '-' + this.renderIdx)
      var ul = list.querySelector('ul')
      var html = ''
      loop(0, arr.length, function (i) {
        var name = arr[i].name || arr[i].value
        var id = arr[i].id
        html += '<li class="ajaxPicker-content-item" level=' + '"' + _this.renderIdx + '" ' + 'index=' + '"' + i + '" ' + 'value=' + '"' + name + '" ' + 'id=' + '"' + id + '"' + '>' + name + '</li>'
      })
      ul.innerHTML = html
      list.children[1].classList.add('ajaxPicker-hide')
    }
  }
}

module.exports = AjaxPicker

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/_css-loader@0.28.8@css-loader/index.js!./ajax-picker.css", function() {
			var newContent = require("!!./node_modules/_css-loader@0.28.8@css-loader/index.js!./ajax-picker.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\r\n.ajaxPicker-wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, .7);\r\n    -webkit-transition: all 0.3s;\r\n    -moz-transition: all 0.3s;\r\n    -ms-transition: all 0.3s;\r\n    -o-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n\r\n.ajaxPicker-show {\r\n    z-index: 999 !important;\r\n    opacity: 1 !important;\r\n    height: 100% !important;\r\n    overflow: hidden !important;\r\n}\r\n\r\n.ajaxPicker-show .ajaxPicker-container {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    -ms-transform: translate3d(0, 0, 0);\r\n    -o-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.ajaxPicker-container {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background: #fff;\r\n    -webkit-transition: transform 0.3s;\r\n    -moz-transition: transform 0.3s;\r\n    -ms-transition: transform 0.3s;\r\n    -o-transition: transform 0.3s;\r\n    transition: transform 0.3s;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    -moz-transform: translate3d(0, 100%, 0);\r\n    -ms-transform: translate3d(0, 100%, 0);\r\n    -o-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n    z-index: 1000;\r\n}\r\n\r\n.ajaxPicker-title {\r\n    position: relative;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.ajaxPicker-title-text {\r\n    font-size: 15px;\r\n    color: #808080;\r\n}\r\n\r\n.ajaxPicker-close {\r\n    position: absolute;\r\n    top: 9px;\r\n    right: 17px;\r\n    height: 22px;\r\n    width: 22px;\r\n}\r\n\r\n.ajaxPicker-close::after, .ajaxPicker-close::before {\r\n    position: absolute;\r\n    content: '';\r\n    left: 0;\r\n    top: 50%;\r\n    background: #a9a9a9;\r\n    height: 2px;\r\n    width: 100%;\r\n}\r\n\r\n.ajaxPicker-close::before {\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.ajaxPicker-close::after {\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.ajaxPicker-current {\r\n    position: relative;\r\n}\r\n\r\n.ajaxPicker-current::after {\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    border-top: 1px solid #ddd;\r\n    width: 100%;\r\n    content: ' ';\r\n}\r\n\r\n.ajaxPicker-current ul {\r\n    font-size: 0;\r\n}\r\n\r\n.ajaxPicker-current-item {\r\n    display: inline-block;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: #666;\r\n    margin-left: 20px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 80%;\r\n    user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.ajaxPicker-current-on {\r\n    color: #e4393c !important;\r\n}\r\n\r\n.ajaxPicker-current-line {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 1px;\r\n    background: #e4393c;\r\n    transition-property: all;\r\n}\r\n\r\n.ajaxPicker-content {\r\n    height: 100%;\r\n    transition-timing-function: ease-in-out;\r\n}\r\n\r\n.ajaxPicker-content-wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.ajaxPicker-content-list {\r\n    position: relative;\r\n    float: left;\r\n    overflow: auto;\r\n    height: 300px;\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow-scrolling: touch;\r\n    padding: 5px 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.ajaxPicker-content-item {\r\n    position: relative;\r\n    padding: 10px 0;\r\n    color: #333;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.ajaxPicker-content-on {\r\n    color: #e4393c !important;\r\n}\r\n\r\n.ajaxPicker-content-on:after {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 5px;\r\n    content: ' ';\r\n    width: 20px;\r\n    height: 20px;\r\n    background-image: url(" + escape(__webpack_require__(0)) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 20px 80px;\r\n    background-position: 0 -20px;\r\n}\r\n\r\n.ajaxPicker-hide {\r\n    display: none !important;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5) {\r\n    .ajaxPicker-current::after {\r\n        -webkit-transform: scaleY(0.7);\r\n        transform: scaleY(0.7);\r\n    }\r\n}\r\n\r\n@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {\r\n    .ajaxPicker-current::after {\r\n        -webkit-transform: scaleY(0.5);\r\n        transform: scaleY(0.5);\r\n    }\r\n}\r\n\r\n.alpha {\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.alpha body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n/*laoding*/\r\n.ajaxPicker-loading-wrapper {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.ajaxPicker-loading {\r\n    width: 32px;\r\n    height: 32px;\r\n    padding: 5px;\r\n    background: rgba(0, 0, 0, 0) url(" + escape(__webpack_require__(1)) + ") no-repeat center;\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});
