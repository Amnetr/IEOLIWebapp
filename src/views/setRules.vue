<template>
  <div class="main-container">
    <div class="space-left"></div>
    <div class="main-content">
      <div class="passage-container">
        <div class="passage" v-if="passageList.length > 0">
          <div v-for="(item,index) in passageList" :key="index">
            <h3 style="color: #1aa094;">{{index + 1}}</h3>
            <p>{{item.article}}</p>
          </div>
        </div>
      </div>
      <div class="operation-container">
        <div class="btns-div">
          <div class="nav-bar"></div>
          <span id="navTitle">已有要素规则</span>
          <el-table :data="rules" style="width: 80%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="规则 ID">
                    <span>{{ props.row.ruleid }}</span>
                  </el-form-item>
                  <el-form-item label="中文描述">
                    <span>{{ props.row.description }}</span>
                  </el-form-item>
                  <el-form-item label="正则表达式">
                    <span>{{ props.row.regex }}</span>
                  </el-form-item>
                  <el-form-item label="要素 ID">
                    <span>{{ props.row.modelid }}</span>
                  </el-form-item>
                  <el-form-item label="正确率">
                    <span>{{ props.row.rate }}</span>
                  </el-form-item>
                  <el-form-item label="操作用户">
                    <span>{{ props.row.userid }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="规则 ID" prop="ruleid"></el-table-column>
            <el-table-column label="中文描述" prop="description" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>
      </div>
      <div id="ruleEditor" class="clear">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="ruleInput"
        ></el-input>
        <el-button id="uploadBtn" size="small" class="margin-top-2rem" @click="submitRule">提交</el-button>
        <el-button size="small" class="margin-top-2rem" @click="ruleTest">测试</el-button>
        <el-button size="small" class="margin-top-2rem" @click="nextPassage">下一篇</el-button>
      </div>
      <div id="tips">
        <b>书写规范：</b>
        <h4 align="center" style="margin-bottom: 1rem;">
          <b>字符类型（字符个数）[精确查找内容]</b>
        </h4>
        <span>1、字符类型可为“数字”、“汉字”、“字符串”，其中“字符串”可匹配到任意字符</span>
        <br>
        <span>2、字符类型、字符个数对应精确查找内容前的字符</span>
        <br>
        <span>3、若精确查找内容前无所需匹配的字符请输入“任意字符类型(0)”</span>
        <br>
        <span>4、字符个数可以为空，默认为匹配任意个数的字符</span>
        <br>
        <span>5、字符个数若有多种选择，请用逗号隔开</span>
        <br>
        <span>6、所有标点请使用纯英文标点，使用"[]"将需要精确查找的内容括起来</span>
        <br>
        <span>7、如果需要同时满足多种规则，可以用\n来分隔多个规则来表示“或”关系</span>
        <br>
        <br>
        <b style="margin-bottom: 1rem;">举例</b>
        <br>
        <span>Exp1.</span>
        <br>
        <i>匹配项：</i> 2018年3月17日
        <br>

        <i>规则：</i>数字(4)[年]数字(1,2)[月]数字(1,2)[日]
        <br>
        <span>Exp2.</span>
        <br>
        <i>匹配项：</i> 《高等数学》
        <br>
        <i>规则：</i>数字(0)[《]汉字()[》]
        <br>
        <span>Exp3.</span>
        <br>
        <i>匹配项：</i> 《高等数学_A》
        <br>
        <i>规则：</i>数字(0)[《]字符串()[》]
        <br>
        <span>Exp4.</span>
        <br>
        <i>匹配项1：</i> 《高等数学_A》
        <br>
        <i>匹配项2：</i> 2018年3月17日
        <br>
        <i>如果要同时匹配两者，则规则为：</i>数字(0)[《]字符串()[》]\n数字(4)[年]数字(1,2)[月]数字(1,2)[日]
        <br>此时，两种情况都能匹配到
        <br>
      </div>
    </div>
    <div class="space-right"></div>
  </div>
</template>
<script>
export default {
  name: 'setTag',
  data () {
    console.log(this.$route.params)
    if (this.$route.params.list) {
      return {
        passageList: this.$route.params.list,
        rules: this.$route.params.rules,
        ruleInput: ''
      }
    } else {
      this.$router.push({
        name: 'login'
      })
      return {
        ruleInput: '',
        passageList: [],
        rules: []
      }
    }
  },
  methods: {
    ruleTest () {
      let passageStrings = []
      for (let i = 0; i < this.passageList.length; i++) {
        passageStrings.push(this.passageList[i].article)
      }
      this.axios.post('/api/submitresult', {
        code: '0',
        description: this.ruleInput,
        article: passageStrings.join('#')
      }).then(function (respons) {
        console.log(respons)
        this.$alert(respons.data, '测试结果', {
          confirmButtonText: '确定',
          callback: action => {
            // 可自定义回调操作
          }
        })
      }.bind(this))
    },
    submitRule () {
      this.axios.post('/api/submitresult', {
        code: '1',
        description: this.ruleInput
      }).then(function (respons) {
        console.log(respons)
        this.nextPassage()
        this.updateRules()
      }.bind(this))
    },
    nextPassage () {
      this.axios.post('/api/page', {
        path: 'nextpage'
      }).then(function (respons) {
        this.passageList = respons.data.list
        this.ruleInput = ''
      }.bind(this))
    },
    updateRules () {
      this.axios.post('/api/page', {
        path: 'showHandledRule',
        modelid: this.$route.params.modelid
      }).then(function (respons) {
        this.rules = respons.data.Rules
      }.bind(this))
    }
  }
}
</script>
<style scoped>
.margin-top-2rem {
  margin-top: 2rem;
}
#ruleEditor {
  text-align: center;
  padding: 2rem 8rem;
  margin-bottom: 2rem;
}
.clear {
  clear: both;
}
#uploadBtn {
  background-color: #1aa094;
  color: #fff;
}
#navTitle {
  margin-left: 1rem;
  font-size: 1.5rem;
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
  margin-top: 1rem;
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
  width: 80%;
}

.passage-container {
  float: left;
  width: 65%;
  background: url(../assets/bg.png);
  min-height: 80%;
}

.operation-container {
  width: 35%;
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
#tips {
  clear: both;
}
</style>
