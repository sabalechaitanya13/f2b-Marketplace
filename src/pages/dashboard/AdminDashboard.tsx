import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import { useCrop } from "../../context/CropContext"

import { useOrder } from "../../context/OrderContext"

import { useRequest } from "../../context/RequestContext"

import { useNotification } from "../../context/NotificationContext"

function AdminDashboard() {

  const { crops } = useCrop()

  const { orders } = useOrder()

  const { requests } =
    useRequest()

  const { notifications } =
    useNotification()

  const totalRevenue =
    orders.reduce(
      (total, order) =>
        total +
        Number(
          order.amount.replace(/\D/g, "")
        ),
      0
    )

  const unreadNotifications =
    notifications.filter(
      (item) =>
        !item.read
    ).length

  const acceptedRequests =
    requests.filter(
      (item) =>
        item.status ===
        "Accepted"
    ).length

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-purple-700">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
            Complete agricultural marketplace monitoring and analytics system
          </p>

        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">

          {/* Crops */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Total Crops
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
              Requests
            </p>

            <h2 className="text-5xl font-bold text-orange-500 mt-4">
              {requests.length}
            </h2>

          </div>

          {/* Revenue */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Revenue
            </p>

            <h2 className="text-5xl font-bold text-purple-700 mt-4">
              ₹{totalRevenue}
            </h2>

          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

            <p className="text-gray-500 dark:text-gray-300">
              Notifications
            </p>

            <h2 className="text-5xl font-bold text-pink-700 mt-4">
              {unreadNotifications}
            </h2>

          </div>

        </div>

        {/* Extra Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Accepted */}
          <div className="bg-green-700 text-white rounded-3xl p-8">

            <h2 className="text-5xl font-bold mb-4">
              {acceptedRequests}
            </h2>

            <p className="text-green-100 text-lg">
              Accepted Requests
            </p>

          </div>

          {/* Marketplace */}
          <div className="bg-blue-700 text-white rounded-3xl p-8">

            <h2 className="text-5xl font-bold mb-4">
              {crops.length + orders.length}
            </h2>

            <p className="text-blue-100 text-lg">
              Marketplace Activities
            </p>

          </div>

          {/* Users */}
          <div className="bg-purple-700 text-white rounded-3xl p-8">

            <h2 className="text-5xl font-bold mb-4">
              4
            </h2>

            <p className="text-purple-100 text-lg">
              Active Roles
            </p>

          </div>

        </div>

        {/* Marketplace Crops */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-10">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Live Marketplace Crops
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Monitor all agricultural marketplace listings
              </p>

            </div>

          </div>

          {/* Crop Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {crops.length === 0 ? (

              <div className="text-gray-500 dark:text-gray-300">
                No crops available
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

                      <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold">
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
                          Negotiable Price
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

export default AdminDashboard