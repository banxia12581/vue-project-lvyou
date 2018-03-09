<template>
  <div>
    <div class="app-head" >
      <div class="app-head-inner clearfix">
        <router-link :to="{path:'/'}" class="head-logo">
          <img src="../assets/logo.png" >
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li>注册</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">@2018 banxia</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
