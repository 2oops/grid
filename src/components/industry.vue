<template>
  <div class="industry-wrapper">
    <div class="font">行业TOP10</div>
    <threeColumns></threeColumns>
  </div>
</template>

<script>

import threeColumns from '@/components/common/three-columns'
export default {
  data() {
    return {

    }
  },

  components: {
    threeColumns
  }
}
</script>

<style lang="less">
  .industry-wrapper {
    border: 2px solid blue;
    border-radius: 10px;
    margin: 10px;
    // background: #cccccc;

    .font {
      color: white;
    }
  }
</style>
