<template>
  <div class="containers">
    <div class="beg-login-box">
      <span id = "title">忘记密码</span>
      <div class="beg-login-main">
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe612;</i>
          </label>
          <input type="text" v-model="userName" autocomplete="off" placeholder="请输入邮箱"
                 class="layui-input" id="mailAddress" maxlength="20">
          <button @click="sendMail" class="layui-btn layui-btn-small" name="submitf">发送验证码</button>
         </div>
         <div class="layui-form-item">
           <label class="beg-login-icon pull-left">
              <i class="layui-icon">&#xe642;</i>
            </label>
            <input type="text"  v-model="code" autocomplete="off" placeholder="请输入验证码" class="layui-input" maxlength="8">
         </div>
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe642;</i>
          </label>
          <input type="password" v-model="newPassword" lay-verify="password" autocomplete="off" placeholder="请输入新密码" class="layui-input" maxlength="8">
        </div>
        <div class="layui-form-item">
          <label class="beg-login-icon">
            <i class="layui-icon">&#xe642;</i>
          </label>
          <input type="password" v-model="rePassword" lay-verify="password" autocomplete="off" placeholder="再次输入密码" class="layui-input" maxlength="8">
         </div>
         <div class="layui-form-item">
            <div class ="form-group">
            <button @click="check" class="layui-btn " id="resure">确认</button>
          </div>
          <div class="beg-clear"></div>
         </div>
      </div>
    </div>
    <copyRight></copyRight>
  </div>
</template>

<script>
import copyRight from '@/components/copyright'
export default {
  components: { copyRight },
  data () {
    return {
      id: 's',
      userName: 's',
      code: 's',
      newPassword: 's',
      rePassword: 's',
      list: []
    }
  },
  methods: {
    sendMail () {
      console.log('sasa')
    },
    check () {
      if (!(this.newPassword.length || this.rePassword.length || this.userName || this.code.length)) {
        alert('请填写完整')
      } else if (this.rePassword !== this.newPassword) {
        alert('两次密码不一致')
      }
    }
  }
}

// /*layui.use(['layer', 'form'], function() {
//   var layer = layui.layer,
//     $ = layui.jquery,
//     form = layui.form();

//   form.on('submit(login)',function(data){

//     location.href='index.html';
//     return false;
//   });
// });*/
// function sendmail () {
//   //alert(obj.id+obj.name);
//   //var id = obj.id;
//   var aname = document.getElementById("username").value;
//   $.ajax({
//     url: "SendMail",
//     data: { username: aname },
//     method: "post",
//     //dataType:"json"
//     success: function (result) {
//       if (result == "failed") {
//         alert("发送失败！请检查邮箱是否正确");
//       } else {
//         alert("已发送，请在填写的邮箱中查收验证码");
//       }
//     }
//   });
// }

// function check () {
//   var aname = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   var repassword = document.getElementById("repassword").value;
//   var cod = document.getElementById("code").value;
//   var reg = /^-?\d+$/;
//   if (aname == "" || password == "" || cod == "") {
//     alert("请填写完整");
//   } else if (password == repassword) {
//     if (reg.test(cod)) {
//       $.ajax({
//         url: "forgetpassword",
//         data: { username: aname, code: cod, password: password },
//         method: "post",
//         //dataType:"json"
//         success: function (result) {
//           if (result == "success") {
//             window.location.href = "page?path=index";
//           } else if (result == "existed") {
//             alert("用户名不存在");
//           }
//           else {
//             alert("验证码错误！");
//           }
//         }
//       });
//     } else {
//       alert("验证码格式错误！");
//     }

//   } else {
//     alert("请确认两次密码一致");
//   }
// }
</script>
<style scoped>
#mailAddress {
  width: 390px;
  float: left;
}
.containers {
  background-color: #eeeeee;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
}
#title {
  font-size: 30px;
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
#copyRight {
  position: fixed;
  bottom: 10%;
  color: #6e6e6e;
  right: 43%;
}
</style>
