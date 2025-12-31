
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (history: ChatMessage[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `你是「日日瀅生醫」的專業客服與生物醫學顧問。
        
        日日瀅生醫的特點：
        - 致力於高品質保健食品代工服務。
        - 結合專業研發與創新技術。
        - 專精於日本進口優質原料（如：魚膠原蛋白、納豆激酶、京都抹茶）。
        - 提供 OEM/ODM 全方位解決方案。
        - 聯絡電話：04-22017588。
        - 電子郵件：service@ririyingbio.com。
        
        請用專業、親切且誠懇的口吻回答。如果被問及代工流程，請提及諮詢、研發、打樣、生產與交付等步驟。`,
      },
    });

    const result = await chat.sendMessage({ message });
    return result.text || "抱歉，我暫時無法回覆，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系統暫時發生錯誤，請撥打客服專線 04-22017588 聯繫我們。";
  }
};
