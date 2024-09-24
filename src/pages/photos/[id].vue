<template>
  <nav class=" max-w-3xl mx-auto py-2 w-11/12">
    <router-link to="/"><i class='bx bxs-chevron-left bx-sm'></i></router-link>
  </nav>
  <div v-if="loading" class="py-20">
    <p class=" text-center text-2xl">loading...<i class='bx bx-loader bx-spin' ></i></p>
  </div>
  <section v-else>
    <figure class=" max-w-3xl mx-auto bg-red-50 mb-10">
      <img :src="data.urls.regular" :alt="data.alt_description">
      <figcaption class=" leading-loose text-center">{{ data.alt_description }}</figcaption>
    </figure>
    <table class="table-auto mx-auto mb-20">
      <thead>
        <tr class="bg-slate-300">
          <th class="p-2">Size</th>
          <th class="p-2">URL</th>
          <th class="p-2">copy</th>
        </tr>
      </thead>
      <tbody>
        <tr class=" odd:bg-slate-100" v-for="(value, key) in data.urls">
          <td class="p-2">{{ key }}</td>
          <td class="p-2 line-clamp-1 text-xs">{{ value.slice(0, 13) }}</td>
          <td class="p-2 text-center">
            <button type="button" @click="copy(value)">
              <i class='bx bx-copy-alt'></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import useFetch from '../../composables/useFetch'
import { useRoute, useRouter } from 'vue-router'

const copy = async (url) => {
  await navigator.clipboard.writeText(url)
}

const route = useRoute()
const {
  data,
  loading
} = useFetch(`/photos/${ route.params.id }`)

</script>