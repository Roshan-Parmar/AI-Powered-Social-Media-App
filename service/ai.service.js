const  { GoogleGenAI }  =  require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64Image) {
  const contents = [
    {
      inlineData : {
        mimeType : "image/jpeg",
        data : base64Image
      }
    },
    {
      text : "Generate a caption for the following image "
    }
  ];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:  contents,
    config : {
      systemInstruction : `
      you are expert in generating caption.
      you have to generate caption like a writer.
      you are the caption generate.
      generate single caption.
      generate caption in love language.
      `
    }
  });

  return response.text;

}

module.exports = generateCaption;