<!--
 * @Description: 
 * @Author: 2oops
 * @Date: 2019-08-09 17:09:29
 -->
<template>
  <div id="view">
    <div class="view-header">
      <div class="left logo-wrapper">logo</div>
      <div class="right">login</div>
    </div>

    <div class="view-container">
      <div class="aside">aside</div>
      <div class="main">
        <div class="title">title</div>
        <div class="panel">
          <ul class="card-list-wrapper">
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
          </ul>
        </div>
      </div>
      <footer class="footer">footer</footer>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  #view {
    width: 100%;
    overflow-x: hidden;

    .view-header {
      width: 100%;
      background: #ffd9d9;
      position: relative;
      box-shadow: 5px 0 5px #333;
      height: 4rem;
      line-height: 4rem;
      min-width: 700px;
      z-index: 50;
      padding: 0 20px;
      flex-shrink: 0;
      box-sizing: border-box;
      
      .left {
        float: left;
        line-height: 1;
        height: 4rem;
      }

      .right {
        float: right;
      }
    }

    .view-container {
      color: #333;
      height: calc(100% - 4rem);
      width: 100%;
      padding-bottom: 1.7rem;
      position: relative;
      min-width: 700px;
      box-sizing: border-box;

      .aside {
        position: absolute;
        background-color: #524f4f;
        left: 0;
        height: 100%;
        min-width: 30px;
        z-index: 52;
      }

      .main {
        width: 100%;
        position: relative;
        display: block;
        height: 630px;
        overflow-y: auto;
        background: #eee;
        box-sizing: border-box;
        padding: 15px;
        overflow-x: hidden;
        padding-left: 64px;

        .title {
          padding-bottom: .714rem;
          line-height: 2.071rem;
          border-bottom: 1px solid #ea090a;
          font-size: 1.142rem;
        }

        .panel {
          overflow-y: auto;
          position: relative;
          height: 80%;
          padding: 15px;
          background: #fff;
          box-sizing: border-box;

          .card-list-wrapper {
            margin-top: 0.7rem;
            list-style-type: none;
            list-style: none;

            li {
              display: inline-block;
              box-sizing: border-box;
              padding: 0.375rem;
              width: 25%;
              list-style: none;
            }
          }
        }
      }

      .footer {
        background: #32323a;
        padding: .357rem 0;
        font-size: .875rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #d3d3d3;
        height: 1rem;
        line-height: 1rem;
      }
    }
  }
</style>
