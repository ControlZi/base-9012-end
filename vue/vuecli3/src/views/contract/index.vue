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
      <el-row class="content-header">
        <el-col :span="24" class="toolip">
          <el-button plain>导出</el-button>
        </el-col>
      </el-row>
      <div class="content-main">
        <el-table :data="tableList" :header-cell-style="align" :cell-style="align" :summary-method="getSummaries" row-key="id" show-summary sum-text="总计">
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="序号" type="index" width="50" prop="name" fixed="left"></el-table-column>
          <el-table-column label="项目简称" prop="name" fixed="left"></el-table-column>
          <el-table-column label="证书编号" prop="name"></el-table-column>
          <el-table-column label="合同编号" prop="name"></el-table-column>
          <el-table-column label="合同名称" prop="name"></el-table-column>
          <el-table-column label="是否分期付款" prop="name"></el-table-column>
          <el-table-column label="合同款(元)" prop="name"></el-table-column>
          <el-table-column label="甲方" prop="name"></el-table-column>
          <el-table-column label="已方" prop="name"></el-table-column>
          <el-table-column label="付款金额" prop="name">
            <template slot-scope="scope">
              <el-popover placement="top">
                <p>分期明细</p>
                <div style="text-align: right; margin: 0">
                  <table>
                    <tr>
                      <td>2019年1月12号</td>
                      <td style="padding-left:50px">10092.2</td>
                    </tr>
                    <tr>
                      <td>2019年1月12号</td>
                      <td style="padding-left:50px">10092.2</td>
                    </tr>
                  </table>
                </div>
                <el-button slot="reference" type="text"> {{scope.row.name}}</el-button>
              </el-popover>
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
      tableList: [{ id: 1, name: 'qwerty', children: [{ id: 11, name: '11' }] }, { id: 2, name: '1234567', children: [{ id: 21, name: '21' }, { id: 22, name: '22' }] }]
    };
  },
  methods: {
    apple() {

    },
    getSummaries(param) {
      console.log('param: ', param);
      return ['', '总计', 3, 4, 5, 6, 7, 8, 9];
    }
  }
}
</script>
<style lang='scss' scoped>
</style>