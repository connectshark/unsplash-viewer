import { ref, unref } from 'vue'

export default (url, options) => {
  const loading = ref(false)
  const data = ref(null)

  const fetchData = async () => {
    loading.value = true
    data.value = null
    const fetch_response = await fetch(unref(url), options)
    const res = await fetch_response.json()
    data.value = res
    loading.value = false
  }

  fetchData()

  return {
    loading,
    data,
    fetchData
  }
}