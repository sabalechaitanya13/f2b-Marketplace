import { useNavigate } from "react-router-dom"

function LoginSelectionPage() {

  const navigate = useNavigate()

  const roles = [

    {
      title: "Farmer",
      description:
        "Upload crops, manage procurement orders and marketplace activity.",
      border: "border-green-700",
      icon: "🌾",
      route:
        "/dashboard/farmer",
      text: "text-green-700",
      bg: "bg-green-700",
    },

    {
      title: "Business",
      description:
        "Manage procurement analytics and marketplace sourcing.",
      border: "border-blue-700",
      icon: "🏢",
      route:
        "/dashboard/business",
      text: "text-blue-700",
      bg: "bg-blue-700",
    },

    {
      title: "Customer",
      description:
        "Explore fresh crops directly from marketplace listings.",
      border: "border-orange-500",
      icon: "🛒",
      route:
        "/dashboard/customer",
      text: "text-orange-500",
      bg: "bg-orange-500",
    },

    {
      title: "Admin",
      description:
        "Monitor analytics, orders and procurement activities.",
      border: "border-purple-700",
      icon: "⚙️",
      route:
        "/dashboard/admin",
      text: "text-purple-700",
      bg: "bg-purple-700",
    },

  ]

  function openLogin(
    role: any
  ) {

    navigate(
      "/role-login",
      {
        state: {
          role:
            role.title,
          route:
            role.route,
        },
      }
    )
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-6">

      <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-7xl p-10">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-6xl font-bold text-green-700 mb-4">
            Agri Marketplace Portal
          </h1>

          <p className="text-xl text-gray-600">
            Select your registered role to login
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {roles.map(
            (
              role,
              index
            ) => (

              <div
                key={index}
                className={`rounded-[30px] border-2 ${role.border} p-8 flex flex-col shadow-md hover:scale-105 transition duration-300 ${
                  role.title ===
                  "Farmer"
                    ? "bg-green-700 text-white"
                    : "bg-white"
                }`}
              >

                {/* Icon */}
                <div className="text-5xl mb-6">
                  {role.icon}
                </div>

                {/* Title */}
                <h2 className={`text-3xl font-bold mb-5 ${
                  role.title ===
                  "Farmer"
                    ? "text-white"
                    : role.text
                }`}>
                  {role.title}
                </h2>

                {/* Description */}
                <p className={`text-lg leading-9 mb-8 ${
                  role.title ===
                  "Farmer"
                    ? "text-green-100"
                    : "text-gray-600"
                }`}>
                  {role.description}
                </p>

                {/* Button */}
                <button
                  onClick={() =>
                    openLogin(
                      role
                    )
                  }
                  className={`w-full py-4 rounded-2xl text-xl font-bold transition mt-auto ${
                    role.title ===
                    "Farmer"
                      ? "bg-white text-green-700 hover:bg-gray-100"
                      : `${role.bg} text-white`
                  }`}
                >
                  Continue
                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  )
}

export default LoginSelectionPage