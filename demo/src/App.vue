<template>
  <div id="app">
    <!-- 头部 -->
    <headers></headers>
    <!-- tab -->
    <tab></tab>
    <!-- 页面 -->
    <router-view></router-view>
    <player></player>
  </div>
</template>

<script>
  import headers from '@/components/header'
  import tab from '@/components/tabs'
  import player from '@/components/player'
export default {
  name: 'App',
  components:{
    headers,
    tab,
    player
  }
}
</script>

<style lang = "less">
  @import '~@/content/less/index.less';
</style>
