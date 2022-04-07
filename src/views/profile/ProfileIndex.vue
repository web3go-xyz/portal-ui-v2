<template>
  <div class="profile-index-page">
    <div class="top-bg">
      <div class="header">
        <div class="layout">
          <img class="icon" src="@/assets/images/profile/Frame.png" alt="" />
          <a-button class="btn" type="outline" @click="comfirmSort"
            >Connect wallet</a-button
          >
        </div>
      </div>
      <div class="info-wrap">
        <div class="layout">
          <img class="icon1" src="@/assets/images/profile/circle.png" alt="" />
          <img class="icon2" src="@/assets/images/profile/Star_2.png" alt="" />
          <img
            class="icon3"
            src="@/assets/images/profile/Group_172.png"
            alt=""
          />
          <img
            class="icon4"
            src="@/assets/images/profile/Group_173.png"
            alt=""
          />
          <div class="text">
            Discover your <span class="bold">Web3 ID</span> above activities
            across parachains on <span class="blue">Web3Go</span> now !
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bg">
      <div class="layout">
        <a-input class="input" placeholder="search address" allow-clear>
          <template #prefix>
            <img
              class="search-icon"
              src="@/assets/images/profile/streamline-icon-interface-search@48x48.png"
              alt=""
            />
          </template>
        </a-input>
        <div class="title">Recommend</div>
        <div class="recommend-list">
          <div class="recommend-item" v-for="(v, i) in 4" :key="i">
            <img
              class="arrow"
              src="@/assets/images/profile/streamline-icon-interface-arrows-corner-up-right@48x48.png"
              alt=""
            />
            <div class="headicon-wrap">
              <img
                class="headicon"
                src="@/assets/images/profile/headicon.png"
                alt=""
              />
            </div>
            <div class="name">Acala Foundation</div>
            <div class="account">
              12hAtDZJGt4of3m2GqZcUCVAjZPALfvP wvtUTFZPQUbdX1Ud
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.profile-index-page {
  .top-bg {
    // background: #e9d4fe;
    .header {
      border-bottom: 1px solid #e0e5f2;
      .layout {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        .icon {
        }
        .btn {
          width: 140px;
          height: 46px;
        }
      }
    }
    .info-wrap {
      overflow: hidden;
      .layout {
        height: 582px;
        position: relative;
        .icon1 {
          position: absolute;
          top: 70px;
          left: -50px;
        }
        .icon2 {
          position: absolute;
          top: 138px;
          left: 510px;
        }
        .icon3 {
          position: absolute;
          top: -13px;
          right: -165px;
        }
        .icon4 {
          z-index: 2;
          position: absolute;
          bottom: 18px;
          left: 19px;
        }
        .text {
          width: 700px;
          position: absolute;
          top: 190px;
          left: 24px;
          font-size: 50px;
          line-height: 64px;
          color: #000000;
          .bold {
            font-weight: bold;
          }
          .blue {
            color: #4318ff;
          }
        }
      }
    }
  }
  .bottom-bg {
    background: url(~@/assets/images/profile/Group_1731.png) no-repeat;
    background-size: cover;
    .layout {
      position: relative;
      .input {
        position: absolute;
        top: -57px;
        left: 81px;
        width: 1117px;
        height: 115px;
        border: 2.5px solid #4318ff;
        box-sizing: border-box;
        border-radius: 175px !important;
        background: #ffffff !important;
        .search-icon {
          margin-left: 30px;
        }
        /deep/ .arco-input {
          font-size: 35px;
          padding-left: 20px;
          &::-webkit-input-placeholder {
            color: #9374ff;
          }
        }
      }
      & > .title {
        font-weight: 500;
        font-size: 50px;
        color: #2b3674;
        padding-top: 100px;
        padding-bottom: 40px;
      }
      .recommend-list {
        padding-bottom: 116px;
        display: flex;
        .recommend-item {
          padding-top: 25px;
          position: relative;
          text-align: center;
          height: 215px;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          flex: 1;
          margin-right: 20px;
          box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.12);
          &:last-child {
            margin-right: 0;
          }
          .arrow {
            position: absolute;
            right: 24px;
            top: 24px;
            width: 16px;
            height: 16px;
          }
          .name {
            margin-top: 20px;
            font-size: 16px;
            color: #2b3674;
          }
          .account {
            margin-top: 15px;
            font-size: 12px;
            color: #707eae;
          }
        }
      }
    }
  }
}
</style>
