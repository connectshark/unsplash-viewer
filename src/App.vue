<script setup>
const icons = [
  {
    icon: 'bxl-github',
    link: 'https://github.com/connectshark/unsplash-viewer'
  }
]
</script>

<template>
  <header class="backdrop-blur-md sticky top-0">
    <div class="py-3 w-11/12 mx-auto flex items-center justify-between">
      <h1 class="text-xl/loose md:text-2xl/loose lg:text-3xl/loose font-mono">
        <router-link to="/">unsplash-viewer</router-link>
      </h1>
      <nav>
        <a v-for="item in icons" :href="item.link" target="_blank">
          <i class='bx bxl-github bx-md' :class="item.icon"></i>
        </a>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="text-white bg-gray-900 py-32">
    <div class="py-3 w-11/12 mx-auto flex items-center justify-between">
      <p>2024<i class='bx bx-copyright'></i>
        <a href="https://github.com/connectshark/unsplash-viewer/blob/main/LICENSE" target="_blank">MIT</a> <a href="https://nosegates.com/" target="_blank">Chambers</a></p>
      <ul>
        <li class=" ">
          <a v-for="item in icons" :href="item.link" target="_blank">
            <i class='bx bxl-github bx-md' :class="item.icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
