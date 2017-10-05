<template>
  <div class="trend">
    <trend-charts :options="WeightLine"></trend-charts>
    <trend-charts :options="TemperatureLine"></trend-charts>
  </div>
</template>
<script>
import TrendCharts from './trendcharts'

export default {
  components: {
    TrendCharts
  },
  data () {
    return {
      WeightLine: {
        tableId: 'chart1',
        option: {
          title: {
            text: '重量走势',
            textStyle: {
              color: '#F9AFC0'
            }
          },
          color: ['#F9AFC0', '#F9AFC0'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['左胸', '右胸'],
            right: 10,
            textStyle: {
              color: '#F9AFC0'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            axisLine: {
              lineStyle: {
                color: '#F9AFC0'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#F9AFC0'
              }
            },
            type: 'category',
            boundaryGap: ['50%', '50%'],
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            min: function (value) {
              return value.min - 0.5
            },
            name: '重量/g',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#F9AFC0'
              }
            },
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#F9AFC0'
              }
            }
          },
          series: [
            {
              name: '左胸',
              type: 'line',
              stack: '左胸',
              data: [160.2, 160.4, 160.3, 160.5, 160, 160.1, 160.4],
              symbol: 'triangle',
              symbolSize: 5
            },
            {
              name: '右胸',
              type: 'line',
              stack: '右胸',
              data: [160.5, 160.2, 160.7, 160.4, 160.3, 160.5, 160.6],
              symbol: 'circle',
              symbolSize: 5
            }
          ]
        }
      },
      TemperatureLine: {
        tableId: 'chart2',
        option: {
          title: {
            text: '温度走势',
            textStyle: {
              color: '#F9AFC0'
            }
          },
          color: ['#F9AFC0', '#F9AFC0'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['左胸', '右胸'],
            right: 10,
            textStyle: {
              color: '#F9AFC0'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            axisLine: {
              lineStyle: {
                color: '#F9AFC0'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#F9AFC0'
              }
            },
            type: 'category',
            boundaryGap: ['50%', '50%'],
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            min: function (value) {
              return value.min - 0.5
            },
            name: '温度/℃',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#F9AFC0'
              }
            },
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#F9AFC0'
              }
            }
          },
          series: [
            {
              name: '左胸',
              type: 'line',
              stack: '左胸',
              data: [37.5, 37.7, 37.4, 37.3, 37.6, 37.5, 37.4],
              symbol: 'triangle',
              symbolSize: 5
            },
            {
              name: '右胸',
              type: 'line',
              stack: '右胸',
              data: [37.6, 37.4, 37.5, 37.6, 37.7, 37.4, 37.3],
              symbol: 'circle',
              symbolSize: 5
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.trend {
  padding-top: 20px;
}
</style>


