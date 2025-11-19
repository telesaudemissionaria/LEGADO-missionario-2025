import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateTribute = async (
  topic: string,
  language: string
): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "API Key missing. Please configure the environment.";

  const prompt = `
    You are a solemn historian and poet honoring the legacy of Christian Missionary Medical Care, focusing on themes of sacrifice, healing in remote lands, and faith.
    Write a short, moving, and inspiring tribute or prayer (max 60 words) based on this input: "${topic}".
    The tone should be nostalgic, grateful, solemn, and deeply respectful ("Legado de Sofrimento e Esperança").
    Write this strictly in the following language: ${language === 'PT' ? 'Portuguese' : language === 'ES' ? 'Spanish' : 'English'}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Unable to generate tribute at this time.";
  } catch (error) {
    console.error("Error generating tribute:", error);
    return "An error occurred while honoring the legacy. Please try again.";
  }
};