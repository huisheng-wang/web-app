<template>
  <div class="userInfo">
    <div class="top">
        <div class="portrait">
            <img class="topImg" src="../../img/top_bg.png" alt="">
        </div>
        <div class="card">
          <div class="imgs">
            <img class="img" :src="datas.url" alt="">
          </div>
          <div class="information"> 
            <div class="text">粉红小猪</div>
            <div class="texts">东方雨虹民用建材公司</div>
          </div>
        </div>
    </div>
    <div class="content">
      <div class="rail" v-for="item in RailData" :key="item.index" @click="skip(item)">
        <div class="marks">
          <img class="mark" :src="item.img" alt="">
        </div>
        <div class="typeface">{{item.name}}</div>
        <div class="go">
          <img class="go" src="../../img/btn_前往.png" alt="">
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import axios from "../utils/request"
export default {
  data(){
    return {
      datas:{},
      RailData:[
        {
          img: require("../../img/icon_红包.png"),
          name:"余额",
        },
        {
          img: require("../../img/icon_时间.png"),
          name:"个人设置",
        },
        {
          img: require("../../img/icon_编辑.png"),
          name:"人脸支付",
        },
        {
          img: require("../../img/icon_时间.png"),
          name:"门禁权限",
        },{
          img: require("../../img/icon_红包.png"),
          name:"企业认证",
        }
        ,{
          img: require("../../img/icon_编辑.png"),
          name:"消息通知",
        },
        {
          img: require("../../img/icon_时间.png"),
          name:"客服电话",
        }
      ]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    skip(e){
     const UrlFilters = {
       '余额':'/balance',
       '个人设置':'/homes',
       '企业认证': '/about',
       '人脸支付': '/recharge',
       '企业认证': '/attestation'
     }
      this.$router.push({ path: `${UrlFilters[e.name] || '/code'}/${e.name}`})
    },
    getData(){
      axios.get('/v1/images/search?limit=1').then(response=> {
        const {status,data} = response || {}
        if(status===200){
          this.datas = data[0]
        }
    // 处理成功情况
  })
  .catch( error=>{
    // 处理错误情况
    console.log(error);
  })
    }
  }
}
</script>

<style scoped>
  .userInfo{
    width: 100%;
    height: 100%;
  }
  *{
    margin:0;
    padding: 0;
  }
  .top{
    width: 100%;
    height: 380px;
  }
  .portrait{
    width: 100%;
    height: 380px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .topImg{
    width: 100%;
    height: 380px;
    
  }
  .card{
    width: 100%;
    display: flex;
    padding-top: 121px;
  }
  .imgs{
    width: 160px;
    height: 160px;
    margin-left: 72px;
  }
  .img{
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
  .information{
    margin-left: 66px;
    margin-top: 25px;
  }
  .text{
    margin-bottom: 29px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;  
    color: #FFFFFF;
  }
  .texts{
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
  .content{
    padding-top: 27px;
    width: 100%;
    background-color: #F6F6F6;
  }
  .rail{
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    border-bottom:  #F6F6F6 solid 1px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #FFFFFF;
  }
  .mark{
    width: 34px;
    height: 36px;
  }
  .marks{
    width: 34px;
    height: 36px;
    margin-right: 20px;
  }
  .typeface{
    flex: 1;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #1E1E1E;
  }
  .go{
    width: 15px;
    height: 26px;
    background: #999999;
  }

</style>