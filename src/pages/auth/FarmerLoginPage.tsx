import { useState } from "react"

import { useNavigate } from "react-router-dom"

function FarmerLoginPage() {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    const storedUser =
      localStorage.getItem("user")

    if (!storedUser) {

      alert(
        "No account found"
      )

      return
    }

    const parsedUser =
      JSON.parse(storedUser)

    if (
      parsedUser.email === email
    ) {

      alert(
        "Farmer Login Successful ✅"
      )

      navigate(
        "/dashboard/farmer"
      )

    } else {

      alert(
        "Invalid Credentials ❌"
      )
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <div className="bg-green-700 text-white p-12 flex flex-col justify-center">

          <div className="text-7xl mb-8">
            🌾
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Farmer Login
          </h1>

          <p className="text-green-100 text-xl leading-9">
            Access your agricultural marketplace dashboard and manage procurement operations.
          </p>

        </div>

        {/* Right */}
        <div className="p-12 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-5xl font-bold text-green-700 mb-4">
              Welcome Back
            </h2>

            <p className="text-gray-500 text-lg">
              Login to continue
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-7"
          >

            {/* Email */}
            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Enter your email"
                className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Enter your password"
                className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <div className="mt-8 text-center">

            <button
              onClick={() =>
                navigate("/")
              }
              className="text-green-700 font-semibold hover:underline"
            >
              Create New Account
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default FarmerLoginPage