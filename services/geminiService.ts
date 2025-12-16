import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogContent = async (topic: string): Promise<{ title: string; content: string; excerpt: string; tags: string[] }> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a tech-focused, engaging blog post about "${topic}". 
      Return the response in strict JSON format with the following keys:
      - title: Catchy title
      - content: The main body (around 200 words), formatted with basic HTML tags like <p>, <strong>, <ul>, <li>.
      - excerpt: A short 2 sentence summary.
      - tags: An array of 3-5 related string tags.
      
      Do not wrap the JSON in markdown code blocks. Just return raw JSON string.`,
    });

    const text = response.text || "{}";
    // Clean up if the model adds markdown code blocks despite instructions
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Blog Generation Error:", error);
    return {
      title: "Error Generating Post",
      content: "<p>Sorry, our AI editor is currently taking a nap. Please try again later.</p>",
      excerpt: "AI Generation failed.",
      tags: ["Error"]
    };
  }
};

export const generateGameLore = async (score: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `The player has reached a score of ${score} in an idle clicker game called "NeoTamago". 
      The theme is cyberpunk egg hatching.
      Write a very short (1 sentence) cryptic or funny lore unlock message rewards the player. 
      Examples: "The shell vibrates with a low hum.", "You found a microchip inside the yolk.", "The egg whispers binary to you."`,
    });
    return response.text || "The egg remains silent.";
  } catch (error) {
    return "The data stream is corrupted.";
  }
};