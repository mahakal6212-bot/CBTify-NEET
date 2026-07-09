const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY!;

export async function askGemini(prompt: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    throw new Error(data.error?.message || "Gemini API Error");
  }

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini"
  );
}
