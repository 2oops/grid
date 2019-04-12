<!--
 * @Description: 数据表盘子组件，数据长度可配置
 * @Author: 2oops
 * @Date: 2019-04-11
 -->

<template>
  <div class="overall">
    <div class="clock-item"><i>{{number}}</i>
    </div>
    <div class="clock-item"><i>{{number}}</i>
    </div>
    <div class="clock-item"><i>{{number}}</i>
    </div>
    <div class="clock-item"><i>{{number}}</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  },

  methods: {

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
