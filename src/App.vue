<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view />
    </div>
    
    <footer id="msit-footer">
    </footer>
  </div>
</template>

<script>


export default {
  name: 'app'
  
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
  position relative
  .content
    position absolute
    top 80px
  #msit-footer
    width 100%
    height 374px
    background pink
    bottom 0
    position fixed
</style>
