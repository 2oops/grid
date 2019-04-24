<!--
 * @Description: device statistics设备统计
 * @Author: 2oops
 * @Date: 2019-04-09
 -->

<template>
  <div class="main">
    <div class="stat-title">统计设备</div>
    <div class="echarts">
      <div id="chartA" width="300px" height="200px"></div>
      <div id="chartB" width="300px" height="200px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deviceStat',
  data () {
    return {
      chartA: '',
      chartB: '',
      option: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销']
        },
        series: [{
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'}
          ]
        }]
      }
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.chartA = this.$echarts.init(document.getElementById('chartA'));
      this.chartA.setOption(this.option);

      this.chartB = this.$echarts.init(document.getElementById('chartB'));
      this.chartB.setOption(this.option);
    }
  }
}
</script>

<style lang="less">
.main {
  width: 15vw;
  height: 133px;
  // background: #aaaaaa;
  border: 2px solid blue;
  border-radius: 10px;
  margin: 10px;
  
  .stat-title {
    color: white;
  }

  .echarts {
    display: flex;
    margin: 10px;

    #chartA {
      position: relative;
      z-index: 99;
      width: 7vw;
      height: 71px;
    }
    #chartB {
      #chartA;
      float: right;
    }
  }
}
</style>
