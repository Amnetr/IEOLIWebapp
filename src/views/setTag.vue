<template>
  <div class="main-container">
    <div class="space-left"></div>
    <div class="main-content">
      <div class="passage-container">
        <div class="passage" v-if="passage"></div>
      </div>
      <div class="operation-container">
        <div class="btns-div">
          <div class="nav-bar"></div>
          <button class="btn btn-light btn-green-color float-left">提交标注</button>
          <button class="btn btn-light float-left">换一篇</button>
        </div>
        <div class="select-container">
          <div class="step-checkbox" v-for="item in stepList" :key="item.stepid">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            >
            <label class="form-check-label" for="exampleRadios1">{{item.stepDescription}}</label>
          </div>
        </div>
        <div class="select-container"></div>
      </div>
    </div>
    <div class="space-right"></div>
  </div>
</template>
<script>
export default {
  name: 'setTag',
  data () {
    let mockData = {}
    mockData.stepList = []
    mockData.taskList = []
    for (let i = 1; i < 10; i++) {
      mockData.stepList.push({
        stepid: 'step' + i,
        stepDescription: '阶段' + i
      })
      mockData.taskList.push({
        taskid: 'task' + i,
        taskDescription: 'task' + i
      })
    }
    mockData.passage = ''
    return mockData
  }
}
</script>
<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  align-items: flex-start;
}

.space-left {
  width: 15%;
  height: 100%;
}

.space-right {
  width: 15%;
  height: 100%;
}

.main-content {
  flex: 1 0 auto;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
}

.passage-container {
  float: left;
  width: 75%;
  background: url(../assets/bg.png);
  height: 100%;
}

.operation-container {
  width: 25%;
  float: left;
  margin: 1rem 0 0 0;
  position: relative;
  padding: 0 1.5rem 0 1.5rem;
}

.passage {
  border: 2px solid #c9c9c998;
  margin: 0.875rem;
  padding: 0.3rem;
  min-height: 4rem;
}

.btns-div {
  height: 2rem;
}

.nav-bar {
  position: absolute;
  left: 1.5rem;
  display: inline-block;
  background-color: #1aa094;
  height: 2.4rem;
  width: 0.3rem;
}

.btn-green-color {
  background-color: #1aa094;
  color: white;
  margin: 0 1rem 0 1.5rem;
}

.select-container {
  width: 100%;
  min-height: 2rem;
  /* background-color: #dbdbdb28; */
  margin: 1.5rem 0;
  overflow: hidden;
  font-size: 0.9rem;
  padding: 0 1.2rem;
}

.step-checkbox {
  width: 50%;
  float: left;
  text-align: left;
}
</style>
