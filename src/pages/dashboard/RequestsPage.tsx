import { useState } from "react"

import Navbar from "../../components/Navbar"

import { useRequest } from "../../context/RequestContext"

import { useNotification } from "../../context/NotificationContext"

function RequestsPage() {

  const {
    requests,
    updateRequestStatus,
  } = useRequest()

  const {
    addNotification,
  } = useNotification()

  const [remark, setRemark] =
    useState("")

  function handleAction(
    id: number,
    crop: string,
    status: string
  ) {

    updateRequestStatus(
      id,
      status
    )

    addNotification(
      "Request Update",
      `${crop} request marked as ${status}`
    )

    alert(
      `Request ${status} Successfully ✅`
    )
  }

  function sendRemark(
    crop: string
  ) {

    if (!remark) {

      alert(
        "Please enter remark"
      )

      return
    }

    addNotification(
      "Farmer Remark",
      `${crop}: ${remark}`
    )

    alert(
      "Remark Sent Successfully ✅"
    )

    setRemark("")
  }

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-green-700">
            Procurement Requests
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage marketplace requests and negotiations
          </p>

        </div>

        {/* Requests */}
        <div className="space-y-8">

          {requests.length === 0 ? (

            <div className="bg-white rounded-3xl p-10 shadow-sm text-center text-gray-500">

              No procurement requests available

            </div>

          ) : (

            requests.map(
              (request) => (

                <div
                  key={request.id}
                  className="bg-white rounded-3xl p-8 shadow-sm"
                >

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">

                    {/* Crop */}
                    <div>

                      <p className="text-gray-500 text-sm">
                        Crop
                      </p>

                      <h2 className="text-2xl font-bold text-gray-800 mt-1">
                        {request.crop}
                      </h2>

                    </div>

                    {/* Buyer */}
                    <div>

                      <p className="text-gray-500 text-sm">
                        Buyer
                      </p>

                      <h3 className="font-semibold mt-1">
                        {request.buyer}
                      </h3>

                    </div>

                    {/* Quantity */}
                    <div>

                      <p className="text-gray-500 text-sm">
                        Quantity
                      </p>

                      <h3 className="font-semibold mt-1">
                        {request.quantity}
                      </h3>

                    </div>

                    {/* Price */}
                    <div>

                      <p className="text-gray-500 text-sm">
                        Offered Price
                      </p>

                      <h3 className="font-semibold text-green-700 mt-1">
                        {request.offeredPrice}
                      </h3>

                    </div>

                    {/* Status */}
                    <div>

                      <p className="text-gray-500 text-sm">
                        Status
                      </p>

                      <h3 className="font-semibold text-orange-500 mt-1">
                        {request.status}
                      </h3>

                    </div>

                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                    <button
                      onClick={() =>
                        handleAction(
                          request.id,
                          request.crop,
                          "Accepted"
                        )
                      }
                      className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        handleAction(
                          request.id,
                          request.crop,
                          "Declined"
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Decline
                    </button>

                    <button
                      onClick={() =>
                        handleAction(
                          request.id,
                          request.crop,
                          "Out Of Stock"
                        )
                      }
                      className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Out Of Stock
                    </button>

                    <button
                      onClick={() =>
                        sendRemark(
                          request.crop
                        )
                      }
                      className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition"
                    >
                      Send Remark
                    </button>

                  </div>

                  {/* Remark */}
                  <textarea
                    value={remark}
                    onChange={(e) =>
                      setRemark(
                        e.target.value
                      )
                    }
                    placeholder="Enter remark for buyer..."
                    className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700 min-h-[120px]"
                  />

                </div>

              )
            )

          )}

        </div>

      </div>

    </div>

  )
}

export default RequestsPage