import { GoogleGenAI } from "@google/genai";

export default async ({ req, res, env }) => {
  try {
    const ai = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });

    const prompt = req.body?.prompt || "Say Hello from CBTify AI Server";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.json({
      success: true,
      response: response.text,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};
