import { GoogleGenAI } from "@google/genai";

export default async ({ req, res, log, error, env }) => {
  try {
    log("Function Started");

    const ai = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });

    const body = req.body ? JSON.parse(req.body) : {};

    const prompt = body.prompt || "Hello";

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.json({
      success: true,
      response: result.text,
    });
  } catch (err) {
    error(err);

    return res.json({
      success: false,
      error: err.message,
    });
  }
};
