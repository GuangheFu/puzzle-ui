<template>
    <div class="warp">
        <x-dialog :show="showImg" hide-on-blur :dialog-style="{'background-color': 'transparent'}">
            <div style="color:#fff;padding:2em;margin-top:1em;" @click="changeShow">
                <img :src="image" style="height:50%;width:100%;border-radius: 6px;">
                <span style="display: block;height: 35vh;border:1.5px solid rgb(216, 216, 228); border-radius: 6px;margin-top: 5px;word-wrap:break-word;padding:7px;">
                    这游戏咋玩的，我也不是很清楚
                </span>
            <br>
                <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
            </div>
        </x-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
import { XDialog } from 'vux'
export default {
    components:{
        XDialog
    },
    name:'Showimg',
    data(){
        return {
            
        }
    },
    props:{
        showImg:{
            type: Boolean,
            default: false
        },
        image:{
            type: String,
            default: null
        }
    },
    methods:{
        changeShow:function(){
            this.showImg = !this.showImg
            this.$emit("showImageChange",this.showImg)
        }
    }
}
</script>
<style lang="scss" scoped>
    .warp /deep/.weui-dialog{
        z-index: 9999;
        width: 100% ;
        max-width:100% ;
        height: 100%;
    }
    .warp /deep/ .weui-mask{
        z-index: 9999;
    }
</style>
