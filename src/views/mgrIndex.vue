<template>
  <div class="leftMenu-container">
    <leftMenu></leftMenu>
  </div>
</template>

<script>
import leftMenu from '@/components/leftMenu.vue'
export default {
  name: 'mgrIndex',
  components: {
    leftMenu
  }
}
</script>

<style scope>
.leftMenu-container {
  float: left;
  width: 15%;
  height: 100%;
  min-width: 200px;
  border-right: solid 1px #7070704f;
}
</style>
