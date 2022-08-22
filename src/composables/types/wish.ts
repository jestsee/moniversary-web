export interface Wish {
  title: string
  wish: string
  from: string
}

export interface WishResponse {
  state: string
  message: string
  data: Wish
}

export interface AddWishResponse {
  state: string
  message: string
}