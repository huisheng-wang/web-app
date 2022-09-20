<template>
  <div class="recharge">
    <top :title='$route.params.name'></top>
    <div class="content">
        <div class="contents">
            <div class="money">
                <div  v-for="item in moneys" :key="item.id" v-on:click="choice(item)" 
                :class="item.id == amountId? 'amount' :'amounts'">{{item.moneys}}</div>   
            </div>
            <div class="button">立即充值</div>
            <div class="explain">充值说明：</div>
            <div class="one">1.支付方式为微信支付</div>
            <div class="one">2.充值记录可能延时，仅供参考，请以实际余额</div>
        </div>
    </div>
  </div>
</template>

<script>
import top from '../components/top.vue'
export default {
    components:{
        top
    },
    data(){
        return{
            amountId:1,
            moneys:[
                {
                    id: 1,
                    moneys: '10元'
                },
                {
                    id: 2,
                    moneys: '20元'
                },
                {
                    id: 3,
                    moneys: '30元'
                },
                {
                    id: 4,
                    moneys: '50元'
                },
                {
                    id: 5,
                    moneys: '100元'
                },
                {
                    id: 6,
                    moneys: '200元'
                }
            ]
                 
        } 
    },
    mounted(){
        console.log(this.$route)
    },
    methods:{
        choice(e){
            const { id } = e
            this.amountId = id
        }
    },
  
}
</script>

<style scoped>

.content{
    background-color: #f6f6f6;
    padding-top: 30px;
}
.contents{
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #FFFFFF;
}
.money{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
}
.amount{
    width: 29%;
    height: 80px;
    background-color: #FF6D00;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    border-radius: 11px;
    margin-right: 20px;
    margin-top:20px;
}
.amounts{
    width: 29%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-family: DINPro;
    font-weight: 500;
    color: #1E1E1E;
    border: 1px solid #999999;
    border-radius: 11px;
    margin-right: 20px;
    margin-top:20px;
}

.button{
    width: 100%;
    height: 91px;
    background-color: #FF6D00;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;  
    margin-top: 111px;
}
.explain{
    margin-top: 80px;
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #1E1E1E;
}
.one{
    margin-top: 30px;
    flex: 1;
    font-size: 26px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #646464;
}
</style>