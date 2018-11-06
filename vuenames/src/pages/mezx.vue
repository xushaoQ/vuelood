<template>
    <div class="box">
        <header class="header">
            <router-link class="left" to="/indexme" tag="span">
                <img src="../assets/images/返回.png">
            </router-link>
            <span class="title">帮助中心</span>
            <span class="right"></span>
        </header>
        <h3>分类1</h3>
        <div class="main">
            <ul>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
            </ul>
        </div>
        <h3>分类2</h3>
        <div class="main">
            <ul>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
                <li>问题1
                    <span><img src="../assets/images/箭头上.png"></span>
                    </li>
            </ul>
        </div>
        <p>
            请问如图一哦i请问如图一哦微软推梵蒂冈请问如图一哦啊二十日的头发和国际银行家请问retry丰田皇冠进而的父母看了他和飞机跑道为人民我认识个窘迫模块
        </p>
        <div class="main">
            <ul>
                <li>问题1
                    <span><img src="../assets/images/箭头下.png"></span>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'mezx'
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 0.9rem;
        background: #1a2e47;
        display: flex;
        align-items: center;
    }
    .header img{
        width: 0.42rem;
        height: 0.35rem;
        margin: 0.15rem;
        cursor: pointer;
    }
    .header .left,.right{
        width: 10%;
        display: flex;
        justify-content: center;
        
    }
    .header .title{
        font-size: 0.28rem;
        color: #fff;
        flex: 1;
        text-align: center;
    }
    h3{
        font-size: 0.25rem;
        height: 0.75rem;
        line-height: 0.75rem;
        padding-left: 0.3rem;
    }
    .main{
        background: #fff;
    }
    .main li{
        height: 0.9rem;
        line-height: 0.9rem;
        padding: 0 0.3rem;
        font-size: 0.25rem;
        border-bottom: 1px solid #ccc;
        position: relative;
    }
    .main li:last-child{
        border-bottom: none;
    }
    .main li span{
        position: absolute;
        right: 0.3rem;
        top: 0.2rem;
    }
    p{
        font-size: 0.25rem;
        margin: 0.2rem 0;
        padding:  0 0.3rem;
        line-height: 0.4rem;
    }
</style>
