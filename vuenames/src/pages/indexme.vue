<template>
    <div id="box">
        <header class="header">
            <img src="../assets/images/szz.png">
        </header>
        <div class="mes">
            <div class="imgs">
                <img src="../assets/images/tx.png">
            </div>
            <div class="title">
                沙马基
            </div>
            <div class="mezl">
                个人资料 >
            </div>
        </div>
        <div class="main">
            <div class="mejd">
                <div class="zl">
                    进度查询
                </div>
                <div class="qb">
                    查看全部 >
                </div>
            </div>
            <div class="mesh">
                <div>
                    <img src="../assets/images/审核中.png" class="img1">审核中
                    <img src="../assets/images/k10.png" class="img2">
                </div>
                <div>
                    <img src="../assets/images/待放款.png" class="img1">待放款
                    <img src="../assets/images/k10.png" class="img2">
                </div>
                <div>
                    <img src="../assets/images/还款中.png" class="img1">还款中
                    <img src="../assets/images/k10.png" class="img2">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'indexme'
}
</script>

<style scoped>
#box{
    background: #fafafa;
}
    .header{
        width: 100%;
        height: 0.6rem;
        background: #1a2e47;
        display: flex;
        justify-content: flex-end;
    }
    .header img{
        width: 0.3rem;
        height: 0.3rem;
        margin: 0.15rem;
        cursor: pointer;
    }
    .mes{
        height: 1.2rem;
        background: #1a2e47;
        display: flex;
    }
    .mes img{
        width: 0.9rem;
        height: 0.9rem;
        margin:0 0.3rem;
    }
    .mes .title{
        flex: 1;
        font-size: 0.25rem;
        color: #fff;
        line-height: 0.9rem;
    }
    .mezl{
        font-size: 0.25rem;
        color: #fff;
        line-height: 0.9rem;
        margin-right: 0.3rem;
    }
    .main{
        height: 1.8rem;
        background: #fff;
        margin: 0.3rem 0;
    }
    .main .mejd{
        height: 0.7rem;
        display: flex;
        font-size: 0.25rem;
        line-height: 0.7rem;
        padding: 0 0.3rem;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .mesh{
        height: 1.1rem;
        font-size: 0.25rem;
        display: flex;
        justify-content: space-around;
    }
    .mesh .img1{
        width: 0.42rem;
        height: 0.35rem;
        display: inline-block;
        margin:-0.1rem 0.2rem;
    }
    .mesh div{
        flex: 1;
        line-height: 1.1rem;
        border-right: 1px solid #ccc;
        padding: 0 0.15rem;
    }
    .mesh div:last-child{
        border-right: none;
    }
    .mesh .img2{
        width: 0.3rem;
        height: 0.3rem;
        display: inline-block;
        margin: 5px 0;
    }
</style>
