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
        <div class="subtitle">
          <div class="nav-dot"></div>
          <span>选择相应阶段</span>
        </div>
        <div class="select-container">
          <div class="step-checkbox" v-for="item in stepList" :key="item.stepid">
            <input
              class="form-check-input"
              type="radio"
              name="stepRadios"
              id="item.stepid"
              value="item.stepDescription"
            >
            <label class="form-check-label" for="exampleRadios1">{{item.stepDescription}}</label>
          </div>
        </div>
        <div class="subtitle">
          <div class="nav-dot"></div>
          <span>选择任务</span>
        </div>
        <div class="select-container">
          <div class="task-div">
            <div class="task-btns" v-for="(item,index) in taskList" :key="item.taskid">
              <label>{{index + 1}}.{{item.taskid}}</label>
              <div class="btn-group task-group-btns" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light btn-sm task-green-btn">标注</button>
                <button type="button" class="btn btn-light btn-sm">清除</button>
              </div>
            </div>
          </div>
        </div>
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
.task-group-btns{
  margin-left: 1.8rem;
}

.task-green-btn {
  background-color: #1aa094;
  color: white;
  margin-left: 2rem;
}

.subtitle {
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1rem;
  padding-left: 1.5rem;
  text-align: left;
}

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
  overflow: hidden;
}

.nav-bar {
  position: absolute;
  left: 1.5rem;
  display: inline-block;
  background-color: #1aa094;
  height: 2.4rem;
  width: 0.3rem;
}

.nav-dot {
  position: absolute;
  left: 1.5rem;
  display: inline-block;
  background-color: #1aa094;
  height: 0.7rem;
  width: 0.7rem;
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
  margin: 0.8rem 0 0 0;
  overflow: hidden;
  font-size: 1rem;
  padding: 0 2.7rem;
}

.step-checkbox {
  width: 50%;
  float: left;
  text-align: left;
}

.task-btns {
  text-align: left;
}

.task-div {
  margin-left: -1.2rem;
}
</style>
