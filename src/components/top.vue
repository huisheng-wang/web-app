<template>
    <div class="top">
        <div class="btn">
            <img class="img" src="../../img/btn_前往.png" alt="">
        </div>
        <div class="full">{{title}}</div>
    </div>
</template>

<script>
export default {
props: {
    title:{
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.top{
    display: flex;
    width: 100%;
    height: 88px;
    margin-top: 40px;
    align-items: center; 
    padding: 0 30px;   
    box-sizing: border-box;
    position: relative;
}
.btn{
    height: 88px;
    box-sizing: border-box;
    line-height: 88px;
}
.img{
    width: 21px;
    height: 30px;
}
.full{
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FF6D00;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>