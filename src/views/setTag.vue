<template>
  <div class="main-container">
    <div class="space-left"></div>
    <div class="main-content">
      <div class="passage-container">
        <div class="passage" v-if="passageList">
          <span
            v-for="(value,index) in passageList"
            class="passage-span"
            :id="index + 1"
            :key="index"
          >{{value}}</span>
        </div>
      </div>
      <div class="operation-container">
        <div class="btns-div">
          <div class="nav-bar"></div>
          <button class="btn btn-light btn-green-color float-left" @click="submitResult">提交标注</button>
          <button class="btn btn-light float-left" @click="changePassage">换一篇</button>
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
              :id="'step' + item.stepid"
              :value="item.stepid"
              v-model="selectStep"
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
              <label>{{index + 1}}.{{item.taskdescription}}</label>
              <div class="btn-group task-group-btns" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-light btn-sm task-green-btn"
                  @click="setTag(item)"
                >标注</button>
                <button type="button" class="btn btn-light btn-sm" disabled>清除</button>
              </div>
            </div>
          </div>
        </div>
        <el-button plain @click="autoTag" class="auto-tag">智能标注</el-button>
      </div>
    </div>
    <div class="space-right"></div>
  </div>
</template>
<script>
export default {
  name: 'setTag',
  data () {
    if (this.$route.params.list) {
      let mockData = {}
      mockData.stepList = []
      mockData.taskList = []
      for (let i = 1; i < 9; i++) {
        mockData.stepList.push({
          stepid: i,
          stepDescription: '阶段' + i
        })
      }
      return {
        taskList: this.$route.params.tasks,
        stepList: mockData.stepList,
        passageList: this.$route.params.list,
        selectStep: '1',
        resultData: [],
        tagedNode: []
      }
    } else {
      this.$router.push({
        name: 'login'
      })
      return {
        stepList: [],
        taskList: [],
        passageList: [],
        selectStep: '',
        resultData: [],
        tagedNode: []
      }
    }
  },
  methods: {
    setTag (item) {
      if (document.getSelection().anchorNode.parentElement.id && document.getSelection().focusNode.parentElement.id &&
        (document.getSelection().anchorNode.parentElement.id !== document.getSelection().focusNode.parentElement.id)) {
        let startNodeId = document.getSelection().anchorNode.parentElement.id
        let endNodeId = document.getSelection().focusNode.parentElement.id
        let startTag = '&' + this.selectStep + '_' + item.taskid + '_s'
        let endTag = '&' + this.selectStep + '_' + item.taskid + '_p'
        this.resultData.push(startNodeId + startTag)
        this.resultData.push(endNodeId + endTag)
        this.tagedNode.push(startNodeId)
        this.tagedNode.push(endNodeId)
        document.getElementById(startNodeId).style.backgroundColor = 'burlywood'
        document.getElementById(startNodeId).innerHTML += startTag
        document.getElementById(endNodeId).style.backgroundColor = 'burlywood'
        document.getElementById(endNodeId).innerHTML += endTag
      } else {
        this.$message.error('请重新划选需打标签的词汇，至少包括一个起始标签和结束标签！')
      }
    },
    submitResult () {
      let result = this.resultData.join('$')
      this.axios.post('/api/submitHT', {
        result: result
      }).then(function (respons) {
        this.changePassage()
      }.bind(this))
    },
    changePassage () {
      let taskArrary = []
      for (let i = 0; i < this.$route.params.tasks.length; i++) {
        taskArrary.push(this.$route.params.tasks[i].taskid)
      }
      this.axios.post('/api/setTask?models=' + taskArrary.toString(), {
      }).then(function (respons) {
        this.passageList = respons.data.list
        this.resultData = []
        this.clearStyle()
      }.bind(this))
    },
    clearStyle () {
      for (let i = 0; i < this.tagedNode.length; i++) {
        if (document.getElementById(this.tagedNode[i])) {
          document.getElementById(this.tagedNode[i]).style.backgroundColor = 'initial'
        }
      }
    },
    autoTag () {
      this.axios.get('/api/GetResult').then(function (respons) {
        console.log(respons)
      })
    }
  }
}
</script>
<style scoped>
.auto-tag {
  margin: 1.5rem;
}
.start-tag {
  background-color: #1aa094;
}
.end-tag {
  background-color: cornflowerblue;
}
.passage-span {
  font-size: 1rem;
  margin-right: 0.3rem;
}
.task-group-btns {
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
  min-height: 100%;
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
  margin: 0.875rem auto;
  padding: 0.3rem;
  min-height: 4rem;
  width: 55rem;
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
