<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>自营出境日</h2>
      <p>畅游境外，一路之上，有慵懒古堡，动感CITY；有魅力之都，热辣海岛。解锁新玩法，机票+地接，品质甄选。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          旅游类型：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :chooses="buyTypes" ></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          旅游城市：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="districts"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          组团人数：
        </div>
        <div class="sales-board-line-right">
          16人
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          ￥29999
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
      <h2>产品介绍</h2>
      <p>畅游境外，一路之上，有慵懒古堡，动感CITY；有魅力之都，热辣海岛。解锁新玩法，机票+地接，品质甄选。</p>
      <table class="sales-board-table">
        <tbody>
          <tr class="ui-table-row">
            <td class="col-first">
              瑞士一地11-12天
            </td>
            <td>
              意大利-西西里岛12天
            </td>
            <td>
              法国当地10天深度游
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              泰国曼谷当地5晚6日
            </td>
            <td>
              泰国-普吉岛5晚7日游
            </td>
            <td>
              日本东京7日游
            </td>
          </tr>
          <tr class="ui-table-row">
            <td class="col-first">
              瑞士11-12天
            </td>
            <td>
              法国12天
            </td>
            <td>
              德法意瑞12日
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import VSelection from '../../components/base/selection'
  import VChooser from '../../components/base/chooser'
  export default {
    components:{
      VSelection,
      VChooser
    },
    data () {
      return{
        buyTypes:[
          {
            label:'古堡',
            value:0
          },
          {
            label:'海岛',
            value:1
          },
          {
            label:'浪漫之都',
            value:2
          }
        ],
        districts:[
          {
            label:'意大利',
            value:0
          },
          {
            label:'日本',
            value:1
          },
          {
            label:'泰国',
            value:2
          },
          {
            label:'英国',
            value:3
          },
          {
            label:'巴黎',
            value:4
          },
          {
            label:'瑞士',
            value:5
          }
        ]
      }
    }
  }
</script>
<style>
  @import '../../../static/css/global.css';

</style>
