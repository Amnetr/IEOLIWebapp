<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="#1aa094"
  >
    <mgrLogo></mgrLogo>
    <el-submenu index="1" class="float-right">
      <template slot="title">页面导航</template>
      <el-menu-item index="1-1">工作台</el-menu-item>
      <el-menu-item index="1-2">个人中心</el-menu-item>
      <el-menu-item index="1-3">注销</el-menu-item>
    </el-submenu>
    <el-menu-item index="2" class="float-right" disabled>消息中心</el-menu-item>
  </el-menu>
</template>

<script>
import mgrLogo from '@/components/mgrLogo.vue'
export default {
  data () {
    return {
      activeIndex: '1-1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    mgrLogo
  }
}
</script>

<style scope>
</style>
