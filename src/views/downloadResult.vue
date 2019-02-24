<template>
  <div>
    <div class="title-container">
      <div class="title-dot"></div>
      <span id="title">下载标注结果</span>
    </div>
    <div class="mainConatiner"></div>
  </div>
</template>

<script>
export default {
  name: 'downloadResult',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
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
</style>
