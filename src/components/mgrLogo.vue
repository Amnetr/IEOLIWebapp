<template>
  <div class="logo-container">
    <a class="no-underline" href="#">
      <span class="title-font">IEOLI 后台管理系统</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'mgrLogo'
}
</script>

<style scoped>
.logo-container {
  height: 3rem;
  float: left;
  font-size: 1.6rem;
  cursor: pointer;
  line-height: 3rem;
  margin: 0.35rem 1.5rem;
}

.no-underline {
  text-decoration: none;
}

.title-font {
  font-family: Helvetica;
}
</style>
