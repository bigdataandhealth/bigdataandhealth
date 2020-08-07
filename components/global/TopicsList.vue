<template>
  <section class="bg-white py-8 mb-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-4">
      <nav
        id="store"
        class="w-full z-30 top-0 px-6 py-1 sticky bg-white"
        style="top: 90px;"
      >
        <div
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
        >
          <div
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            href="#"
          >
            Topics
          </div>
        </div>
      </nav>

      <div
        class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col justify-center"
        v-for="(topic, index) in topicsList"
        :key="topic.slug"
      >
        <nuxt-link :to="topic.slug">
          <img
            class="hover:grow hover:shadow-lg"
            :src="topic.image || `https://picsum.photos/id/${index}/300/300`"
          />
          <div class="pt-3 flex items-center justify-between">
            <p class="font-bold">{{ topic.title }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {

  async fetch() {
    const topicsList = await this.$content('topics').fetch()
    this.topicsList = Object.values(topicsList).filter((n) => !!n.path)
  },
  data() {
    return {
      topicsList: [],
    }
  },
}
</script>

<style>
.worksans {
  font-family: 'Work Sans', sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

</style>
