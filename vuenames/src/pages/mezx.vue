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
                <li>问题1<span>
                    <img src="../assets/images/箭头下.png"></span>
                    </li>
                <li>问题1<span>
                    <img src="../assets/images/箭头下.png"></span></li>
                <li>问题1<span>
                    <img src="../assets/images/箭头下.png"></span></li>
            </ul>
        </div>
        <h3>分类2</h3>
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
    }
    .main li span{
        float: right;
    }
</style>
