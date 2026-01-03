
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message, BlueprintData } from "../types";

// Sentinel chat logic for security triage
export const chatWithSentinel = async (history: Message[], userInput: string) => {
  // Use direct API key from environment as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are Sentinel, a helpful and approachable security assistant for Dark Fire Security. 
      Help users triage their security needs. 
      - If a user mentions 'farm', 'crops', or 'tractors', ask about their IoT equipment or remote sensors.
      - If they are a small business owner, ask about their compliance needs (e.g., HIPAA, GDPR, SOC2) and ransomware protection.
      - If they are a person/individual, focus on identity theft and home network security.
      - Avoid technical jargon unless asked. Be welcoming, calm, and professional. 
      - Always encourage them to look at our "Free Tools" section.`,
    },
  });

  const response = await chat.sendMessage({ message: userInput });
  return response.text || "";
};

// Explain password strength using basic analysis
export const explainPasswordStrength = async (password: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Explain why the following password is strong or weak in terms of entropy and crack time for a modern GPU rig. Keep it brief and encouraging. Password: ${password}`,
    config: {
        temperature: 0.7,
        topP: 0.95,
    }
  });
  return response.text || "Unable to analyze at this time.";
};

// Generate high-quality security strategies using Pro model for complex reasoning
export const generateSecurityBlueprint = async (data: BlueprintData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Generate a preliminary security strategy for a ${data.audience}. 
  Their primary concern is: "${data.worry}". 
  They have approximately ${data.deviceCount} devices. 
  Provide 3-4 actionable bullet points and a concluding professional recommendation. 
  Keep the tone "Approachable Cyber" — professional, bank-grade, but not scary.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
  });
  return response.text || "Error generating blueprint.";
};

/**
 * Retrieves live, vetted cybersecurity intelligence using Google Search Grounding with Pro model.
 */
export const fetchLiveSecurityIntelligence = async (category: 'Farms' | 'Small Business' | 'Families') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Find 3-4 of the latest, vetted cybersecurity articles, alerts, or guides specifically for ${category} in 2024 or 2025. 
  Focus on high-authority sources like CISA, NIST, or top-tier security firms. 
  For each item, provide a title, a 2-sentence summary of the threat/guide, and the source name.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  // Extract grounding metadata to provide clickable links
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  const sources = groundingChunks.map((chunk: any) => ({
    title: chunk.web?.title,
    uri: chunk.web?.uri
  })).filter((s: any) => s.uri);

  return {
    text: response.text || "No intelligence found for this category.",
    sources: sources
  };
};
