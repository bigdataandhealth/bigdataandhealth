<template>
  <div>
    <app-navigation />
    <div class="container mx-auto mt-24 md:mt-16 px-4 mt-12 pb-10">
      <div class="pt-2 sm:pt-8">
        <Nuxt />
      </div>
    </div>
    <bottom-footer />
  </div>
</template>
<script>
import BottomFooter from '@/components/AppFooter'

export default {
  components: { BottomFooter },
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
