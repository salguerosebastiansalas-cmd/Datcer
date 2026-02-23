import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure API key is present; in a real scenario, this comes from env.
// For this demo, we assume the environment variable is injected.

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateDatcerResponse = async (prompt: string, language: string = 'es'): Promise<string> => {
  try {
    const ai = getClient();
    
    // System instruction updated for strict brevity and mandatory contact footer
    const systemInstruction = `
      Eres el consultor senior y embajador de marca de Datcer.
      
      TONO Y PERSONALIDAD:
      - Sé muy CORDIAL, HUMANO y EMPÁTICO.
      - Mantén un perfil EMPRESARIAL y SOFISTICADO (Estilo Apple/Consultora Big 4).
      - Sé BREVE y CONCISO. No des explicaciones teóricas largas, ve al punto de la solución.

      IDIOMA:
      - Responde SIEMPRE en el idioma: ${language}.
      - Si el usuario pregunta en otro idioma, traduce tu respuesta al idioma ${language}.

      REGLA DE ORO (FOOTER):
      Sin importar lo que te pregunten, SIEMPRE termina tu respuesta invitando a la acción de forma amable y anexando estos enlaces EXACTOS:

      ---
      Para brindarte una atención personalizada, por favor contáctanos directamente aquí:
      
      WhatsApp Directo:
      https://wa.me/573024845350

      Correo Gerencia:
      mailto:gerencia@datcer.com
      ---

      (Asegúrate de que los enlaces estén separados por líneas nuevas para que el sistema los detecte bien).

      CONTEXTO DE DATCER:
      - Expertos en diseño, construcción y certificación de Data Centers.
      - Normativas: TIA-942, ICREA, Uptime Institute.
      - Infraestructura: Potencia, Climatización, Seguridad.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Low latency priority
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento. Por favor contáctanos directamente.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error técnico momentáneo. Por favor escríbenos a nuestro WhatsApp: https://wa.me/573024845350";
  }
};