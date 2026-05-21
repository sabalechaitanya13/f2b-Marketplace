import { useState } from "react"

import {
  useNavigate,
  useLocation,
} from "react-router-dom"

function LoginPage() {

  const navigate = useNavigate()

  const location = useLocation()

  const role =
    location.state?.role ||
    "Farmer"

  const dashboardRoute =
    location.state?.route ||
    "/dashboard/farmer"

  const [email, setEmail] =
    useState("")

  const [
    password,
    setPassword,
  ] = useState("")

  function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    if (
      !email ||
      !password
    ) {

      alert(
        "Please fill all fields"
      )

      return
    }

    const userData = {
      name:
        email.split("@")[0],
      email,
      role,
    }

    localStorage.setItem(
      "user",
      JSON.stringify(
        userData
      )
    )

    alert(
      `${role} Login Successful ✅`
    )

    navigate(
      dashboardRoute
    )
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-[35px] shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">

          <div className="text-6xl mb-5">
            🔐
          </div>

          <h1 className="text-4xl font-bold text-green-700 mb-3">
            {role} Login
          </h1>

          <p className="text-gray-500">
            Enter your credentials to continue
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={
            handleLogin
          }
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block text-lg font-semibold mb-3">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter email"
              className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-lg font-semibold mb-3">
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
              placeholder="Enter password"
              className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-bold transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  )
}

export default LoginPage