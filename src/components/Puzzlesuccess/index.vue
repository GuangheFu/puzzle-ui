<template>
    <div class="warp" id="warp">
        <x-dialog :show="isShow" hide-on-blur @on-hide="closeBack" :dialog-style="{'background-color': 'transparent'}">
            <x-icon type="ios-close-outline" @click="changeShow" style="fill:#fff;margin-top:1em;margin-right:1em;float:right;"></x-icon>
            <div class="tmp" id="posterHtml" v-show="istmp">
                <img :src="image" class="tmp-img" >
                <span class="tmp-intro">
                    文字介绍
                </span>
                <span class="tmp-set-font" style="font-size:1.3em;">“岱”引未来</span>
                <span class="tmp-set-font" style="font-size:1.3em;">“岱”你这样拼出来</span>
                <p class="create-img" id="createimg" @click="createImg">生成图片</p>
            </div>
            <div class="poster" v-show="isshare">
                <img class="poster-img" :src="posterDataUrl" alt="">
                <p style="margin-top:2em;">长按上图即可保存图片分享</p>
            </div>
        </x-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
import { XDialog,Loading } from 'vux'
import html2canvas from 'html2canvas'
export default {
    components:{
        XDialog,
        Loading
    },
    name:"Puzzlesuccess",
    data(){
        return {
            posterDataUrl:'',
            istmp:false,
            isshare:false
        }
    },
    props:{
        isShow:{
            type: Boolean,
            default: false
        },
        image:{
            type: String,
            default: null
        }
    },
    watch:{
        isShow:function(){
            if(this.isShow){
                this.istmp = true
            }
        }
    },
    methods:{
        changeShow:function(){
            this.isShow = !this.isShow
            this.$emit("showSuccessChange",this.isShow)
        },
        closeBack:function(){
            this.istmp = false
            this.isshare = false
            this.$emit("closeBack")
        },
        createImg:function(){
            this.$vux.loading.show({
                text: '图片制作中...',
            })
            setTimeout(() => {
                this.$vux.loading.hide()
                this.createPoster()
            }, 1500)
        },
        createPoster() {
            let vm = this
            let domObj = document.getElementById('posterHtml')
            html2canvas(domObj, {
                useCORS: true,
                allowTaint: false,
                logging: false,
                letterRendering: true,
                onclone(doc) {
                    let e = doc.querySelector('#posterHtml')
                    e.style.display = 'block'
                    e.style.background = 'url("/static/images/timg.jpg")'
                    e.style.backgroundSize = '100% 100%'
                    if(e.hasChildNodes()){
                        e.removeChild(e.lastChild);
                    }
                    let z = document.createElement('span')
                    z.innerHTML = '扫码定制你的岱山记忆'
                    z.style.float = 'left'
                    z.style.textAlign = 'left'
                    z.style.width = '60%'
                    z.style.lineHeight = '5vh'
                    z.style.fontSize = '0.9em'
                    let z2 = document.createElement('div')
                    z2.style.background = 'url("/static/images/code.png")'
                    z2.style.backgroundSize = '100% 100%'
                    z2.style.position = 'fixed'
                    z2.style.marginLeft = '60%'
                    z2.style.marginTop = '1em'
                    z2.style.height = '85px'
                    z2.style.width = '85px'
                    z2.style.borderRadius = '0.5em'
                    z2.style.border = '1.5px solid rgb(216, 216, 228)'
                    let z3 = document.createElement('span')
                    z3.innerHTML = '岱山网信'
                    z3.style.float = 'left'
                    z3.style.textAlign = 'right'
                    z3.style.width = '100%'
                    z3.style.lineHeight = '5vh'
                    z3.style.fontSize = '0.9em'
                    e.appendChild(z)
                    e.appendChild(z2)
                    e.appendChild(z3)
                },
            }).then(function(canvas) {
                vm.istmp = false
                vm.isshare = true
                vm.posterDataUrl = canvas.toDataURL('image/png')
            })
        },
    },
}
</script>
<style lang="scss" scoped>
    .warp /deep/.weui-dialog{
        z-index: 5001;
        width: 100% ;
        max-width:100% ;
        height: 100%;
    }
    .warp /deep/ .weui-mask{
        z-index: 5001;
    }
    .tmp{
        padding:2em;
        width:85vw;
        height:90vh;
        color:#fff;
    }
    .tmp-img{
        width: 85vw;
        height: 25vh;
        border-radius: 0.5em;
    }
    .tmp-intro{
        display: block;
        height: 40vh;
        border:1.5px solid rgb(216, 216, 228); 
        border-radius: 0.5em;
        margin-top: 0.5em;
        word-wrap:break-word;
        padding:7px;
    }
    .tmp-set-font{
        float:left;
        width:60%;
        text-align: left;
        line-height: 5vh;
    }
    .tmp-code{
        height:85px;
        width:85px;
        border-radius: 0.5em;
        border:1.5px solid rgb(216, 216, 228); 
        position: fixed;
        margin-top:0.5em;
        margin-left: 60%;
    }
    .poster{
        background-color:transparent;
        padding:2em;
        width:85vw;
        height:90vh;
        color:#fff;
    }
    .poster-img{
        width:80vw;
        height:80vh;
        border-radius: 0.5em;
        border:1.5px solid rgb(216, 216, 228); 
    }
    .create-img{
        float:left;
        width:100%;
        border:1px solid rgb(216, 216, 228);
        line-height: 4vh; 
        border-radius: 0.3em;
    }
    .create-img:active{
        color: skyblue;
    }
</style>
