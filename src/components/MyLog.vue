<template>
    <div class="box">
        <div class="box-top-box">
            <div class="box-top-Dbtm">
                <img src="../assets/icon/bok/myloglogo.png" class="box-top-logo" />
                <div class="box-top-choose">
                    <CaretBottom style="height: 25px; opacity: .75;"/>
                    <p>切换主页</p>
                </div>
            </div>
        </div>
        <div class="box-middle-box">
            <div class="box-middle-title">
                <p>日志&nbsp;&nbsp;&nbsp;OwLog</p>
                <img src="../assets/icon/bok/mylogbarlogo.png" style="height: 20px">
            </div>
            <div class="box-middle-toTop">
                <span class="box-middle-squar">
                    <img src="../assets/icon/bok/mylogtop.png"  style="height: 22px;color: #fefefe; transform: rotate(-45deg);">
                </span>
            </div>
        </div>
        <div class="box-bottom-box">
            <el-scrollbar height="100%" style="padding: 0 15px;" v-infinite-scroll="showMore">
                <MyLogCard v-for="cardData in cardDatas" :key="cardData.cardid" :cardData="cardData" :showCard="showCard"/>
                <div style="height: 100px;"></div>
            </el-scrollbar>
        </div>
        <div v-if="dialogTableVisible" class="petsCard">
            <div style="padding: 20px;display: flex;height: 100%;background: linear-gradient(to right, #2b4b8d, #2b4b8d00 90%);">
                <UserAvater :avaterUrl="avaterUrl"/>
                <div style="margin-top: 55px;margin-left: 15px">
                    <p style="font-size: 18px;margin-bottom: 3px;">{{ userData[0].name }}</p>
                    <p style="font-size: 10px">ID：{{ userData[0].id }}</p>
                </div>
                <p style="color: #dde1eb;font-size: 9px;position: absolute;bottom: 12px;">+ 嗷呜救助站官方救助员</p>
                <div style="background-color: #ffffff;position: absolute;bottom: 15px;right: 12px; padding: 5px 10px;border-radius: 10px;display: flex;align-items: center;"><p style="font-size: 9px;color: #2d58ae;">个人主页</p><Right style="color: #2d58ae;height: 12px;margin-left: 10px;"/></div>
            </div>
        </div>
        <div style="height: 100vh;width: 100vw;background-color: black;z-index: 7;position: fixed;top: 0;opacity: .26;" v-if="dialogTableVisible" @click="closeCard"></div>
    </div>
</template>

<script>
import MyLogCard from './MyLogCard.vue'
import UserAvater from './UserAvater.vue'
import { cardDatas, userData } from '../data.js'

export default {
    data(){
        return{
            cardDatas: cardDatas,
            dialogTableVisible: false,
            avaterUrl: userData[0].avater,
            userData: userData,
        }
    },
    methods:{
        showCard(){
            this.dialogTableVisible = true
        },
        closeCard(){
            this.dialogTableVisible = false
        },
        showMore(){
            console.log('5555');
        }
    },  
    components: {
        MyLogCard,
        UserAvater
    }
}
</script>

<style scoped>
.petsCard p{
    color: #ffffff;
}
.petsCard{
    box-shadow: 0 0 20px #000000ab;
    overflow: hidden;
    z-index: 8;
    border-radius: 15px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-image: url(../assets/pic/logpetcard.png);
    background-position: 50% 50%;
    background-size: 100%;
    width: 90vw;
    height: 180px
}
.box-bottom-box{
    box-sizing: border-box;
    padding: 20px 5px;
    width: 100vw;
    height: 75vh;
    overflow: hidden;
}
.box-middle-toTop{
    position: relative;
    background-color: #f5fbfc;
}
.box-middle-squar{
    height: 30px;
    width: 30px;
    background-color: #30c0ca;
    position: absolute;
    bottom: -25px;
    right: 0;
    transform: rotate(45deg);
}
.box-middle-title p{
    margin-right: 20px;
    color: #f5fbfc;
    font-size: 14px;
    margin-left: 15px;
}
.box-middle-title{
    display: flex;
    align-items: center;
    border-left: #f5fbfc 3.5px solid;
    height: 24px;
}
.box-middle-box{
    box-shadow: 0 5px 12px 5px #dad9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 26px;
    height: 42px;
    width: 100vw;
    background-color: #30c0ca;
    position: relative;
}
.box-top-choose p{
    opacity: .75;
    margin-left: 8px;
}
.box-top-choose{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.box-top-logo{
    height: 50px;
}
.box-top-Dbtm{
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 70px;
}
.box-top-box{
    position: relative;
    height: 15vh;
    width: 100vw;
}
</style>
  