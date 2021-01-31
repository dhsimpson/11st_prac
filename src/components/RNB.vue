<template>
  <div class="nav-rnb">
    <nav
      v-if="done"
      :class="{ show: isShowRNB }">
      <div class="user">
        <a href="javascript:void(0)">최근 본 상품</a>
        <div class="flex-space"></div>
        <div
          class="close-nav"
          @click="offNav('RNB')"></div>
      </div>
      <div 
        ref="container"
        class="container">
      </div>
    </nav>
    <div
      v-show="isShowRNB"
      v-cloak
      class="nav-bg"
      @click="offNav('RNB')"></div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          done: true
      }
  },
  computed: {
    isShowRNB() {
      return this.$store.state.navigation.isShowRNB;
    },
  },
  methods: {
    offNav(name) {
      this.$store.dispatch("navigation/offNav", name);
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: #f6f6f6;
  transition: transform 0.4s;
  transform: translateX(300px);
  &.show {
    transform: translateX(0);
  }
  .user {
    height: 70px;
    padding: 0 25px;
    background-color: #fff;
    display: flex;
    align-items: center;
    a {
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .flex-space {
      flex-grow: 1;
    }
    .close-nav {
      width: 36px;
      height: 36px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -261px -203px;
      background-size: 363px;
      cursor: pointer;
    }
  }
  .container {
      background-color: #f6f6f6;
    height: calc(100% - 164px);
    overflow-y: auto;
    padding: 10px 0;
    box-sizing: border-box;
  }
}
.nav-bg {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(#000, 0.2);
z-index: 98;
}
</style>

