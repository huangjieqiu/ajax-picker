require('./ajax-picker.css')
require('./loading.gif')
require('./ok.png')

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
  this.renderFunc = config.renderFunc
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

    loop(1, this.renderFunc.length, function (i) {
      li = document.createElement('li')
      li.setAttribute('index', i)
      _this.current.appendChild(li)
    })

    loop(0, this.renderFunc.length, function (i) {
      list = document.createElement('div')
      list.style.width = WIN_W + 'px'
      list.id = 'ajaxPicker-content-list-' + _this.container + '-' + i
      list.className = "ajaxPicker-content-list"
      list.setAttribute('index', i)
      list.innerHTML = '<div class="ajaxPicker-loading-wrapper"><div class="ajaxPicker-loading"></div></div>'
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
    var li, rect, level, index, value, id, siblings, me, next, renderFn, duration, curChild, conChild, left = 0, minLeft = 0, offsetWidth = 0, moveX = 0, moveY = 0, deltaX = 0, deltaY = 0, percent = 0, _this = this

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
        var renderFn = _this.renderFunc[0]
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
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return
      }
      left = -(_this.curIdx * WIN_W)
      minLeft = -(_this.renderIdx * WIN_W)
      offsetWidth = Math.min(0, Math.max(minLeft, left + deltaX))

      if (offsetWidth >= 0 || offsetWidth <= minLeft) {
        return
      }

      if (!_this.touch.moved) {
        _this.touch.moved = true
      }
      this.style[transitionDuration] = '0ms'
      this.style[transform] = 'translate3d(' + offsetWidth + 'px, 0, 0)'

      percent = Math.abs(deltaX / WIN_W)
      _this.touch.targetIdx = (percent >= 0.1) ? (deltaX < 0) ? _this.curIdx + 1 : _this.curIdx - 1 : _this.curIdx
      _this.touch.rect = _this.current.children[_this.touch.targetIdx].getBoundingClientRect()
    }, false)

    this.content.addEventListener('touchend', function () {
      if (!_this.touch.moved) {
        return
      }
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

          me = this
          loop(level + 1, this.children.length, function (i) {
            conChild = me.children[i]
            if (conChild.children.length >= 2) {
              conChild.removeChild(conChild.children[0])
            }
            _this.temResults.splice(i, 1)
          })
          this.children[level + 1].querySelector('.ajaxPicker-loading-wrapper').classList.remove('ajaxPicker-hide')
          _this.renderIdx = level + 1
          renderFn = _this.renderFunc[level + 1]
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
      var ul = document.createElement('ul')
      var html = ''
      loop(0, arr.length, function (i) {
        var name = arr[i].name || arr[i].value
        var id = arr[i].id
        html += '<li class="ajaxPicker-content-item" level=' + '"' + _this.renderIdx + '" ' + 'index=' + '"' + i + '" ' + 'value=' + '"' + name + '" ' + 'id=' + '"' + id + '"' + '>' + name + '</li>'
      })
      ul.innerHTML = html
      list.insertBefore(ul, list.children[0])
      list.children[1].classList.add('ajaxPicker-hide')
    }
  }
}

module.exports = AjaxPicker
