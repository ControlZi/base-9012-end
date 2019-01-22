<template>
  <div>
    home
    <router-link to="/login">
      login
    </router-link>
    <router-link to="/test">
      test
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  }
}
</script>
<style lang='scss' scoped>
</style>