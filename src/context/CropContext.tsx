import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type {
  ReactNode,
} from "react"

type Crop = {
  id: number
  name: string
  grade: string
  quantity: string
  marketPrice: string
  minimumPrice: string
  image: string
}

type CropContextType = {
  crops: Crop[]
  addCrop: (
    crop: Crop
  ) => void
  deleteCrop: (
    id: number
  ) => void
}

const CropContext =
  createContext<
    CropContextType | undefined
  >(undefined)

export function CropProvider({
  children,
}: {
  children: ReactNode
}) {

  const [crops, setCrops] =
    useState<Crop[]>(() => {

      const savedCrops =
        localStorage.getItem(
          "crops"
        )

      return savedCrops
        ? JSON.parse(savedCrops)
        : []
    })

  useEffect(() => {

    localStorage.setItem(
      "crops",
      JSON.stringify(crops)
    )

  }, [crops])

  function addCrop(
    crop: Crop
  ) {

    setCrops((prev) => [
      crop,
      ...prev,
    ])
  }

  function deleteCrop(
    id: number
  ) {

    setCrops((prev) =>
      prev.filter(
        (crop) =>
          crop.id !== id
      )
    )
  }

  return (

    <CropContext.Provider
      value={{
        crops,
        addCrop,
        deleteCrop,
      }}
    >

      {children}

    </CropContext.Provider>

  )
}

export function useCrop() {

  const context =
    useContext(CropContext)

  if (!context) {

    throw new Error(
      "useCrop must be used inside CropProvider"
    )
  }

  return context
}