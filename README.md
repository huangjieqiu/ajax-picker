# ajax-picker
【高仿京东APP地址选择插件】ajax-picker是一款数据通过异步获取（通常是AJAX）的联级选择器。不仅可用于地址选择联动，还可应付FAQ选择等等其他许多应用场景。
##Usage
####install
```javascripit
npm install ajax-picker --save
```
####import
```javascript
import AjaxPicker from 'ajax-picker'
```
####html
```html
<div id="container"></div> //插件容器
```
####javascript
```javascript
var picker = new AjaxPicker({
  title: '配送至', //选择器标题
  tipText: ['省份', '城市', '区/县'],  //选择器提示语（可以一个也可以多个，对应每一栏的选择提示语）
  input: 'address-input', //点击触发选择器的input的id
  container: 'container', //选择器的容器的id
  renderFunc: [           //渲染函数数组，第一个函数获取并渲染第一个列表的数据，以此类推，该数组中的渲染函数的数量和列表的数量一样，并一一对应
    function () {
      ---在这里写异步获取第一个列表数据的方法，通常是ajax
      ---在成功回调中加入下面这行代码，并将获取的数据传入:
          picker.render(your data)
      // 请确保你的获取到的数据是一个数组对象，并符合以下格式，每个对象至少拥有value(name)和id这两个key(将在用户选择完毕后返回),
      // 如果data不是一个对象数组，或者不符合我上面说的格式要求，那么您可能要做一下数据处理，才能保证数据成功渲染出来 
      // [
      //   {value或name: '北京市', id: '0', other: ...},
      //   {value或name: '上海市', id: '1', other: ...},
      //   {value: '广东省', id: '2', other: ...}
      //   ...
      // ]
      // example:
      // $.ajax({
      //   ...
      //   success: function (data) {
      //     picker.render(data)
      //   }
      // })
    },
    function () {
      // 在这里写异步获取第二个列表数据的方法
      // 你可以通过picker.result1获取用户在第一列表的选择结果
      // piker.result1长这样：
      // {
      //   value: 'XXX',
      //   id:'XXX',
      //   index: 'XXX'
      // }
      // 在成功回调中加入下面这行代码，并将获取的数据传入:
      // picker.render(your data)
    },
    function () {
      // 在这里写异步获取第二个列表数据的方法
      // 你可以通过picker.result2获取用户在第二列表的选择结果
      // piker.result2长这样：
      // {
      //   value: 'XXX',
      //   id:'XXX',
      //   index: 'XXX'
      // }
      // 在成功回调中加入下面这行代码，并将获取的数据传入:
      // picker.render(your data)
    },
    ...
  ],
  success: function (arr) {
    // 用户选择完毕后调用，返回结果数组
    console.log(arr)
  }
})
```

