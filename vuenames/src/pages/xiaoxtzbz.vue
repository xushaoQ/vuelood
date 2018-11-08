<template>
    <div class="box">
         <div class="top">
            <div class="img_b">
                <img src="../assets/images/返回.png" alt="" class="imgs">
            </div>
            <div class="cent">
                <p>进度查询</p>
                <p>还款提醒</p>
                <p>通知</p>
            </div>
            <div class="rig"></div>
        </div>


        <div class="centent">
            <div class="cen_jin">今天</div>
            <div class="cent_cen">

            </div>
        </div>









    </div>
</template>

<script>
export default {
        name:'xiaoxtzbz'
}
</script>

<style scoped>
    .top {
        height: 0.95rem;
        background-color: #1a2e47;
        display: flex;
        align-items: center;
    }
    .img_b {
        width: 15%;
    }
    .img_b .imgs {
        margin: 0.33rem;
        height: 0.28rem;
        width: 0.35rem;
        cursor: pointer;
    }
    .cent {
        flex: 1;
        display: flex;
        text-align: center;
    }
    .cent p {
        height: 0.45rem;
        line-height: 0.45rem;
        flex: 1;
        background-color: #3b4d65;
        font-size: 0.24rem;
        color: white;
    }
    .cent p:nth-child(1) {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
    .cent p:nth-child(3) {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    .cent p:nth-child(2) {
        /* background-color: red; */
    }
    .rig {
        width: 15%;
    }
    .centent .cen_jin{
        height: 0.57rem;
        font-size: 0.19rem;
        line-height: 0.57rem;
        text-align: center;
        color: #7e7e7e;
    }
    .centent .cent_cen{
        width: 6.9rem;
        height: 4.5rem;
        margin: 0 auto;
        background-color: #ffffff;
        
    }
</style>
