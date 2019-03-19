<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">请上传文本</span>
    </div>
    <!-- 以下为测试用上传地址 -->
    <div class="mainConatiner">
      <el-upload
        action="/api/UploadTexts"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="200"
        :on-exceed="handleExceed"
        :file-list="fileList"
        list-type="text"
      >
        <el-button id="uploadBtn" size="small">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传TXT文件</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploadText',
  components: {
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 200 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>
.title-container {
  margin: .875rem 2rem;
}
.title-dot{
  display: inline-block;
  width: .5rem;
  height: 1rem;
  background-color: #1aa094;
}

#title{
  font-family: Helvetica;
  font-size: 1.5rem;
}
.mainConatiner {
  width: 50%;
  margin: 1.6rem 2rem;
}

#uploadBtn {
  background-color: #1aa094;
  color: #fff;
}
</style>
