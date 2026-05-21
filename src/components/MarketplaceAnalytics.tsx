import { useCrop } from "../context/CropContext"

import { useOrder } from "../context/OrderContext"

import { useRequest } from "../context/RequestContext"

function MarketplaceAnalytics() {

  const { crops } = useCrop()

  const { orders } = useOrder()

  const { requests } =
    useRequest()

  const totalRevenue =
    orders.reduce(
      (total, order) =>
        total +
        Number(
          order.amount.replace(/\D/g, "")
        ),
      0
    )

  const acceptedRequests =
    requests.filter(
      (request) =>
        request.status ===
        "Accepted"
    ).length

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      {/* Crops */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

        <p className="text-gray-500 dark:text-gray-300">
          Live Crops
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

      {/* Revenue */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

        <p className="text-gray-500 dark:text-gray-300">
          Revenue
        </p>

        <h2 className="text-5xl font-bold text-purple-700 mt-4">
          ₹{totalRevenue}
        </h2>

      </div>

      {/* Requests */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">

        <p className="text-gray-500 dark:text-gray-300">
          Accepted Requests
        </p>

        <h2 className="text-5xl font-bold text-orange-500 mt-4">
          {acceptedRequests}
        </h2>

      </div>

    </div>

  )
}

export default MarketplaceAnalytics