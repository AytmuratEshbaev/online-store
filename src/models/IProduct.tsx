import { ICategory } from "./ICategory"

export interface IImage {
  product_id: number
  product_variants_id: any
  image_path: string
  id: number
}

export interface IProduct {
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  id: number
  images: IImage[]
  category: ICategory
}

export interface IUpdateProduct {
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  category_id: number
}

export interface INewProduct {
  product: {
    name: string
    price: number
    description: string
    quantity: number
    discount: number
    category_id: number
  }
  product_images: {
    image_path: string
  }[]
}

export interface INewProductForm{
  name: string
  price: number
  description: string
  quantity: number
  discount: number
  category_id: number
  image_path: string
}