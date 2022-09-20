<template>
    <div class="user">
        <div class="top">
            <div class="title">余额</div>
            <div class="money">
                <div class="left">
                    <div class="moneys">{{topData.mon}}</div>
                    <div class="explain">现金余额</div>
                </div> 
                <span class="line"></span>
                <div class="left">
                    <div class="moneys">{{topData.mons}}</div>
                    <div class="explain">公户余额</div>
                </div>
            </div>
        </div>
        <div class="downs">
    <div class="down">
        <div class="tit">充值记录</div>
    </div>
   
  </div>
        <HelloWorld :downsData="downsData"/>
    </div>
</template>

<script>
    import  HelloWorld  from '../components/HelloWorld';
    export default {
        data(){
            return{
                topData:
                    {
                        mon: '68.00', mons: '88.00',
                    },
                downsData:[
                    {
                        method: "微信充值" ,
                        time: "2019-10-30 16:00:00",
                        oddNumbers: "123456789",
                        sumMoney:'+100'
                    },
                    {
                        method: "支付宝充值" ,
                        time: "2019-10-30 16:00:00",
                        oddNumbers: "123456789",
                        sumMoney:'+100'
                    },
                    {
                        method: "公户充值" ,
                        time: "2019-10-30 16:00:00",
                        oddNumbers: "123456789",
                        sumMoney:'+100'
                    }
                ]
            }
        },
        components: {
        HelloWorld
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .top{
        width: 100%;
        height: 419px;
        background-image: url("../../img/矩形\ 17\ 拷贝.png");
    }

    .title{
        text-align: center;
        padding-top: 66px;
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
    }
    .money{
        display: flex;
        margin-top: 119px;
    }
    .left{
        width: 50%;
        text-align: center;
    }
    .moneys{
        font-size: 60px;
        font-family: DINPro;
        font-weight: bold;
        color: #FFFFFF;
    }
    .explain{
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
    }
    .line{
        width: 1px;
        height: 100px;
        background: #FFFFFF;
        text-align: center;
    }
    .down{
        width: 100%;
        background-color: #f6f6f6;
        padding-top: 20px;
    }
    .downs{
        padding: 0 30px;
        box-sizing: border-box;
    }
    .tit{
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #1E1E1E;
        background-color: #FFFFFF;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
    }
   
</style>

