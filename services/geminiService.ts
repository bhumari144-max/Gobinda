
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Strictly use process.env.API_KEY directly for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTravelAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are 'Namaste Nepal AI', a helpful and culturally sensitive travel assistant for tourists visiting Nepal. 
        Your goal is to provide accurate information about trekking routes, local customs (like saying Namaste, removing shoes), 
        safety tips (altitude sickness), and weather. Keep answers concise, friendly, and respectful.`,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my Himalayan data center. Please try again later!";
  }
};

export const generateItinerary = async (preferences: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a 3-day Nepal itinerary based on these preferences: ${preferences}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER },
              activity: { type: Type.STRING },
              location: { type: Type.STRING },
              time: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["day", "activity", "location", "time"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Itinerary Error:", error);
    return [];
  }
};
