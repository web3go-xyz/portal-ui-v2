<template>
  <div class="container">
    <div class="container-side">
      <div class="header">
        <img class="icon" src="@/assets/images/moonbeam/Group.png" alt="" />
        <img class="text" src="@/assets/images/moonbeam/Group-1.png" alt="" />
      </div>
      <div class="menu-wrap">
        <div v-for="(v, i) in menu" :key="i" class="menu-item">
          <div class="menu-title">
            <img class="icon" :src="v.icon" alt="" />
            <span> Moonbeam </span>
          </div>
          <div
            v-for="(sv, si) in v.children"
            :key="si"
            class="sub-menu-item"
            :class="{ active: sv.name == currentSubMenu.name }"
            @click="changeMenu(sv)"
          >
            {{ sv.name }}
          </div>
        </div>
      </div>
      <div class="aside-bottom">
        <div class="token">token&nbsp;:&nbsp;GLMR</div>
      </div>
    </div>
    <div class="container-main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSubMenu: {},
      menu: [
        {
          icon: require("@/assets/images/moonbeam/moonbeam.png"),
          name: "Moonbeam",
          children: [
            {
              name: "Leadeerboard",
            },
            {
              name: "My stake",
            },
          ],
        },
        {
          icon: require("@/assets/images/moonbeam/moonriver.png"),
          name: "Moonriver",
        },
      ],
    };
  },
  methods: {
    changeMenu(sv) {
      this.currentSubMenu = sv;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  .container-side {
    position: fixed;
    width: 290px;
    top: 0;
    bottom: 0;
    background: #ffffff;
    .header {
      padding: 49px 62px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f4f7fe;
      .icon {
        margin-right: 7px;
      }
      .text {
      }
    }
    .menu-wrap {
      .menu-item {
        .menu-title {
          margin-top: 23px;
          padding: 0 33px;
          height: 44px;
          line-height: 44px;
          display: flex;
          align-items: center;
          img {
            margin-right: 12px;
          }
          span {
            font-weight: 700;
            font-size: 18px;
            color: #1b2559;
          }
        }
        .sub-menu-item {
          padding: 0 33px 0 66px;
          border-left: 3px solid transparent;
          height: 44px;
          line-height: 44px;
          font-size: 18px;
          /* identical to box height, or 244% */

          /* Secondary/Grey/600 */

          color: #a3aed0;
          &:hover {
            cursor: pointer;
            background: linear-gradient(
              89.97deg,
              #f6f8fd 0.02%,
              rgba(233, 237, 247, 0) 99.97%
            );
          }
          &.active {
            border-left: 3px solid #5d5fef;
            background: linear-gradient(
              89.97deg,
              #f6f8fd 0.02%,
              rgba(233, 237, 247, 0) 99.97%
            );
          }
        }
      }
    }
    .aside-bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 40px;
      padding: 0 24px;
      .token {
        text-align: center;
        height: 45px;
        line-height: 45px;
        background: #e9e3ff;
        border-radius: 10px;
        font-size: 14px;
        color: #9374ff;
      }
    }
  }
  .container-main {
    height: 100%;
    background: #f4f7fe;
    margin-left: 290px;
  }
}
</style>