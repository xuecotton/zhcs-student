<template>
    <main>
        <my-header></my-header>
        <div>
            <!-- 轮播图开始 -->
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item
                    ><img src="../assets/img/lun1.png" alt=""
                /></van-swipe-item>
                <van-swipe-item
                    ><img src="../assets/img/lun2.png" alt=""
                /></van-swipe-item>
                <van-swipe-item
                    ><img src="../assets/img/lun3.png" alt=""
                /></van-swipe-item>
                <van-swipe-item
                    ><img src="../assets/img/lun4.png" alt=""
                /></van-swipe-item>
            </van-swipe>
            <!-- 轮播图结束 -->
            <!-- 我的关注开始 -->
            <div class="my_card" style="margin-top: 0.2rem">
                <div class="my_c">我的关注</div>
                <div class="my_ka">全部</div>
            </div>
            <div class="live">
                <div class="user">
                    <div class="user_geren">
                        <div class="pic">
                            <img src="../assets/img/tou.jpg" alt="" />
                        </div>
                        <div class="user_content">
                            <div class="user_name">安和UI酱</div>
                            <div class="user_zhi">课程:【UI设计入门】</div>
                        </div>
                    </div>
                    <div class="user_zhu">围观</div>
                </div>
                <div class="cont">
                    <div class="ing">
                        <div class="ing_icon">
                            <img src="../assets/img/bo.png" alt="" />
                        </div>
                        <div class="zhi">直播中...</div>
                    </div>
                    <div class="jie">[UI设计]1-2banner的设计入门讲解课程</div>
                    <div class="people">253w人围观</div>
                </div>
            </div>
            <div class="live">
                <div class="user">
                    <div class="user_geren">
                        <div class="pic">
                            <img src="../assets/img/tou.jpg" alt="" />
                        </div>
                        <div class="user_content">
                            <div class="user_name">安和UI酱</div>
                            <div class="user_zhi">课程:【UI设计入门】</div>
                        </div>
                    </div>
                    <div class="user_zhu">围观</div>
                </div>
                <div class="cont">
                    <div class="ing">
                        <div class="ing_icon">
                            <img src="../assets/img/bo.png" alt="" />
                        </div>
                        <div class="zhi">直播中...</div>
                    </div>
                    <div class="jie">[UI设计]1-2banner的设计入门讲解课程</div>
                    <div class="people">253w人围观</div>
                </div>
            </div>
            <div class="live">
                <div class="user">
                    <div class="user_geren">
                        <div class="pic">
                            <img src="../assets/img/tou.jpg" alt="" />
                        </div>
                        <div class="user_content">
                            <div class="user_name">安和UI酱</div>
                            <div class="user_zhi">课程:【UI设计入门】</div>
                        </div>
                    </div>
                    <div class="user_zhu">围观</div>
                </div>
                <div class="cont">
                    <div class="ing">
                        <div class="ing_icon">
                            <img src="../assets/img/bo.png" alt="" />
                        </div>
                        <div class="zhi">直播中...</div>
                    </div>
                    <div class="jie">[UI设计]1-2banner的设计入门讲解课程</div>
                    <div class="people">253w人围观</div>
                </div>
            </div>
            <!-- 我的关注结束 -->
            <!-- 热门课程开始 -->
            <div class="my_card">
                <div class="my_c">热门课程</div>
                <div class="my_ka">全部</div>
            </div>
            <div class="hot">
                <div class="ke">
                    <div class="ke_pic">
                        <img src="../assets/img/hot.png" alt="" />
                    </div>
                    <div class="ke_title">小白的AI进阶大道</div>
                </div>
                <div class="ke">
                    <div class="ke_pic">
                        <img src="../assets/img/hot.png" alt="" />
                    </div>
                    <div class="ke_title">小白的AI进阶大道</div>
                </div>
                <div class="ke">
                    <div class="ke_pic">
                        <img src="../assets/img/hot.png" alt="" />
                    </div>
                    <div class="ke_title">小白的AI进阶大道</div>
                </div>
                <div class="ke">
                    <div class="ke_pic">
                        <img src="../assets/img/hot.png" alt="" />
                    </div>
                    <div class="ke_title">小白的AI进阶大道</div>
                </div>
            </div>
            <!-- 热门课程结束 -->
            <!-- 大咖直播开始 -->
            <div class="my_card">
                <div class="my_c">大咖直播</div>
                <div class="my_ka">全部</div>
            </div>
            <div class="big">
                <div class="play">
                    <div class="ke_pic">
                        <img src="../assets/img/big.png" alt="" />
                    </div>
                    <div class="ke_title">网络营销晋级之路</div>
                </div>
                <div class="play">
                    <div class="ke_pic">
                        <img src="../assets/img/big.png" alt="" />
                    </div>
                    <div class="ke_title">网络营销晋级之路</div>
                </div>
                <div class="play">
                    <div class="ke_pic">
                        <img src="../assets/img/big.png" alt="" />
                    </div>
                    <div class="ke_title">网络营销晋级之路</div>
                </div>
                <div class="play">
                    <div class="ke_pic">
                        <img src="../assets/img/big.png" alt="" />
                    </div>
                    <div class="ke_title">网络营销晋级之路</div>
                </div>
            </div>
            <!-- 大咖直播结束 -->
            <!-- 脚部开始 -->
            <footer>
                <van-tabbar v-model="active">
                    <van-tabbar-item icon="home-o" @click.native="jumpIndex">首页</van-tabbar-item>
                    <van-tabbar-item icon="video-o">直播</van-tabbar-item>
                    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
                </van-tabbar>
            </footer>
            <!-- 脚部结束 -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
