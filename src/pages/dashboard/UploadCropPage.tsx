import { useState } from "react"

import Navbar from "../../components/Navbar"

import { useCrop } from "../../context/CropContext"

import cropsData from "../../data/crops"

function UploadCropPage() {

  const { addCrop } =
    useCrop()

  const [selectedCrop, setSelectedCrop] =
    useState(cropsData[0])

  const [grade, setGrade] =
    useState("Grade A")

  const [quantity, setQuantity] =
    useState("")

  const [marketPrice, setMarketPrice] =
    useState("")

  const [minimumPrice, setMinimumPrice] =
    useState("")

  const [image, setImage] =
    useState("")

  function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      e.target.files?.[0]

    if (file) {

      const imageUrl =
        URL.createObjectURL(file)

      setImage(imageUrl)
    }
  }

  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault()

    if (
      !quantity ||
      !marketPrice ||
      !minimumPrice
    ) {

      alert(
        "Please fill all fields"
      )

      return
    }

    addCrop({
      id: Date.now(),
      name:
        selectedCrop.name,
      grade,
      quantity:
        `${quantity}kg`,
      marketPrice:
        `₹${marketPrice}/kg`,
      minimumPrice:
        `₹${minimumPrice}/kg`,
      image:
        image ||
        selectedCrop.image,
    } as any)

    alert(
      "Crop Uploaded Successfully ✅"
    )

    setQuantity("")
    setMarketPrice("")
    setMinimumPrice("")
  }

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-green-700">
            Upload Crop
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Upload fresh agricultural products to marketplace
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-sm space-y-8"
        >

          {/* Crop Dropdown */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Select Crop
            </label>

            <select
              value={
                selectedCrop.name
              }
              onChange={(e) => {

                const crop =
                  cropsData.find(
                    (item) =>
                      item.name ===
                      e.target.value
                  )

                if (crop) {

                  setSelectedCrop(
                    crop
                  )
                }
              }}
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            >

              {cropsData.map(
                (crop) => (

                  <option
                    key={crop.id}
                  >
                    {crop.name}
                  </option>

                )
              )}

            </select>

          </div>

          {/* Crop Preview */}
          <div className="bg-gray-100 rounded-3xl p-6">

            <img
              src={
                image ||
                selectedCrop.image
              }
              alt="Crop"
              className="w-full h-72 object-cover rounded-3xl"
            />

          </div>

          {/* Grade */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Grade
            </label>

            <select
              value={grade}
              onChange={(e) =>
                setGrade(
                  e.target.value
                )
              }
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            >

              <option>
                Grade A
              </option>

              <option>
                Grade B
              </option>

              <option>
                Grade C
              </option>

            </select>

          </div>

          {/* Quantity */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Quantity (kg)
            </label>

            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value
                )
              }
              placeholder="Enter quantity"
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            />

          </div>

          {/* Market Price */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Market Price (₹/kg)
            </label>

            <input
              type="number"
              value={marketPrice}
              onChange={(e) =>
                setMarketPrice(
                  e.target.value
                )
              }
              placeholder="Enter market price"
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            />

          </div>

          {/* Minimum Price */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Negotiable Minimum Price (₹/kg)
            </label>

            <input
              type="number"
              value={minimumPrice}
              onChange={(e) =>
                setMinimumPrice(
                  e.target.value
                )
              }
              placeholder="Enter minimum negotiable price"
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            />

          </div>

          {/* Upload Image */}
          <div>

            <label className="block text-gray-700 font-semibold mb-3">
              Upload Crop Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImage
              }
              className="w-full p-5 rounded-2xl border border-gray-300 bg-white"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-2xl font-bold transition"
          >
            Upload To Marketplace
          </button>

        </form>

      </div>

    </div>

  )
}

export default UploadCropPage