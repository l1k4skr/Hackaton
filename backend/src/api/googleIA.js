// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'; // This is the line that loads the .env file


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const makeResponse = async (prompt) => {
    console.log(prompt)
    const result = await model.generateContent(prompt.prompt);
    return result.response.text();
}

export default makeResponse;