<template>
  <div class="containers">
    <div class="beg-login-box">
      <span id="title">注册</span>
      <div class="beg-login-main">
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe612;</i>
          </label>
          <input
            type="text"
            id="username"
            v-model="userName"
            autocomplete="off"
            placeholder="请输入邮箱"
            class="layui-input"
            maxlength="20"
          >
        </div>
        <div class="layui-form-item">
          <label class="beg-login-icon pull-left">
            <i class="layui-icon">&#xe642;</i>
          </label>
          <input
            type="text"
            id="code"
            v-model="code"
            autocomplete="off"
            placeholder="请输入验证码"
            class="layui-input"
            maxlength="8"
          >
          <button @click="sendmail" class="layui-btn layui-btn-small" name="submitf">发送验证码</button>
        </div>
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe642;</i>
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            lay-verify="password"
            autocomplete="off"
            placeholder="请输入新密码"
            class="layui-input"
            maxlength="8"
          >
        </div>
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe642;</i>
          </label>
          <input
            type="password"
            id="repassword"
            v-model="repassword"
            lay-verify="password"
            autocomplete="off"
            placeholder="再次输入密码"
            class="layui-input"
            maxlength="8"
          >
        </div>
        <div class="form-group">
          <button @click="check" class="layui-btn layui-btn-small" id="signupBtn">注册</button>
        </div>
        <div class="beg-clear"></div>
      </div>
      <Copyright></Copyright>
    </div>
  </div>
</template>
<script>
import Copyright from '@/components/copyright'
export default {
  components: { Copyright },
  data () {
    return {
      userName: '',
      code: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    sendmail () {
      if (this.userName !== '') {
        this.axios.post('/api/SendMail', {
          username: this.userName
        }).then(function (respons) {
          if (respons.data === 'failed') {
            this.$message.error('发送失败!')
          } else {
            this.$message({
              message: '发送成功！',
              type: 'success'
            })
          }
        }.bind(this))
      } else {
        this.$message.error('请先输入邮箱!')
      }
    },
    check () {
      if (this.password === '' || this.repassword === '' || this.userName === '' || this.code === '') {
        this.$message.error('信息不完善')
      } else if (this.password !== this.repassword) {
        this.$message.error('两次输入密码不同!')
      } else {
        this.axios.post('/api/Signup', {
          code: this.code,
          username: this.userName,
          password: this.password,
          actor: 1
        }).then(function (respons) {
          switch (respons.data) {
            case 'existed':
              this.$message.error('用户已存在！')
              break
            case 'wrongcode':
              this.$message.error('验证码错误！')
              break
            case 'success': {
              this.$message({
                message: '注册成功！',
                type: 'success'
              })
              break
            }
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.containers {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: #eeeeee;
  position: fixed;
}
#title {
  font-size: 30px;
}
#code {
  float: left;
  width: 390px;
}
.beg-login-box {
  height: 450px;
  width: 500px;
  margin: 0 auto;
  padding-top: 100px;
}
#resure {
  width: 500px;
  height: 50px;
}
.form-group {
  margin-top: 30px;
}
.beg-login-main {
  padding-top: 36px;
}
.beg-login-main .layui-form-item {
  position: relative;
}

.beg-login-main .layui-form-item .beg-login-icon {
  position: absolute;
  color: #cccccc;
  top: 10px;
  left: 10px;
}

.beg-login-main .layui-form-item input {
  padding-left: 34px;
}
input button {
  border-radius: 3px;
}
#signupBtn {
  width: 500px;
  height: 50px;
  font-size: 16px;
  margin-top: 18px;
}
#copyRight {
  position: fixed;
  bottom: 10%;
  color: #6e6e6e;
  right: 43%;
}
</style>
