export default {
  data() {
    return {
      page: {
        current: 1,
        total: 100
      },
      align: {
        'text-align': 'center'
      }
    };
  },
  methods: {
    handleCurrentChange() {},
    handleSizeChange() {},
    confirmFn(callback, option = {}) {
      let config = {
        ...{
          title: '提示',
          message: '即将执行删除, 是否继续?',
          sureText: '确定',
          cancelText: '取消',
          type: 'warning'
        },
        ...option
      };
      this.$confirm(config.message, config.title, {
        confirmButtonText: config.sureText,
        cancelButtonText: config.cancelText,
        type: 'warning'
      })
        .then(() => {
          callback();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
  }
};
