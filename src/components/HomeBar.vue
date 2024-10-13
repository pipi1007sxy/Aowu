<template>
    <div class="box">
        <div class="box-bg-top"></div>
        <div class="box-bg-btm"></div>
        <div class="box-box">
            <div class="box-box-item" @click="clickbtn(0,'h1c')">
                <img :src="require(`@/assets/icon/homebar/${barImg[0]}.png`)" class="box-box-item-img"/>
                <p class="box-box-item-p" :style="{ color: barImg[0] === 'h1u'?'#9a9a9a':'#345bac', borderBottomColor: barImg[0] === 'h1u'?'#345aac00':'#345aac'}">招募</p>
            </div>
            <div class="box-box-item" @click="clickbtn(1,'h2c')">
                <img :src="require(`@/assets/icon/homebar/${barImg[1]}.png`)" class="box-box-item-img"/>
                <p class="box-box-item-p" :style="{ color: barImg[1] === 'h2u'?'#9a9a9a':'#345bac', borderBottomColor: barImg[1] === 'h2u'?'#345aac00':'#345aac'}">知识</p>
            </div>
            <div class="box-box-item" @click="clickbtn(2,'h3c')">
                <img :src="require(`@/assets/icon/homebar/${barImg[2]}.png`)" class="box-box-item-img"/>
                <p class="box-box-item-p" :style="{ color: barImg[2] === 'h3u'?'#9a9a9a':'#345bac', borderBottomColor: barImg[2] === 'h3u'?'#345aac00':'#345aac'}">主页</p>
            </div>
            <div class="box-box-item" @click="clickbtn(3,'h4c')">
                <img :src="require(`@/assets/icon/homebar/${barImg[3]}.png`)" class="box-box-item-img"/>
                <p class="box-box-item-p" :style="{ color: barImg[3] === 'h4u'?'#9a9a9a':'#345bac', borderBottomColor: barImg[3] === 'h4u'?'#345aac00':'#345aac'}">日志</p>
            </div>
            <div class="box-box-item" @click="clickbtn(4,'1')">
                <img src="../assets/avater/user/1.png" class="box-box-item-avater" :style="{ opacity: barImg[4]}"/>
                <p class="box-box-item-p" :style="{ color: barImg[4] === '.6'?'#9a9a9a':'#345bac', borderBottomColor: barImg[4] === '.6'?'#345aac00':'#345aac'}">我的</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            barImg:["h1u","h2u",'h3u',"h4u",".6"],
            selectNum: 2,
        }
    },
    methods:{
        clickbtn(num,value){
            this.barImg = ["h1u","h2u",'h3u',"h4u",".6"]
            this.barImg[num] = value
            // 触发事件，将数据传递给父组件
            this.$emit('childEvent', num);
        }
    },
    mounted(){
        this.clickbtn(3,"h4c")
    }
}
</script>

<style scoped>
.box-box-item-avater{
    height: 40px;
    margin: 0 auto;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-65%) translateX(-50%);
}
.box-box-item-p{
    font-size: 12px;
    color: #9a9a9a;
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 38px;
    text-align: center;
    padding-bottom: 6px;
    border-radius: 3px;
    transition: .3s ease;
    border-bottom: 4px solid #345aac00;
    transform: translateX(-50%);
}
.box-box-item-img{
    height: 70px;
    width: 70px;
    margin: 0 auto;
}
.box-box-item{
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100%;
    position: relative;
}
.box-box{
    width: 100vw;
    height: 80px;
    position: absolute;
    top: 5px;
    display: flex;
    justify-content: space-around;
}
.box{
    position: fixed;
    bottom: 0;
}
.box-bg-top{
    background: linear-gradient(to top, #fefefeef 30%, #fefefe00);
    height: 45px;
    width: 100vw;
}
.box-bg-btm{
    background-color: #efefef;
    width: 100vw;
    height: 56px;
}
</style>
  