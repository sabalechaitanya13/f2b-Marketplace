import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"

function VegetableVendorsPage() {

  const navigate = useNavigate()

  const { vegetableName } = useParams()

  const [search, setSearch] =
    useState("")

  const [grade, setGrade] =
    useState("All")

  const vendors = [
    {
      id: 1,
      farmer: "Ramesh Patil",
      grade: "Grade A",
      quantity: "500kg",
      price: "₹32/kg",
      location: "Nashik",
      rating: "4.9",
    },
    {
      id: 2,
      farmer: "Suresh Jadhav",
      grade: "Grade B",
      quantity: "350kg",
      price: "₹28/kg",
      location: "Pune",
      rating: "4.6",
    },
    {
      id: 3,
      farmer: "Mahesh Kale",
      grade: "Grade A",
      quantity: "700kg",
      price: "₹35/kg",
      location: "Satara",
      rating: "4.8",
    },
    {
      id: 4,
      farmer: "Anil Shinde",
      grade: "Grade C",
      quantity: "250kg",
      price: "₹22/kg",
      location: "Kolhapur",
      rating: "4.4",
    },
  ]

  const filteredVendors =
    vendors.filter((vendor) => {

      const matchesSearch =
        vendor.farmer
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesGrade =
        grade === "All"
          ? true
          : vendor.grade === grade

      return (
        matchesSearch &&
        matchesGrade
      )
    })

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-4xl font-bold text-green-700 mb-3">
            {vegetableName} Vendors Marketplace
          </h1>

          <p className="text-gray-500 text-lg">
            Explore verified farmers and procurement vendors
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

      {/* Search & Filter */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search vendors..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
          />

          {/* Grade Filter */}
          <select
            value={grade}
            onChange={(e) =>
              setGrade(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
          >

            <option value="All">
              All Grades
            </option>

            <option value="Grade A">
              Grade A
            </option>

            <option value="Grade B">
              Grade B
            </option>

            <option value="Grade C">
              Grade C
            </option>

          </select>

        </div>

      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Available Vendors
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            42
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Total Quantity
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-3">
            12T
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Avg Market Price
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-3">
            ₹30
          </h2>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-gray-500">
            Procurement Demand
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            High
          </h2>

        </div>

      </div>

      {/* Vendors List */}
      <div className="space-y-6">

        {filteredVendors.map((vendor) => (

          <div
            key={vendor.id}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-center">

              {/* Farmer */}
              <div>

                <p className="text-gray-500 text-sm">
                  Farmer
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  {vendor.farmer}
                </h2>

              </div>

              {/* Grade */}
              <div>

                <p className="text-gray-500 text-sm">
                  Grade
                </p>

                <h3 className="font-semibold mt-1">
                  {vendor.grade}
                </h3>

              </div>

              {/* Quantity */}
              <div>

                <p className="text-gray-500 text-sm">
                  Quantity
                </p>

                <h3 className="font-semibold mt-1">
                  {vendor.quantity}
                </h3>

              </div>

              {/* Price */}
              <div>

                <p className="text-gray-500 text-sm">
                  Price
                </p>

                <h3 className="font-semibold text-green-700 mt-1">
                  {vendor.price}
                </h3>

              </div>

              {/* Location */}
              <div>

                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <h3 className="font-semibold mt-1">
                  {vendor.location}
                </h3>

              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() =>
                    navigate(`/dashboard/view-deal/${vendor.id}`)
                  }
                  className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl text-sm transition"
                >
                  View Deal
                </button>

                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-sm transition"
                >
                  Request
                </button>

              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">

              <div className="flex items-center gap-3">

                <span className="text-yellow-500 text-xl">
                  ⭐
                </span>

                <span className="font-semibold">
                  {vendor.rating} Rating
                </span>

              </div>

              <span className="text-sm text-gray-500">
                Verified Marketplace Vendor
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}

export default VegetableVendorsPage