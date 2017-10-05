<template>
  <ul id="footer">
    <router-link tag="li" to="detection">
      <i class="iconfont icon-dashboard"></i>
      <span>检测</span>
    </router-link>
    <router-link tag="li" to="statistics">
      <i class="iconfont icon-fcstubiao19"></i>
      <span>统计</span>
    </router-link>
    <router-link tag="li" to="trend">
      <i class="iconfont icon-qushi"></i>
      <span>趋势</span>
    </router-link>
    <router-link tag="li" to="center">
      <i class="iconfont icon-gerenzhongxin-xuanzhong"></i>
      <span>我</span>
    </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #footer{
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding:7px 0px;
    box-sizing: border-box;
    background-color: #FDF3FB;
    color: #bbb;
    li{
      width: 25%;
      flex-grow: 1;
      span{
        display: block;
        margin-top: 3px;
        box-sizing: border-box;
      }
      i{
        font-size: 18px;
      }
    }
    li.router-link-active{
      color: #F8B0C0;
      span{
        font-weight: bold;
      }
    }
  }
</style>
