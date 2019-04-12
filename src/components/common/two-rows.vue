<template>
  <div class="contain">
    <div class="item">
      <div class="first-line">节省费用5600万</div>
      <div class="second-line">相当与41.39颗树一生产生的价值</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twoRows'

}
</script>

<style lang="less">
  .contain {
    width: 15vw;
    height: 133px;
    border: 2px solid blue;
    border-radius: 10px;
    
    .item {

      .first-line {
        font-size: 22px;
        color: aliceblue;
      }
      .second-line {
        font-size: 16px;
        color: aliceblue;
      }
    }
  }
</style>
