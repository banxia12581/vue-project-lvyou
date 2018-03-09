<template>
  <div>
    <div class="app-head" >
      <div class="app-head-inner clearfix">
        <router-link :to="{path:'/'}" class="head-logo">
          <img src="../assets/logo.png" >
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username !== ''" @click="quit">退出</li>
            <li v-if="username === ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username === ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick" class="nav-list-last">联系我们</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">@2018 Summer</div>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>想对我们提出功能建议？<br>
        发现了网页中的问题想告诉我们？<br>
        还是其他网友未经你的允许擅自上传了你的图片或文字？<br>
        请通过邮箱：lv-bugs@baidu.com 把你想说的一切告诉我们吧！<br>
        除了邮箱，还可以通过百度旅游吧进行反馈哦：）</p>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from './base/dialog.vue'
  import LogForm from './logForm.vue'
  import RegForm from './regForm.vue'

export default {
  components:{
    MyDialog:Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username:''
    }
  },
  methods:{
    aboutClick(){
      this.isShowAboutDialog = true
    },
    logClick(){
      this.isShowLogDialog = true
    },
    regClick(){
      this.isShowRegDialog = true
    },
    closeDialog(attr){
      this[attr] = false
    },
    onSuccessLog(data){
      this.username = data.username
      this.closeDialog('isShowLogDialog')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0
     License: none (public domain)
  */
  .app-head{
    background:#f8f8f8;
    height:90px;
    width:100%;
  }
  .app-head-inner{
    width:980px;
    margin:0 auto;
  }
  .head-logo{
    float:left;
  }
  .head-logo img{
    height: 90px;
  }
  .head-nav{
    float:right;
  }
  .head-nav ul{
    overflow:hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
    height: 90px;
    text-align: center;
    line-height: 90px;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .nav-list-last{
    border:none !important;
  }
  /*注册登录页*/
  .g-form-line{
    padding:15px 0;
  }
  .g-form-label{
    width: 100px;
    font-size:16px;
    display:inline-block;
  }
  .g-form-input{
    display: inline-block;
  }
  .g-form-input input{
    height:30px;
    width:200px;
    line-height:30px;
    vertical-align: middle;
    padding:0 10px;
    border:1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
