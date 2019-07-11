<template>
    <div class="wrap">
        <x-header title="use prop:title">抽奖</x-header>
        <card 
            element-id='scratchWrap'
            :ratio=0.5
            :move-radius=50
            :start-callback=startCallback
            :clear-callback=clearCallback
        />
    </div>
</template>
<script>
import { XHeader } from 'vux'
import Card from '@/components/Card'
export default {
    components: {
        XHeader,
        Card
    },
    name: 'Draw',
    data(){
        return {
        }
    },
    methods:{
        startCallback(){
            console.log('抽奖成功！')
        },
        clearCallback(){
            console.log('清除完毕！')
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap >>> .vux-header {
    background-color: cornflowerblue;
}
</style>