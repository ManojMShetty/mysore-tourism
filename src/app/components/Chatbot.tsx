import { useState } from "react";

export function Chatbot() {
    console.log("Chatbot component mounted");
    const [messages, setMessages] = useState<
        { role: "user" | "bot"; text: string }[]
    >([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendMessage() {
        if (!input.trim()) return;

        const userText = input.toLowerCase();
        setInput("");

        setMessages((prev) => [...prev, { role: "user", text: input }]);
        setLoading(true);

        // Mock AI responses
        let reply = "Sorry, I didn't understand. Please ask about Mysore tourism.";

        if (userText.includes("package") || userText.includes("price")) {
            reply =
                "We offer Mysore tour packages starting from ₹10,000 up to ₹5,00,000 including Palace, Zoo, Chamundi Hills, and luxury stays.";
        } else if (userText.includes("palace")) {
            reply =
                "Mysore Palace is the main attraction. It is open from 10 AM to 5:30 PM and is beautifully illuminated on Sundays.";
        } else if (userText.includes("zoo")) {
            reply =
                "Sri Chamarajendra Zoological Gardens (Mysore Zoo) is one of the oldest and most popular zoos in India.";
        } else if (userText.includes("best time") || userText.includes("season")) {
            reply =
                "The best time to visit Mysore is from October to March when the weather is pleasant.";
        } else if (userText.includes("contact") || userText.includes("book")) {
            reply =
                "You can book your tour by clicking the 'Book Your Tour Now' button or contacting us on WhatsApp.";
        }

        setTimeout(() => {
            setMessages((prev) => [...prev, { role: "bot", text: reply }]);
            setLoading(false);
        }, 800); // typing delay for realism
    }


    return (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-xl shadow-xl border z-50">
            <div className="bg-orange-600 text-white p-3 font-semibold rounded-t-xl">
                Mysore Tourism Assistant
            </div>

            <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
                {messages.length === 0 && (
                    <p className="text-gray-500">
                        👋 Hi! Ask me about Mysore tour packages.
                    </p>
                )}

                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={m.role === "user" ? "text-right" : "text-left"}
                    >
                        <span
                            className={`inline-block px-3 py-2 rounded-lg ${m.role === "user"
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-black"
                                }`}
                        >
                            {m.text}
                        </span>
                    </div>
                ))}

                {loading && <p className="text-gray-400">Typing…</p>}
            </div>

            <div className="flex p-2 gap-2 border-t">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask about tours…"
                    className="flex-1 border rounded px-2 py-1 text-sm"
                />
                <button
                    onClick={sendMessage}
                    className="bg-orange-600 text-white px-3 rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
