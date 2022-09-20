<template>
  <div class="attestation">
    <top :title='$route.params.name'></top>
    <div class="conten">
        <div class="line">
            <div class="title">企业名称</div>
            <input placeholder="请输入">
        </div>
        <div class="line">
            <div class="title">姓名</div>
            <input placeholder="请输入">
        </div>
        <div class="line">
            <div class="title">部门</div>
            <input placeholder="请选择">
        </div>
        <div class="line">
            <div class="title">职位</div>
            <input placeholder="请输入">
        </div>
        <div class="line">
            <div class="title">工号</div>
            <input placeholder="请输入">
        </div>
    </div>
    <div class="btns">
        <button class="btn">立即认证</button>
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

            }
        },
        
    }
</script>

<style scoped>
    .conten{
        width: 100%;
        padding-top: 20px;
        background-color: #f6f6f6;
    }
    .line{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: #FFFFFF;
        padding: 0 32px;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
    }
    .title{
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #1E1E1E;
    }
   
    input{
        width: 100%;
        border: none;
        flex: 1;
        text-align: right;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
        outline: none;
        margin-left: 40px;
    }
    .btns{
        padding: 0 30px;
        box-sizing: border-box;
        margin-top: 116px;
    }
    .btn{
        width: 100%;
        height: 88px;
        background: #FF6D00;
        border-radius: 10px;
        border: none;
        color: #FFFFFF;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 500;
    }
</style>