import { useNavigate } from "react-router-dom"
import { useState } from "react"

function TrendingVegetablesPage() {

  const navigate = useNavigate()

  const [search, setSearch] =
    useState("")

  const vegetables = [
    {
      id: 1,
      name: "Tomato",
      price: "₹32/kg",
      demand: "+24%",
      image: "🍅",
      category: "Trending",
    },
    {
      id: 2,
      name: "Potato",
      price: "₹24/kg",
      demand: "+18%",
      image: "🥔",
      category: "Popular",
    },
    {
      id: 3,
      name: "Onion",
      price: "₹28/kg",
      demand: "+14%",
      image: "🧅",
      category: "Trending",
    },
    {
      id: 4,
      name: "Carrot",
      price: "₹40/kg",
      demand: "+12%",
      image: "🥕",
      category: "Fresh",
    },
    {
      id: 5,
      name: "Capsicum",
      price: "₹55/kg",
      demand: "+17%",
      image: "🫑",
      category: "Premium",
    },
    {
      id: 6,
      name: "Cabbage",
      price: "₹20/kg",
      demand: "+9%",
      image: "🥬",
      category: "Popular",
    },
    {
      id: 7,
      name: "Cauliflower",
      price: "₹34/kg",
      demand: "+11%",
      image: "🥦",
      category: "Fresh",
    },
    {
      id: 8,
      name: "Brinjal",
      price: "₹30/kg",
      demand: "+13%",
      image: "🍆",
      category: "Trending",
    },
  ]

  const filteredVegetables =
    vegetables.filter((vegetable) =>
      vegetable.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Trending Vegetables Marketplace
          </h1>

          <p className="text-gray-500 text-lg">
            Explore fresh and high-demand vegetables directly from farmers
          </p>

        </div>

        <button
          onClick={() =>
            navigate(-1)
          }
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold transition"
        >
          Back
        </button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-10">

        <input
          type="text"
          placeholder="Search vegetables..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
        />

      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Active Vegetables
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            80+
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Verified Vendors
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-3">
            320
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Daily Orders
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-3">
            1.8K
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Marketplace Growth
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            +28%
          </h2>

        </div>

      </div>

      {/* Vegetables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredVegetables.map((vegetable) => (

          <div
            key={vegetable.id}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition cursor-pointer"
            onClick={() =>
              navigate(`/dashboard/vendors/${vegetable.name}`)
            }
          >

            {/* Top */}
            <div className="flex items-center justify-between mb-6">

              <div className="text-6xl">
                {vegetable.image}
              </div>

              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                {vegetable.demand}
              </div>

            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {vegetable.name}
            </h2>

            <p className="text-gray-500 mb-6">
              Fresh marketplace procurement vegetable
            </p>

            {/* Bottom */}
            <div className="flex items-center justify-between mb-5">

              <span className="text-2xl font-bold text-green-700">
                {vegetable.price}
              </span>

              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm">
                {vegetable.category}
              </span>

            </div>

            <button
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold transition"
            >
              Explore Vendors
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default TrendingVegetablesPage