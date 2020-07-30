<template>
  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
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
        v-for="(card, index) in cards"
        :key="card.slug"
      >
        <nuxt-link :to="card.slug" href="#">
          <img
            class="hover:grow hover:shadow-lg"
            :src="card.image || `https://picsum.photos/id/${index}/300/300`"
          />
          <div class="pt-3 flex items-center justify-between">
            <p class="font-bold">{{ card.title }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    cards: { type: Array, default: () => [] },
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

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
