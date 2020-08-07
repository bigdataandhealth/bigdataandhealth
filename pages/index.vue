<template>
  <nuxt-content :document="content" class="pb-12"></nuxt-content>
</template>

<script>
export default {
  transition: 'fade',
  async fetch() {
    this.content = await this.$content('home').fetch()
  },
  data() {
    return {
      content: {},
    }
  },
}
</script>
