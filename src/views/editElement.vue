<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">请编辑要素</span>
    </div>
    <div class="mainConatiner">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.modelid }}</span>
          </template>
        </el-table-column>
        <el-table-column label="要素" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.modelname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="段落" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.section }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              disabled
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="newElementDialog = true" id="createBtn">新增要素</el-button>
      </div>
    </div>
    <!-- 新增要素 -->
    <el-dialog title="新增要素" :visible.sync="newElementDialog" width="30%">
      <el-form :model="newElementData">
        <el-form-item label="要素描述" :label-width="formLabelWidth">
          <el-input v-model="newElementData.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="段落选择" :label-width="formLabelWidth">
          <el-input-number v-model="newElementData.section" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createCancel">取 消</el-button>
        <el-button type="primary" @click="createConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改要素 -->
    <el-dialog title="编辑要素" :visible.sync="editElementDialog" width="30%">
      <el-form :model="editElementData">
        <el-form-item label="要素描述" :label-width="formLabelWidth">
          <el-input v-model="editElementData.modelname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="段落选择" :label-width="formLabelWidth">
          <el-input-number v-model="editElementData.section" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editCancel">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'editElement',
  components: {
  },
  data () {
    return {
      tableData: [],
      formLabelWidth: '80px',
      newElementDialog: false,
      editElementDialog: false,
      newElementData: {},
      editElementData: {}
    }
  },
  created: function () {
    this.axios.get('/api/GetTasks').then(function (respons) {
      this.tableData = respons.data
    }.bind(this))
  },
  methods: {
    handleEdit (index, row) {
      this.editElementDialog = true
      this.editElementData = JSON.parse(JSON.stringify(row))
    },
    handleDelete (index, row) {
    },
    updateTable () {
      this.axios.get('/api/GetTasks').then(function (respons) {
        this.tableData = respons.data
      }.bind(this))
    },
    editConfirm () {
      this.axios.post('/api/UploadElements', {
        modelid: this.editElementData.modelid,
        description: this.editElementData.modelname,
        section: this.editElementData.section
      }).then(function (respons) {
        this.editElementDialog = false
        this.editElementData = {}
        this.updateTable()
      }.bind(this))
    },
    editCancel () {
      this.editElementDialog = false
      this.editElementData = {}
    },
    createConfirm () {
      this.axios.post('/api/UploadElements', {
        modelid: '-1',
        description: this.newElementData.description,
        section: this.newElementData.section
      }).then(function (respons) {
        this.newElementDialog = false
        this.newElementData = {}
        this.updateTable()
      }.bind(this))
    },
    createCancel () {
      this.newElementDialog = false
      this.newElementData = {}
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
