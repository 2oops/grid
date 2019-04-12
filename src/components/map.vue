<template>
<div class="echarts">
  <canvas id="echarts" width="500px" height="400px"></canvas>
</div>
</template>

<script>

import * as mock from '@/utils/mock.js'
export default {
  data() {
    return {
      //chart实例
      chart: '',
      option: {
        title: {
          // text: 'Echarts'
        },
        toolbox: {
          show: true,
          feature: {
            // restore: {
            //   show: true
            // }
          }
        },
        legend: {//图例
            data: '销量',
            textStyle:{
              color:"#fff"
            }
          },
        xAxis: {
          name: '商品',
          axisTick: {
            length: 6
          }, 
          data: ['Q','W','E','R','T','Y'],
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          scale: true,
          name: '销量',
          max: 40,
          min: 0,
          splitNumber: 5,
          boundaryGap: [0.2, 0.2]
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
    this.init();
    setInterval(this.refresh, 1e3);
  },

  methods: {
    init() {
      this.chart = this.$echarts.init(document.getElementById('echarts'));
      this.chart.setOption(this.option);
      
      //reference  https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize
 
      setTimeout(function (){
        window.onresize = function () {
          this.chart.resize();
        }
      },200)
    },

    refresh() {
      let num = mock.getNum();
      let sData = [num.a, num.b, num.c, num.d, num.e, num.f];
      let xData = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]

      this.option.xAxis.data.splice(0, 6, "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子");
      this.option.series[0].data.splice(0, 6, num.a, num.b, num.c, num.d, num.e, num.f);
    },
  },

  watch: {
    option: {
      handler(newVal, oldVal) {
        if(this.chart) {
          if(newVal) {
            this.chart.setOption(newVal);
          }else {
            this.chart.setOption(oldVal);
          }
        }else {
          this.init();
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="less">
.echarts {
  // width: 37.6vw;
  // height: 400px;
  
  canvas {
    width: 36vw;
    height: 400px;
  }
}
</style>
