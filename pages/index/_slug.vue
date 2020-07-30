<template>
  <div>
    <nav id="store" class="w-full px-0 py-1">
      <div
        class="w-full container mx-auto flex flex-wrap items-center mt-0 py-3"
      >
        <nuxt-link
          to="/"
          class="text-gray-800 flex items-center opacity-50 hover:opacity-75"
        >
          <svg
            width="20"
            height="10"
            viewBox="0 0 282 181"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.15 0.85303C93.816 0.998731 89.7406 2.68889 86.765 5.51553L5 80.1155C-1.13153 85.7654 -1.13153 95.4469 5 101.097L86.765 175.697C93.2014 181.612 103.745 181.729 110.311 175.93C116.877 170.131 117.006 160.631 110.57 154.716L56.4913 105.526H264.268C270.251 105.614 275.782 102.787 278.79 98.1244C281.83 93.4911 281.83 87.7212 278.79 83.0879C275.782 78.4254 270.251 75.5987 264.268 75.6861H56.4913L110.57 26.4968C115.551 22.1548 117.039 15.5108 114.257 9.77007C111.476 4.05851 105.072 0.503343 98.15 0.85303Z"
              fill="currentColor"
            />
          </svg>
          <div
            class="ml-2 tracking-wide no-underline hover:no-underline font-bold"
          >
            Go back
          </div>
        </nuxt-link>
      </div>
    </nav>
    <article>
      <h1>{{ article.title }}</h1>
      <div class="grid grid-cols-6 gap-5 mt-4">
        <div class="order-2 sm:order-1 col-span-6 sm:col-span-4">
          <nuxt-content :document="article" />
        </div>
        <div class="order-1 sm:order-2 col-span-6 sm:col-span-2">
          <div class="font-bold">Contact</div>
          <div>{{ article.contact.name }}</div>
          <div>
            <a
              :href="`mailto:${article.contact.email}`"
              class="hover:text-blue-600"
              >{{ article.contact.email }}</a
            >
          </div>

          <img :src="article.image" />
          <div class="text-s text-gray-500">{{ article.creditsImage }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('topics', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
<style>
.nuxt-content h1,
h1 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 20px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
