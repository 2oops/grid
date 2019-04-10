<template>
<div>
  <!-- <background></background> -->
  <div class="header">
    <h2>某某集团云数据中心</h2>
    <div id="time"></div>
  </div>
  <div class="container">
    <deviceStat class="device">device</deviceStat>
    <cityMap class="map">
    </cityMap>
    <div class="customers">customers</div>
    <div class="value">value</div>
    <div class="industry">industry</div>
    <div class="province">province</div>
    <div class="weight">weight</div>
    <div class="tops">tops</div>
    <div class="height">height</div>
    <div class="reminder">reminder</div>
    <div class="totaltime">time</div>
    <div class="statistics">statistics</div>
    <div class="runtime">runtime</div>
    <div class="trips">trips</div>
  </div>
</div>
</template>

<script>

import background from '@/components/background'
import cityMap from '@/components/map'
import deviceStat from '@/components/device-stat'
export default {
  data() {
    return {
      
    }
  },

  components: {
    background,
    cityMap,
    deviceStat
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
  gap: 55px 50px;

    .device {
      grid-area: device;
    }
    .customers {
      grid-area: customers;
      background: #eeeeee;
    }
    .map {
      grid-area: map;
      background: #bbbbbb;
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
      background: #ffffff;
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
      background: #cccccc;
    }
    .runtime {
      grid-area: runtime;
    }
    .trips {
      grid-area: trips;
    }
}
</style>
