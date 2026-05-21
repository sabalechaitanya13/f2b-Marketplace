import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type {
  ReactNode,
} from "react"

type Notification = {
  id: number
  title: string
  message: string
  read: boolean
}

type NotificationContextType = {
  notifications: Notification[]

  addNotification: (
    title: string,
    message: string
  ) => void

  markAsRead: (
    id: number
  ) => void
}

const NotificationContext =
  createContext<
    NotificationContextType | undefined
  >(undefined)

export function NotificationProvider({
  children,
}: {
  children: ReactNode
}) {

  const [
    notifications,
    setNotifications,
  ] = useState<
    Notification[]
  >(() => {

    const savedNotifications =
      localStorage.getItem(
        "notifications"
      )

    return savedNotifications
      ? JSON.parse(
          savedNotifications
        )
      : []
  })

  useEffect(() => {

    localStorage.setItem(
      "notifications",
      JSON.stringify(
        notifications
      )
    )

  }, [notifications])

  function addNotification(
    title: string,
    message: string
  ) {

    const newNotification = {
      id: Date.now(),
      title,
      message,
      read: false,
    }

    setNotifications(
      (prev) => [
        newNotification,
        ...prev,
      ]
    )
  }

  function markAsRead(
    id: number
  ) {

    setNotifications(
      (prev) =>

        prev.map(
          (
            notification
          ) =>

            notification.id ===
            id

              ? {
                  ...notification,
                  read: true,
                }

              : notification
        )
    )
  }

  return (

    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
      }}
    >

      {children}

    </NotificationContext.Provider>

  )
}

export function useNotification() {

  const context =
    useContext(
      NotificationContext
    )

  if (!context) {

    throw new Error(
      "useNotification must be used inside NotificationProvider"
    )
  }

  return context
}