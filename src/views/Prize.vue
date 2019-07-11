<template>
    <div class="wrap">
        <x-header title="use prop:title">我的奖品</x-header>
        <flexbox orient="vertical">
            <flexbox-item>
                <div class="flex-prize">...</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-explain-title">拼图规则</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-explain">
                    <p>①活动时间：2019年....</p>
                    <p>②中奖人凭游戏页面中奖信息及报名信息领取奖品；奖品领取地点：....</p>
                    <p>③拼图游戏每日不限次数，可重复游戏；</p>
                    <p>④每日完成6副拼图可抽奖一次，每日最多三次抽奖机会；</p>
                    <p>⑤本活动最终解释归岱山网信所有</p>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script>
import { XHeader, Flexbox, FlexboxItem } from 'vux'
export default {
    components: {
        XHeader,
        Flexbox, 
        FlexboxItem
    },
    name: 'Prize',
    data(){
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
.wrap >>> .vux-header {
    background-color: cornflowerblue;
}
.flex-prize{
    height: 15vh;
    margin: 2em 2em 0em 2em;
    border-radius: 0.5em;
    border: 1.5px solid #d9d9d9;
    text-align: center;
    line-height: 15vh;
}
.flex-explain-title{
    text-align: center;
    margin: 1em 2em 0em 2em;
    font-size: 1.5em;
    word-wrap:break-word;
}
.flex-explain{
    height: 50vh;
    border: 1.5px solid #d9d9d9;
    margin: 0 2em 2em 2em;
    border-radius: 0.5em;
    padding: 1em;
}
</style>