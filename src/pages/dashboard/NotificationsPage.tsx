import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import { useNotification } from "../../context/NotificationContext"

function NotificationsPage() {

  const {
    notifications,
    markAsRead,
  } = useNotification()

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-purple-700">
            Notifications Center
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
            Track marketplace activities, requests and procurement updates
          </p>

        </div>

        {/* Notifications */}
        <div className="space-y-6">

          {notifications.length === 0 ? (

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-sm text-center text-gray-500 dark:text-gray-300">

              No notifications available

            </div>

          ) : (

            notifications.map(
              (
                notification: any
              ) => (

                <div
                  key={notification.id}
                  className={`rounded-3xl p-8 shadow-sm border ${
                    notification.read
                      ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      : "bg-white dark:bg-gray-800 border-purple-400"
                  }`}
                >

                  {/* Top */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    {/* Left */}
                    <div>

                      <div className="flex items-center gap-4 mb-4">

                        <div className={`w-4 h-4 rounded-full ${
                          notification.read
                            ? "bg-gray-400"
                            : "bg-green-500"
                        }`} />

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {notification.title}
                        </h2>

                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-8">
                        {notification.message}
                      </p>

                    </div>

                    {/* Right */}
                    <div className="flex flex-wrap gap-4">

                      {!notification.read && (

                        <button
                          onClick={() =>
                            markAsRead(
                              notification.id
                            )
                          }
                          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold transition"
                        >
                          Mark As Read
                        </button>

                      )}

                      <button
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold transition"
                      >
                        Accept
                      </button>

                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
                      >
                        Remark
                      </button>

                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
                      >
                        Decline
                      </button>

                      <button
                        className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold transition"
                      >
                        Out Of Stock
                      </button>

                    </div>

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

export default NotificationsPage