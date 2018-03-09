<template>
  <div class="index-wrap clearfix">
    <div class="index-left">
      <div class="index-left-block">
        <h2>热门度假</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.title}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>游记攻略</h2>
        <ul>
          <li v-for="item in newsList.data">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="slideSlow" ></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last':index % 2!==0},'index-board-'+item.id]" >
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="btn-m" :to="{path:'detail/'+item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import slideShow from '../components/slideShow.vue'
  export default {
    components:{
      slideShow
    },
    created:function () {
      this.$http.get('api/getNewsList')
        .then((res) => {
          this.newsList = res.data
//          console.log(this.newsList.data[0].id)
        }, (err) => {
          console.log(err)
        })
    },
    methods:{
    },
    data () {
      return {
        slideSlow:3000,
        slides:[
          {
            src:require('../assets/slideShow/pic1.jpg'),
            title:'拉萨',
            href:'https://lvyou.baidu.com/notes/3d0c49d4369578284c376fef'
          },
          {
            src:require('../assets/slideShow/pic2.jpg'),
            title:'东北',
            href:'https://lvyou.baidu.com/notes/f8182521a32e24d981d5bfb3'
          },
          {
            src:require('../assets/slideShow/pic3.jpg'),
            title:'爱尔兰',
            href:'https://lvyou.baidu.com/notes/96449f8b1179d8e755291116'
          },
          {
            src:require('../assets/slideShow/pic4.jpg'),
            title:'西伯利亚',
            href:'https://lvyou.baidu.com/notes/2cdb8d42fb3bf11a4310fab3'
          }
        ],
        boardList:[
          {
            title:'自营出境日',
            description:'畅游境外',
            id:'chujing',
            toKey:'chujing',
            saleout:false
          },
          {
            title:'红包到手',
            description:'趣游香港',
            id:'hongbao',
            toKey:'hongbao',
            saleout:false
          },
          {
            title:'趣玩周边',
            description:'悦享生活',
            id:'zhoubian',
            toKey:'zhoubian',
            saleout:false
          },
          {
            title:'美食自由行',
            description:'遇见中华美食',
            id:'meishi',
            toKey:'meishi',
            saleout:true
          },
        ],
        newsList:[],
        productList:{
          zb:{
            title:'周边游',
            list:[
              {
                title:'平遥古城',
                url:'https://dujia.qunar.com/pq/list_%E5%B9%B3%E9%81%A5%E5%8F%A4%E5%9F%8E?searchfrom=around&arounddep=%E4%BF%9D%E5%AE%9A&tf=Ihot_01'
              },
              {
                title:'古北水镇',
                hot:true,
                url:'https://dujia.qunar.com/pq/list_%E5%8F%A4%E5%8C%97%E6%B0%B4%E9%95%87?searchfrom=around&arounddep=%E4%BF%9D%E5%AE%9A&tf=Ihot_01'
              },
              {
                title:'狼牙山',
                url:'https://dujia.qunar.com/pq/list_%E7%8B%BC%E7%89%99%E5%B1%B1?searchfrom=around&arounddep=%E4%BF%9D%E5%AE%9A&tf=Ihot_01'
              },
              {
                title:'白洋淀',
                url:'https://dujia.qunar.com/pq/list_%E7%99%BD%E6%B4%8B%E6%B7%80?searchfrom=around&arounddep=%E4%BF%9D%E5%AE%9A&tf=Ihot_01'
              },
            ]
          },
          gn:{
            title:'国内游',
            last:true,
            list:[
              {
                title:'三亚',
                hot:true,
                url:'https://dujia.qunar.com/pq/list_%E4%B8%89%E4%BA%9A?tf=Ihot_02'
              },
              {
                title:'丽江',
                url:'https://dujia.qunar.com/pq/list_%E4%B8%BD%E6%B1%9F?tf=Ihot_02'
              },
              {
                title:'厦门',
                url:'https://dujia.qunar.com/pq/list_%E5%8E%A6%E9%97%A8?tf=Ihot_02'
              },
              {
                title:'成都',
                url:'https://dujia.qunar.com/pq/list_%E6%88%90%E9%83%BD?tf=Ihot_02'
              },
            ]
          }
        }
      }
    }
  }
</script>
<style scoped>
  .index-wrap{
    width:980px;
    margin:0 auto;
    overflow: hidden;
  }
  .index-left{
    float:left;
    width:300px;
    text-align:left;
  }
  .index-right{
    float:left;
    width:680px;
  }
  .index-left-block{
    margin:15px;
    background:#fff;
    box-shadow:0 0 1px #ddd;
  }
  .index-left-block .hr{
    margin-bottom:20px;
  }
  .index-left-block h2{
    background:#4fc08d;
    color:#fff;
    padding:10px 15px;
    margin-bottom:20px;
  }
  .index-left-block h3{
    padding:0 15px 5px 15px;
    font-weight:bold;
    color:#222;
  }
  .index-left-block ul{
    padding:10px 15px;
  }
  .index-left-block li{
    padding:5px;
  }
  .hot-tag{
    min-width: 18px;
    height: 13px;
    line-height:14px;
    border-radius: 3px;
    background: #ed741c;
    color: #fff;
    padding: 1px 2px;
    font-size: 12px;
    display: inline-block;
  }
  .index-board-list{
    overflow:hidden;
  }
  .index-board-item{
    float:left;
    width:290px;
    box-shadow:0 0 1px #ddd;
    padding:20px 20px;
    margin-right:20px;
    margin-bottom:20px;
    background:#fff;
  }
  .index-board-item-inner{
    min-height:100px;
    padding-left:170px;
  }
  .index-board-chujing .index-board-item-inner{
    background: url(../assets/images/1.jpg) no-repeat;
    background-size: 50% 100%;
  }
  .index-board-hongbao .index-board-item-inner{
    background: url(../assets/images/2.jpg) no-repeat;
    background-size: 50% 100%;
  }
  .index-board-zhoubian .index-board-item-inner{
    background: url(../assets/images/3.jpg) no-repeat;
    background-size: 50% 100%;
  }
  .index-board-meishi .index-board-item-inner{
    background: url(../assets/images/4.jpg) no-repeat;
    background-size: 50% 100%;
  }
  .index-board-item h2{
    font-size:18px;
    font-weight:bold;
    color:#000;
    margin-bottom:15px;
  }
  .line-last{
    margin-right:0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
     min-height: 512px;
   }
  .new-item{
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }

</style>
