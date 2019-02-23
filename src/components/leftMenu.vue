<template>
  <el-menu
    default-active="/updateText"
    class="my-left-menu"
    @open="handleOpen"
    @close="handleClose"
    active-text-color="#1aa094"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>操作列表</span>
      </template>
      <el-menu-item index="/updateText">
        <i class="el-icon-upload">
          <!-- <router-link to="/updateText"></router-link> -->
        </i>上传文本
      </el-menu-item>
      <el-menu-item index="1-2">
        <i class="el-icon-edit"></i>修改任务
      </el-menu-item>
      <el-menu-item index="1-3">
        <i class="el-icon-edit-outline"></i>修改要素
      </el-menu-item>
      <el-menu-item index="1-4">
        <i class="el-icon-download"></i>下载标注结果
      </el-menu-item>
      <el-menu-item index="1-5">
        <i class="el-icon-document"></i>显示要素规则
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'leftMenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scope>
.my-left-menu {
  border-right: solid 1px #fff;
}
</style>
