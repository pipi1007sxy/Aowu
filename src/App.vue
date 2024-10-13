<template>
  <MyLogin v-if="!islogin" @changeisLogin="changeisLogin"/>
  <MyKnowledge v-if="selectNum === 1&&islogin"/>
  <MyLog v-if="selectNum === 3&&islogin"/>
  <MyUser v-if="selectNum === 4&&islogin"/>
  <HomeBar v-if="islogin" style="z-index: 9;" @childEvent="updateSelectNum"/>
</template>

<script>
import MyLogin from './components/MyLogin.vue'
import MyLog from './components/MyLog.vue'
import HomeBar from './components/HomeBar.vue'
import MyUser from './components/MyUser.vue'
import MyKnowledge from './components/MyKnowledge'
import { getCookie } from './function.js'

export default {
  mounted(){
    if(getCookie('username')&&getCookie('password')){
      this.islogin = true
    }
  },
  data(){
    return{
      selectNum: 3,
      islogin:false,
    }
  },
  methods:{
    updateSelectNum(data) {
      this.selectNum = data;
    },
    changeisLogin(data){
      this.islogin = data
    }
  },  
  components: {
    MyLogin,
    MyLog,
    HomeBar,
    MyUser,
    MyKnowledge,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
