<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in chooses"
          :class="{active:index===nowIndex}"
          @click="selectChoose(index)"
          :title="item.label"
      >
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
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
        nowIndex:0
      }
    },
    methods:{
      selectChoose(index){
        this.nowIndex = index
        this.$emit('on-change',this.chooses[index])
      }
    }
  }
</script>

<style scoped>
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
