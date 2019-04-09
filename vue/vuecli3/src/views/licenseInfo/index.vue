<template>
  <div>
    <div class="search">
      <h4>证照信息查询</h4>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="项目">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="登记时间">
              <el-date-picker v-model="form.time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3" :offset="1" class="search-btn">
            <el-button type="primary">查询</el-button>
            <el-button plain>清除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="content">
      <el-row class="content-header" type="flex" justify="space-between">
        <el-col :span="12" class="toolip-left">
          <el-button-group>
            <el-button>自由土地使用权</el-button>
            <el-button>自有房屋产权</el-button>
            <el-button>建设五证</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4" class="toolip">
          <el-button plain>导出</el-button>
        </el-col>
      </el-row>
      <div class="content-main">
        <el-table :data="tableList" :header-cell-style="align" :cell-style="align" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="序号" type="index" width="50" prop="name" fixed="left"></el-table-column>
          <el-table-column label="项目简称" prop="name" fixed="left"></el-table-column>
          <el-table-column label="证书编号" prop="name"></el-table-column>
          <el-table-column label="权利人" prop="name"></el-table-column>
          <el-table-column label="取得方式" prop="name"></el-table-column>
          <el-table-column label="用途" prop="name"></el-table-column>
          <el-table-column label="座落" prop="name"></el-table-column>
          <el-table-column label="用地面积(平方米)" prop="name"></el-table-column>
          <el-table-column label="使用期限" prop="name"></el-table-column>
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