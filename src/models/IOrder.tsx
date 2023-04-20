
  
  export interface IOrder {
    user_id: number
    order_date: string
    address_id: number
    order_status_id: number
  }
  
  export interface IOrderDetail {
    product_id: number
    quantity: number
    price: number
  }
  export interface IOrderStatus {
    status: string
    id: number
  }

  export interface IOrders {
    user_id: number
    order_date: string
    address_id: number
    id: number
    order_details: IOrderDetail[]
    order_status: IOrderStatus
    order_status_id:number
  }
  
  
  export interface OrderDetails {
    order_id: number
    product_id: number
    quantity: number
    price: number
  }
  
  
  
  
  