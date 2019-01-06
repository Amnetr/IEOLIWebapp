<template>
  <div class="headline">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div id="rectrangle"></div>
        <h3 id="title">挑选任务进行标注</h3>
        <div class="prepanel">
          <div class="panel-group" id="accordion">
            <div class="caption" v-for="item in list" :key="item.taskid">
              <input type="checkbox" class="form-check-input" name="task">
              <label class="form-check-label">{{item.taskdescription}}</label>
            </div>
          </div>
          <p class="task-btn">
            <a onclick="settask()" target="_blank" class="btn btn-info" role="button">选择</a>
          </p>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectTask',
  data () {
    let mockData = {}
    mockData.list = []
    for (let i = 1; i < 10; i++) {
      mockData.list.push({
        taskid: i,
        taskdescription: 'test' + i
      })
    }
    return mockData
  }
}
</script>
<style scoped>
.taskList {
  font-size: 25px;
  margin-right: 2px;
  margin-bottom: 3px;
}
.container-fluid {
  background-color: lightgrey;
  opacity: 0.6;
}

.row {
  margin-top: -20px;
  height: 100vh;
}

.col-md-8 {
  box-shadow: 0px 6px 5px lightgrey inset;
  background: url(../assets/bg.png);
  height: 100vh;
  overflow-y: scroll;
}

#rectrangle {
  float: left;
  height: 35px;
  width: 6px;
  background-color: #1aa094;
  margin: 30px 7px 30px 30px;
}

#title {
  margin: 30px 30px 30px 7px;
  padding: 0px;
  font-family: "PingHei";
  font-size: 30px;
}

.btn {
  background-color: #1aa094;
  border: none;
}

.prepanel {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px 20px 20px 20px;
  text-align: center;
}

#pretiltle {
  font-family: "PingHei";
  font-size: 20px;
  margin: 0px 10px 20px 10px;
}

.taskDescription {
  font-size: 1.5rem;
}

.panel-group {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}

.caption {
  flex-grow: 0;
  text-align: center;
  width: 25%;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.task-btn {
  margin: 1rem 0 0 0;
  color: white;
}
</style>
