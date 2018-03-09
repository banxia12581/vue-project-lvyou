<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>趣游香港</h2>
      <p>红包到手，趣游香港。即日起到指定日期，10000个红包免费领。每天派送1000个，先到先得。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          红包数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter :max="10" :min="1"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          红包金额：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :chooses="baoTypes"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效期：
        </div>
        <div class="sales-board-line-right">
          三个月
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
         特惠价：
        </div>
        <div class="sales-board-line-right">
          ￥4999
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
        </div>
        <div class="sales-board-line-right">
          <div class="btn-m">立即预定</div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>香港亲自玩乐推荐</h2>
      <p>财神高飞和可爱贪玩的布鲁托将化身成新年大使，邀您与家人朋友一起欢度新年。米奇和一众好友将换上新春贺岁服装给大家拜年！新春期间，美国小镇大街将挂满象征幸运福气的装饰。</p>
    </div>
  </div>
</template>
<script>
  import VChooser from '../../components/base/chooser'
  import VCounter from '../../components/base/counter'
  export default {
    components:{
      VChooser,
      VCounter
    },
    data () {
      return{
        baoTypes:[
          {
            label:'300元',
            value:0
          },
          {
            label:'500元',
            value:1
          },
          {
            label:'750元',
            value:2
          }
        ]
      }
    }
  }
</script>
<style>
  @import '../../../static/css/global.css';

</style>
