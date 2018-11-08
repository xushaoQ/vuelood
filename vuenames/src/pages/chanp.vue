<template>
    <div class="box">
        <header class="header">
            <ul>
                <li @click="tabs(0)" :class="{actives:tab==0}">
                    <div>全部</div>
                </li>
                <li @click="tabs(1)" :class="{actives:tab==1}">
                    <div>借现金</div>
                </li>
                <li @click="tabs(2)" :class="{actives:tab==2}">
                    <div>还信用卡</div>
                </li>
            </ul>
        </header>
        <div class="list">
            <ul>
                <li @click="list(0)" :class="{active:lis == 0}">
                    <select name="" id="">
                        <option value="">综合指数</option>
                    </select>
                </li>
                <li @click="list(1)" :class="{active:lis==1}">
                    <select name="" id="">
                        <option value="">成功率</option>
                    </select>
                </li>
                <li @click="list(2)" :class="{active:lis==2}">
                    <select name="" id="">
                        <option value="">放款速度</option>
                    </select>
                </li>
                <li @click="list(3)" :class="{active:lis==3}">
                    <select name="" id="">
                        <option value="">贷款利率</option>
                    </select>
                </li>
            </ul>
        </div>
        <fooder></fooder>
    </div>
</template>

<script>
import fooder from "../components/fooder";
export default {
  name: "chanp",
  data() {
    return {
        tab:0,
        lis: 0
    };
  },
  methods: {
    tabs(index){
        this.tab=index;
    },
    list(indexs) {
      this.lis = indexs;
    }
  },
  components: { fooder }
};
</script>

<style scoped>
    .header{
        width:100%;
        height: 0.8rem;
        background:#1a2e47;
        position: relative;
    }
    .header ul{
        position: absolute;
        left: 1.5rem;
        top: 0.15rem;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        height:0.5rem;
        width: 60%;
        border: 1px solid #fff;
        border-radius: 0.25rem;
    }
    .header ul li{
        flex: 1;
        font-size: 0.25rem;
        cursor: pointer;
        text-align: center;
        padding: 0.13rem;
    }
    .header ul li:first-child{
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
    .header ul li:last-child{
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
     .actives{
        color: #FFf;
        background:#01ca7e;
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
</style>
