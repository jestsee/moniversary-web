import { ref, watch } from 'vue'
import axios from 'axios'
import { AddWishResponse, Wish, WishResponse } from '../types/wish'

const BASE_URL = 'https://moniversary-server.herokuapp.com/'
// const BASE_URL = 'http://localhost:3000/'
const useWish = () => {
  const wishes = ref<Wish[]>([])
  const loadingWish = ref(false)
  const reload = ref(0)

  const fetchWishes = async () => {

    loadingWish.value = true
    console.log(loadingWish.value);
    const resp = axios.get(`${BASE_URL}wishes`)
    if (resp) {
      const temp  = await resp
      wishes.value = temp.data.data
      loadingWish.value = false
      console.log(wishes.value);
    }
    // TODO error handler
  }

  const addWish = async (wish: Wish) => {
    loadingWish.value = true

    const resp = await axios.post(`${BASE_URL}wish`, wish)
    // TODO error handler
    console.log(resp.data)
    loadingWish.value = false
    return resp.data as AddWishResponse
  }

  return { fetchWishes, addWish, wishes, loadingWish, reload }
}

export { useWish }