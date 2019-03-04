<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">显示要素规则</span>
    </div>
    <div class="mainConatiner">
      <span>选择要素</span>
      <el-select
        v-model="selectedValue"
        placeholder="请选择"
        class="element-selector"
        @change="selectChange"
      >
        <el-option
          v-for="item in options"
          :key="item.elementId"
          :label="item.elementDescirption"
          :value="item.elementId"
        ></el-option>
      </el-select>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="description" label="中文描述" width="400" show-overflow-tooltip></el-table-column>
        <el-table-column prop="regExp" label="正则表达式" width="400" show-overflow-tooltip></el-table-column>
        <el-table-column prop="accuracy" label="准确率"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewRules',
  components: {
  },
  data () {
    return {
      options: [
        {
          elementId: '1',
          elementDescirption: 'ele111111'
        },
        {
          elementId: '2',
          elementDescirption: 'ele1323111'
        },
        {
          elementId: '3',
          elementDescirption: 'ele11654611'
        }
      ],
      tableData: [{
        description: '2016-05-02',
        regExp: '王小虎xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        accuracy: '上海市普陀区金沙江路 1518 弄'
      }, {
        description: '2016-05-02',
        regExp: '王小虎',
        accuracy: '上海市普陀区金沙江路 1518 弄'
      }, {
        description: '2016-05-02',
        regExp: '王小虎',
        accuracy: '上海市普陀区金沙江路 1518 弄'
      }],
      selectedValue: ''
    }
  },
  methods: {
    selectChange (value) {
      console.log(value)
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
  width: 80%;
  margin: 1.6rem 2rem;
}
.element-selector {
  margin-left: 1rem;
}
</style>
