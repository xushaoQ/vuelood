<template>
    <div class="box">
        <header class="header">
            <router-link class="left" to="/indexme" tag="span">
                <img src="../assets/images/返回.png">
            </router-link>
            <span class="title">进度查询</span>
            <span class="right"></span>
        </header>
        <div class="list">
            <ul>
                <li @click="tab(0)" :class="{active:tabs == 0}">
                    <div class="name">全部</div>
                </li>
                <li @click="tab(1)" :class="{active:tabs==1}">
                    <div class="name">审核中</div>
                </li>
                <li @click="tab(2)" :class="{active:tabs==2}">
                    <div class="name">待放款</div>
                </li>
                <li @click="tab(3)" :class="{active:tabs==3}">
                    <div class="name">还款中</div>
                </li>
                <li @click="tab(4)" :class="{active:tabs==4}">
                    <div class="name">已完成</div>
                </li>
                <li @click="tab(5)" :class="{active:tabs==5}">
                    <div class="name">审核未通过</div>
                </li>
            </ul>
        </div>
        <div class="mian">
            <div v-if="tabs == 0">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    全部
                </div>
            </div>
        </div>
            </div>
            <div v-if="tabs == 1">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    审核中
                </div>
            </div>
        </div>
            </div>
            <div v-if="tabs == 2">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    待放款
                </div>
            </div>
        </div>
            </div>
            <div v-if="tabs == 3">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    还款中
                </div>
            </div>
        </div>
            </div>
            <div v-if="tabs == 4">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    已完成
                </div>
            </div>
        </div>
            </div>
            <div v-if="tabs == 5">
                <div class="cen_nei">
            <div class="cent_dl">
                <dl>
                    <dt>
                        <img src="../assets/images/学生.png" alt="" class="xues">
                    </dt>
                    <dd>
                        <p>屌丝贷</p>
                        <p>产品：屌丝贷</p>
                        <p>借款金额：1200元</p>
                        <p>借款期限：20天</p>
                    </dd>
                </dl>
            </div>
            <div class="cent_right">
                <div class="rig_top">
                    2018-2-25   19:22
                </div>
                <div class="rig_bot">
                    审核未通过
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'jindcx',
    data(){
        return{
            tabs:0
        }
    },
    methods: {
                tab(index) {
                    this.tabs = index
                }
            }
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
    .list{
        height: 0.9rem;
        background: #fff;
        padding: 0 0.12rem;
    }
    .list ul{
        display: flex;
        justify-content:space-around;
    }
    .list ul li{
        padding: 0 0.12rem;
        font-size: 0.25rem;
        line-height: 0.82rem;
        cursor: pointer;
        color: #808080;
    }
    .active{
        color: #fff;
        border-bottom: 0.08rem solid #00ca79;
        
    }
    .cen_nei{
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        background: #fff;
    }
    .cent_dl{
        width: 50%;
    }
    .cent_dl dl dt{
        float: left;
    }
    .cent_dl dl dt img{
        width: 0.9rem;
        height: 0.9rem;
        margin: 0.3rem;
    }
    .cent_dl dl dd{
        float: left;
        margin-top: 0.3rem;
    }
    .cent_dl dl dd p{
        line-height: 0.45rem;
    }
    .cent_dl dl dd p:nth-child(1){
        font-size: 0.28rem;
        color: #4c4c4c;
    }
    .cent_dl dl dd p:nth-child(2){
        font-size: 0.26rem;
        color: #666666;
    }
    .cent_dl dl dd p:nth-child(3){
        font-size: 0.22rem;
        color: #666666;
    }
    .cent_dl dl dd p:nth-child(4){
        font-size: 0.22rem;
        color: #666666;
    }
    .cent_right{
        width: 50%;
    }
    .cent_right div{
        font-size:  0.22rem;
    }
    .cent_right .rig_top{
        margin-top: -0.57rem;
        color: #666666;
        text-align: center;
    }
    .cent_right .rig_bot{
        font-size: 0.28rem;
        color: #333333;
        text-align:center;
        margin-top: 0.59rem;
    }
</style>
