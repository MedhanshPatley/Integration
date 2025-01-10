import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCin5LJxOa_k4hoQBNse1JpbRxhTwYWM7A');
export async function run(prompt) {  
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);  
    const response = await result.response;
    const text = response.text();
  return text;
}