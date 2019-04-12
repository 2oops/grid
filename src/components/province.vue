<template>
  <div class="province-wrapper">
    <div class="province-title">广东省</div>
    <twoColumns></twoColumns>
  </div>
</template>

<script>

import twoColumns from '@/components/common/two-columns'
export default {
  data() {
    return {

    }
  },

  components: {
    twoColumns
  }
}
</script>

<style lang="less">
  .province-wrapper {
    border: 2px solid blue;
    border-radius: 10px;
    margin: 10px;

    .province-title {
      color: white;
    }
  }
</style>
