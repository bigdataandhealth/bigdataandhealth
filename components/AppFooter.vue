<template>
  <footer>
    <div
      class="flex justify-between items-center border-t-2 fixed bottom-0 w-full px-4 bg-gray-100 z-50"
    >
      <div class="flex items-center">
        <a
          target="_blank"
          href="https://www.nwo.nl/"
          class="opacity-75 hover:opacity-100 mr-4"
        >
          <img src="/logo_nwo.png" width="50" />
        </a>
        <a
          target="_blank"
          href="https://www.esciencecenter.nl/"
          class="opacity-75 hover:opacity-100 mr-4"
        >
          <img src="/logo_escience.png" width="110" />
        </a>
        <a
          target="_blank"
          href="https://www.hartstichting.nl//"
          class="opacity-75 hover:opacity-100 mr-4"
        >
          <img src="/logo_hartstichting.png" width="100" />
        </a>
        <a
          target="_blank"
          href="https://commit2data.nl/"
          class="opacity-75 hover:opacity-100 mr-4"
        >
          <img src="/logo_commit_2_data.png" width="70" />
        </a>
      </div>

      <div class="flex">
        <a
          href="https://github.com/bigdataandhealth/bigdataandhealth.github.io/tree/master/content"
          class="text-gray-700 hover:text-gray-800 m-2 tooltip"
          target="_blank"
        >
          <span class="tooltip-text bg-white p-3 -my-8 -ml-20 rounded shadow"
            >Edit on GitHub</span
          >
          <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
<style>
.tooltip .tooltip-text {
  opacity: 0;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  z-index: 100;
  transition: opacity 300ms ease;
}
.tooltip:hover .tooltip-text {
  opacity: 1;
}
</style>
