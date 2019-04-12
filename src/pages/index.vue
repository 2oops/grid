<template>
<div>
  <background></background>
  <div class="header">
    <h2>云数据中心</h2>
    <div id="time"></div>
  </div>
  <div class="container">
    <deviceStat class="device">device</deviceStat>
    <cityMap class="map">
    </cityMap>
    <customers class="customers">customers</customers>
    <twoRows class="value">value</twoRows>
    <industry class="industry">industry</industry>
    <province class="province">province</province>
    <twoRows class="weight">weight</twoRows>
    <industry class="tops">tops</industry>
    <twoRows class="height">height</twoRows>
    <reminder class="reminder">reminder</reminder>
    <totalTime class="totaltime">time</totalTime>
    <statistics class="statistics">statistics</statistics>
    <twoRows class="runtime">runtime</twoRows>
    <twoRows class="trips">trips</twoRows>
  </div>
</div>
</template>

<script>

import background from '@/components/background'
import cityMap from '@/components/map'
import deviceStat from '@/components/device-stat'
import totalTime from '@/components/total-time'
import reminder from '@/components/reminder'
import customers from '@/components/customers'
import statistics from '@/components/statistics'
import province from '@/components/province'
import industry from '@/components/industry'
import twoRows from '@/components/common/two-rows'

export default {
  data() {
    return {
      
    }
  },

  components: {
    background,
    cityMap,
    deviceStat,
    totalTime,
    reminder,
    customers,
    statistics,
    province,
    industry,
    twoRows,
  },

  created() {
    setInterval(this.showTime, 1000);//注意这里不是this.showTime()
  },

  methods: {
    showTime() {
      let nowtime = document.getElementById('time');
      let timeStr = '2019/4/10 下午1:00:00'
      timeStr = new Date().toLocaleString();

      nowtime.innerHTML = timeStr;
    }
  }

}
</script>

<style lang="less">
@item-width: 15.6vw;
.header {
  height: 12.5%;
  text-align: center;
  color: white;
}

.container {
  display: grid;
  width: 100%;
  height: 87.5%;
  grid-template-areas:
  "device customers map province value"
  "industry customers map province weight"
  "tops customers map province height"
  "reminder totaltime statistics runtime trips";
  grid-template-columns: @item-width @item-width auto @item-width @item-width;
  grid-template-rows: repeat(4, 1fr);
  gap: 35px 30px;

    .device {
      grid-area: device;
    }
    .customers {
      grid-area: customers;
      // background: #eeeeee;
    }
    .map {
      grid-area: map;
      // background: #bbbbbb;
      height: 500px;
    }
    .value {
      grid-area: value;
    }
    .industry {
      grid-area: industry;
    }
    .province {
      grid-area: province;
      // background: #bbbbbb;
    }
    .weight {
      grid-area: weight;
    }
    .reminder {
      grid-area: reminder;
    }
    .totaltime {
      grid-area: totaltime;
    }
    .statistics {
      grid-area: statistics;
      // background: #cccccc;
    }
    .runtime {
      grid-area: runtime;
    }
    .trips {
      grid-area: trips;
    }
}
</style>
