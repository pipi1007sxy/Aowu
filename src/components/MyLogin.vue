<template>
  <div class="box">
    <div class="box-img"></div>
    <h3>{{ re?'注册':'登录' }}</h3>
    <div class="box-text">
      <input type="text" placeholder="Owl ID 手机号码" v-model="username">
      <input type="text" placeholder="密码" v-model="password">
      <input type="text" placeholder="确认密码" v-model="repassword" v-if="re">
    </div>
    <div class="box-btn" @click="login">{{ re?'注 册':'登 录' }}</div>
    <div class="box-link">
      <p @click="re=!re">{{ re?'返回登录':'注册账号' }}</p>
      <p>忘记密码</p>
    </div>
    <div class="box-choose" v-if="!re">
      <el-checkbox label="我已阅读并同意隐私政策、用户协议及权限申请" size="small" text-color="#e0e0e0" fill="#2c55a8" v-model="choose"/>
    </div>
  </div>
</template>

<script>
import { setSession, authenticateUser } from '../function.js'
import { ElMessage } from 'element-plus'

export default {
  data(){
    return{
      username:"",
      password:"",
      repassword:"",
      choose:false,
      re:false,
    }
  },
  methods:{
    login(){
      if(!this.re){
        if(this.username!==""&&this.password!==""){
          if(this.choose){
            if(authenticateUser(this.username, this.password)===200){
              setSession('username',this.username,360,'n')
              setSession('password',this.password,360,'n')
              this.$emit('changeisLogin',true)
              ElMessage({
                message: '登陆成功',
                type: 'success',
              })
            }else{
              ElMessage.error('账号不存在或密码错误')
            }
          }else{
            ElMessage({
              message: '请同意用户协议',
              type: 'warning',
            })
          }
        }else{
          ElMessage({
            message: '请输入完整信息',
            type: 'warning',
          })
        }
      }else{
        if(this.username!==""&&this.password!==""&&this.repassword!==""){
          if(this.password===this.repassword){
            const res = setSession('userdata',`username:${this.username},password:${this.password};`,360,'a')
            if(res===200){
              this.re = false
              this.reText()
              ElMessage({
                message: '注册成功',
                type: 'success',
              })
            }
          }else{
            ElMessage({
              message: '两次密码不一致',
              type: 'warning',
            })
          }
        }else{
          ElMessage({
            message: '请输入完整信息',
            type: 'warning',
          })
        }
      }
    },
    reText(){
      this.username = ''
      this.password = ''
      this.repassword = ''
    }
  }
}
</script>

<style scoped>
.el-checkbox{
  --el-checkbox-checked-text-color: none;
  --el-checkbox-checked-bg-color: #2c55a8;
}
.box-img{
  height: 55px;
  width: 50px;
  background-color: #2c55a8;
  margin-bottom: 0;
}
h3{
  margin-top: 0;
  font-weight: 600;
  font-size: 30px;
  color: #2c55a8;
  margin-bottom: 46px;
}
.box-link{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  color: #2c55a8;
  font-weight: 600;
}
.box-btn{
  margin-bottom: 30px;
  cursor: pointer;
  background: #e0e0e0;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fefefe;
  border-radius: 16px;
  transition: .3s ease;
}
.box-btn:hover{
  background-color: #2c55a8;
}
.box{
  width: 83%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-65%) translateX(-50%);
}
.box-text{
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}
.box-text input{
  margin: 22px 0;
  height: 30px;
  box-sizing: border-box;
  padding: 16px 0;
  border: none;
  font-size: 15px;
  border-bottom: 3px solid #e0e0e0
}
::-webkit-input-placeholder {
  color: #e0e0e0; /* 在Webkit浏览器上设置placeholder颜色 */
}
:-moz-placeholder {
  color: #e0e0e0; /* 在Firefox浏览器上设置placeholder颜色 */
}
::-moz-placeholder {
  color: #e0e0e0; /* 在Firefox浏览器上设置placeholder颜色 */
}
:-ms-input-placeholder {
  color: #e0e0e0; /* 在IE/Edge浏览器上设置placeholder颜色 */
}
.box-text input:focus {
  outline: none;
  border-bottom-color: #2c55a8; /* 设置选中状态下边框的颜色 */
}
</style>
