<template>
  <div class="trendcharts">
    <div :id="options.tableId"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['options'],
  mounted () {
    this._setTable(this.options)
  },
  methods: {
    _setTable: function (obj) {
      let _width = document.querySelector('.trendcharts').clientWidth - 20
      document.querySelector('#' + obj.tableId).style.width = _width + 'px'
      document.querySelector('#' + obj.tableId).style.height = 200 + 'px'
      let mainChart = echarts.init(document.getElementById(obj.tableId))
      mainChart.setOption(obj.option)
    }
  }
}
</script>
<style lang="scss" scoped>
.trendcharts {
  padding: 10px 10px;
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 8px 20px 3px rgba(245, 161, 177, 0.2);
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>


