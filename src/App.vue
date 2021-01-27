<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
    <hot-focus></hot-focus>
  </div>
</template>

<script>
import LNB from '~/src/components/LNB'
import MyHeader from '~/src/components/MyHeader';
import Billboard from '~/src/components/Billboard';
import Direct from './components/Direct.vue';
import HotFocus from './components/HotFocus.vue';

export default {
  components: {
    LNB,
    MyHeader,
    Billboard,
    Direct,
    HotFocus
  }
}
</script>
<style scoped lang="scss">
// c.f.  url("~~~") 는 css전용
@import "./scss/main.scss";

</style>
