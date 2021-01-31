<template>
  <section class="airlist">
    <div 
      ref="lazyLoadElement"
      class="inner">
      <h2>긴급공수</h2>
    </div>
  </section>
</template>


<script>
export default {
    mounted () {
        this.$lazyLoad(this.$refs.lazyLoadElements)
    }   
}
</script>

<style scoped lang="scss">
section {
    background-color: #f6f7fb;
    .inner {
        height: 994px;
    }
}
</style>