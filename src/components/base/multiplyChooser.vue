<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in chooses"
          :class="{active:checkActive(index)}"
          @click="toggleSelection(index)"
          :title="item.label"
      >
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    props:{
      chooses:{
        type:Array,
        default:[{
          label:'test',
          value:0
        }]
      }
    },
    data(){
      return{
        nowIndexes:[0]
      }
    },
    methods:{
      toggleSelection(index){
        if(this.nowIndexes.indexOf(index) === -1){
          this.nowIndexes.push(index)
        }
        else{
          this.nowIndexes = _.remove(this.nowIndexes,(idx) =>{
            return idx !== index
          })
        }
        let nowObjArray = _.map(this.nowIndexes, (idx) => {
          return this.chooses[idx]
        })
        this.$emit('on-change', nowObjArray)
      },
      checkActive(index){
        return this.nowIndexes.indexOf(index) !== -1
      }
    }
  }
</script>

<style>
  .chooser-component{
    position: relative;
    overflow: hidden;
  }
  .chooser-list li{
    display: inline-block;
    height:25px;
    border:1px solid #e3e3e3;
    line-height: 25px;
    padding:0 8px;
    margin-right:5px;
    border-radius:3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
