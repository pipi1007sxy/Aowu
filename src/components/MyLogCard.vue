<template>
    <div class="box">
        <div class="box-avatar-box">
            <img :src="require(`@/assets/avater/pets/${cardData.useravater}`)" class="box-avatar-pic" @click="showCard"/>
        </div>
        <div class="box-message-box">
            <p class="card-tag">#&nbsp;{{ cardData.tag }}</p>
            <p class="card-username">{{ cardData.username }}</p>
            <p class="card-time">{{ cardData.time }}</p>
            <p class="card-text">{{ cardData.text }}</p>
            <div class="card-img-box">
                <img v-for="item in cardData.images" :key="item" :src="require(`@/assets/log/${item}`)" class="card-img-item"/>
            </div>
            <div class="card-zp-box">
                <div class="card-zp">
                    <img :src="require(`@/assets/icon/bok/like_${imageUrl}.png`)" height="15px" @click="click_lick($event)">
                    <p :style="{color: imageUrl === 'u'?'#9a9a9a':'#30c0ca'}">{{ cardData.like }}</p>
                </div>
                <div class="card-zp">
                    <img :src="require(`@/assets/icon/bok/comment_u.png`)" height="20px">
                </div>
            </div>
            <div class="card-pl" v-if="cardData.comments.length > 0">
                <p v-for="comment in cardData.comments" :key="comment.commentid"><b>{{ comment.username }}</b>&nbsp;：{{ comment.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['cardData','showCard'],
    data(){
        return{
            imageUrl: "u",
        }
    },
    methods:{
        click_lick(event) {
            if(event.target.src === require(`@/assets/icon/bok/like_u.png`)){
                this.imageUrl = "c"
            }else{
                this.imageUrl = "u"
            }
        }
    }
}
</script>

<style scoped>
.card-pl b{
    color: #2d58ae;
}
.card-pl{
    background-color: #ebebeb;
    font-size: 14px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 2px 5px;
    color: .75;
}
.card-zp p{
    margin-left: 5px;
}
.card-zp{
    display: flex;
    align-items: center;
    color: #9a9a9a;
    font-size: 12px;
    margin-left: 25px;
}
.card-zp-box{
    margin-top: 12px;
    display: flex;
    justify-content: right;
}
.card-tag{
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 14px;
    font-weight: 600;
    color: #2d58ae;
}
.card-img-item{
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 49%;
    border-radius: 10px;
    margin-top: 2px;
}
.card-img-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 82%;
    margin-top: 8px;
}
.card-text{
    opacity: .8;
    font-size: 15px;
}
.card-time{
    font-size: 11px;
    opacity: .5;
    margin-bottom: 4px;
}
.card-username{
    font-weight: 600;
    margin-bottom: 1px;
}
.box-message-box{
    width: 86%;
    box-sizing: border-box;
    padding: 5px 14px;
}
.box-avatar-pic{
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    border-radius: 100%;
    background-color: #30c0ca;
}
.box-avatar-box{
    width: 14%;
}
.box{
    display: flex;
    position: relative;
    box-sizing: border-box;
    padding: 16px 20px 10px;
    border-radius: 15px;
    background-color: #f5f5f5;
    margin-bottom: 10px;
}
</style>
  