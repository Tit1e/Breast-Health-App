<template>
  <div class="center">
    <user-info></user-info>
    <center-list></center-list>
  </div>
</template>
<script>
import UserInfo from './userinfo'
import CenterList from './centerlist'
export default {
  components: {
    UserInfo,
    CenterList
  }
}
</script>
<style lang="scss">
  .center{
    .center-block{
      background-color: #fff;
      padding: 10px 30px;
      box-sizing: border-box;
      box-shadow: 0px 3px 20px 0px rgba(245, 161, 177, 0.5);
      margin-bottom: 15px;
    }
  }
</style>


