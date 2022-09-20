<template>
  <div class="card">
    <div class="details" v-for="item in counter" :key="item.id">
        <div class="conten">
            <div class="recharge">{{item.method}}</div>
            <div class="time">{{item.time}}</div>
            <div class="num">交易单号:<span class="number">{{item.oddNumbers}}</span></div>
        </div>
        <div class="sumMoney">{{item.sumMoney}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // computed:{
  //   normalizedSize: function () {
  //     console.log(this.downsData)
  //   return this.downsData
  // }
  // },
  data: function(){
    return {
    counter: this.downsData
  }
  },
  props: {
    downsData:{
      type: Array,
      default: []
    }
    // msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card{
    padding: 30px;
    box-sizing: border-box;
  }
 .details{
        display: flex;
        width: 100%;
        border-bottom: 1px solid #f6f6f6;
    }
    .conten{
        flex: 1;
    }
    .sumMoney{
        text-align: right;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recharge{
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #1E1E1E;
        margin-top: 41px;
    }
    .time{
        font-size: 30px;
        font-family: DINPro;
        font-weight: 400;   
        color: #646464;
        margin-top: 24px;
    }
    .num{
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #B5B3B2;
        margin-top: 24px;
        margin-bottom: 40px;
    }
    .number{
        font-size: 24px;
        font-family: DINPro;
        font-weight: 400;
        color: #646464;
    }
</style>
