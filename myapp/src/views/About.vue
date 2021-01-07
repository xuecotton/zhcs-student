<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button>Button</van-button>
    <van-button type="primary">按钮</van-button>
    <van-button type="danger">按钮</van-button>
    <van-button type="danger">按钮</van-button>
    <van-button type="danger">按钮</van-button>
    <van-steps :active="2">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>
