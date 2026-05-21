import { useParams } from "react-router-dom"

import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import { useCrop } from "../../context/CropContext"

import { useRequest } from "../../context/RequestContext"

import { useNotification } from "../../context/NotificationContext"

function ViewDealPage() {

  const { id } = useParams()

  const { crops } = useCrop()

  const { addRequest } =
    useRequest()

  const { addNotification } =
    useNotification()

  const crop = crops.find(
    (item: any) =>
      item.id === Number(id)
  )

  function sendRequest() {

    if (!crop) {

      return
    }

    addRequest({
      id: Date.now(),
      crop: crop.name,
      buyer: "Marketplace Buyer",
      quantity: crop.quantity,
      offeredPrice:
        crop.minimumPrice,
      status: "Pending",
    })

    addNotification(
      "New Procurement Request",
      `${crop.name} request sent successfully`
    )

    alert(
      "Request Sent Successfully ✅"
    )
  }

  if (!crop) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <h1 className="text-4xl font-bold text-red-600">
          Crop Not Found
        </h1>

      </div>

    )
  }

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="max-w-7xl mx-auto p-6">

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div>

              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-full object-cover min-h-[600px]"
              />

            </div>

            {/* Content */}
            <div className="p-10">

              {/* Title */}
              <div className="flex items-center justify-between mb-8">

                <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
                  {crop.name}
                </h1>

                <span className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl text-lg font-semibold">
                  {crop.grade}
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-300 text-lg leading-9 mb-10">

                Fresh agricultural product directly uploaded by farmers with transparent pricing and live procurement negotiation system.

              </p>

              {/* Details */}
              <div className="space-y-6 mb-10">

                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl">

                  <span className="text-gray-500 dark:text-gray-300 text-lg">
                    Available Quantity
                  </span>

                  <span className="text-2xl font-bold dark:text-white">
                    {crop.quantity}
                  </span>

                </div>

                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl">

                  <span className="text-gray-500 dark:text-gray-300 text-lg">
                    Market Price
                  </span>

                  <span className="text-2xl font-bold text-green-700">
                    {crop.marketPrice}
                  </span>

                </div>

                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl">

                  <span className="text-gray-500 dark:text-gray-300 text-lg">
                    Negotiable Minimum Price
                  </span>

                  <span className="text-2xl font-bold text-orange-500">
                    {crop.minimumPrice}
                  </span>

                </div>

              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

                <div className="bg-green-50 p-6 rounded-2xl">

                  <h2 className="text-2xl font-bold text-green-700 mb-3">
                    Quality Verified
                  </h2>

                  <p className="text-gray-600">
                    Fresh farm quality product uploaded directly by farmer.
                  </p>

                </div>

                <div className="bg-blue-50 p-6 rounded-2xl">

                  <h2 className="text-2xl font-bold text-blue-700 mb-3">
                    Smart Negotiation
                  </h2>

                  <p className="text-gray-600">
                    Buyers can negotiate procurement pricing with farmers.
                  </p>

                </div>

              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <button
                  onClick={
                    sendRequest
                  }
                  className="bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition"
                >
                  Send Procurement Request
                </button>

                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-2xl text-xl font-bold transition"
                >
                  Contact Farmer
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AI */}
      <AIChatBot />

    </div>

  )
}

export default ViewDealPage