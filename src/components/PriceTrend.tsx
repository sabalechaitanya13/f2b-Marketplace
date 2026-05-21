function PriceTrend() {

  const trends = [

    {
      crop: "Tomato",
      price: "₹32/kg",
      status: "↑ High Demand",
      color: "text-green-700",
    },

    {
      crop: "Potato",
      price: "₹24/kg",
      status: "↓ Low Demand",
      color: "text-red-600",
    },

    {
      crop: "Onion",
      price: "₹28/kg",
      status: "↑ Rising",
      color: "text-green-700",
    },

    {
      crop: "Carrot",
      price: "₹40/kg",
      status: "→ Stable",
      color: "text-orange-500",
    },

    {
      crop: "Capsicum",
      price: "₹55/kg",
      status: "↑ Trending",
      color: "text-green-700",
    },

  ]

  return (

    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-10">

      {/* Header */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Live Market Trends
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Real-time agricultural pricing overview
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        {trends.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700"
            >

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {item.crop}
              </h2>

              <h3 className="text-3xl font-bold text-green-700 mb-3">
                {item.price}
              </h3>

              <p className={`font-semibold ${item.color}`}>
                {item.status}
              </p>

            </div>

          )
        )}

      </div>

    </div>

  )
}

export default PriceTrend