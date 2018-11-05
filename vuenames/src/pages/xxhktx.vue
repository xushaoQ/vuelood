<template>
    <div class="box">
        <div class="top">
            <div class="top_left">
                <p>&lt;</p>
                </div>
            <div class="top_cen">
                <p>进度查询</p>
                <p>还款提醒</p>
                <p>通知</p>
            </div>
            <div class="top_rig"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'xxhktx',
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .top{
        height: 95px;
        text-align: center;
        align-items: center;
        line-height: 95px;
        background-color: #1a2e47;
        display: flex;
    }
    .top div{
        flex: 1;
    }
    .top_left p{
        height: 0.24rem;
    }
    .top_cen p{
        float: left;
        font-size: 0.24rem;
    }
</style>
