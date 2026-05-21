import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      ) || "{}"
    )

  function handleLogout() {

    localStorage.removeItem(
      "user"
    )

    alert(
      "Logout Successful ✅"
    )

    navigate("/")
  }

  return (

    <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-green-700 flex items-center justify-center text-white text-2xl font-bold">
            🌾
          </div>

          <div>

            <h1 className="text-3xl font-bold text-green-700">
              F2B Marketplace
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Farmer To Business Platform
            </p>

          </div>

        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-6">

          <Link
            to="/dashboard/marketplace"
            className="text-gray-700 dark:text-white hover:text-green-700 font-semibold transition"
          >
            Marketplace
          </Link>

          <Link
            to="/dashboard/orders"
            className="text-gray-700 dark:text-white hover:text-green-700 font-semibold transition"
          >
            Orders
          </Link>

          <Link
            to="/dashboard/requests"
            className="text-gray-700 dark:text-white hover:text-green-700 font-semibold transition"
          >
            Requests
          </Link>

          <Link
            to="/dashboard/upload-crop"
            className="text-gray-700 dark:text-white hover:text-green-700 font-semibold transition"
          >
            Upload Crop
          </Link>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Role */}
          <div className="hidden md:block bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-semibold">

            {user.role || "Guest"}

          </div>

          {/* User */}
          <div className="hidden md:flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold">
              {
                user.name
                  ? user.name[0]
                  : "U"
              }
            </div>

            <div>

              <h3 className="font-bold text-gray-800 dark:text-white">
                {user.name || "User"}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-300">
                {user.email}
              </p>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={
              handleLogout
            }
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  )
}

export default Navbar