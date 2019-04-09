<template>
  <el-row class="menu">
    <el-col :span="4" class="menu-header">
      <p>
        圆通工程项目管理
      </p>
    </el-col>
    <el-col :span="20" class="menu-item">
      <ul>
        <router-link v-for="(item,index) in routes" :key="index" :to="item.path" tag="li" :class="[item.active?'active':'']">{{item.title}}</router-link>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
    };
  },
  computed: {
    routes() {
      let navs = [];
      let activeName = this.$route.name;
      this.$router.options.routes.forEach(item => {
        if (!item.unNav) {
          let obj = {};
          obj.path = item.path;
          obj.name = item.children[0].name;
          obj.title = item.children[0].meta.title;
          if (obj.name === activeName) {
            obj.active = true;
          }
          navs.push(obj);
        }
      });
      return navs;
    }
  }
}
</script>
<style lang='scss' scoped>
.menu {
  box-sizing: border-box;
  color: #fff;
  background: #4265ed;
  .menu-header {
    font-size: 18px;
  }
  .menu-item {
    ul {
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 60px;
      margin: 0;
      padding: 0;
      li {
        cursor: pointer;
        padding: 19px 30px;
        font-size: 16px;
        list-style: none;
        &:hover {
          background: #4479f9;
        }
      }
      .active {
        background: #4479f9;
      }
    }
  }
}
</style>