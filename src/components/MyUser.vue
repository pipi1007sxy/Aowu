<template>
    <div class="box">
        <div class="box-top">
            <div class="box-top-bar">
                <img src="../assets/icon/avater/message.png">
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="Bottom Right prompts info"
                    placement="bottom-end"
                >
                    <template v-slot:content>
                        <!-- 在这里放置你想要显示的组件 -->
                        <p @click="logout()" style="line-height: 25px;">退出登录</p>
                    </template>
                    <img src="../assets/icon/avater/order.png">
                </el-tooltip>
            </div>
            <div class="box-box">
                <div class="box-box-inside">
                    <UserAvater :avaterUrl="avaterUrl"/>
                    <div style="display: flex;align-items: center;margin-top: 5px;">
                        <span class="nameCircle"></span><p class="name">{{ userData[0].name }}</p>
                    </div>
                    <p class="id">ID：{{ userData[0].id }}</p>
                    <div style="display: flex;align-items: center;margin-bottom: 20px;">
                        <img src="../assets/icon/avater/achievement.png" height="26px">
                        <p style="font-size: 11px;margin-left: 5px;">称号：<span v-for="achi in userData[0].avater.achievement" :key="achi">{{ achi }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-bottom">
            <el-scrollbar height="90%" style="padding: 26px 20px;box-sizing: border-box;">
                <div class="myPets">
                    <div class="myPetsTop">
                        <p>我的崽崽</p>
                        <ArrowRightBold style="height: 14px;color: #30c0ca;"/>
                    </div>
                </div>
                <div class="mySide">
                    <div class="mySideTop">
                        <p>附件救助站</p>
                        <ArrowRightBold style="height: 14px;color: #30c0ca;"/>
                    </div>
                </div>
                <div class="btn">
                    <p>历史浏览</p>
                </div>
                <div style="height: 50px"></div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import UserAvater from './UserAvater.vue'
import { userData } from '../data.js'
import { clearCookie } from '../function'

export default {
    data(){
        return{
            userData: userData,
            avaterUrl: userData[0].avater
        }
    },
    methods:{
        logout(){
            clearCookie('username')
            clearCookie('password')
            location.reload();
        }
    },
    components: {
        UserAvater
    }
}
</script>


<style scoped>
.box-top-bar img{
    height: 40px;
}
.box-top-bar{
    z-index: 8;
    position: absolute;
    right: 10px;
    top: 50px;
}
.myPetsTop p,.mySideTop p{
    font-size: 14px;
    font-weight: 600;
}
.myPetsTop,.mySideTop{
    justify-content: space-between;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
}
.btn p{
    text-align: center;
    line-height: 42px;
    color: #fefefe;
    font-size: 14px;
}
.btn{
    height: 42px;
    border-radius: 12px;
    background-color: #30c0ca;
}
.mySide{
    margin-bottom: 20px;
    height: 160px;
    border-radius: 15px;
    background-color: #efefef;
}
.myPets{
    margin-bottom: 20px;
    height: 140px;
    border-radius: 15px;
    background-color: #efefef;
}
.id{
    font-size: 8px;
    margin-left: 21px;
    margin-bottom: 5px;
}
.nameCircle{
    background-color: #33b873;
    border-radius: 100%;
    width: 9px;
    height: 9px;
    margin: 0 6px;
}
.name{
    font-size: 21px;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
}
.box-box-inside{
    box-sizing: border-box;
    padding: 0 40px;
    position: absolute;
    bottom: 0;
}
.box-box{
    position: relative;
    height: 100%;
    background: linear-gradient(to top, #fefefeef, #fefefe00 75%);
}
.box-top{
    background-image: url(../assets/pic/userHeader.jpg);
    background-position: center 0;
    background-size: 100%;
    height: 36vh;
}
.box-bottom{
    height: 64vh;
}
</style>