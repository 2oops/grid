<!--
 * @Description: device statistics设备统计
 * @Author: 2oops
 * @Date: 2019-04-09
 -->

<template>
  <div class="main">
    <div class="main-title">告警总次数</div>
    <div id="alarmChart" ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alarmChart: '',
      chartB: '',
      option: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','统计']
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
            {value:310, name:'邮件营销'},
            {value:353, name:'统计'}
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
      this.alarmChart = this.$echarts.init(document.getElementById('alarmChart'));
      this.alarmChart.setOption(this.option);
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

  .main-title {
    color: white;
  }

  #alarmChart {
    position: relative;
    z-index: 99;
    width: 15vw;
    height: 71px;
    margin: 20px;
  }
}
</style>
