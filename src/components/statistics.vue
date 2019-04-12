<template>
  <div class="stat">
    <div class="stat-title">其他统计</div>
    <div class="three-clocks">
      <clock></clock>
      <clock></clock>
      <clock></clock>
    </div>
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
  },

  methods: {

  }
}
</script>

<style lang="less">
  .stat {
    border: 2px solid blue;
    // background: yellow;
    border-radius: 10px;
    margin: 10px;

    .stat-title {
      color: white;
      margin-top: 10px;
      margin-left: 10px;
      margin-bottom: 20px;
    }
    .three-clocks {
      display: grid;
      grid-template-columns: 10vw 10vw 10vw;
      grid-template-rows: 30px;
      grid-gap: 15px;
    }
  }
</style>
