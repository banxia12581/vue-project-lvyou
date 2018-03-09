<template>
  <div class="detail-wrap clearfix">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productIcon">
        <ul>
          <router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active">
            {{item.name}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
    },
    data () {
      return{
        products:[
          {
            name:'自营出境日',
            path:'chujing',
            icon:require('../assets/images/1.jpg'),
            active:false
          },
          {
            name:'红包到手',
            path:'hongbao',
            icon:require('../assets/images/2.jpg'),
            active:false
          },
          {
            name:'趣玩周边',
            path:'zhoubian',
            icon:require('../assets/images/3.jpg'),
            active:false
          },
          {
            name:'美食自由行',
            path:'meishi',
            icon:require('../assets/images/4.jpg'),
            active:false
          }
        ],
        imgMap:{
          '/detail/chujing': require("../assets/images/1.jpg"),
          '/detail/hongbao': require("../assets/images/2.jpg"),
          '/detail/zhoubian': require("../assets/images/3.jpg"),
          '/detail/meishi': require("../assets/images/4.jpg")
        }
      }
    },
    computed:{
      productIcon(){
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>
<style>
  .detail-wrap{
    width:980px;
    margin:0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left{
    float:left;
    width:200px;
    text-align: center;
  }
  .detail-right{
    float: left;
    width:760px;
    margin-left:20px;
  }
  .product-board{
    background: #fff;
    padding:20px 0;
  }
  .product-board img{
    width:180px;
    height:120px;
  }
  .product-board ul{
    margin-top: 20px;
  }
  .product-board li{
    text-align: left;
    padding:10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover{
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a{
    display: block;
  }
  .sales-board{
    background: #fff;
  }
  .sales-board-intro h2{
    font-size:20px;
    padding:20px;
  }
  .sales-board-intro p{
    background: #f7fcff;
    padding:10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-form {

  }
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    clear: both;
    padding-bottom: 20px;
  }
  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }

</style>
