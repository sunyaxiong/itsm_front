<template>
  <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>伟仕云安</b>ITSM</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg"></p>

    <form id="jsLoginForm" autocomplete="off">
      <input type="hidden" name="csrfmiddlewaretoken" value="ywSlOHdiGsK6VFB6iyhnB1B30khmz8SU">
      <div class="form-group has-feedback">
        <input name="account_l" id="account_l" type="text" class="form-control" v-model="userName" placeholder="用户名">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input name="password_l" id="password_l" type="password" class="form-control" v-model="parseWord" placeholder="密码">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> 记住我
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="button" id="jsLoginBtn" class="btn btn-primary btn-block btn-flat" @click = "login">登陆</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <!-- <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div> -->
    <!-- /.social-auth-links -->

    <a href="#">忘记密码</a><br>
    <a href="register.html" class="text-center">注册新用户</a>

  </div>
  <!-- /.login-box-body -->
</div>
</template>
<script>
  import cookie from '../../assets/js/cookie'
  import { login } from '../../api/api'
  export default {
  name: 'Login',
  data(){
    return {
      userName:'',
      parseWord:'',
      autoLogin:false,
      error:false,
      userNameError:'',
      parseWordError:''
    }
  },
  methods:{
    login(){
      var that = this;
      login({
          username:this.userName, //当前页码
          password:this.parseWord
      }).then((response)=> {
        console.log(555);
        // console.log(username, password);
        console.log(response);
        //本地存储用户信息
        cookie.setCookie('name',this.userName,7);
        cookie.setCookie('token',response.data.token,7);
        cookie.setCookie('user_id',response.data.user_id,7)
        //存储在store
        // 更新store数据
        console.log(that.$store);
        that.$store.dispatch('setInfo');
        console.log(111111)
        //跳转到首页页面
        this.$router.push({ name: 'app'})
      })
      .catch(function (error) {
        if("non_field_errors" in error){
          that.error = error.non_field_errors[0];
        }
        if("username" in error){
          that.userNameError = error.username[0];
        }
        if("password" in error){
          that.parseWordError = error.password[0];
        }
      });
    },
    errorUnshow(){
      this.error = false;
    }
    },
    created(){
      //清除缓存
      cookie.delCookie('token');
      cookie.delCookie('name');
      cookie.delCookie('user_id');
      //重新触发store
      //更新store数据
      this.$store.dispatch('setInfo');
    }
}
</script>
<style>
  
</style>