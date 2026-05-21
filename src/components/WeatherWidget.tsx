function WeatherWidget() {

  const weatherData = [

    {
      city: "Mumbai",
      temp: "32°C",
      climate: "Sunny",
      emoji: "☀️",
    },

    {
      city: "Pune",
      temp: "28°C",
      climate: "Cloudy",
      emoji: "☁️",
    },

    {
      city: "Nashik",
      temp: "25°C",
      climate: "Rainy",
      emoji: "🌧️",
    },

    {
      city: "Nagpur",
      temp: "35°C",
      climate: "Hot",
      emoji: "🔥",
    },

  ]

  return (

    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm mb-10">

      {/* Header */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Live Weather Updates
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Smart climate monitoring for farmers and buyers
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {weatherData.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700"
            >

              <div className="text-5xl mb-5">
                {item.emoji}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {item.city}
              </h2>

              <h3 className="text-4xl font-bold text-blue-700 mb-3">
                {item.temp}
              </h3>

              <p className="text-gray-500 dark:text-gray-300 font-semibold">
                {item.climate}
              </p>

            </div>

          )
        )}

      </div>

    </div>

  )
}

export default WeatherWidget