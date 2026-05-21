import { useState } from "react"

import { useNavigate } from "react-router-dom"

function RegisterPage() {

  const navigate = useNavigate()

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [role, setRole] =
    useState("Farmer")

  function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault()

    if (
      !name ||
      !email ||
      !password
    ) {

      alert(
        "Please fill all fields"
      )

      return
    }

    const userData = {
      name,
      email,
      password,
      role,
    }

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    )

    alert(
      `${role} Registration Successful ✅`
    )

    navigate("/login")
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <div className="bg-green-700 text-white p-12 flex flex-col justify-center">

          <h1 className="text-6xl font-bold leading-tight mb-6">
            F2B Marketplace
          </h1>

          <p className="text-green-100 text-xl leading-9">
            Smart agricultural procurement platform connecting farmers, businesses and customers with AI-powered marketplace features.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🌾
              </div>

              <p className="text-lg">
                Farmer Procurement
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🏢
              </div>

              <p className="text-lg">
                Business Marketplace
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🤖
              </div>

              <p className="text-lg">
                AI Smart Assistant
              </p>

            </div>

          </div>

        </div>

        {/* Right */}
        <div className="p-12 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-5xl font-bold text-green-700 mb-4">
              Create Account
            </h2>

            <p className="text-gray-500 text-lg">
              Register your marketplace role
            </p>

          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-7"
          >

            {/* Name */}
            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Enter your full name"
                className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
              />

            </div>

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

            {/* Role */}
            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-green-700"
              >

                <option>
                  Farmer
                </option>

                <option>
                  Business
                </option>

                <option>
                  Customer
                </option>

                <option>
                  Admin
                </option>

              </select>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition"
            >
              Register Now
            </button>

          </form>

          {/* Login */}
          <div className="mt-8 text-center">

            <button
              onClick={() =>
                navigate("/login")
              }
              className="text-green-700 font-semibold hover:underline"
            >
              Already have an account? Login
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default RegisterPage