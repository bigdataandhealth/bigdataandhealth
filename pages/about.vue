<template>
  <nuxt-content :document="content"></nuxt-content>
</template>

<script>
export default {
  transition: "intro",
  async fetch() {
    this.content = await this.$content('about').fetch()
  },
  data() {
    return {
      content: {},
    }
  },
};
</script>

<style lang="scss">

</style>
