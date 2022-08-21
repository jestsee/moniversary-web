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
    })
  }

  return { fetchWishes, wishes }
}

export { useWish }