<template>
  <section class="time-deal">
    <div
      ref="lazyLoadElement"
      class="inner">
      <h2>타임딜</h2>
      <div class="swiper-outer">
        <div
          ref="swiper"
          class="swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="product in products"
              :key="product.name"
              class="swiper-slide">
              <div class="product-outer">
                <img
                  :src="product.thumbnail"
                  :alt="product.name" />
                <div class="product-information">
                  <!-- 시계 -->
                  <p class="clock">
                    {{ clock }}
                  </p>
                  <!-- 타임딜 마크 -->
                  <div class="product-time-deal">
                    타임딜
                  </div>
                  <!-- name -->
                  <div class="product-name">
                    {{ product.name }}
                  </div>
                  <!-- price info -->
                  <div class="price-information">
                    <!-- flag -->
                    <div class="product-flag">
                      {{ product.flag }}
                    </div>
                    <p class="product-value">
                      {{ product.price.value }}
                    </p>
                    <p class="product-unit">
                      {{ product.price.unit }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
      </div>
    </div>    
  </section>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
// import ProductCard from "~/src/components/ProductCard";
export default {
  components: {},
  data() {
    return {
      products: [],
      clock: "00:00:00",
    };
  },
  mounted() {
    this.init();
    this.$options.timer = window.setTimeout(this.updateTime, 1000);
  },
  methods: {
    async init() {
      this.$lazyLoad(this.$refs.lazyLoadElement);

      this.products = await this.$fetch({
        requestName: "hotFocus",
      });
      console.log(this.products);
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          speed: 1000,
          spaceBetween: 30,
          slidesPerView: 1,
          slidesPerGroup: 1,
          loop: true,
          navigation: {
            nextEl: ".time-deal .next",
            prevEl: ".time-deal .prev",
          },
        });
      });
    },
    updateTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      this.clock = 
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      this.$options.timer = window.setTimeout(this.updateTime, 1000);
      }
      
    }
};
</script>

<style scoped lang="scss">
section {
  background-color: white;
  .inner {
    height: 612px;
    .swiper-container {
      margin: -30px -16px;
      padding: 30px 16px;
    }
    .swiper-outer {
      position: relative;
      .prev,
      .next {
        position: absolute;
        top: 50%;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        border-radius: 50%;
        box-shadow: 0 4px 16px rgba(#000, 0.15);
        background-color: #fff;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        &::after {
          content: "";
          width: 10px;
          height: 18px;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
          background-size: 209px;
        }
      }
      .prev {
        left: -50px;
        &::after {
          background-position: -199px 0;
        }
      }
      .next {
        right: -50px;
        &::after {
          background-position: -199px -46px;
        }
      }
    }
  }
  .product-outer {
    // 여기선 flex 좌우로 정렬
    display: flex;
    img {
      width: 600px;
    }
    .product-information {
      // 여기선 flex 상하로 정렬
      background-color: white;
      border-top: 1px solid rgba(128, 128, 128, 0.1);
      border-bottom: 1px solid rgba(128, 128, 128, 0.1);
      padding: 30px;
      .clock {
        margin: 20px 0;
        color: red;
        font-size: 32px;
        font-weight: 700;
      }
      .product-time-deal {
        width: 42px;
        background-color: rgba(221, 160, 221, 0.1);
        border: 1px solid rgba(128, 0, 128, 0.5);
        font-size: 12px;
        text-align: center;
        color: rgba(128, 0, 128, 0.9);
        padding: 3px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
      .product-name {
        font-size: 20px;
      }
      .price-information {
        // 여기선 flex 좌우로 정렬
        display: flex;
        align-items: center;
        .product-flag {
          color: rgb(255, 99, 71);
          font-size: 24px;
          margin-right: 5px;
        }
        .product-value {
          font-weight: 700;
          font-size: 24px;
        }
        .product-unit {
          padding-top: 3px;
        }
      }
    }
  }
}
</style>