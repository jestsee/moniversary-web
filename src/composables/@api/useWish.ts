import { ref } from 'vue'
import axios from 'axios'
import { Wish, WishResponse } from '../types/wish'

// const BASE_URL = 'https://moniversary-server.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'
const useWish = () => {
  const wishes = ref<Wish[]>([])
  const loadingWish = ref(false)

  const fetchWishes = async () => {
    loadingWish.value = true
    axios.get(`${BASE_URL}wishes`).then((res) => {
      wishes.value = res.data.data
      // console.log(wishes.value)
    }) // TODO error handler
  }

  const addWish = async (wish: Wish) => {
    loadingWish.value = true
    axios.post(`${BASE_URL}wish`, wish).then((res) =>
      console.log(res.data)
    ) // TODO error handler
  }

  return { fetchWishes, addWish, wishes, loadingWish }
}

export { useWish }