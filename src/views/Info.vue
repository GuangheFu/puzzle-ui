<template>
  <div id="info" class="info-view">
    <form class="info-form" @submit.prevent="infoData" enctype="multipart/form-data">
      <br>
      <br>
      <div class="weui-cells">
        <div class="vux-x-input weui-cell">
          <div class="weui-cell__hd">
            <label for="name" class="weui-label">姓名</label>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <x-input :show-clear="false" id="name" type="text" name="name" v-model="name"
                     placeholder="请填写姓名"
                     class="weui-input"></x-input>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="vux-x-input weui-cell">
          <div class="weui-cell__hd">
            <label for="tel" class="weui-label">电话</label>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <x-input :show-clear="false" id="tel" type="number" name="tel" v-model="tel"
                     placeholder="请填写电话"
                     class="weui-input"></x-input>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="vux-x-input weui-cell">
          <div class="weui-cell__hd">
            <label for="address" class="weui-label">地址</label>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <x-input :show-clear="false" id="address" type="text" name="address" v-model="address"
                     placeholder="请填写地址"
                     class="weui-input"></x-input>
          </div>
        </div>
      </div>

      <br>
      <x-button class="btnSubmit">提交</x-button>

    </form>
  </div>
</template>

<script>
  import {XInput, XButton, AjaxPlugin} from 'vux'

  export default {
    components: {
      XInput,
      XButton
    },
    name: 'Info',
    data () {
      return {
        name: '',
        tel: '',
        address: ''
      }
    }, mounted: function () {
      this.init(document.body.clientHeight)
    },
    methods: {
      init (e) {
        document.getElementById('info').style.height = e + 'px'
        document.getElementById('info').style.backgroundSize = '100% ' + e + 'px'
        $("input,select").blur(function(){
          setTimeout(() => {
            const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
          }, 100);
        })
      },
      infoData () {
        let code = getQueryString("code");
        console.log("code:"+code);
        function getQueryString(name) {
          let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          let r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]);
          return null;
        }

        let data = new FormData();
        data.append('name',this.name);
        data.append('tel',this.tel);
        data.append('address',this.address);
        data.append('code',code);
        data.append('appid','wx9b5cc2afec1e0c6f');

        let config = {
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }
        this.$http.post('http://my.fq.dstyun.com:8000/info/saveInfo',data,config).then(res =>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .info-view {
    background-image: url("../assets/images/from-background.jpg");
    background-repeat: no-repeat;
    width: 100%;
  }

  .info-form {
    opacity: 0.9;
    width: 80%;
    height: 65%;
    position: relative;
    left: 10%;
    top: 35%;
    font-family: PingFangSC-Semibold, sans-serif;
  }

  .btnSubmit {
    position: relative;
    width: 70%;
    background-color: #42b983;
    color: white;
    left: 0;
    top: 15%;
    -moz-box-shadow: 2px 2px 10px rgba(87, 87, 87, 0.61);
    -webkit-box-shadow: 2px 2px 10px rgba(87, 87, 87, 0.61);
    box-shadow: 5px 5px 15px rgba(87, 87, 87, 0.61);
  }

  .weui-label {
    color: #6a6a6a;
    width: 4em;
    padding-left: 2px;
  }

  .weui-cells {
    margin-top: 10%;
    padding: 0;
    border-radius: 5px;
    filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090, direction=120, strength=4);
    -moz-box-shadow: 2px 2px 10px rgba(87, 87, 87, 0.61);
    -webkit-box-shadow: 2px 2px 10px rgba(87, 87, 87, 0.61);
    box-shadow: 5px 5px 15px rgba(87, 87, 87, 0.61);
  }

  .weui-cell {
    padding: 4px 8px;
  }
</style>
<style>
  html, body {
    height: 100%;
    overflow-y: scroll;
  }
</style>
