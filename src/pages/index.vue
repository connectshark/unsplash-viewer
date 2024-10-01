<script setup>
import { ref } from 'vue'
import useFetch from '../composables/useFetch'


const input = ref('dev')

const {
  data,
  loading,
  fetchData: search,
  hasNextPage,
  page,
  hasPrevPage,
  fetchNextPage,
  fetchPrevPage
} = useFetch('/search/photos', input)

</script>

<template>
<section class="py-20">
  <form @submit.prevent="search" class=" w-2/3 max-w-3xl mx-auto">
    <p class="mb-8">
      <input required class=" bg-gray-200 focus:bg-white appearance-none w-full py-3 px-6 rounded-full" placeholder="找出圖 " type="search" v-model="input">
    </p>
    <p class=" text-center">
      <input class=" hover:opacity-80 cursor-pointer bg-gray-200 px-3 py-2 rounded-xl" type="submit" value="搜尋">
    </p>
  </form>
</section>
<section>
  <div v-if="loading" class="py-20">
    <p class=" text-center text-2xl">loading...<i class='bx bx-loader bx-spin' ></i></p>
  </div>
  <template v-else>
  <nav>
    <p class=" text-center space-x-4">
      <button v-if="hasPrevPage" @click="fetchPrevPage" class="p-3 rounded bg-gray-200 hover:bg-gray-300" type="button">
        <i class='bx bxs-left-arrow bx-sm align-middle'></i>
      </button>
      <span class=" font-bold">{{ page }}</span>
      <button v-if="hasNextPage" @click="fetchNextPage" class="p-3 rounded bg-gray-200 hover:bg-gray-300" type="button">
        <i class='bx bxs-right-arrow bx-sm align-middle' ></i>
      </button>
    </p>
  </nav>
    
  <ul class="p-2 mx-auto columns-[10rem] md:columns-xs gap-2">
    <li class="mb-2 rounded overflow-hidden" v-for="img in data.results">
      <router-link :to="`/photos/${ img.id }`">
        <img class="object-cover":src="img.urls.regular" :alt="img.alt_description">
      </router-link>
    </li>
  </ul>
  </template>
</section>
</template>
