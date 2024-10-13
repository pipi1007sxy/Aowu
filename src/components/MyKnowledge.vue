<template>
    <div class="box">
        <div class="box-top">
            <div class="box-top-box">
                <el-input
                    v-model="input2"
                    style="width: 100%;border-radius:15px;overflow: hidden;--el-input-bg-color:#efefef;--el-input-focus-border-color:none;font-size:13px;"
                    :placeholder="knowledgeData.searchBox[0].text"
                    :prefix-icon="Search"
                />
                <div class="search"><p>搜索</p></div>
            </div>
        </div>
        <el-scrollbar height="90vh">
            <div class="box-middle">
                <el-carousel indicator-position="outside" height="20vh">
                    <el-carousel-item v-for="item in knowledgeData.picBox" :key="item">
                        <div style="width: 100%; height:100%;position: relative;">
                            <img :src="require(`@/assets/pic/knowledge/${item}.png`)" style="height:100%;position: absolute;left:50%;transform: translateX(-50%);">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="box-bottom">
                    <div class="tip">
                        <div class="tip-title">小白手册</div>
                        <div style="padding: 5px 0;">
                            <div v-for="item in knowledgeData.xbsc" :key="item.title" class="tip-tips">
                                <img :src="require(`@/assets/icon/knowledge/${item.kind}.png`)" style="height:40px;">
                                <div style="margin-left: 10px;">
                                    <p class="tip-tips-title">{{ item.title }}</p>
                                    <p class="tip-tips-text">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <div class="tip-title">注意事项</div>
                        <div style="padding: 5px 0;">
                            <div v-for="item in knowledgeData.zysx" :key="item.title" class="tip-tips">
                                <img :src="require(`@/assets/icon/knowledge/${item.kind}.png`)" style="height:40px;">
                                <div style="margin-left: 10px;">
                                    <p class="tip-tips-title">{{ item.title }}</p>
                                    <p class="tip-tips-text">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <div class="tip-title">救助TIPS&nbsp;&nbsp;&nbsp;&nbsp;T.N.R</div>
                        <div style="padding: 5px 0;">
                            <div v-for="item in knowledgeData.tips" :key="item.title" class="tip-tips">
                                <img :src="require(`@/assets/icon/knowledge/${item.kind}.png`)" style="height:40px;">
                                <div style="margin-left: 10px;">
                                    <p class="tip-tips-title">{{ item.title }}</p>
                                    <p class="tip-tips-text">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="height: 80px;"></div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import { knowledgeData } from '../data.js'
import { Search } from '@element-plus/icons-vue'

export default {
    data(){
        return{
            input2:"",
            knowledgeData: knowledgeData,
            Search: Search,
        }
    }
}
</script>

<style scoped>
.tip-tips-title{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
}
.tip-tips-text{
    font-size: 13px;
    color: #6b6b6b;
}
.tip-tips{
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
}
.tip-title{
    font-weight: 600;
    padding-left: 15px;
    font-size: 15px;
    line-height: 40px;
    color: #6b6b6b;
    border-bottom: 1px solid #c5c5c5;
}
.tip{
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #efefef;
    min-height: 120px;
    margin-bottom: 20px;
    border-radius: 15px;
}
.el-input-group__append{
    padding: 0 0 !important;
}
.search p{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.search{
    position: relative;
    border-radius: 15px;
    color: #fefefeee;
    padding: 0 20px;
    width: 35px;
    font-size: 12px;
    background-color: #345bac;
}
.box-top-box{
    display: flex;
    width: 100vw;
    position: absolute;
    bottom: 10px;
    box-sizing: border-box;
    padding: 0 20px;
}
.box-bottom{
    position: relative;
    height: 66vh;
    box-sizing: border-box;
    padding: 0 20px;
}
.box-middle{
    position: relative;
    height: 24vh;
}
.box-top{
    position: relative;
    height: 10vh;
}
.box{
    height: 100vh;
    overflow: hidden;
}
</style>