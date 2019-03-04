<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">选择文本模型</span>
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
        <el-button @click="downloadSelection()" id="downloadBtn">下载</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'downloadResult',
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
#downloadBtn {
  background-color: #1aa094;
  color: #fff;
}
</style>
