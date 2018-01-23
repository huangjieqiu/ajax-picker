# ajax-picker
【高仿京东APP地址选择插件】ajax-picker是一款数据通过异步获取（通常是AJAX）的级联选择器。不仅可用于地址选择联动，还可应付FAQ选择等等其他许多业务场景。如果你的数据不是异步获取的，那么市面上非常多的pickerView可能更适合你，当然你也可以选择这款。<br><br>
![](https://huangjieqiu.github.io/ajax-picker/demo/show.gif)
## 使用方法
### install
```javascripit
npm install ajax-picker --save
```
### import
```javascript
import AjaxPicker from 'ajax-picker'
```
### 普通方式引入
```html
<script src="../build/ajax-picker.min.js"></script>
```
### html
```html
<div id="container"></div> //插件容器
```
### javascript
```javascript
var picker = new AjaxPicker({
  title: '配送至', //选择器标题
  tipText: ['省份', '城市', '区/县'],  //选择器提示语（可以一个也可以多个，对应每一栏的选择提示语）
  input: 'address-input', //点击触发选择器的input的id
  container: 'container', //选择器的容器的id
  renderArr: [ //渲染函数数组，第一个函数对应第一个列表，以此类推，该数组中的函数数量和列表的数量一致
    function () {
      // 在这里写获取第一个列表数据的方法，通常是ajax
      // 在成功回调中加入下面这行代码，并将获取的数据传入:
      picker.render(your data)
      // 请确保你的获取到的数据是一个对象数组，并符合以下格式，每个对象至少拥有value(name)和id这两个key(将在用户选择完毕后返回)
      // 如果data不是一个对象数组，或者不符合格式要求，那么你可能要做一下数据处理，才能保证数据成功渲染出来：
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
      // 在这里写获取第二个列表数据的方法
      // 你可以通过picker.result1获取用户在第一列表的选择结果
      // picker.result1长这样：
      // {
      //   value: 'XXX',
      //   id:'XXX',
      //   index: 'XXX'
      // }
      // 在成功回调中加入下面这行代码，并将获取到的数据传入:
      picker.render(your data)
    },
    function () {
      // 在这里写获取第三个列表数据的方法
      // 你可以通过picker.result2获取用户在第二列表的选择结果
      // picker.result2长这样：
      // {
      //   value: 'XXX',
      //   id:'XXX',
      //   index: 'XXX'
      // }
      // 在成功回调中加入下面这行代码，并将获取到的数据传入:
      picker.render(your data)
    },
    ...
  ],
  success: function (arr) {
    // 用户选择完毕后调用，返回结果数组
    console.log(arr)
  }
})
```
## ajax-picker的特色：
1. 可应付多种业务场景，包括地址，FAQ等等各种数据属于异步获取的选择联动
2. 该插件使用原生JS开发，能够配合任何框架使用，同时，支持多个实例
3. 高仿京东APP地址选择，样式体验高保真~
