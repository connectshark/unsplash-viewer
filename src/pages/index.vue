<script setup>
import { computed, ref } from 'vue'
import useFetch from '../composables/useFetch'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const URI = `https://api.unsplash.com/search/photos?per_page=10&query=`

const input = ref('dev')
const searchURL = computed(() => URI + input.value)

const {
  data,
  loading,
  fetchData: search
} = useFetch(searchURL, {
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`
  }
})

</script>

<template>
<section class=" bg-primary py-20">
  <form @submit.prevent="search" class=" w-1/2 mx-auto">
    <p class="mb-8">
      <input required class=" appearance-none w-full py-3 px-6 rounded-full" placeholder="找出圖 " type="search" v-model="input">
    </p>
    <p class=" text-center">
      <input class=" hover:opacity-80 cursor-pointer bg-white px-3 py-2 rounded-xl" type="submit" value="搜尋">
    </p>
  </form>
</section>
<section>
  <div v-if="loading" class="pt-20">
    <p class=" text-center text-2xl">loading...<i class='bx bx-loader bx-spin' ></i></p>
  </div>
  <ul v-else class=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
    <li v-for="img in data.results">
      <img class="aspect-square object-cover":src="img.urls.regular" :alt="img.alt_description">
    </li>
  </ul>
</section>
</template>
