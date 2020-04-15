<template>
   <div class="mine">
    <!-- 顶部头像和设置 -->
    <div class="top">
      <div class="info">
        <div class="avatar-wrapper">
          <img src="../assets/img/2.png">
        </div>

        <div class="name-wrapper">
          <span class="name">登录</span>
          <span class="desc">个人信息 <i class="iconfont">&#xe79a;</i></span>
        </div>
      </div>

      <div class="operation">
        <i class="iconfont ">&#xe65c;</i>
        <i class="iconfont ">&#xe68c;</i>
      </div>
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 重要的栏目 -->
    <div class="important">
      <cross-item name="我的收藏">
        <i class="iconfont">&#xe666;</i>
      </cross-item>

      <cross-item name="我的足迹">
        <i class="iconfont">&#xe600;</i>
      </cross-item>

      <cross-item name="学生专区">
        <i class="iconfont">&#xe7c0;</i>
      </cross-item>

      <cross-item name="地址">
        <i class="iconfont icon-money">&#xe606;</i>
      </cross-item>
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 次要的栏目 -->
    <div class="minor">
      <cross-item name="关于">
        <i class="iconfont">&#xe626;</i>
      </cross-item>
    </div>

    
  </div>
</template>

<script>
import CrossItem from "../components/cross/cross-item"
import CrossLine from "../components/cross/cross-line"
export default {
  components: {
    CrossItem,
    CrossLine
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/varibles.scss';
.mine {
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  .top {
    display: flex;
    position: relative;
    width: 100%;
    height: 120px;
    background: $bgColor;
    .info {
      flex: 2;
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      .avatar-wrapper {
        width: 70px;
        height: 70px;
        margin-left: 20px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .name-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 55px;
        margin-top: 10px;
        margin-left: 20px;
        .name {
          font-size: 16px;
          color: #fff;
          font-weight: bold;
        }
        .desc {
          font-size: 16px;
          color: #fcfefe;
          i {
            font-size: 18px;
          }
        }
      }
    }
    .operation {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      i {
        margin-top: 10px;
        margin-right: 15px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .important {
    width: 100%;
    background-color: #fff;
    .cross-item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .minor {
    width: 100%;
    background-color: #fff;
    .cross-item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>