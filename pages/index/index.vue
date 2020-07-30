<template>
  <div class="pt-2 sm:pt-12">
    <nuxt-content :document="home"></nuxt-content>

    <cards :cards="cards" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('home').fetch()
    const cards = await $content('topics').fetch()
    return { home, cards }
  },
}
</script>
