# lvyou

> 一个使用vuejs搭建的旅游网站demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 主要页面结构

```
--src
---- App.vue 
---- main.js
---- assets /*静态文件 */
------ logo.png 
------ banks /*支付银行图片文件 */
------ images /*详情页图片文件 */
------ slideShow /*首页轮播图片文件 */
---- components /*组件 文件 */
------ bankChooser.vue /* 支付银行选择 组件  */
------ checkOrder.vue/* 支付选择 组件  */
------ layout.vue /* 可视化布局 组件  */
------ logForm.vue /* 登录 组件  */
------ regForm.vue /* 注册 组件  */
------ slideShow.vue /* 首页轮播图 组件  */
------ base/* 公共 组件  */
-------- chooser.vue /* 单选 组件  */
-------- counter.vue /* 计算 组件  */
-------- datepicker.vue /* 日期选择器 组件  */
-------- dialog.vue /* 弹窗 组件  */
-------- multiplyChooser.vue /* 多选 组件  */
-------- selection.vue /* 下拉框 组件  */
---- pages /* 页面  */
------ detail /* 详情页 目录*/
-------- chujing.vue /* 自营出境游 页  */
-------- hongbao.vue /* 红包到手 页  */
-------- meishi.vue /* 美食自由行 页  */
-------- zhoubian.vue /* 趣玩周边 页  */
------ detail.vue /* 详情页 页面*/
------ index.vue /* 首页 */
------ orderList.vue /* 订单列表页 */
```



## 主要功能

```
1.弹窗
2.轮播
3.切换
```

