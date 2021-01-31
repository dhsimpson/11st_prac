<template>
  <div>
    <l-n-b></l-n-b>
    <!-- <div class="header-main"> -->
    <my-header></my-header>
    <!-- </div> -->
    <r-n-b></r-n-b>
    <billboard></billboard>
    <direct></direct>
    <hot-focus></hot-focus>
    <time-deal></time-deal>
    <air-lift></air-lift>
    <plan-banner></plan-banner>
    <wide-banner></wide-banner>
    <todays-chance></todays-chance>
    <promotion></promotion>
    <mds-recommendation></mds-recommendation>
    <partner></partner>
    <my-footer></my-footer>
    <global-banner></global-banner>
  </div>
</template>

<script>
import LNB from '~/src/components/LNB'
import MyHeader from '~/src/components/MyHeader';
import RNB from '~/src/components/RNB'
import Billboard from '~/src/components/Billboard';
import Direct from './components/Direct.vue';
import HotFocus from './components/HotFocus.vue';
import TimeDeal from './components/TimeDeal.vue';
import AirLift from './components/AirLift.vue';
import PlanBanner from './components/PlanBanner.vue';
import WideBanner from './components/WideBanner.vue';
import TodaysChance from './components/TodaysChance.vue';
import Promotion from './components/Promotion.vue';
import MdsRecommendation from './components/MdsRecommendation.vue';
import Partner from './components/Partner.vue';
import MyFooter from './components/MyFooter.vue';
import GlobalBanner from './components/GlobalBanner.vue';

export default {
  components: {
    LNB,
    MyHeader,
    RNB,
    Billboard,
    Direct,
    HotFocus,
    TimeDeal,
    AirLift,
    PlanBanner,
    WideBanner,
    TodaysChance,
    Promotion,
    MdsRecommendation,
    Partner,
    MyFooter,
    GlobalBanner
  }
}
</script>
<style scoped lang="scss">
// c.f.  url("~~~") 는 css전용
@import "./scss/main.scss";
// .header-main {
//   display: flex;
//   justify-content: center;
// }
</style>
