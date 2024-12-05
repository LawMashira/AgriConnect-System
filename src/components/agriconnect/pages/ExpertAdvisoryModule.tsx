import React, { useState } from "react";
import axios from "axios";

// Mock Data for Expert Advice (unchanged)
const expertAdvice = [
  {
    id: 1,
    title: "Soil Management 101",
    description: "Learn how to manage your soil for optimal crop growth.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // YouTube video link
  },
  {
    id: 2,
    title: "Pest Control Techniques",
    description: "Discover effective pest control methods for healthy crops.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Irrigation Best Practices",
    description: "Master efficient irrigation techniques to save water and boost yield.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const ExpertAdvisoryModule = () => {
  // State for chat and user interaction
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<{ message: string; response: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to send a question to ChatGPT and get the response
  const sendQuestionToChatGPT = async () => {
    if (!userMessage.trim()) return; // Don't send empty messages

    setLoading(true);

    try {
      // API call to OpenAI
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4", // Or use "gpt-3.5-turbo" depending on the model you want
          messages: [
            { role: "system", content: "You are a helpful agricultural expert." },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
          },
        }
      );

      // Extracting ChatGPT's reply
      const reply = response.data.choices[0].message.content;

      // Add both user message and AI response to chat history
      setChatHistory([
        ...chatHistory,
        { message: userMessage, response: reply },
      ]);

      // Clear the input field
      setUserMessage("");
    } catch (error) {
      console.error("Error fetching ChatGPT response", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Expert Advisory</h1>

      {/* Advisory Articles */}
      <div className="space-y-6">
        {expertAdvice.map((advice) => (
          <div
            key={advice.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">{advice.title}</h2>
            <p className="text-gray-600 mb-2">{advice.description}</p>
            <a
              href={advice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Watch Tutorial
            </a>
          </div>
        ))}
      </div>

      {/* Ask an Expert with ChatGPT */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h2 className="text-lg font-semibold text-green-700">Ask an Expert</h2>
        <p className="text-gray-600 mb-4">
          Have a specific question? Get personalized advice from our expert system.
        </p>

        {/* Chat History */}
        <div className="h-60 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg shadow-md">
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-4">
              <div className="font-semibold text-gray-700">You:</div>
              <p className="text-gray-800">{chat.message}</p>
              <div className="font-semibold text-gray-700 mt-2">Expert:</div>
              <p className="text-gray-800">{chat.response}</p>
            </div>
          ))}
        </div>

        {/* User Input Field */}
        <div className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Ask a farming question..."
            className="p-3 w-full border rounded-l-lg"
          />
          <button
            onClick={sendQuestionToChatGPT}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors duration-300"
          >
            {loading ? "Asking..." : "Ask"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvisoryModule;
