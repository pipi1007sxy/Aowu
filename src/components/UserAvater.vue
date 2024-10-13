<template>
    <div class="box">
        <img :src="require(`@/assets/avater/user/${avaterUrl.id}.png`)" class="avater">
        <div class="catdog">
            <img src="../assets/icon/avater/cat.png" v-if="avaterUrl.haveCat">
            <img src="../assets/icon/avater/dog.png" v-if="avaterUrl.haveDog">
        </div>
    </div>
</template>

<script>
export default {
    props:['avaterUrl']
}
</script>

<style scoped>
.box{
    width: 90px;
    height: 90px;
    display: inline-block;
    position: relative;
}
.catdog{
    position: absolute;
    top: 0;
    left: 72px;
    display: flex;
}
.catdog img{
    height: 45px;
}
.catdog img:nth-child(n+2){
    margin-left: -20px;
}
.avater{
    width: 100%;
    border-radius: 100%;
    border: 3px solid #fbfbfb;
}
</style>