import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type {
  ReactNode,
} from "react"

type Request = {
  id: number
  crop: string
  buyer: string
  quantity: string
  offeredPrice: string
  status: string
}

type RequestContextType = {
  requests: Request[]
  addRequest: (
    request: Request
  ) => void
  updateRequestStatus: (
    id: number,
    status: string
  ) => void
}

const RequestContext =
  createContext<
    RequestContextType | undefined
  >(undefined)

export function RequestProvider({
  children,
}: {
  children: ReactNode
}) {

  const [requests, setRequests] =
    useState<Request[]>(() => {

      const savedRequests =
        localStorage.getItem(
          "requests"
        )

      return savedRequests
        ? JSON.parse(
            savedRequests
          )
        : []
    })

  useEffect(() => {

    localStorage.setItem(
      "requests",
      JSON.stringify(
        requests
      )
    )

  }, [requests])

  function addRequest(
    request: Request
  ) {

    setRequests((prev) => [
      request,
      ...prev,
    ])
  }

  function updateRequestStatus(
    id: number,
    status: string
  ) {

    setRequests((prev) =>
      prev.map((request) =>

        request.id === id
          ? {
              ...request,
              status,
            }
          : request

      )
    )
  }

  return (

    <RequestContext.Provider
      value={{
        requests,
        addRequest,
        updateRequestStatus,
      }}
    >

      {children}

    </RequestContext.Provider>

  )
}

export function useRequest() {

  const context =
    useContext(
      RequestContext
    )

  if (!context) {

    throw new Error(
      "useRequest must be used inside RequestProvider"
    )
  }

  return context
}