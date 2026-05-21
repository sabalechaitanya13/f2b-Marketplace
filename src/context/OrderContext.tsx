import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type {
  ReactNode,
} from "react"

type Order = {
  id: number
  crop: string
  buyer: string
  quantity: string
  amount: string
  status: string
}

type OrderContextType = {
  orders: Order[]
  addOrder: (
    order: Order
  ) => void
  updateOrderStatus: (
    id: number,
    status: string
  ) => void
}

const OrderContext =
  createContext<
    OrderContextType | undefined
  >(undefined)

export function OrderProvider({
  children,
}: {
  children: ReactNode
}) {

  const [orders, setOrders] =
    useState<Order[]>(() => {

      const savedOrders =
        localStorage.getItem(
          "orders"
        )

      return savedOrders
        ? JSON.parse(
            savedOrders
          )
        : []
    })

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(
        orders
      )
    )

  }, [orders])

  function addOrder(
    order: Order
  ) {

    setOrders((prev) => [
      order,
      ...prev,
    ])
  }

  function updateOrderStatus(
    id: number,
    status: string
  ) {

    setOrders((prev) =>
      prev.map((order) =>

        order.id === id
          ? {
              ...order,
              status,
            }
          : order

      )
    )
  }

  return (

    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
      }}
    >

      {children}

    </OrderContext.Provider>

  )
}

export function useOrder() {

  const context =
    useContext(
      OrderContext
    )

  if (!context) {

    throw new Error(
      "useOrder must be used inside OrderProvider"
    )
  }

  return context
}