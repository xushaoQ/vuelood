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
                    <div>综合指数<img src="../assets/images/箭头下1.png"></div>
                </li>
                <li @click="list(1)" :class="{active:lis==1}">
                    <div>成功率<img src="../assets/images/箭头下1.png"></div>
                </li>
                <li @click="list(2)" :class="{active:lis==2}">
                    <div>放款速度<img src="../assets/images/箭头下1.png"></div>
                </li>
                <li @click="list(3)" :class="{active:lis==3}">
                    <div>贷款利率<img src="../assets/images/箭头下1.png"></div>
                </li>
            </ul>
        </div>
        <div v-if="lis==0">
            <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        </div>
        <div v-if="lis==1">
            <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        </div>
        <div v-if="lis==2">
            <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        </div>
        <div v-if="lis==3">
            <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
        <div class="content">
            <div class="xiny">
                <dl>
                    <dt></dt>
                    <dd class="title">信用钱包<img src="../assets/images/卡.png"></dd>
                    <dd>信用钱包</dd>
                    <dd>成功过申请1234次 | 评论1234次<span>成功率</span></dd>
                </dl>
            </div>
            <div class="biaoq"><span>HOT</span><span>标签1</span><span>标签啊啊</span><span>标签啊啊</span></div>
            <div class="jianj">产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊产品简介啊</div>
        </div>
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
      tab: 0,
      lis: 0
    };
  },
  methods: {
    tabs(index) {
      this.tab = index;
    },
    list(indexs) {
      this.lis = indexs;
    }
  },
  components: { fooder }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.8rem;
  background: #1a2e47;
  position: relative;
}
.header ul {
  position: absolute;
  left: 1.5rem;
  top: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 0.5rem;
  width: 60%;
  border: 1px solid #fff;
  border-radius: 0.25rem;
}
.header ul li {
  flex: 1;
  font-size: 0.25rem;
  cursor: pointer;
  text-align: center;
  padding: 0.13rem;
}
.header ul li:first-child {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.header ul li:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.actives {
  color: #fff;
  background: #01ca7e;
}
.list {
  height: 0.9rem;
  background: #fff;
  padding: 0 0.12rem;
}
.list ul {
  display: flex;
  justify-content: space-around;
}
.list ul li {
  padding: 0 0.3rem;
  line-height: 0.82rem;
  cursor: pointer;
  color: #808080;
  font-size: 0.25rem;
}
.list ul li img {
  width: 0.15rem;
  height: 0.1rem;
  padding-left: 0.1rem;
}
.active {
  border-bottom: 0.08rem solid #00ca79;
}
.content {
  margin-top: 0.1rem;
  background: #fff;
  border-top: 0.1rem solid #fe696d;
}
.content:last-child{
    margin-bottom: 1rem;
}
.xiny,
.biaoq,
.jianj {
  padding: 0.15rem;
}
.xiny dl dt {
  width: 1.3rem;
  height: 1.3rem;
  float: left;
  background: #d5d5d5;
  margin-right: 0.1rem;
}
.xiny dl dd {
  font-size: 0.3rem;
  line-height: 0.45rem;
}
.xiny dl dd:nth-child(3) {
  font-size: 0.25rem;
  color: #9e9e9e;
}
.xiny dl dd span {
  float: right;
}
.xiny dl dd img {
  margin-left: 0.1rem;
  width:0.25rem;
  height: 0.25rem;
}
.xiny dl dd:last-child {
  font-size: 0.2rem;
  color: #d5d5d5;
}
.biaoq {
  border-top: 0.01rem solid #ccc;
}
.biaoq span {
  width: 1rem;
  height: 0.36rem;
  display: block;
  font-size: 0.24rem;
  float: left;
  margin-right: 0.2rem;
  border-radius: 0.18rem;
  text-align: center;
  line-height: 0.36rem;
}
.biaoq span:first-child {
  color: #ffbabd;
  border: 0.02rem solid #ffbabd;
}
.biaoq span:nth-child(2) {
  color: #01bdc9;
  border: 0.02rem solid #01bdc9;
}
.biaoq span:nth-child(3) {
  color: #9a5de6;
  border: 0.02rem solid #9a5de6;
}
.biaoq span:last-child {
  color: #f2b502;
  border: 0.02rem solid #f2b502;
}
.jianj {
  color: #d5d5d5;
  margin-top: 0.25rem;
  font-size: 0.22rem;
}
</style>
