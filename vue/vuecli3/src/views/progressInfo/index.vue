<template>
  <div>
    <div class="search">
      <h4>进度信息查询</h4>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="区域">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="月份">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="登记时间">
              <el-date-picker v-model="form.time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3" class="search-btn">
            <el-button type="primary">查询</el-button>
            <el-button plain>清除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="content">
      <el-row class="content-header">
        <el-col :span="24" class="toolip">
          <el-button plain>导出</el-button>
        </el-col>
      </el-row>
      <div class="content-main">
        <el-table :data="tableList" :header-cell-style="align" :cell-style="align" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="序号" type="index" prop="name" width="50" fixed="left"></el-table-column>
          <el-table-column label="项目名称" prop="name" fixed="left"></el-table-column>
          <el-table-column :label="item+'月'" prop="name" v-for="item in 12" :key="item"></el-table-column>
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="apple(scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page.current" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import page from '@/mixins/page.js';
export default {
  name: 'basic',
  mixins: [page],
  data() {
    return {
      form: {
        name: '',
        area: '',
        time: []
      },
      tableList: [{ name: 'qwerty' }, { name: '1234567' }]
    };
  },
  methods: {
    apple() {

    }
  }
}
</script>
<style lang='scss' scoped>
</style>