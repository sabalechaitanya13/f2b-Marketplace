import { useState } from "react"

import { useNavigate } from "react-router-dom"

import Navbar from "../../components/Navbar"

import AIChatBot from "../../components/AIChatBot"

import MarketplaceAnalytics from "../../components/MarketplaceAnalytics"

import PriceTrend from "../../components/PriceTrend"

import WeatherWidget from "../../components/WeatherWidget"

import { useCrop } from "../../context/CropContext"

import { useOrder } from "../../context/OrderContext"

import { useNotification } from "../../context/NotificationContext"

function MarketplacePage() {

  const navigate = useNavigate()

  const { crops } = useCrop()

  const { addOrder } =
    useOrder()

  const { addNotification } =
    useNotification()

  const [search, setSearch] =
    useState("")

  const [gradeFilter, setGradeFilter] =
    useState("All")

  function handleBuy(
    crop: any
  ) {

    addOrder({
      id: Date.now(),
      crop: crop.name,
      buyer: "Marketplace Customer",
      quantity: crop.quantity,
      amount:
        crop.marketPrice,
      status: "Pending",
    })

    addNotification(
      "New Order",
      `${crop.name} order placed successfully`
    )

    alert(
      "Order Placed Successfully ✅"
    )

    navigate(
      "/dashboard/orders"
    )
  }

  const filteredCrops =
    crops.filter(
      (crop: any) => {

        const matchesSearch =
          crop.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

        const matchesGrade =
          gradeFilter ===
            "All" ||
          crop.grade ===
            gradeFilter

        return (
          matchesSearch &&
          matchesGrade
        )
      }
    )

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="p-6">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-green-700">
            Live Marketplace
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
            Smart agricultural marketplace with AI procurement system
          </p>

        </div>

        {/* Analytics */}
        <MarketplaceAnalytics />

        {/* Weather */}
        <WeatherWidget />

        {/* Price Trends */}
        <PriceTrend />

        {/* Search + Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search crops..."
            className="w-full p-5 rounded-2xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none focus:border-green-700"
          />

          {/* Filter */}
          <select
            value={gradeFilter}
            onChange={(e) =>
              setGradeFilter(
                e.target.value
              )
            }
            className="w-full p-5 rounded-2xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none focus:border-green-700"
          >

            <option>
              All
            </option>

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

        {/* Crop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredCrops.length === 0 ? (

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-sm text-center text-gray-500 dark:text-gray-300">

              No matching crops found

            </div>

          ) : (

            filteredCrops.map(
              (crop: any) => (

                <div
                  key={crop.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition"
                >

                  {/* Image */}
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-72 object-cover"
                  />

                  {/* Content */}
                  <div className="p-8">

                    {/* Top */}
                    <div className="flex items-center justify-between mb-5">

                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {crop.name}
                      </h2>

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                        {crop.grade}
                      </span>

                    </div>

                    {/* Details */}
                    <div className="space-y-4 mb-8">

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

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4">

                      <button
                        onClick={() =>
                          handleBuy(crop)
                        }
                        className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
                      >
                        Buy Now
                      </button>

                      <button
                        onClick={() =>
                          navigate(`/dashboard/view-deal/${crop.id}`)
                        }
                        className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold transition"
                      >
                        View Deal
                      </button>

                    </div>

                  </div>

                </div>

              )
            )

          )}

        </div>

      </div>

      {/* AI Chatbot */}
      <AIChatBot />

    </div>

  )
}

export default MarketplacePage