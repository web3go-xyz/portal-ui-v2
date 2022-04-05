<template>
  <div class="moobeam-leaderboard-page">
    <div class="big-title">MyStake on Moonbeam</div>
    <div class="info-wrap">
      <div class="item">
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/Icon5.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> Total Stake </span>
          </div>
          <div class="value">39,024,467</div>
        </div>
      </div>
      <div class="item">
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/Icon-5.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> Total Rewards </span>
          </div>
          <div class="value">39,024,467</div>
        </div>
      </div>
      <div class="item">
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/Icon-7.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> ROR-lastweek </span>
            <a-tooltip content="This is tooltip content">
              <img
                class="icon"
                src="@/assets/images/moonbeam/Group_47.png"
                alt=""
              />
            </a-tooltip>
          </div>
          <div class="value">39,024,467</div>
        </div>
      </div>
      <div class="item">
        <div class="right">
          <div class="head">
            <span> win/play Round</span>
          </div>
          <div class="value"><span class="color">1</span>/10</div>
        </div>
        <img
          class="right-icon"
          src="@/assets/images/moonbeam/Group_87.png"
          alt=""
        />
      </div>
    </div>
    <div class="main">
      <a-tabs class="tabs" v-model:active-key="tabKey">
        <a-tab-pane :key="1" title="Current Round"></a-tab-pane>
        <a-tab-pane :key="2" title="Timemachine"></a-tab-pane>
      </a-tabs>
      <CurrentInfo v-if="tabKey == 1" />
      <Timemachine v-else />
    </div>
  </div>
</template>

<script>
import CurrentInfo from "./CurrentInfo";
import Timemachine from "./Timemachine";
export default {
  components: {
    CurrentInfo,
    Timemachine,
  },
  data() {
    return {
      tabKey: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.moobeam-leaderboard-page {
  padding: 24px 20px 37px 20px;
  .big-title {
    padding: 40px 11px;
    font-size: 34px;
    color: #2b3674;
    font-weight: 700;
  }
  .info-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 21px 16px;
      background: #ffffff;
      border-radius: 20px;
      flex: 1;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
      .left-icon {
        width: 56px;
        height: 56px;
        margin-right: 19px;
      }
      .right {
        .head {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #a3aed0;

          .icon {
            margin-left: 4px;
            width: 16px;
            height: 16px;
          }
        }
        .value {
          margin-top: 5px;
          font-weight: 700;
          color: #1b2559;
          font-size: 24px;
          .color {
            color: #4318ff;
          }
        }
      }
      @keyframes turn {
        0% {
          transform: rotate(0);
        }

        100% {
          transform: rotate(360deg);
        }
      }
      .right-icon {
        animation: turn 1s infinite cubic-bezier(0, 0, 1, 1);
        margin-left: 40px;
        width: 54px;
        height: 54px;
      }
    }
  }
  .main {
    background: #ffffff;
    border-radius: 20px;
    padding: 24px 28px;
    .main-title {
      font-weight: 700;
      color: #1b2559;
      font-size: 24px;
    }
  }
}
</style>