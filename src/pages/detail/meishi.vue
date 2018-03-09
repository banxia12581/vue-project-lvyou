<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>美食自由行</h2>
      <p>跟着《舌尖》，踏上国内美食探秘之旅</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          美食数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter :max="20" :min="5"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          美食地域：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="destination"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          美食口味：
        </div>
        <div class="sales-board-line-right">
          <v-mul-choose :chooses="tasteTypes"></v-mul-choose>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          旅游时间：
        </div>
        <div class="sales-board-line-right">
          一个月
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          特惠价：
        </div>
        <div class="sales-board-line-right">
          ￥1299
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
      <h2>往期美食回顾</h2>
      <p>春耕、夏耘、秋收、冬藏，天人合一的东方哲学让中国饮食依食而变，《舌尖上的中国》近观美食之美。</p>
      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            广西黄豆酸笋小黄鱼
          </td>
          <td>
            浙江油焖冬笋
          </td>
          <td>
            山西蓝田裤带面
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            苏州糯米鸡
          </td>
          <td>
            湖北天门蒸菜
          </td>
          <td>
            广东木瓜鲫鱼煲
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import VSelection from '../../components/base/selection'
  import VCounter from '../../components/base/counter'
  import VMulChoose from '../../components/base/multiplyChooser'
  export default {
    components:{
      VSelection,
      VCounter,
      VMulChoose
    },
    data () {
      return{
        destination:[
          {
            label:'三亚',
            value:0
          },
          {
            label:'广东',
            value:1
          },
          {
            label:'川渝',
            value:2
          },
          {
            label:'华东',
            value:3
          },
          {
            label:'云南',
            value:4
          },
        ],
        tasteTypes:[
          {
            label:'酸',
            value:0
          },
          {
            label:'甜',
            value:1
          },
          {
            label:'辣',
            value:2
          },
          {
            label:'咸',
            value:3
          }
        ]
      }
    }
  }
</script>
<style>
  @import '../../../static/css/global.css';

</style>
