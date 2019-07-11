<template>
    <div class="home-view">
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item>
                <div class="flex-theme-title">
                    <swiper :list="demo01_list" :show-dots="false" auto height="32vh"></swiper>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-game">
                    <PuzzleGame ref="PuzzleGame" :image="image" :rowBlock="rowBlock" :level="level" @isSuccess="isSuccessChange"></PuzzleGame>
                </div>
                <Showimg :image="image" :showImg="showImg" @showImageChange="showImageChange($event)"></Showimg>
            </flexbox-item>

            <flexbox-item>
                <div class="flex-button">
                    <span class="iconfont" @click="cutGame('reduce')">&#xe62d;</span>
                    <span class="look-button" @click="showImg=true">查看原图</span>
                    <span class="iconfont" @click="cutGame('add')">&#xe62c;</span>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-foot">
                    <div class="flex-foot-block">
                        <button @click="visit('draw')">重置游戏</button>
                    </div>
                    <div class="flex-foot-block">
                        <button @click="visit('prize')">我的奖品</button>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
        <Puzzlesuccess :image="image" :isShow="isSuccessShow" @showSuccessChange="showSuccessChange($event)" @closeBack="closeSuccess" ></Puzzlesuccess>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swiper, Flexbox, FlexboxItem, Toast ,XButton} from 'vux'
import PuzzleGame from '@/components/Game'
import Showimg from '@/components/Showimg'
import Puzzlesuccess from '@/components/Puzzlesuccess'
import AppConfig from '@/config.js'
export default {
    components: {
        PuzzleGame,
        Showimg,
        Puzzlesuccess,
        Swiper,
        Flexbox,
        FlexboxItem,
        Toast,
        XButton
    },
    name: 'Home',
    data(){
        return {
            demo01_list:[ {
                url: 'javascript:',
                img: 'https://fuguanghe.oss-cn-shanghai.aliyuncs.com/meitu_3.jpg', // 404
                title: '“岱”引未来 |“岱”你这样拼出来',
            }],
            image: '',
            rowBlock: 2,
            level: 0,
            idx: 0,
            showImg: false,
            isSuccessShow:false
        }
    },
    methods:{
        cutGame(active){
            let status = false
            if(active == 'reduce'){
                if(this.idx > 0){
                    this.idx --                   
                    status = true
                }
            }else if(active == 'add'){
                if((this.idx + 1) < AppConfig.images.length){
                    this.idx ++
                    status = true
                }
            }
            if(status){
                this.image = AppConfig.images[this.idx].url
                this.rowBlock = AppConfig.images[this.idx].rowBlock
                this.level = AppConfig.images[this.idx].level
            }else{
                this.$vux.toast.text('别点了，已经没了')
            }            
        },
        showImageChange(showImg){
            this.showImg = showImg
        },
        showSuccessChange(isShow){
            this.isSuccessShow = isShow
        },
        isSuccessChange(){
            this.isSuccessShow = true
        },
        closeSuccess(){
            if((this.idx + 1) < AppConfig.images.length){
                this.cutGame('add');
            }else{
                this.$router.push('/Info')
            }
        },
        visit(active){
            if(active == 'draw'){
                let PG = this.$refs.PuzzleGame
                if(!PG.isStart){
                    PG.initial()
                }
            }else if(active == 'prize'){
                this.$router.push('/prize')
            }
        }
    },
    created:function(){
        this.image = AppConfig.images[0].url
        this.rowBlock = AppConfig.images[0].rowBlock
        this.level = AppConfig.images[0].level
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/animate.min.css";
.home-view {
    width: 100%;
    height: 100%;
    // background-image: url("/static/images/timg.jpg");
    // background-size: 100% 100%;
}
.flex-theme-title{
    color: azure;
    width: 100%;
    height: 32vh;
}
.flex-game{
    width: 100%;
    height: 45vh;
    border-radius: 6px;
    margin-top: 5px; 
    text-align: center;
    line-height: 45vh;
}
.flex-button{
    width: 100%;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
}
.iconfont{
    font-family: 'iconfont';
    font-size: 2.8em;
    color: cornflowerblue;
    float: left;
    width: 35%;
}
.iconfont:active{
    color: skyblue;
}
.look-button{
    display: block;
    float: left;
    width: 30%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.5em;
}
.flex-foot{
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 12vh;
}
.flex-foot-block{
    width: 50%;
    float: left;
}
.flex-foot-block > button{
    width: 65%;
    height: 6vh;
    border-radius: 5px;
    background-color: cornflowerblue;
    color:white;
    border: none;
}
.flex-foot-block > button:active{
    color: skyblue;
}

</style>
