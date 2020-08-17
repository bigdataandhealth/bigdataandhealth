<template>
  <nav
    class="bg-gray-200 fixed py-4 px-2 mt-0 w-full z-10 top-0 shadow-md z-50"
    style="opacity: 0.9;"
  >
    <div class="flex justify-around font-bold">
      <nuxt-link
        class="flex-grow no-underline text-blue hover:text-blue hover:no-underline text-2xl pl-2"
        to="/"
      >
        Big Data & Health
      </nuxt-link>

      <ul class="list-reset flex justify-between flex items-center">
        <li class="mr-3">
          <nuxt-link
            to="/new"
            class="inline-block no-underline py-2 px-4 bg-indigo-800 hover:bg-indigo-900 text-white font-bold rounded"
          >
            Propose a new topic
          </nuxt-link>
        </li>
        <li class="mr-3">
          <nuxt-link
            to="/about"
            class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
          >
            About
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>
li .nuxt-link-active {
  font-weight: bold;
}
</style>
