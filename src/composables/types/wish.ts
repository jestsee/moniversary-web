export interface Wish {
  title: string
  wish: string
  from: string
}

export interface WishResponse {
  message: string
  data: Wish
}