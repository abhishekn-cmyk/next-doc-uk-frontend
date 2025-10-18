import { useEffect, useState, useRef } from "react";
import { useSendChat, useChats } from "@/hooks/useChat";
import {
  Send,
  BotMessageSquare,
  X,
  Info,
  Heart,
  Stethoscope,
  Activity,
  SquareActivity,
  Zap,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner"; // ✅ Added toast import
import { useNavigate } from "react-router-dom"; // ✅ For redirecting to login

type Message = {
  sender: "user" | "ai";
  text: string;
};

type Tab = {
  name: "General" | "Cardiology" | "Emergency" | "Surgery" | "Internal Medicine";
  icon: React.ElementType;
};

const tabs: Tab[] = [
  { name: "General", icon: SquareActivity },
  { name: "Cardiology", icon: Heart },
  { name: "Emergency", icon: Zap },
  { name: "Surgery", icon: Stethoscope },
  { name: "Internal Medicine", icon: Activity },
];

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab["name"]>("General");
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const { mutateAsync: sendChat } = useSendChat();
  const { data: chatHistory } = useChats();
  const navigate = useNavigate();

  // ✅ Get user ID from localStorage safely
  const userId = (() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser)._id : null;
    } catch {
      return null;
    }
  })();

  // ✅ Load chat history when fetched
  useEffect(() => {
    if (chatHistory?.data) {
      const history: Message[] = chatHistory.data
        .map((chat: any) => [
          { sender: "user", text: chat.text },
          { sender: "ai", text: chat.response },
        ])
        .flat();
      setMessages(history);
    }
  }, [chatHistory]);

  // ✅ Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Welcome message (only if chat opened and no history)
  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      setMessages([
        {
          sender: "ai",
          text: `👋 Hello! I'm your **NextDoc AI – NHS Mentor Assistant**.  
I can help with NHS careers, PLAB prep, visa guidance, and medical training pathways.  
Select a specialty mode or ask me anything to get started!`,
        },
      ]);
    }
  }, [chatOpen, messages.length]);

  // ✅ Handle message send
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (!userId) {
      toast.error("Please log in to access the chat assistant.");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }

    const userText = inputMessage.trim();
    const userMessage: Message = { sender: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    try {
      // ✅ Pass userId + tab
      const result = await sendChat({
        userId,
        text: userText,
        tab: activeTab,
      });

      const aiReply: Message = {
        sender: "ai",
        text:
          result?.data?.response ||
          "⚠️ The assistant did not return a response. Try again.",
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      console.error("Chat send error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Error fetching response. Try again." },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-14 h-14 rounded-full bg-[#224488] shadow-lg flex items-center justify-center text-white 
                     hover:bg-[#1a3466] hover:shadow-xl transition-all duration-300 ease-out"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <BotMessageSquare size={26} />
        </button>
      </div>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-5 right-6 w-96 h-[550px] bg-white shadow-2xl rounded-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#224488] text-white rounded-t-xl">
            <div className="flex flex-col">
              <span className="font-semibold">
                NextDoc AI – NHS Mentor Assistant
              </span>
              <span className="text-xs opacity-80">{activeTab} Mode</span>
            </div>
            <div className="flex items-center space-x-3">
              <Info
                size={18}
                className="cursor-pointer opacity-80 hover:opacity-100"
              />
              <X
                size={20}
                className="cursor-pointer"
                onClick={() => setChatOpen(false)}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-yellow-500 px-3 py-2 font-semibold flex justify-between items-center gap-3">
            Educational & Career Guidance Only
            <span>Info</span>
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2 p-2 border-b bg-gray-100 mt-3">
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`flex items-center justify-center gap-1 px-1 py-2 rounded transition ${
                  activeTab === name
                    ? "bg-[#224488] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon size={11} />
                <span className="text-[10px] leading-none">{name}</span>
              </button>
            ))}
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-md max-w-[80%] prose prose-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-blue-900 border border-blue-300"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.sender === "ai" ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about NHS careers, PLAB, training..."
              className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none"
            />
            <button
              className="bg-[#224488] text-white p-2 rounded-md hover:bg-[#1a3466] transition"
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </button>
          </div>

          <div className="text-[10px] text-center text-gray-500 py-1 border-t">
            Press Enter to send • NHS Mentor Assistant
          </div>
        </div>
      )}
    </>
  );
}

