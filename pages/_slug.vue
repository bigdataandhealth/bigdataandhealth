<template>
  <div>
    <nav id="store" class="w-full px-0">
      <div
        class="w-full container mx-auto flex flex-wrap items-center mt-0 py-3"
      >
        <nuxt-link
          to="/"
          class="text-gray-800 flex items-center opacity-50 hover:opacity-75"
        >
          <!-- Icon arrow-->
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
      <div class="grid grid-cols-6 gap-5 mt-4">
        <div class="order-2 sm:order-1 col-span-6 sm:col-span-4">
          <h1>{{ article.title }}</h1>
          <nuxt-content :document="article" />
        </div>
        <div class="order-1 sm:order-2 col-span-6 sm:col-span-2">
          <div v-if="article.documentTextLink">
            <div class="font-bold">Documents</div>
            <a target="_blank" :href="article.documentLink">
              <button
                class="my-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"
                  />
                </svg>
                {{ article.documentTextLink }}
              </button>
            </a>
          </div>
          <div class="mt-2 font-bold">Contact</div>
          <div>{{ article.contactName }}</div>
          <div>
            <a
              :href="`mailto:${article.contactEmail}`"
              class="hover:text-blue-600"
            >
              {{ article.contactEmail }}
            </a>
          </div>
          <img :src="article.image" class="mt-3" />
          <div class="text-s text-gray-500">{{ article.creditsImage }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ $content, params }) {
    const article = await $content('topics', params.slug).fetch()
    return { article }
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
