<template>
  <div class="moobeam-leaderboard-page">
    <div class="big-title">Moonbeam Staking Leaderboard</div>
    <div class="info-wrap">
      <div class="item">
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/total_rewards.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> Total Collators </span>
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
        <img class="left-icon" src="@/assets/images/moonbeam/Icon.png" alt="" />
        <div class="right">
          <div class="head">
            <span> Total Staking Amount </span>
            <a-tooltip content="This is tooltip content">
              <img
                class="icon"
                src="@/assets/images/moonbeam/Group_47.png"
                alt=""
              />
            </a-tooltip>
          </div>
          <div class="value"><span class="color">300</span>/1800</div>
        </div>
      </div>
      <div class="item">
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/Icon-1.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> Total Blocks </span>
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
        <img
          class="left-icon"
          src="@/assets/images/moonbeam/Icon-2.png"
          alt=""
        />
        <div class="right">
          <div class="head">
            <span> Total Rewards </span>
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
    </div>
    <div class="main">
      <div class="main-title">Current Round</div>
      <div class="main-info">
        <div class="item">
          <div class="head">
            <div class="icon"></div>
            <span>Current Ronud</span>
          </div>
          <div class="num">235</div>
        </div>
        <div class="item">
          <div class="head">
            <div class="icon"></div>
            <span>Round Progress</span>
          </div>
          <div class="num"><span class="color">300</span>/1800</div>
        </div>
        <div class="item">
          <div class="head">
            <div class="icon"></div>
            <span>Current Blocks</span>
          </div>
          <div class="num">235</div>
        </div>
      </div>
      <div class="rank-wrap">
        <div class="rank">
          <div class="rank-title">APR Leaderboard</div>
          <div
            class="rank-item"
            v-for="(v, i) in [1, 2, 3, 4, 5]"
            :key="i"
            :class="{ first: i == 0 }"
          >
            <div class="r-left">
              <div class="num" :class="'num' + (i + 1)">{{ i + 1 }}st</div>
              <img
                class="icon"
                src="@/assets/images/moonbeam/Icon.png"
                alt=""
              />
              <div class="middle">
                <div class="mt">artnft-13</div>
                <div class="mb">Safe</div>
              </div>
            </div>
            <div class="percent">32.1%</div>
          </div>
        </div>
        <div class="rank right">
          <div class="rank-title">Avg Blocks Leaderboard</div>
          <div
            class="rank-item"
            v-for="(v, i) in [1, 2, 3, 4, 5]"
            :key="i"
            :class="{ first: i == 0 }"
          >
            <div class="r-left">
              <div class="num" :class="'num' + (i + 1)">{{ i + 1 }}st</div>
              <img
                class="icon"
                src="@/assets/images/moonbeam/Icon.png"
                alt=""
              />
              <div class="middle">
                <div class="mt">artnft-13</div>
                <div class="mb">Safe</div>
              </div>
            </div>
            <div class="percent">32.3</div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "./Table";
export default {
  components: {
    Table,
  },
  data() {
    return {};
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
    .main-info {
      display: flex;
      margin-top: 20px;
      .item {
        margin-right: 93px;
        .head {
          display: flex;
          align-items: center;
          .icon {
            width: 3px;
            height: 8px;
            background: #7551ff;
            border-radius: 2px;
            margin-right: 4px;
          }
          span {
            font-size: 12px;
            color: #a3aed0;
          }
        }
        .num {
          margin-top: 5px;
          font-weight: 700;
          font-size: 24px;
          color: #1b2559;
        }
        .color {
          color: #4318ff;
        }
      }
    }
    .rank-wrap {
      display: flex;
      margin-top: 24px;
      .rank {
        background: #ffffff;
        box-shadow: 0px 50px 309px rgba(210, 208, 225, 0.24),
          0px 20px 129.093px rgba(210, 208, 225, 0.172525),
          0px 10px 69.0192px rgba(210, 208, 225, 0.143066),
          0px 6px 38.6916px rgba(210, 208, 225, 0.12),
          0px 3px 20.5488px rgba(210, 208, 225, 0.0969343),
          0px 1px 8.55082px rgba(210, 208, 225, 0.0674749);
        border-radius: 20px;
        padding: 20px 24px;
        flex: 1;
        margin-right: 20px;
        &.right {
          .first {
            background-image: url(~@/assets/images/moonbeam/Group_90.png)!important;
            background-repeat: no-repeat!important;
            background-size: 100% 100%!important;
          }
        }
        &:last-child {
          margin-right: 0;
        }
        .rank-title {
          font-weight: 700;
          font-size: 18px;
          color: #2b3674;
        }
        .rank-item {
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          &:last-child {
            margin-bottom: 0;
          }
          &.first {
            margin-bottom: 26px;
            margin-top: 16px;
            background-image: url(~@/assets/images/moonbeam/Group_89.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            border-radius: 10px;
            padding: 12px 22px;
            .r-left {
              .num {
                font-weight: 700;
                font-size: 18px;
                color: #ffffff;
              }
              .num2 {
                color: #ffffff;
              }
              .num3 {
                color: #ffffff;
              }
              .icon {
                width: 48px;
                height: 48px;
                margin: 0 12px;
              }
              .middle {
                .mt {
                  font-weight: 700;
                  font-size: 16px;
                  color: #ffffff;
                }
                .mb {
                  font-size: 12px;
                  color: #ffffff;
                }
              }
            }
            .percent {
              font-weight: 700;
              font-size: 34px;
              color: #ffffff;
              background: transparent;
              width: auto;
              height: auto;
              line-height: inherit;
            }
          }
          .r-left {
            display: flex;
            align-items: center;
            .num {
              font-weight: 700;
              font-size: 16px;
              color: #b0bbd5;
            }
            .num2 {
              color: #707eae;
            }
            .num3 {
              color: #cf8080;
            }
            .icon {
              width: 32px;
              height: 32px;
              margin: 0 8px;
            }
            .middle {
              .mt {
                font-weight: 700;
                font-size: 16px;
                color: #707eae;
              }
              .mb {
                font-size: 12px;
                color: #05cd99;
              }
            }
          }
          .percent {
            width: 80px;
            height: 36px;
            line-height: 36px;
            background: #f7f5ff;
            border-radius: 46px;
            font-weight: 700;
            font-size: 16px;
            color: #4318ff;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>