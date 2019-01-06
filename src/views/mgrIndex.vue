<template>
  <div class="main-container">
    <div class="top-menu-container">
      <topMenu></topMenu>
      </div>
    <div class="left-menu-container">
      <leftMenu></leftMenu>
    </div>
  </div>
</template>

<script>
import leftMenu from '@/components/leftMenu.vue'
import topMenu from '@/components/topMenu.vue'
export default {
  name: 'mgrIndex',
  components: {
    leftMenu, topMenu
  }
}
</script>

<style scope>
.main-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.left-menu-container {
  float: left;
  width: 15%;
  height: 100%;
  min-width: 200px;
  border-right: solid 1px #e6e6e6;
}

.top-menu-container {
  width: 100%;
  min-height: 4rem;
}
</style>
