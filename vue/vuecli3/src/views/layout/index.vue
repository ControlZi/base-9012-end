<template>
  <el-container>
    <el-header>
      <nav-bar />
    </el-header>
    <el-scrollbar class="scrollbar" wrap-class="x-auto">
      <el-main>
        <router-view />
      </el-main>
    </el-scrollbar>
  </el-container>
</template>

<script>
import navBar from './components/navBar.vue';
export default {
  data() {
    return {};
  },
  components: { navBar },
  methods: {}
}
</script>
<style lang='scss'>
.scrollbar {
  height: calc(100vh - 60px);
  width: 100%;
  background: #f8f9ff;
  .el-main {
    padding: 20px 20px 0 20px;
    .search {
      width: 100%;
      box-sizing: border-box;
      padding: 25px;
      background: #fff;
      h4 {
        margin: 0;
        margin-bottom: 25px;
        text-align: left;
      }
      .search-btn {
        float: right;
        display: flex;
        justify-content: flex-end;
      }
      .search-btn-left {
        float: left;
        display: flex;
        justify-content: flex-start;
      }
    }
    .content {
      box-sizing: border-box;
      width: 100%;
      margin-top: 20px;
      padding: 20px;
      background: #fff;
      .content-header {
        padding-bottom: 20px;
        .toolip {
          display: flex;
          justify-content: flex-end;
        }
        .toolip-left {
          display: flex;
          justify-content: flex-start;
        }
      }
      .content-main {
        .page {
          padding-top: 16px;
        }
      }
    }
  }
}
</style>