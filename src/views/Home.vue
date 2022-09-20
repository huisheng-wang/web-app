<template>
  <div class="home">
    <div class="user">
      <div class="topImg">
        <img class="topImg" src="../../img/top_bg.png" />
      </div>
      <div class="text">欢迎来到便城</div>
      <div class="explain">
        <div class="img">
          <img class="img" src="../../img/tuxing_1.png" />
        </div>
        <div class="txt">
          <div class="title">2022年中秋节</div>
          <div class="content">
            光棍节是一种流传于年轻人的娱乐性节日 以庆祝自己仍是单身一族为骄傲
            11月11日 光棍节，源于这一天日期里
            有四个阿拉伯数字“1“形似四根光滑的棍子
          </div>
        </div>
      </div>
    </div>
    <div class="record">
      <div class="conten">
        <div class="frame">
          <div class="contenImg">
            <img class="conImg" src="../../img/icon_编辑.png" alt="" />
          </div>
        </div>
        <p class="bill">账单</p>
        <p class="hero">BALL</p>
      </div>
      <div class="contens">
        <div class="frame">
          <div class="contenImg">
            <img class="conImg" src="../../img/icon_编辑.png" alt="" />
          </div>
        </div>
        <p class="bill">开门记录</p>
        <p class="hero">OPENING RECORD</p>
      </div>
    </div>

    <div class="substance">
      <div v-for="item in FormData" :key="item.index">
        <div class="box" v-if="item.type == '1'">
          <div class="image">
            <img class="image" :src="item.img" alt="" />
          </div>
          <div class="writing">
            <div class="top">{{item.name}}</div>
            <div class="buttom">{{item.reading}} <span>阅读</span></div>
          </div>
        </div>

        <div class="card" v-else>
          <div class="cardImg">
            <img class="cardImg" :src="item.img" /> 
          </div>
          <div class="news">便利官网全新上线2020年12月12日</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import tuxing from '../../img/tuxing_2.png'

export default {
  data() {
    return {
      FormData: [
        {
          type: 1,
          img: require("../../img/img_内饰清洗消毒.png"),
          name: '苹果供应链的"黄金十年"，华为能否复制？',
          reading: "10000",
        },
        {
          type: 1,
          img: require("../../img/img_无感外观洗车.png"),
          name: "北京2022年冬奥会个残奥会吉祥物揭晓",
          reading: "10000",
        },
        {
          type: 2,
          img: require("../../img/tuxing_2.png"),
          name: "便利官网全新上线2020年12月12日",
        },
        {
          type: 1,
          img: require("../../img/img_内饰清洗消毒.png"),
          name: '苹果供应链的"黄金十年"，华为能否复制？',
          reading: "6800",
        },
        {
          type: 1,
          img: require("../../img/img_无感外观洗车.png"),
          name: "北京2022年冬奥会个残奥会吉祥物揭晓",
          reading: "8000",
        },
      ],
    };
  },
  components: {
    // HelloWorld
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
template {
  background-color: #fbfbfb;
}
.user {
  width: 100%;
  height: 498px;
  position: relative;
}
.topImg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.img {
  width: 256px;
  height: 234px;
}
.explain {
  display: flex;
  margin-left: 64px;
  margin-top: 72px;
}
.text {
  font-size: 40px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #fefeff;
  margin-left: 29px;
  padding-top: 69px;
}
.txt {
  padding: 20px;
  box-sizing: border-box;
}
.title {
  width: 238px;
  height: 35px;
  font-size: 36px;
  font-family: Alibaba PuHuiTi;
  font-weight: 800;
  color: #ffffff;
}
.content {
  flex: 1;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  margin-top: 19px;
}
.record {
  width: 100%;
  display: flex;
  background-color: #fbfbfb;
  padding: 30px;
  box-sizing: border-box;
}

.conten {
  width: 330px;
  height: 229px;
  background: #ffffff;
  box-shadow: 0 3px 150px 0 #f2f3f6;
  border-radius: 20px;
}
.contens {
  width: 330px;
  height: 229px;
  background: #ffffff;
  box-shadow: 0 3px 150px 0 #f2f3f6;
  border-radius: 20px;
  margin-left: 30px;
}
.frame {
  width: 60px;
  height: 60px;
  border: 1px solid #999999;
  border-radius: 50%;
  position: relative;
  margin: auto;
  margin-top: 49px;
}
.contenImg {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.conImg {
  width: 24px;
  height: 24px;
}
.bill {
  margin-top: 31px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #1e1e1e;
  text-align: center;
}
.hero {
  margin-top: 10px;
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #999999;
  opacity: 0.5;
  text-align: center;
}

.substance {
  padding: 0 30px;
}
.image {
  width: 260px;
  height: 180px;
}
.box {
  display: flex;
  margin: 40px 0;
}
.top {
  flex: 1;
  font-size: 30px;
  color: #1e1e1e;
  margin: 19px 0 36px 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.buttom {
  flex: 1;
  text-align: right;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
}

.card {
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 42px;
}
.cardImg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 20px;
}
.news {
  width: 290px;
  height: 80px;
  font-size: 36px;
  font-family: ZhenyanGB;
  font-weight: 400;
  color: #ffffff;
  line-height: 45px;
  position: absolute;
  left: 50%;
  top: 40%;
  /* margin-top: -40px; */
}
</style>
