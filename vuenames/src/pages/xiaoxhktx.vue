<template>
    <div class="box">
        <div class="top">
             <router-link to="/" tag="div"  class="img_b">
             <img src="../assets/images/返回.png" alt="" class="imgs">
             </router-link>
            <div class="cent">
                <p>进度查询</p>
                <p>还款提醒</p>
                <p>通知</p>
            </div>
            <div class="rig"></div>
        </div>
        <div class="cent_nei">
            <div class="cent_top">
                <p>您好</p>
                <p>2018-2-25  19:20</p>
            </div>
            <div class="cent_bott">
                <p>您有一期贷款马上到期，不要逾期哦。</p>
                <p>
                    <img src="../assets/images/箭头右2.png" alt="" class="img_jian">
                </p>
            </div>
        </div>
         <div class="cent_nei">
            <div class="cent_top">
                <p>您好</p>
                <p>2018-2-25  19:20</p>
            </div>
            <div class="cent_bott">
                <p>您有一期贷款马上到期，不要逾期哦。</p>
                <p>
                    <img src="../assets/images/箭头右2.png" alt="" class="img_jian">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'xiaoxhktx',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .top{
        height: 0.95rem;
        background-color: #1a2e47;
        display: flex;
        align-items: center;
    }
    .img_b{
        width: 15%;
    }
    .img_b .imgs{
        margin: 0.33rem;
        height: 0.28rem;
        width: 0.35rem;
        cursor: pointer;
    }
    .cent{
        flex: 1;
        display: flex;
        text-align: center;
    }
    .cent p{
        height: 0.45rem;
        line-height: 0.45rem;
        flex: 1;
        background-color: #3b4d65;
        font-size: 0.24rem;
        color: white;
        
    }
    .cent p:nth-child(1){
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
    .cent p:nth-child(3){
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    .cent p:nth-child(2){
        background-color: red;
    }
    .rig{
        width: 15%;
    }
    .cent_nei{
        padding: 0.40rem;
        height: 1.25rem;
        border-bottom: 2px solid #c4c4c4;
    }
    .cent_nei p{
        line-height: 0.62rem;
        font-size: 0.28rem;
        color: #4c4c4c;
    }
    .cent_top {
        display: flex;
        justify-content: space-between;
    }
    .cent_bott{
        display: flex;
        justify-content: space-between;
    }
    .cent_bott .img_jian{
        width: 0.21rem;
        height: 0.31rem;
        cursor: pointer;
    }
</style>
