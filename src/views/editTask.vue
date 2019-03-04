<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">请编辑任务</span>
    </div>
    <div class="mainConatiner">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="序号">
          <template slot-scope="scope">{{ scope.row.num }}</template>
        </el-table-column>
        <el-table-column prop="name" label="任务名"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="deleteSelection()">删除选择</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button @click="dialogFormVisible = true" id="createBtn">新增任务</el-button>
      </div>
      <el-dialog title="新增任务" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item label="任务描述" :label-width="formLabelWidth">
            <el-input v-model="form.description" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editTask',
  components: {
  },
  data () {
    return {
      tableData: [{
        num: '1',
        name: '王小虎'
      }, {
        num: '2',
        name: '王小虎'
      }, {
        num: '3',
        name: '王小虎'
      }],
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        description: ''
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scope>
.title-container {
  margin: 0.875rem 2rem;
}
.title-dot {
  display: inline-block;
  width: 0.5rem;
  height: 1rem;
  background-color: #1aa094;
}

#title {
  font-family: Helvetica;
  font-size: 1.5rem;
}
.mainConatiner {
  width: 50%;
  margin: 1.6rem 2rem;
}
#createBtn {
  background-color: #1aa094;
  color: #fff;
}
</style>
