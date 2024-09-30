<script setup>
import { ref } from 'vue'
const icons = [
  {
    icon: 'bxl-github',
    link: 'https://github.com/connectshark/unsplash-viewer'
  }
]

const SITE_NAME = import.meta.env.VITE_SITE_TITLE

const brands = ref([])

const fetchBrands = async () => {
  const fetch_response = await fetch('/brands.json')
  const data = await fetch_response.json()
  brands.value = data
}

const list = ref(null)

const vClickOutside = {
  beforeMount (el) {
    el.clickOutsideEvent = (event) => {
      if (list.value.contains(event.target)) {
        el.open = false
        return
      }
      if (!el.open || el.contains(event.target)) return
      el.open = false
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted (el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

fetchBrands()

const pages = [
  {
    url: '/random',
    name: '隨機一張'
  }
]
</script>

<template>
  <header class="backdrop-blur-md sticky top-0 bg-white/50">
    <div class="py-3 w-11/12 mx-auto flex items-center justify-between">
      <h1 class="text-xl/loose md:text-2xl/loose lg:text-3xl/loose font-mono">
        <router-link class=" uppercase" to="/">{{ SITE_NAME }}</router-link>
      </h1>
      <details class=" relative" v-clickOutside>
        <summary class="list-none p-2 rounded-md hover:bg-gray-200 cursor-pointer">頁面</summary>
        <ul ref="list" class="bg-white absolute right-0 rounded-lg shadow-xl w-48 overflow-hidden">
          <li v-for="page in pages" class="border-b border-gray-200 last:border-none">
            <router-link class="p-4 hover:bg-gray-200 block text-sm/loose" :to="page.url">{{ page.name }}</router-link>
          </li>
        </ul>
      </details>
    </div>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="text-white bg-gray-900 py-10">
    <div class="py-3 w-11/12 mx-auto grid gap-6 md:grid-cols-2 mb-6">
      <div>
        <h5 class="mb-4">
          <router-link class=" uppercase" to="/">{{ SITE_NAME }}</router-link>
        </h5>
        <p>
          <a href="mailto:bobhus394@gmail">
            <i class='bx bx-envelope bx-sm'></i>
          </a>
        </p>
      </div>
      <div>
        <h5 class="mb-3">Brands</h5>
        <ul>
          <li class="mb-1" v-for="item in brands">
            <a class="hover:underline text-xs/relaxed" :href="item.url" target="_blank">{{ item.name }}<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center">
      <a v-for="item in icons" :href="item.link" target="_blank">
        <i class='bx bxl-github bx-sm' :class="item.icon"></i>
      </a>
    </div>
    <h6 class="text-center text-sm py-10">2024<i class='bx bx-copyright'></i><a class=" underline" href="https://github.com/connectshark/unsplash-viewer/blob/main/LICENSE" target="_blank">MIT</a> made by<a class=" hover:underline" href="https://nosegates.com/" target="_blank">Chambers</a></h6>
  </footer>
</template>
