import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export const SupportChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Halo! Saya asisten AI WayinVideo. Ada yang bisa saya bantu terkait pemotongan video, hook viral, atau ekspor 9:16?',
      time: 'Baru saja',
    },
  ]);

  const quickQuestions = [
    'Bagaimana cara bikin hook 3 detik viral?',
    'Apakah format 9:16 sudah otomatis face-track?',
    'Bisa ekspor tanpa watermark di paket gratis?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: 'Baru saja',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Simulate smart AI response in Indonesian
    setTimeout(() => {
      let reply =
        'AI WayinVideo secara otomatis menganalisis retensi penonton, memotong jeda kosong, dan membingkai wajah pembicara ke tengah format 9:16 Shorts!';
      const lower = text.toLowerCase();
      if (lower.includes('hook') || lower.includes('3 detik')) {
        reply =
          'Fitur "Pengait AI" menyaring 15 detik pertama untuk menemukan kalimat provokatif/emosional dan menambahkan transisi zoom-in dinamis agar penonton tidak swipe away.';
      } else if (lower.includes('face-track') || lower.includes('9:16') || lower.includes('wajah')) {
        reply =
          'Ya! Fitur "AI Bingkai Ulang" memiliki pendeteksi wajah multi-speaker yang otomatis menggeser fokus kamera saat pembicara bergantian bicara.';
      } else if (lower.includes('watermark') || lower.includes('ekspor') || lower.includes('gratis')) {
        reply =
          'Anda mendapatkan kuota ekspor gratis setiap bulan. Nikmati promo diskon 65% untuk mendapatkan ekspor 4K tanpa watermark tanpa batas!';
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        time: 'Baru saja',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-[#161922] hover:bg-[#232836] border border-[#232836] text-white flex items-center justify-center shadow-2xl transition hover:scale-110 active:scale-95 group cursor-pointer"
          title="Bantuan & Dukungan Pelanggan"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-300 group-hover:text-[#00e676] transition" />
          ) : (
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-[#00e676] transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-3.5 bg-[#0f1117] border-b border-[#232836] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Asisten AI WayinVideo</span>
                  <span className="w-2 h-2 rounded-full bg-[#00e676]"></span>
                </div>
                <div className="text-[10px] text-gray-400">Siap membantu 24/7</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-3.5 h-72 overflow-y-auto space-y-3 text-xs custom-scrollbars bg-[#0a0c10]/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#161922] border border-[#232836] flex items-center justify-center text-[#00e676] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-2.5 rounded-xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#00e676] text-[#080a0d] font-medium'
                      : 'bg-[#161922] text-gray-200 border border-[#232836]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Chips */}
          <div className="p-2 border-t border-[#232836] bg-[#0f1117] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#161922] hover:bg-[#232836] text-[10px] text-gray-300 hover:text-white border border-[#232836] transition cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-[#0f1117] border-t border-[#232836] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 bg-[#161922] border border-[#232836] focus:border-[#00e676] rounded-xl px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#00e676] text-black hover:bg-emerald-400 transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
