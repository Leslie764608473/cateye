<template>
  <div class="header">
    <div class="header-main">
      <div id="logo">logo</div>
      <div id="city">city</div>
      <ul id="nav">
        <router-link to='/msite'>首页</router-link>
        <router-link to='/movies'>电影</router-link>
        <router-link to='/cinema'>影院</router-link>
        <router-link to='/perform'>演出</router-link>
        <router-link to='/billboard'>榜单</router-link>
        <router-link to='/hotspot'>热点</router-link>
        <router-link to='/market'>商城</router-link>
      </ul>
      <div id="download">download</div>
      <div id="search">search</div>
      <div id="info">info</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.header
  position fixed
  width 100%
  height 80px
  background blue
  .header-main
    display flex
    height 80px
    #logo
      width 133px
      height 100%
    #city
      width 70px
      height 100%
    #nav
      height 100%
      width 490px
      display flex
      justify-content space-between
    #download
      width 132px
      height 100%
    #search
      width 220px
      height 100%
    // #info
</style>