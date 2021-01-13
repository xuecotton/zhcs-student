<template>
    <div style="width: 7.5rem">
        <main>
            <my-header></my-header>
            <div class="list">
                <div class="mess">消息列表</div>
            </div>
            <!-- 列表开始 -->
            <div class="list_box">
                <div class="row">
                    <div class="mess_list">
                        <div class="row_tou">
                            <img src="../assets/img/zhi.png" alt="" />
                        </div>
                        <div class="row_right">
                            <div class="row_top">
                                <div class="row_zi">
                                    <span>官方账号消息</span>
                                </div>
                                <div class="row_date">
                                    <span>12-22</span>
                                </div>
                            </div>
                            <div class="row_bottom">
                                <span
                                    >亲爱的火山灿你好：想你推荐由知乎联合实战派投资理财专家。</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="mess_list">
                        <div class="row_tou">
                            <img src="../assets/img/xitong.png" alt="" />
                        </div>
                        <div class="row_right">
                            <div class="row_top">
                                <div class="row_zi">
                                    <span>系統消息</span>
                                </div>
                                <div class="row_date">
                                    <span>12-11</span>
                                </div>
                            </div>
                            <div class="row_bottom">
                                <span>徽章小助手恭喜你有1个徽章可领取</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="mess_list">
                        <div class="row_tou">
                            <img src="../assets/img/xiao.jpg" alt="" />
                        </div>
                        <div class="row_right">
                            <div class="row_top">
                                <div class="row_zi">
                                    <span>知乎小管家</span>
                                </div>
                                <div class="row_date">
                                    <span>2019-05-04</span>
                                </div>
                            </div>
                            <div class="row_bottom">
                                <span
                                    >11月11日晚0:30开始双十一活动，购物必领京东全品类任意叠加</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 列表结束 -->
            <!-- 脚部开始 -->
            <footer>
                <van-tabbar v-model="active">
                    <van-tabbar-item icon="home-o" @click.native="jumpIndex">首页</van-tabbar-item>
                    <van-tabbar-item icon="notes-o">课程</van-tabbar-item>
                    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
                </van-tabbar>
            </footer>
            <!-- 脚部结束 -->
        </main>
    </div>
</template>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
main {
    width: 100%;
    height: 100vh;
    background-color: #ebebeb;
}

.list {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #a0a0a0;
    margin: 0 auto;
}

// 列表内容开始

.row {
    width: 100%;
    background-color: #fefefe;
    line-height: 1.4rem;
}
.mess_list {
    margin: 0 auto;
    padding: 0 0.3rem 0 0.2rem;
    display: flex;
    justify-content: space-between;
}
.row_tou {
    width: 0.9rem;
    height: 0.9rem;
    line-height: 1.6rem;
    margin-left: 0.1rem;
}
.row_tou img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.row_right {
    width: 83%;
    height: 0.9rem;
    line-height: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.2rem 0;
    border-bottom: 0.02rem solid #eeeeee;
}
.row_top {
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
}
.row_zi {
    font-size: 0.3rem;
}
.row_date {
    font-size: 0.24rem;
    color: #bbbbbb;
}
.row_bottom {
    width: 4.5rem;
    height: 0.4rem;
    font-size: 0.24rem;
    color: #aaaaaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}
// 列表内容结束
</style>

<script>
export default {
    data() {
        return {
            active: 1,
        };
    },
    methods: {
        jumpIndex() {
            this.$router.push({ name: "Index" });
        },
    },
};
</script>
