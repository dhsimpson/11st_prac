<template>
  <div>
    <header>
      <div class="inner">
        <div
          class="open-nav-drawer-left"
          @click="onNav('LNB')"></div>
        <a
          href="javascript:void(0)"
          class="logo"></a>
        <div class="search">
          <input
            v-model="searchText"
            placeholder="찾기 싶은 상품을 검색해 보세요!"
            type="text"
            @keyup.enter="search" />
          <div
            class="search__icon"
            @click="search"></div>
        </div>
        <!-- TODO: ranking 길게 보기 토글 기능 및 로고 -->
        <div class="ranking">
          <!-- Slider main container -->
          <div
            ref="swiper"
            class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                v-for="(rank, index) in rankings.rankings"
                :key="rank.name"
                class="swiper-slide">
                <a :href="rank.href">
                  <span class="index">{{ index + 1 }}</span>
                  <span class="name">{{ rank.name }}</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Do Not Slide -->
          <!-- <div
            v-if="isSwipe"
            class="spread-ranking">
            <div
              v-for="(rank, index) in rankings.rankings"
              :key="rank.name"
              class="swiper-slide">
              <a :href="rank.href">
                <span class="index">{{ index + 1 }}</span>
                <span class="name">{{ rank.name }}</span>
              </a>
            </div>
          </div> -->
          <!-- 토글 버튼 -->
          <div 
            :class="{untoggle: isSwipe}"
            class="ranking-toggle"
            @click="toggleSwipe"></div>
        </div>
        <!-- RNB -->
        <div
          class="open-nav-drawer-right"
          @click="onNav('RNB')"></div>
      </div>
    </header>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      searchText: "",
      rankings: {},
      isSwipe: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.rankings = await this.$fetch({
        requestName: "rankings",
      });
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          direction: "vertical",
          speed: 1000,
          autoplay: {
            delay: 3000,
          },
          loop: true,
        });
      });
    },
    onNav(name) {
      // LNB(left navigation bar)를 open해 줌
      //dispatch : actions를 실행해주는 메서드
      //navigation.js의 onNav를 실행 시키겠다는 네임스페이스를 명시
      this.$store.dispatch("navigation/onNav", name);
    },
    toggleSwipe () {
      this.isSwipe = !this.isSwipe
    },
    async search() {
      if (!this.searchText.trim()) return;

      const res = await this.$search({
        searchText: this.searchText,
      });
    },
  },
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  .inner {
    display: flex;
    align-items: center;
    height: 120px;
    .open-nav-drawer-left,
    .open-nav-drawer-right {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "";
        display: block;
        width: 36px;
        height: 36px;
        background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
        background-size: 363px;
      }
    }
    .open-nav-drawer-left {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(#000, 0.06), 0 0 1px rgba(#000, 0.4);
      &::after {
        background-position: -302px -203px;
      }
    }
    .open-nav-drawer-right:after {
      background-position: -263px -113px;
    }
  }
  .logo {
    display: block;
    width: 94px;
    height: 40px;
    margin: 0 24px;
    background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
    background-position: -162px 0;
    background-size: 363px;
    cursor: pointer;
  }
  .search {
    position: relative;
    input {
      width: 500px;
      height: 50px;
      padding: 0 27px;
      border: 1px solid #ddd;
      border-radius: 25px;
      box-sizing: border-box;
      background-color: #fafafa;
      font-size: 18px;
      outline: none;
      font-family: "Noto Sans KR", sans-serif;
      &::placeholder {
        color: #bbb;
      }
    }
    &__icon {
      // .search__icon 와 같음
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -162px -45px;
      background-size: 363px;
      cursor: pointer;
    }
  }
  .ranking {
    display: flex;
    width: 210px;
    margin: 0 30px;
    .swiper-container {
      width: 182px;
      height: 28px;
      .swiper-slide {
        a {
          display: block;
          height: 28px;
          line-height: 28px;
          text-decoration: none;
          font-size: 15px;
          color: #333;
          font-weight: 700;
          span.index {
            margin-right: 10px;
            color: #f43142;
            font-style: italic;
          }
          &:hover span.name {
            color: #f43142;
          }
        }
      }
    .speard-ranking {
              a {
        display: block;
        height: 28px;
        line-height: 28px;
        text-decoration: none;
        font-size: 15px;
        color: #333;
        font-weight: 700;
        span.index {
          margin-right: 10px;
          color: #f43142;
          font-style: italic;
        }
        &:hover span.name {
          color: #f43142;
        }
      }
    }
    }
    .ranking-toggle {
      width: 8px;
      height: 8px;
      margin-top: 8px;
      border-right: 1px solid rgba(#000, 0.4);
      border-bottom: 1px solid rgba(#000, 0.4);
      transform: rotate(45deg);
      &.untoggle {
        margin-top: 10px;
        transform: rotate(-135deg);
      }
    }
  }
}
</style>