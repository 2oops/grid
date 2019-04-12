<template>
  <div class="custom-num">
    <div class="total">客户总数</div>
    <clock></clock>
    <div class="device-num">设备总数</div>
    <clock></clock>
  </div>
</template>

<script>

import clock from '@/components/common/clock'
export default {
  data() {
    return {

    }
  },

  components: {
    clock
  }
}
</script>

<style lang="less">
.custom-num {
  width: 15vw;
  height: 240px;
  // background: #aaaaaa;
  border: 2px solid blue;
  border-radius: 10px;
  margin: 10px;

  .total {
    margin-bottom: 10px;
    color: antiquewhite;
  }

  .device-num {
    margin-bottom: 10px;
    color: white;
  }
}
</style>
