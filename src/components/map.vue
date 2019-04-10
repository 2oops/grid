<template>
<div class="echarts">
  <canvas id="echarts" width="600px" height="400px"></canvas>
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
          name: '商品',
          axisTick: {
            length: 6
          }, 
          data: ['Q','W','E','R','T','Y']
        },
        yAxis: {
          type: 'value',
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
    },

    refresh() {
      let num = mock.getNum();
      console.log(num.a);
      let sData = [num.a, num.b, num.c, num.d, num.e, num.f];
      let xData = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      console.log(sData);
      for(let i = 0; i < xData.length; i++) {
        this.option.xAxis.data.push(xData[i]);
        this.option.series[0].data.push(sData[i]);
      }
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
  width: 600px;
  height: 400px;
}
</style>
