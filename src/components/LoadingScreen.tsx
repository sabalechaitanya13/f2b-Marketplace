function LoadingScreen() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">

      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">

        {/* Loader */}
        <div className="w-20 h-20 border-8 border-green-200 border-t-green-700 rounded-full animate-spin mx-auto mb-8"></div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Agri Marketplace
        </h1>

        {/* Text */}
        <p className="text-gray-500 text-lg">
          Loading Dashboard...
        </p>

      </div>

    </div>

  )
}

export default LoadingScreen