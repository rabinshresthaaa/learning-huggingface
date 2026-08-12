import { InferenceClient } from "@huggingface/inference";
const client = new InferenceClient(process.env.HF_TOKEN);

// Challenge #1 : 
// Press 'Generate Text' button and look at our current output from console.log. 
// Edit 'finalText' and clean it up for what you'd expect as a frontend output. 

// Challenge #2 (Bonus): 
// Make the response always return like it came from 'William Shakespeakere'. 
// Hint: you will need to tell the 'system' how to respond, 
// take a look at the model page on the 2nd slide for help.

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant that always responds in the style of William Shakespeare.",
  }
]

export async function chatCompletion() {
  messages.push(
    {
        role: "user",
        content: "Tell me a fun fact about the internet",
    });
  const response = await client.chatCompletion({
    messages,
    model: "katanemo/Arch-Agent-32B:featherless-ai",
  });

  const finalText = response.choices[0].message.content;
  return finalText;
  
}