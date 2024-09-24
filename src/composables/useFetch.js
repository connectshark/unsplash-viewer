import { ref, unref } from 'vue'

export default (path, query) => {
  const loading = ref(false)
  const data = ref(null)

  const page = ref(1)
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const hasNextPage = ref(false)
  const hasPrevPage = ref(false)
  const DOMAIN = `https://api.unsplash.com`

  const fetchData = async () => {
    loading.value = true
    data.value = null
    const fetch_response = await fetch(DOMAIN + path + `?page=${ page.value }per_page=10&query=${ unref(query) }`, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    })
    const res = await fetch_response.json()
    hasNextPage.value = res.total_pages > page.value
    hasPrevPage.value = page.value >= 2
    data.value = res
    loading.value = false
  }

  fetchData()

  const fetchNextPage = async () => {
    page.value++
    await fetchData()
  }
  const fetchPrevPage = async () => {
    page.value--
    await fetchData()
  }

  return {
    loading,
    data,
    fetchData,
    page,
    hasNextPage,
    fetchNextPage,
    hasPrevPage,
    fetchPrevPage
  }
}