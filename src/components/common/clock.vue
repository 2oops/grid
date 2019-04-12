<!--
 * @Description: 数据表盘子组件，数据长度可配置
 * @Author: 2oops
 * @Date: 2019-04-11
 -->

<template>
  <div class="overall">
    <div class="clock-item" v-for="(item,index) in clockData" :key="index"><i>{{item}}</i>
    </div>
  </div>
</template>

<script>

import * as mock from '@/utils/mock.js'
export default {
  data() {
    return {
      clockData: [1,3,5,3,4]
    }
  },

  mounted() {
    setInterval(this.refreshClock, 2000);
  },

  methods: {
    refreshClock() {
      let num = mock.getSingleNum();
      let cData = [num.a, num.b, num.c, num.d, num.e];
      this.clockData = cData;
    }
  }
}
</script>

<style lang="less">
.overall {
  right: 0;
  left: 0;
  padding: 10px;
  width: 10vw;
  text-align: center;

  .clock-item {
    display: inline-block;
    width: 25px;
    height: 35px;
    background: #343476;
    border: 1px solid blue;
    border-radius: 5px;

    i {
      color: white;
      margin: 5px;
      font-size: 22px;
    }
  }
}
</style>
