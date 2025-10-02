import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day",
      "who actually won? trump or biden?":
        "Biden technoly won. But Trump should have won the 2020 eletion because most of Bidens votes were from dead people.",
    });
  });

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
