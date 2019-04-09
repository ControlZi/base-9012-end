<template>
  <div>
    <div class="search">
      <h4>基本信息查询</h4>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="区域">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="区域">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="项目">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="所属公司">
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
          <el-button type="primary">新增</el-button>
          <el-button plain>修改</el-button>
          <el-button plain>导入</el-button>
          <el-button plain>导出</el-button>
          <el-button plain>作废</el-button>
        </el-col>
      </el-row>
      <div class="content-main">
        <el-table :data="tableList" :header-cell-style="align" :cell-style="align" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="序号" type="index" width="50" prop="name"></el-table-column>
          <el-table-column label="项目简称" prop="name"></el-table-column>
          <el-table-column label="购买时间" prop="name"></el-table-column>
          <el-table-column label="使用期限" prop="name"></el-table-column>
          <el-table-column label="实际亩数" prop="name"></el-table-column>
          <el-table-column label="建筑面积" prop="name"></el-table-column>
          <el-table-column label="土地费(万元)" prop="name"></el-table-column>
          <el-table-column label="立项金额(万元)" prop="name"></el-table-column>
          <el-table-column label="登记时间" prop="name"></el-table-column>
          <el-table-column label="状态" prop="name"></el-table-column>
          <el-table-column label="开竣工日期">
            <template slot-scope="scope">
              <el-button type="text" @click="apple(scope.row)">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column label="证照">
            <template slot-scope="scope">
              <el-button type="text" @click="apple(scope.row)">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column label="合约台账">
            <template slot-scope="scope">
              <el-button type="text" @click="apple(scope.row)">查看</el-button>
            </template>
          </el-table-column>
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