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
        <el-table-column label="Task ID">
          <template slot-scope="scope">{{ scope.row.taskid }}</template>
        </el-table-column>
        <el-table-column prop="taskdescription" label="任务描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="deleteSelection()" disabled>删除选择</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button @click="dialogFormVisible = true" id="createBtn">新增任务</el-button>
      </div>
      <!-- 新增任务 -->
      <el-dialog title="新增任务" :visible.sync="dialogFormVisible" width="30%">
        <el-form>
          <el-form-item label="任务描述" :label-width="formLabelWidth">
            <el-input v-model="newtaskdescription" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="createCancel">取 消</el-button>
          <el-button type="primary" @click="createConfirm">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 编辑要素 -->
      <el-dialog title="编辑任务" :visible.sync="editTaskDialog" width="30%">
        <el-form>
          <el-form-item label="任务描述" :label-width="formLabelWidth">
            <el-input v-model="edittaskdescription" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editCancel">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
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
      tableData: [],
      multipleSelection: [],
      dialogFormVisible: false,
      editTaskDialog: false,
      edittaskdescription: '',
      edittaskid: '',
      newtaskdescription: '',
      formLabelWidth: '80px'
    }
  },
  created: function () {
    this.axios.post('/api/page', {
      path: 'edittask'
    }).then(function (respons) {
      this.tableData = respons.data.list
    }.bind(this))
  },
  methods: {
    handleEdit (index, row) {
      this.editTaskDialog = true
      this.edittaskid = row.taskid
    },
    editConfirm () {
      this.axios.post('/api/UploadModels', {
        taskid: this.edittaskid,
        description: this.edittaskdescription
      }).then(function (respons) {
        console.log(respons)
        this.editTaskDialog = false
        this.edittaskid = ''
        this.edittaskdescription = ''
        this.updateTable()
      }.bind(this))
    },
    editCancel () {
      this.editTaskDialog = false
      this.edittaskid = ''
      this.edittaskdescription = ''
    },
    createConfirm () {
      this.axios.post('/api/UploadModels', {
        taskid: '-1',
        description: this.newtaskdescription
      }).then(function (respons) {
        console.log(respons)
        this.dialogFormVisible = false
        this.newtaskdescription = ''
        this.updateTable()
      }.bind(this))
    },
    createCancel () {
      this.dialogFormVisible = false
      this.newtaskdescription = ''
    },
    updateTable () {
      this.axios.post('/api/page', {
        path: 'edittask'
      }).then(function (respons) {
        this.tableData = respons.data.list
      }.bind(this))
    },
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

<style scoped>
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
