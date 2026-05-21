import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import { useOrder } from "../../context/OrderContext"

import { useNotification } from "../../context/NotificationContext"

function OrdersPage() {

  const { orders } =
    useOrder()

  const {
    addNotification,
  } = useNotification()

  function handleStatus(
    crop: string,
    status: string
  ) {

    addNotification(
      "Order Updated",
      `${crop} order marked as ${status}`
    )

    alert(
      `Order ${status} Successfully ✅`
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-blue-700">
            Orders Management
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
            Monitor marketplace procurement and customer orders
          </p>

        </div>

        {/* Orders */}
        <div className="space-y-8">

          {orders.length === 0 ? (

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-sm text-center text-gray-500 dark:text-gray-300">

              No orders available

            </div>

          ) : (

            orders.map(
              (order: any) => (

                <div
                  key={order.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm"
                >

                  {/* Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">

                    {/* Crop */}
                    <div>

                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Crop
                      </p>

                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                        {order.crop}
                      </h2>

                    </div>

                    {/* Buyer */}
                    <div>

                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Buyer
                      </p>

                      <h3 className="font-semibold dark:text-white mt-1">
                        {order.buyer}
                      </h3>

                    </div>

                    {/* Quantity */}
                    <div>

                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Quantity
                      </p>

                      <h3 className="font-semibold dark:text-white mt-1">
                        {order.quantity}
                      </h3>

                    </div>

                    {/* Amount */}
                    <div>

                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Amount
                      </p>

                      <h3 className="font-semibold text-green-700 mt-1">
                        {order.amount}
                      </h3>

                    </div>

                    {/* Status */}
                    <div>

                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        Status
                      </p>

                      <h3 className="font-semibold text-orange-500 mt-1">
                        {order.status}
                      </h3>

                    </div>

                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <button
                      onClick={() =>
                        handleStatus(
                          order.crop,
                          "Accepted"
                        )
                      }
                      className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(
                          order.crop,
                          "Packed"
                        )
                      }
                      className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Packed
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(
                          order.crop,
                          "Delivered"
                        )
                      }
                      className="bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Delivered
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(
                          order.crop,
                          "Cancelled"
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              )
            )

          )}

        </div>

      </div>

      {/* AI */}
      <AIChatBot />

    </div>

  )
}

export default OrdersPage