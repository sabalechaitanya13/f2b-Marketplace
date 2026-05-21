import { useState } from "react"

function AIChatBot() {

  const [open, setOpen] =
    useState(false)

  const [message, setMessage] =
    useState("")

  const [chat, setChat] =
    useState([
      {
        sender: "AI",
        text:
          "Hello 👋 I am Agri AI Assistant. Ask me about crops, prices, farming or marketplace guidance.",
      },
    ])

  function handleSend() {

    if (!message) {

      return
    }

    const userMessage = {
      sender: "You",
      text: message,
    }

    let aiReply =
      "Please ask agriculture related questions."

    const lower =
      message.toLowerCase()

    if (
      lower.includes("tomato")
    ) {

      aiReply =
        "Tomato market demand is currently high 🍅"
    }

    else if (
      lower.includes("price")
    ) {

      aiReply =
        "Current market prices are increasing this week 📈"
    }

    else if (
      lower.includes("weather")
    ) {

      aiReply =
        "Weather conditions are suitable for farming today ☀️"
    }

    else if (
      lower.includes("crop")
    ) {

      aiReply =
        "Consider seasonal crops for better profit 🌾"
    }

    else if (
      lower.includes("business")
    ) {

      aiReply =
        "Business procurement demand is rising in urban markets 🏢"
    }

    else if (
      lower.includes("customer")
    ) {

      aiReply =
        "Fresh Grade A crops are most preferred by customers 🛒"
    }

    const aiMessage = {
      sender: "AI",
      text: aiReply,
    }

    setChat((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ])

    setMessage("")
  }

  return (

    <>

      {/* Floating Button */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white w-16 h-16 rounded-full shadow-2xl text-3xl z-50"
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (

        <div className="fixed bottom-28 right-6 w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

          {/* Header */}
          <div className="bg-green-700 text-white p-5">

            <h2 className="text-2xl font-bold">
              Agri AI Assistant
            </h2>

            <p className="text-green-100 text-sm mt-1">
              Smart farming & marketplace helper
            </p>

          </div>

          {/* Chats */}
          <div className="h-[400px] overflow-y-auto p-5 space-y-4 bg-gray-50">

            {chat.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className={`p-4 rounded-2xl max-w-[85%] ${
                    item.sender ===
                    "You"
                      ? "bg-green-700 text-white ml-auto"
                      : "bg-white shadow-sm"
                  }`}
                >

                  <p className="text-sm font-bold mb-1">
                    {item.sender}
                  </p>

                  <p>
                    {item.text}
                  </p>

                </div>

              )
            )}

          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              placeholder="Ask AI..."
              className="flex-1 border border-gray-300 rounded-2xl px-4 outline-none"
            />

            <button
              onClick={
                handleSend
              }
              className="bg-green-700 hover:bg-green-800 text-white px-5 rounded-2xl"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>

  )
}

export default AIChatBot