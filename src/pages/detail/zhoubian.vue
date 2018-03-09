<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>周边旅游</h2>
      <p>趣玩周边，悦享生活。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          游玩天数：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          目的地：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="destinations" @on-change="onParamChange('destination', $event)"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          游玩方式：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :chooses="travelTypes" @on-change="onParamChange('travel', $event)"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          景点类型：
        </div>
        <div class="sales-board-line-right">
          <v-mul-choose :chooses="jingTypes" @on-change="onParamChange('jingType', $event)"></v-mul-choose>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          特惠价：
        </div>
        <div class="sales-board-line-right">
          ￥{{price}}
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
        </div>
        <div class="sales-board-line-right">
          <div class="btn-m" @click="showPayDialog">立即预定</div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h3>周边跟团</h3>
      <table class="sales-board-table">
        <tbody>
          <tr class="ui-table-row">
            <td class="col-first">
              八达岭长城定陵8日游
            </td>
            <td>
              古北水镇5日游
            </td>
            <td>
              奥林匹克公园15日游
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              五台山10日游
            </td>
            <td>
              泰山双高25日游
            </td>
            <td>
              泰山10日游
            </td>
          </tr>
        </tbody>
      </table>
      <h3>周边自驾</h3>
      <table class="sales-board-table">
        <tbody>
          <tr class="ui-table-row">
            <td class="col-first">
              古北水镇大酒店自驾2日
            </td>
            <td>
              古北水镇温泉酒店3日自驾游
            </td>
            <td>
              木兰围场2日自驾游
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              五台山2日自驾游
            </td>
            <td>
              泰山双高3日自驾游
            </td>
            <td>
              野三坡2日自驾游
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>游玩天数</th>
          <th>目的地</th>
          <th>游玩方式</th>
          <th>景点类型</th>
          <th>特惠价</th>
        </tr>
        <tr>
          <td>{{buyNum}}</td>
          <td>{{destination.label}}</td>
          <td>{{travel.label}}</td>
          <td>
            <span v-for="item in jingType">{{item.label}}</span>
          </td>
          <td>￥{{price}}</td>
        </tr>
      </table>
      <h3>请选择银行</h3>
      <bank-choose @on-change="onChangeBanks"></bank-choose>
      <div class="button" @click="confirmBuy">
        <span class="btn-m">确认购买</span>
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
      支付失败！
    </my-dialog>
    <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>
<script>
  import VSelection from '../../components/base/selection'
  import VChooser from '../../components/base/chooser'
  import VCounter from '../../components/base/counter'
  import VMulChoose from '../../components/base/multiplyChooser'
  import Dialog from '../../components/base/dialog'
  import BankChoose from '../../components/bankChooser'
  import CheckOrder from '../../components/checkOrder'
  import _ from 'lodash'
  export default {
    components:{
      VSelection,
      VChooser,
      VCounter,
      VMulChoose,
      MyDialog:Dialog,
      BankChoose,
      CheckOrder
    },
    data () {
      return{
        buyNum: 0,
        destination: {},
        jingType: [],
        travel: {},
        price: 0,
        destinations:[
          {
            label:'北京',
            value:0
          },
          {
            label:'五台山',
            value:1
          },
          {
            label:'泰山',
            value:2
          },
          {
            label:'木兰围场',
            value:3
          },
          {
            label:'野三坡',
            value:4
          },
        ],
        travelTypes:[
          {
            label:'周边跟团',
            value:0
          },
          {
            label:'周边自驾',
            value:1
          }
        ],
        jingTypes:[
          {
            label:'温泉滑雪',
            value:0
          },
          {
            label:'人文景观',
            value:1
          }
          ,{
            label:'名山胜水',
            value:2
          }
        ],
        isShowPayDialog:false,
        bankId:null,
        orderId:null,
        isShowErrDialog:false,
        isShowCheckOrder:false
      }
    },
    methods:{
      onParamChange(attr,val){
        this[attr] = val
        this.getPrice()
      },
      getPrice(){
        let buyVersionsArray = _.map(this.jingType,(item)=>{
          return item.value
        })
        let reqParams = {
          buyNum: this.buyNum,
          destination: this.destination.value,
          jingType: buyVersionsArray.join(','),
          travel: this.travel.value,
        }
        this.$http.post('/api/getPrice',reqParams)
          .then((res) =>{
            this.price = res.data.data.amount
          })
      },
      showPayDialog(){
        this.isShowPayDialog = true
      },
      onChangeBanks(bankObj){
        this.bankId = bankObj.id
      },
      confirmBuy(){
        let buyVersionsArray = _.map(this.jingType,(item)=>{
          return item.value
        })
        let reqParams = {
          buyNum: this.buyNum,
          destination: this.destination.value,
          jingType: buyVersionsArray.join(','),
          travel: this.travel.value,
          bankId: this.bankId
        }
        this.$http.post('/api/createOrder',reqParams)
          .then((res) =>{
            this.orderId = res.data.data.orderId
            this.isShowCheckOrder = true
            this.isShowPayDialog = false
          },(err) =>{
            this.isShowCheckOrder = false
            this.isShowPayDialog = true
          })
      },
      hideErrDialog(){
        this.isShowErrDialog = false
      },
      hidePayDialog(){
        this.isShowPayDialog = false
      },
      hideCheckOrder(){
        this.isShowCheckOrder = false
      }
    },
    mounted(){
      this.buyNum = 1
      this.destination = this.destinations[0]
      this.jingType = [this.jingTypes[0]]
      this.travel = this.travelTypes[0]
      this.getPrice()
    }
  }
</script>
<style>
  @import '../../../static/css/global.css';
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }

</style>
