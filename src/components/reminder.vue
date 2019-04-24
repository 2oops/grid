<!--
 * @Description: device statistics设备统计
 * @Author: 2oops
 * @Date: 2019-04-09
 -->

<template>
  <div class="remind">
    <div class="reminder-title">到期提醒</div>
    <div class="def">
      <div id="chartD"></div>
      <div id="chartE"></div>
      <div id="chartF"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartD: '',
      chartE: '',
      chartF: '',
      option: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','dafsa']
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
            {value:313, name:'dddsf'}
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
      this.chartD = this.$echarts.init(document.getElementById('chartD'));
      this.chartD.setOption(this.option);

      this.chartE = this.$echarts.init(document.getElementById('chartE'));
      this.chartE.setOption(this.option);

      this.chartF = this.$echarts.init(document.getElementById('chartF'));
      this.chartF.setOption(this.option);
    }
  }
}
</script>

<style lang="less">
.remind {
  width: 15vw;
  height: 133px;
  border: 2px solid blue;
  // background: #eeeeee;
  border-radius: 10px;
  margin: 10px;

  .reminder-title {
    color: whitesmoke;
    margin: 10px 10px 20px;
  }

  .def {
    position: relative;
    z-index: inherit;
    display: flex;

    #chartD {
      position: relative;
      z-index: 99;
      width: 5vw;
      height: 71px;
    }
    #chartE {
      #chartD;
    }
    #chartF {
      #chartD;
    }
  }
}
</style>
