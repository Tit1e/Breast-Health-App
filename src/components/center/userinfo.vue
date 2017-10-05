<template>
  <div class="center-block">
    <div class="avatar">
      <img :src="info.avatar" width="100%" height="100%">
    </div>
    <div class="name-phone">
      <div>昵称: {{ info.name }}</div>
      <br>
      <div>帐号: {{ info.phone }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {
        name: '婷子',
        avatar: 'http://opzfmbyhp.bkt.clouddn.com/2017-10-05-115911.jpg',
        phone: '187xxxxxxxx'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.center-block {
  font-size: 14px;
  color: #F9AFC0;
  display: flex;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .name-phone {
    padding-left: 20px;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>


