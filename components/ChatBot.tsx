
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import { generateTravelAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Namaste! I am your Nepal travel assistant. How can I help you explore the Himalayas today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await generateTravelAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I'm having a bit of trouble connecting to the peak..." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-36 right-6 md:bottom-24 md:right-8 w-[90vw] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-[60] overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Nepal AI Assistant</h3>
            <p className="text-xs text-red-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl flex gap-2 ${
              msg.role === 'user' 
                ? 'bg-red-600 text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.role === 'bot' && <Bot size={16} className="mt-1 shrink-0 opacity-50" />}
              <p className="text-sm leading-relaxed">{msg.text}</p>
              {msg.role === 'user' && <User size={16} className="mt-1 shrink-0 opacity-50" />}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-2 items-center">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about Nepal..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-sm text-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50 hover:bg-red-700 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
