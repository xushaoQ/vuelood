<template>

       <div class="neir">
            <ul>
                <router-link to="/" tag="li">
                    <img src="../assets/images/首页2.png">
                    <div class="name">首页</div>
                </router-link>
                <li>
                    <img src="../assets/images/产品2.png">
                    <div class="name">产品</div>
                </li>
                <li>
                    <img src="../assets/images/精准匹配2.png">
                    <div class="name">精准匹配</div>
                </li>
                <router-link to="/indexme" tag="li">
                <img src="../assets/images/我2.png">
                    <div class="name">我的</div>
                </router-link>
            </ul>
        </div>
</template>

<script>
export default {
    name:'fooder',

}
</script>

<style scoped>
    .neir{
        width: 100%;
        height: 0.95rem;
        position: fixed;
        bottom: 0;
        font-size: 0.2rem;
        background: #fff;
        border-top:1px solid #ccc; 
    }
    .neir ul li{
        width: 25%;
        float: left;
        text-align: center;
        cursor: pointer;
        
    }
    .neir ul li img{
        width: 0.4rem;
        height: 0.4rem;
        padding: 0.1rem 0;
    }
</style>
