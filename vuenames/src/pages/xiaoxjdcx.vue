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


        <div class="xian">
            <p class="xian_x"></p>
        </div>

        <div class="cen_foot">
            <div class="nei_rig">
                查看详情>
            </div>
        </div>

        <div class="qwqwqw"></div>



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


        <div class="xian">
            <p class="xian_x"></p>
        </div>

        <div class="cen_foot">
            <div class="nei_rig">
                查看详情>
            </div>
        </div>

 <div class="qwqwqw"></div>

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


        <div class="xian">
            <p class="xian_x"></p>
        </div>

        <div class="cen_foot">
            <div class="nei_rig">
                查看详情>
            </div>
        </div>


         <div class="qwqwqw"></div>
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


        <div class="xian">
            <p class="xian_x"></p>
        </div>

        <div class="cen_foot">
            <div class="nei_rig">
                查看详情>
            </div>
        </div>
         <div class="qwqwqw"></div>
        


            <div class="footer">
                <div>
                    END
                </div>
            </div>
            </div>
</template>

<script>
export default {
  name: "xiaoxjdcx"
};
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
        background-color: red;
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
    .cen_nei{
        height: 2rem;
        display: flex;
        align-items: center;
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
    .xian{
        margin-top: 0.3rem;
        font-size: 0;
        text-align: center;
    }
    .xian .xian_x{
        width: 6.9rem;
        border: 1px solid #c4c4c4;
        display: inline-block;
    }
    .cen_foot{
        height: 0.6rem;
        line-height: 0.6rem;
    }
    .cen_foot .nei_rig{
        font-size: 0.2rem;
        padding-right: 0.31rem;
        float: right;
        color: #999999;
    }
    .qwqwqw{
        height: 0.3rem;
        background-color: #c4c4c4;
    }
    .footer{
        height: 0.43rem;
        background-color: #c4c4c4;
    }
    .footer div{
        font-size: 0.16rem;
        text-align: center;        
    }
</style>
