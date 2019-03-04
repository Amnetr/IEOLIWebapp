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
            <span>{{ scope.row.num }}</span>
          </template>
        </el-table-column>
        <el-table-column label="要素" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="newElementDialog = false">取 消</el-button>
        <el-button type="primary" @click="newElementDialog = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改要素 -->
    <el-dialog title="编辑要素" :visible.sync="editElementDialog" width="30%">
      <el-form :model="editElementData">
        <el-form-item label="要素描述" :label-width="formLabelWidth">
          <el-input v-model="editElementData.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editElementDialog = false">取 消</el-button>
        <el-button type="primary" @click="editElementDialog = false">确 定</el-button>
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
      tableData: [{
        num: '1',
        description: '王小虎'
      }, {
        num: '2',
        description: '王小虎'
      }],
      formLabelWidth: '80px',
      newElementDialog: false,
      editElementDialog: false,
      newElementData: {},
      editElementData: {}
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editElementDialog = true
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
