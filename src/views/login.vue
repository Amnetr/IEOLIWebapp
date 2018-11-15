<template>
<<<<<<< Updated upstream
    <div class="beg-login-bg">
        <div class="beg-login-box">
            <header>
                <h1>登录</h1>
            </header>
            <div class="beg-login-main">
                <form action="weblogin" class="layui-form" method="post">
                    <div class="layui-form-item">
                        <label class="beg-login-icon">
                            <i class="layui-icon">&#xe612;</i>
                        </label>
                        <input type="text" name="username" lay-verify="username" autocomplete="off" placeholder="这里输入登录名" class="layui-input" maxlength="20">
                    </div>
                    <div class="layui-form-item">
                        <label class="beg-login-icon">
                            <i class="layui-icon">&#xe642;</i>
                        </label>
                        <input type="password" name="password" lay-verify="password" autocomplete="off" placeholder="这里输入密码" class="layui-input" maxlength="8">
                        <font color="red" size="2">${Result }</font>
                    </div>
                    <div class="layui-form-item">
                        <div class="form-group">
                            <button onclick="window.location.href='page?path=forgetpassword' " type="button" class="layui-btn layui-btn-primary layui-btn-small btn-forget " name="forget" style="width:40%">忘记密码</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onclick="window.location.href='page?path=signup' " type="button" class="layui-btn layui-btn-primary layui-btn-small btn-login " style="width:40%" name="login">用户注册</button>
                        </div>
                        <div class="form-group login" style="margin-top:5px;">

                            <button type="submit" class="layui-btn btn-warning " name="submit" id="submitlogin">登录</button>
                        </div>
                        <div class="beg-clear"></div>
=======
<div class="beg-login-bg">
    <div class="beg-login-box">
        <header>
            <h1>登录</h1>
        </header>
        <div class="beg-login-main">
            <form action="weblogin" class="layui-form" method="post">
                <div class="layui-form-item">
                    <label class="beg-login-icon">
                        <i class="layui-icon">&#xe612;</i>
                    </label>
                    <input type="text" name="username" lay-verify="username" autocomplete="off" placeholder="这里输入登录名"
                        class="layui-input" maxlength="20" v-model="userName">
                </div>
                <div class="layui-form-item">
                    <label class="beg-login-icon">
                        <i class="layui-icon">&#xe642;</i>
                    </label>
                    <input type="password" name="password" lay-verify="password" autocomplete="off" placeholder="这里输入密码"
                        class="layui-input" maxlength="8" v-model="password">
                    <span id="error" v-if="error">{{result}}</span>
                </div>
                <div class="layui-form-item">
                    <div class="form-group" id="btnGroup">
                        <button @click="forget" type="button"
                         class="layui-btn layui-btn-primary layui-btn-small btn-forget ">忘记密码</button>
                        <button  type="button" @click="signup"
                        class="layui-btn layui-btn-primary layui-btn-small btn-login ">用户注册</button>
                    </div>
                    <div class="form-group login">

                        <button type="submit" class="layui-btn " @click="submit" id="submitlogin">登录</button>
>>>>>>> Stashed changes
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      error: false,
      userName: '',
      password: ''
    }
  },
  methods: {
    forget () {
      this.$router.push({
        path: 'forgetPassword.html'
      })
    },
    submit () {

    },
    signup () {
      this.$router.push({
        path: 'signup.html'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< Updated upstream
=======
input {
  border-radius: 3px;
}
button {
  border-radius: 3px;
}
>>>>>>> Stashed changes
.beg-login-box {
  height: 350px;
}
#submitlogin {
  width: 220px;
}
#app {
  height: 100%;
}
<<<<<<< Updated upstream
=======
#btnGroup {
  height: 35px;
}
.btn-forget {
  float: left;
  width: 40%;
}
.btn-login {
  float: right;
  width: 40%;
}
>>>>>>> Stashed changes
.beg-login-bg {
  background-color: #393d49;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.beg-login-box {
  width: 450px;
  height: 330px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.407843);
  border-radius: 10px;
  color: aliceblue;
}

.beg-login-box header {
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid aliceblue;
}

.beg-login-box header h1 {
  text-align: center;
  font-size: 25px;
  line-height: 40px;
}

.beg-login-box .beg-login-main {
  height: 185px;
  padding: 30px 90px 0;
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

.beg-login-box footer {
  height: 35px;
  padding: 10px 10px 0 10px;
}

.beg-login-box footer p {
  line-height: 35px;
  text-align: center;
}

.beg-pull-left {
  float: left !important;
}

.beg-pull-right {
  float: right !important;
}

.beg-clear {
  clear: both;
}

.beg-login-remember {
  line-height: 38px;
}

.beg-login-remember .layui-form-switch {
  margin-top: 0px;
}

.beg-login-code-box {
  position: relative;
  padding: 10px;
}

.beg-login-code-box input {
  position: absolute;
  width: 100px;
}

.beg-login-code-box img {
  cursor: pointer;
  position: absolute;
  left: 115px;
  height: 38px;
}
</style>
