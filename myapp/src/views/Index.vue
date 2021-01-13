<template>
    <div style="width: 7.5rem">
        <!-- 主体开始 -->
        <main>
            <div class="head">学生平台系统</div>
            <div style="width: 100%; height: 1rem"></div>
            <div class="guide_box">
                <div @click="onEntryStu" class="guide" id="0">
                    <div class="guide_icon">
                        <img src="../assets/img/edu_mini.png" alt="" />
                    </div>
                    <div class="guide_label">VR课程</div>
                </div>
                <div @click="onEntryLive" class="guide" id="1">
                    <div class="guide_icon">
                        <img src="../assets/img/play.png" alt="" />
                    </div>
                    <div class="guide_label">手机直播</div>
                </div>
                <div class="guide" id="2">
                    <div class="guide_icon">
                        <img src="../assets/img/vodplay.png" alt="" />
                    </div>
                    <div class="guide_label">视频点播</div>
                </div>
                <div class="guide" id="3">
                    <div class="guide_icon">
                        <img src="../assets/img/rtplay.png" alt="" />
                    </div>
                    <div class="guide_label">延时播放</div>
                </div>
            </div>
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
    background-image: url("../assets/img/bg.png");
    background-color: #1f2531;
    background-repeat: no-repeat;
    background-size: cover;
}
// 头部开始
.head {
    width: 100%;
    height: 0.92rem;
    line-height: 0.92rem;
    background-color: #ffffff;
    font-size: 0.32rem;
    color: #323233;
}
// 头部结束

// 学生内容开始
.guide_box {
    text-align: center;
}
.guide {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    background-color: rgba(0, 0, 0, 0.55);
    text-align: center;
    margin: 0.32rem;
}
.guide_icon {
    width: 0.9rem;
    height: 0.9rem;
    margin: 0.44rem auto 0;
}
.guide_icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.guide_label {
    margin-top: 0.1rem;
    color: #cfe4ff;
    font-size: 0.28rem;
}
// 学生内容结束
</style>

<script>
// 导入子组件文件
export default {
    methods: {
        onEntryStu() {
            this.$router.push({ name: "Order" });
        },
        onEntryLive() {
            this.$router.push({ name: "Live" });
        },
    },
};
</script>
