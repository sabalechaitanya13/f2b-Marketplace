import { useNavigate } from "react-router-dom"

import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import { useCrop } from "../../context/CropContext"

import { useOrder } from "../../context/OrderContext"

import { useRequest } from "../../context/RequestContext"

import { useNotification } from "../../context/NotificationContext"

function FarmerDashboard() {

  const navigate = useNavigate()

  const { crops } = useCrop()

  const { orders } = useOrder()

  const { requests } =
    useRequest()

  const { notifications } =
    useNotification()

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-green-700">
              Farmer Dashboard
            </h1>

            <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
              Smart agricultural procurement and crop management system
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/dashboard/upload-crop")
            }
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Upload New Crop
          </button>

        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* Crops */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Uploaded Crops
            </p>

            <h2 className="text-5xl font-bold text-green-700 mt-4">
              {crops.length}
            </h2>

          </div>

          {/* Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Orders
            </p>

            <h2 className="text-5xl font-bold text-blue-700 mt-4">
              {orders.length}
            </h2>

          </div>

          {/* Requests */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Procurement Requests
            </p>

            <h2 className="text-5xl font-bold text-orange-500 mt-4">
              {requests.length}
            </h2>

          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Notifications
            </p>

            <h2 className="text-5xl font-bold text-purple-700 mt-4">
              {
                notifications.filter(
                  (item) =>
                    !item.read
                ).length
              }
            </h2>

          </div>

        </div>

        {/* Uploaded Crops */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                My Uploaded Crops
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Live agricultural marketplace listings
              </p>

            </div>

          </div>

          {/* Crop Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {crops.length === 0 ? (

              <div className="text-gray-500 dark:text-gray-300">
                No crops uploaded yet
              </div>

            ) : (

              crops.map((crop: any) => (

                <div
                  key={crop.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700"
                >

                  {/* Image */}
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-60 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-center justify-between mb-4">

                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {crop.name}
                      </h2>

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                        {crop.grade}
                      </span>

                    </div>

                    <div className="space-y-4">

                      <div className="flex justify-between">

                        <span className="text-gray-500 dark:text-gray-300">
                          Quantity
                        </span>

                        <span className="font-semibold dark:text-white">
                          {crop.quantity}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-gray-500 dark:text-gray-300">
                          Market Price
                        </span>

                        <span className="font-semibold text-green-700">
                          {crop.marketPrice}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-gray-500 dark:text-gray-300">
                          Min Negotiable
                        </span>

                        <span className="font-semibold text-orange-500">
                          {crop.minimumPrice}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* AI Chatbot */}
      <AIChatBot />

    </div>

  )
}

export default FarmerDashboard