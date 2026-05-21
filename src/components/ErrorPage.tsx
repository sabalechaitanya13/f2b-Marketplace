import { useNavigate } from "react-router-dom"

function ErrorPage() {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 p-6">

      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-2xl w-full">

        {/* Emoji */}
        <div className="text-8xl mb-8">
          ⚠️
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-red-600 mb-6">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-lg leading-8 mb-10">
          The page you are trying to access does not exist or may have been moved from the agricultural marketplace system.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <button
            onClick={() =>
              navigate("/")
            }
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Go To Home
          </button>

          <button
            onClick={() =>
              navigate(-1)
            }
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>

  )
}

export default ErrorPage