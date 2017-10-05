<template>
  <div class="statistics">
    <div class="paper">
      <h3>上次检测结果</h3>
      <result :child-msg="left"></result>
      <hr>
      <result :child-msg="right"></result>
    </div>
  </div>
</template>
<script>
import Result from './result'
export default {
  components: {
    Result
  },
  data () {
    return {
      left: {
        'weight': 160,
        comparew_yd: '↑ 1',
        comaprew_lw: '↓ 3',
        temperature: 37.7,
        comparet_yd: '↑ 0.1',
        comapret_lw: '↓ 0.3'
      },
      right: {
        weight: 162,
        comparew_yd: '↑ 2',
        comaprew_lw: '↓ 4',
        temperature: 37.3,
        comparet_yd: '↑ 0.2',
        comapret_lw: '↓ 0.03'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.statistics {
  box-sizing: border-box;
  padding-top: 30px;
  .paper {
    width: 86%;
    margin: 0 auto;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 8px 20px 3px rgba(245, 161, 177, 0.2);
    padding: 20px;
    hr {
      border: none;
      height: 1px;
      background-color: #F9AFC0;
    }
    h3 {
      font-size: 18px;
      text-align: left;
      font-weight: bold;
    }
  }
}
</style>


