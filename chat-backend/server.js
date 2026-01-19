import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    console.log("Incoming request:", req.body);

    try {
        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            input: req.body.message,
        });

        const reply = response.output_text;

        console.log("AI reply:", reply);

        res.json({ reply });
    } catch (error) {
        console.error("OpenAI FULL ERROR:", error);
        res.status(500).json({ error: "AI error" });
    }
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Chat server running on port 5000");
});
