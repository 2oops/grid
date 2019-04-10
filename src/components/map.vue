<template>
  <div>
    <canvas id="echarts" width="600px" height="400px"></canvas>
  </div>
</template>

<script>

import * as mock from '@/utils/mock.js'
export default {
  data() {
    let echarts = this.$echarts;
  
    return {
      myEcharts: null,
      option: {
        title: {
          text: 'Echarts'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            },
            dataZoom: {
              show: true
            },
            magicType: {
              type: ['line', 'bar']
            }
          }
        },
        legend: {//图例
            data: '销量'
          },
        xAxis: {
          data: ['Q','W','E','R','T','Y','U']
        },
        yAxis: {

        },
        series: [{
          name: "销量",
          type: 'line',
          smooth: true,
          data: [2,33,26,11,17,9],
          markPoint: {
            data: [
              {type: 'min', name: '最小值'},
              {type: 'max', name: '最大值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }]
      }
    }
  },

  mounted() {
    var mapCanvas = document.getElementById('echarts');
    var myEcharts = this.$echarts.init(mapCanvas);
    
    // setInterval(this.refresh, 1000);
    // window.addEventListener("resize", myEcharts.resize);
    myEcharts.setOption(this.option);
  },

  methods: {
    refresh() {
      let num = mock.getNum();
      // console.log(num.a)
      // this.option.series[0].data.splice(0, 6, num.a, num.b, num.c, num.d, num.e, num.f)
      // console.log(this.option.series[0].data)
    }
  },
}
</script>

<style lang="less">

</style>
