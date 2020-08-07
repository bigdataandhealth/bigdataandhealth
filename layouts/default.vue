<template>
  <div>
    <app-navigation />
    <div class="container mx-auto mt-24 md:mt-16 px-4 mt-12 pb-10">
      <div class="pt-2 sm:pt-8">
        <Nuxt />
      </div>
    </div>
    <app-footer />
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class:
        'text-gray-800 bg-gray-100 font-sans leading-normal tracking-normal',
    },
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
