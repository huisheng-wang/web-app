<template>
  <div class="home">
    <div class="user">
      <div class="topImg">
        <img class="topImg" src="../../img/top_bg.png">
      </div>
      <div class="text">欢迎来到</div>
      <div class="explain">
        <div class="img">
          <img class="img" src="../../img/tuxing_1.png">
        </div>
        <div class="txt">
          <div class="title">2022年光棍节</div>
          <div class="content">光棍节是一种流传于年轻人的娱乐性节日 以庆祝自己仍是单身一族为骄傲 11月11日 光棍节，源于这一天日期里 有四个阿拉伯数字“1“形似四根光滑的棍子</div>
        </div>
      </div>
    </div>
    <div class="record">
      <div class="conten">
        <div class="contenImg">
          <img class="contenImg" src="../../img/icon_编辑.png" alt="">
        </div>
        <p >账单</p>
        <p>BALL</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  template{
    background-color: #fbfbfb;
  }
  .user{
    width: 100%;
    height: 31.125rem;
    position: relative;
  }
.topImg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.img{
  width: 16rem;
  height: 14.625rem;
}
.explain{
  display: flex;
  margin-left: 64px;
  margin-top: 72px;
}
.text{
  font-size: 40px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #FEFEFF;
  margin-left: 29px;
  padding-top: 69px;
}
.txt{
  padding: 20px;
  box-sizing: border-box;
}
.title{
  width: 238px;
  height: 35px;
  font-size: 36px;
  font-family: Alibaba PuHuiTi;
  font-weight: 800;
  color: #FFFFFF;
}
.content{
  /* width: 273px; */
  /* height: 74px; */
  flex: 1;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  margin-top: 19px;
}
.record{
  display: flex;
  position: relative;
}
.conten{
  width: 330px;
  height: 229px;
  /* padding: 30px; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
