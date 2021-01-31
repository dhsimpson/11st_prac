<template>
  <section 
    class="beset-product">
    <div 
      ref="lazyLoadElement"
      class="inner">
    </div>
  </section>
</template>

<script>
export default {
    mounted () {
        this.$lazyLoad(this.$refs.lazyLoadElement)
    }
}
</script>

<style scoped lang="scss">
    section {
        .inner {
            height: 485px;
            padding: 50px 0 0;
        }
    }
</style>