main {
    width: 100%;
    height: 100vh;
}

// 轮播图开始
.my-swipe .van-swipe-item {
    height: 3.4rem;
}
.my-swipe .van-swipe-item img {
    width: 100%;
    height: 100%;
}
// 轮播图结束

// 我的关注开始
.my_card {
    width: 93%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    letter-spacing: 0.02rem;
}
.my_c {
    font-size: 0.4rem;
    font-weight: bold;
}
.my_ka {
    width: 0.9rem;
    font-size: 0.3rem;
    color: #a0a4ad;
}
.live {
    width: 93%;
    height: 2rem;
    margin: 0 auto;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 0.28rem;
}
.user {
    display: flex;
    justify-content: space-between;
}
.user_geren {
    display: flex;
}
.pic {
    width: 1.2rem;
    height: 1.2rem;
}
.pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10%;
}
.user_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    height: 1.06rem;
    margin-top: 0.08rem;
    margin-left: 0.24rem;
}
.user_name {
    height: 0.5rem;
    font-size: 0.36rem;
    color: #232323;
    font-weight: bold;
    letter-spacing: 0.02rem;
}
.user_zhi {
    width: 3rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    color: #8f8f8f;
}
.user_zhu {
    width: 2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #ffffff;
    background: linear-gradient(to right, #ff6900, #ff7d00);
    border-radius: 0.4rem;
    font-size: 0.32rem;
    margin: 0.2rem 0 0 0.8rem;
}
.cont {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
}
.ing {
    width: 1.28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ing_icon {
    width: 0.2rem;
    height: 0.2rem;
}
.ing_icon img {
    width: 100%;
    height: 100%;
    display: block;
}
.zhi {
    font-size: 0.26rem;
    color: #ff992a;
}
.jie {
    width: 3.8rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
    color: #696969;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.people {
    width: 1.6rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.22rem;
    color: #a0a4ad;
}
// 我的关注结束

// 热门课程开始
.hot {
    width: 93%;
    margin: 0 auto;
}
.ke {
    width: 50%;
    height: 3.2rem;
    display: inline-block;
}
.ke_pic {
    width: 3.4rem;
    height: 2.32rem;
}
.ke_pic img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
}
.ke_title {
    width: 3.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
    text-align: left;
}
// 热门课程结束

// 大咖直播开始
.big {
    width: 93%;
    margin: 0 auto;
}
.play {
    width: 50%;
    height: 3.2rem;
    display: inline-block;
}
// 大咖直播结束
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
