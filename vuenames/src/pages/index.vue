<template>
  <div class="box">
    <header class="header">
        <router-link class="left" to="/grzx" tag="span">
            <img src="../assets/images/tx.png">
        </router-link>
        <span class="title">首页</span>
        <router-link class="left" to="/xiaoxi" tag="span">
            <img src="../assets/images/icon2.png">
        </router-link>
    </header>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
        </div>
    </div>
        <div class="fenlei">
            <router-link class="" to="/jindcx" tag="span">
                <img src="../assets/images/进度查询.png">
            <span>进度查询</span>
            </router-link>
            <router-link class="" to="/sudaiph" tag="span">
                <img src="../assets/images/速贷排行.png">
                <span>速贷排行</span>
            </router-link>
            <router-link class="" to="/huanktx" tag="span">
                <img src="../assets/images/还款提醒.png">
                <span>还款提醒</span>
            </router-link>
        </div>
        <div class="Borrow-cash">
            <p>借现金<span>更多&gt;</span></p>
            <div class="tupian">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="Credit-card">
            <p>还信用卡<span>更多&gt;</span></p>
            <div class="tupian">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="dkfl">
            <router-link class="" to="/ gongxd" tag="span">
                <img src="../assets/images/工薪贷.png">
            <span>工薪贷</span>
            </router-link>
            <div></div>
            <router-link class="" to="/xuesd" tag="span">
                <img src="../assets/images/学生贷.png">
                <span>学生贷</span>
            </router-link>
            <div></div>
            <router-link class="" to="/qiyzd" tag="span">
                <img src="../assets/images/企业主贷.png">
                <span>企业主贷</span>
            </router-link>
        </div>
        <div class="zixun">
            <p>还信用卡<span>更多&gt;</span></p>
            <div class="content">
                <span>攻略</span>
                <dl>
                    <dt>
                        <img src="../assets/images">
                    </dt>
                    <dd>我是无耻的标题党标题党标题党标题党标题党</dd>
                    <dd>我是像白莲花一样的内容摘要，白莲花内容摘要白莲花内容摘要...</dd>
                </dl>
            </div>
            <div class="content">
                <span>攻略</span>
                <dl>
                    <dt>
                        <img src="../assets/images">
                    </dt>
                    <dd>我是无耻的标题党标题党标题党标题党标题党</dd>
                    <dd>我是像白莲花一样的内容摘要，白莲花内容摘要白莲花内容摘要...</dd>
                </dl>
            </div>
        </div>
        <div class="more">
            <p>查看更多</p>
        </div>
  </div>


</template>

<script>
import fooder from '../components/fooder'
export default {
  name: 'home'
}
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,
})
</script>

<style scoped>
    .header{
        width:100%;
        height:0.9rem;
        background:#1a2e47;
        display:flex;
        text-align:center;
        justify-content:space-around
    }
    .swiper-container{
        width:3rem;
    }
    .fenlei,.dkfl{
        width:100%;
        height:1.5rem;
        display:flex;
        text-align:center;
        justify-content:space-around
    }
    .fenlei span,.dkfl span{
        color:#4c4c4c;
        font-size:0.24rem;
    }
    .Borrow-cash,.Credit-card{
        margin-top:0.12rem;
    }
    .Borrow-cash p,.Credit-card p{
        color:#166eb3;
        font-size:0.3rem;
    }
    .Borrow-cash p span,.Credit-card p span{
        float:right;
        color:#999999;
        font-size:0.2rem;
    }
    .tupian{
        display:flex;
        justify-content:space-around;
    }
    .tupian div{
        flex:1;
    }
    .dkfl{
        margin-top:0.12rem;
    }
    .dkfl div{
        border-right:0.01rem solid #f0f0f0;
    }
    .zixun{
        margin-top:0.12rem;
    }
    .zixun p{
        color:#4c4c4c;
        font-size:0.3rem;
    }
    .zixun p span{
        float:right;
        color:#999999;
        font-size:0.2rem;
    }
    .content{
        posiation:relative;
        border-top:0.01rem solid #ccc;
    }
    .content span{
        posiation:absolute;
        top:0.2rem;
        left:0.3rem;
        font-size:0.2rem;
    }
    .content dl dt{
        float:left;
    }
    .content dl dt imh{
        width:1.3rem;
        height:1.3rem;
    }
    .content dl dd{
        color:#4c4c4c;
        font-size:0.26rem;
    }
    .content dl dd:first-child{
        font-size:0.3rem;
        color:#333333;
    }
    .more{
        width:100%;
        color:#808080;
        font-size:0.24rem;
    }
</style>
