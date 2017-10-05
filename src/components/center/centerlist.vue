<template>
  <div class="centerlist">
    <ul class="list">
      <li v-for="(item,index) in centerlist" class="center-block" @click="_exit(index)">
        <i :class="item.icon ? 'iconfont ' + item.icon : 'iconfont'"></i>{{ item.text }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['CheckLogin'],
  data () {
    return {
      centerlist: [
        {
          icon: 'icon-settings3',
          text: '我的设备'
        },
        {
          icon: 'icon-password',
          text: '修改密码'
        },
        {
          icon: 'icon-help',
          text: '帮助'
        },
        {
          icon: 'icon-exit',
          text: '退出'
        }
      ]
    }
  },
  methods: {
    _exit: function (index) {
      index === this.centerlist.length - 1 ? this.$router.push({ path: '/login' }) : {}
    }
  }
}
</script>
<style lang="scss" scoped>
.centerlist {
  .list {
    li {
      font-size: 16px;
      line-height: 24px;
      text-align: left;
    }
    .iconfont {
      font-size: 24px;
      margin-right: 20px;
    }
  }
}
</style>


