<template>
  <div>
    <section class="search">
      <h4>用户管理查询</h4>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="用户名">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12" :md="8" :lg="6">
            <el-form-item label="工号">
              <el-input v-model="form.area" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3" :offset="1" class="search-btn">
            <el-button type="primary">查询</el-button>
            <el-button plain>清除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </section>
    <section class="content">
      <el-row class="content-header" type="flex" justify="space-between">
        <el-col :span="24" class="toolip">
          <el-button type="primary" @click="addDialogShow = true">新增</el-button>
          <el-button plain @click="modifyDialogShow = true">修改</el-button>
          <el-button plain @click="del">删除</el-button>
        </el-col>
      </el-row>
      <div class="content-main">
        <el-table :data="tableList" :header-cell-style="align" :cell-style="align" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="序号" type="index" width="50" prop="name" fixed="left"></el-table-column>
          <el-table-column label="用户名" prop="name"></el-table-column>
          <el-table-column label="工号" prop="name"></el-table-column>
          <el-table-column label="权限" prop="name"></el-table-column>
          <el-table-column label="登记时间" prop="name"></el-table-column>
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="apple(scope.row)">修改</el-button>
              <el-button type="text" @click="apple(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page.current" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
        </el-pagination>
      </div>
    </section>
    <section>
      <el-dialog :visible.sync="addDialogShow" center width="38%">
        <p slot="title" class="dialog-header algin-left"> 新增</p>
        <div class="dialog-content">
          <el-form :model="addForm" label-width="80px">
            <el-row>
              <el-col :span="12" :xs="24">
                <el-form-item label="用户名">
                  <el-input v-model="addForm.username" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="工号">
                  <el-input v-model="addForm.usercode" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="权限">
                  <el-select v-model="addForm.permission">
                    <el-option label="普通" value="1"></el-option>
                    <el-option label="管理员" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer">
          <el-button plain>取消</el-button>
          <el-button type="primary">提交</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync="modifyDialogShow" center width="38%">
        <p slot="title" class="dialog-header algin-left"> 修改</p>
        <div class="dialog-content">
          <el-button-group style="margin-bottom:20px;">
            <el-button @click="isModifyPWD = false" :class="{active:!isModifyPWD}">用户信息</el-button>
            <el-button @click="isModifyPWD = true" :class="{active:isModifyPWD}">密码修改</el-button>
          </el-button-group>
          <el-form :model="addForm" label-width="80px" v-show="!isModifyPWD">
            <el-row>
              <el-col :span="12" :xs="24">
                <el-form-item label="用户名">
                  <el-input v-model="addForm.username" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="工号">
                  <el-input v-model="addForm.usercode" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="权限">
                  <el-select v-model="addForm.permission">
                    <el-option label="普通" value="1"></el-option>
                    <el-option label="管理员" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form :model="addForm" label-width="80px" v-show="isModifyPWD">
            <el-row>
              <el-col :span="12" :xs="24">
                <el-form-item label="用户名">
                  <el-input v-model="addForm.username" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="工号">
                  <el-input v-model="addForm.usercode" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="输入密码">
                  <el-input v-model="addForm.password" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :xs="24">
                <el-form-item label="确认密码">
                  <el-input v-model="addForm.repeatPWD" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer">
          <el-button plain>取消</el-button>
          <el-button type="primary">提交</el-button>
        </span>
      </el-dialog>
    </section>
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
      addForm: {
        username: '',
        usercode: '',
        permission: ''
      },
      pwdForm: {
        username: '',
        usercode: '',
        password: '',
        repeatPWD: ''
      },
      tableList: [{ name: 'qwerty' }, { name: '1234567' }],
      addDialogShow: false,
      modifyDialogShow: false,
      isModifyPWD: false
    };
  },
  methods: {
    apple() {
      console.log('apple: ');
    },
    del() {
      this.confirmFn(this.apple)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>