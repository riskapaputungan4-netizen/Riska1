import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Globe,
  Bell,
  Sparkles,
  Zap,
  Check,
  ExternalLink,
  Crown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';

interface TopNavbarProps {
  onBack?: () => void;
  onOpenUpgrade: () => void;
  onOpenExport?: () => void;
  onSelectLanguage?: (lang: string) => void;
  currentLanguage?: string;
  onOpenSkills?: () => void;
  onOpenApiDocs?: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onBack,
  onOpenUpgrade,
  onOpenExport,
  onSelectLanguage,
  currentLanguage = 'Indonesia',
  onOpenSkills,
  onOpenApiDocs,
}) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Ekstraksi klip video selesai',
      desc: '3 video 9:16 siap diunduh dengan skor viralitas 98%.',
      time: 'Baru saja',
      unread: true,
    },
    {
      id: 2,
      title: 'Promo Spesial Diskon 65%',
      desc: 'Tingkatkan ke Pro untuk kuota ekspor tanpa batas bulan ini.',
      time: '1 jam lalu',
      unread: true,
    },
    {
      id: 3,
      title: 'Fitur baru: AI Subtitle Alex Hormozi',
      desc: 'Telah diperbarui dengan palet warna neon dan emoji otomatis.',
      time: 'Kemarin',
      unread: false,
    },
  ]);

  const languages = ['Indonesia', 'English (US)', 'Español', '日本語', 'Português'];

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <header className="h-16 border-b border-[#232836] bg-[#0f1117]/95 backdrop-blur-md px-3 sm:px-4 flex items-center justify-between z-30 shrink-0 select-none">
      {/* Left: Brand Logo & Back Button */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          {/* Custom Stylized Logo icon */}
          <div className="w-9 h-9 rounded-full bg-[#00e676] flex items-center justify-center shadow-lg shadow-[#00e676]/30 text-[#080a0d] transform transition-transform group-hover:scale-105">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4 4h4l4 8-4 8H4l4-8-4-8zm8 0h4l4 8-4 8h-4l4-8-4-8z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            Wayin<span className="text-[#00e676]">Video</span>
          </span>
        </button>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
          title="Kembali ke Dashboard Utama"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Middle: Navigation Hub Links */}
      <nav aria-label="Menu Pintasan" className="hidden lg:flex items-center gap-2">
        {/* Keterampilan (Skills) with NEW badge */}
        <button
          onClick={onOpenSkills}
          className="relative px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-white hover:bg-[#232836]/60 transition-all flex items-center gap-2"
        >
          <span className="absolute -top-1.5 right-2 text-[9px] font-bold uppercase tracking-wider text-[#00e676]">
            New
          </span>
          <Zap className="w-4 h-4 text-[#00e676]" />
          <span>Keterampilan</span>
        </button>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowLangDropdown(!showLangDropdown);
              setShowToolsDropdown(false);
              setShowNotifDropdown(false);
              setShowProfileDropdown(false);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-[#232836]/60 transition-all flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4 text-gray-400" />
            <span>{currentLanguage}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {showLangDropdown && (
            <div className="absolute top-full mt-2 left-0 w-44 bg-[#161922] border border-[#232836] rounded-xl shadow-2xl py-1.5 z-50 text-xs">
              <div className="px-3 py-1 text-[10px] text-gray-400 font-semibold uppercase">
                Pilih Bahasa
              </div>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onSelectLanguage?.(lang);
                    setShowLangDropdown(false);
                  }}
                  className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#232836] transition ${
                    currentLanguage === lang ? 'text-[#00e676] font-semibold' : 'text-gray-300'
                  }`}
                >
                  <span>{lang}</span>
                  {currentLanguage === lang && <Check className="w-3.5 h-3.5 text-[#00e676]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Alat AI Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowToolsDropdown(!showToolsDropdown);
              setShowLangDropdown(false);
              setShowNotifDropdown(false);
              setShowProfileDropdown(false);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-[#232836]/60 transition-all flex items-center gap-1.5"
          >
            <span>Alat AI</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {showToolsDropdown && (
            <div className="absolute top-full mt-2 left-0 w-60 bg-[#161922] border border-[#232836] rounded-xl shadow-2xl p-2 z-50 text-xs">
              <div className="px-2 py-1 text-[10px] text-gray-400 font-semibold uppercase">
                Koleksi Fitur AI
              </div>
              <div className="space-y-1 mt-1">
                <button
                  onClick={() => setShowToolsDropdown(false)}
                  className="w-full px-2.5 py-1.5 rounded-lg text-left hover:bg-[#232836] text-gray-200 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00e676]"></div>
                  <span>Pemotongan Otomatis 9:16</span>
                </button>
                <button
                  onClick={() => setShowToolsDropdown(false)}
                  className="w-full px-2.5 py-1.5 rounded-lg text-left hover:bg-[#232836] text-gray-200 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Deteksi Hook Viral (3 Detik)</span>
                </button>
                <button
                  onClick={() => setShowToolsDropdown(false)}
                  className="w-full px-2.5 py-1.5 rounded-lg text-left hover:bg-[#232836] text-gray-200 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span>Subtitle Hormozi Animated</span>
                </button>
                <button
                  onClick={() => setShowToolsDropdown(false)}
                  className="w-full px-2.5 py-1.5 rounded-lg text-left hover:bg-[#232836] text-gray-200 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span>Pembersih Noise Audio Studio</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* API Docs Link */}
        <button
          onClick={onOpenApiDocs}
          className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-[#232836]/60 transition-all flex items-center gap-1.5"
        >
          <span className="absolute -top-1.5 right-1.5 text-[9px] font-bold uppercase tracking-wider text-[#00e676]">
            New
          </span>
          <span>API Docs</span>
        </button>

        {/* Discord Community Link */}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-[#232836]/60 transition-all flex items-center gap-1.5"
        >
          <svg className="w-4 h-4 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span>Discord</span>
        </a>
      </nav>

      {/* Right Side: Promo Pill, Notification, User Profile */}
      <div className="flex items-center space-x-2.5 sm:space-x-3.5">
        {/* Upgrade Promo Pill */}
        <button
          onClick={onOpenUpgrade}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-emerald-400 hover:bg-[#10b981]/20 hover:border-[#10b981]/60 transition text-xs font-semibold cursor-pointer shadow-sm active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00e676]" />
          <span className="text-[#00e676] font-bold">Diskon 65%</span>
          <span className="text-gray-300 hidden xs:inline">Tingkatkan</span>
        </button>

        {/* Notification Center */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifDropdown(!showNotifDropdown);
              setShowLangDropdown(false);
              setShowToolsDropdown(false);
              setShowProfileDropdown(false);
            }}
            className="relative p-2 text-gray-400 hover:text-white rounded-full bg-[#161922] hover:bg-[#232836] border border-[#232836] transition cursor-pointer"
            title="Notifikasi"
          >
            <Bell className="w-4 h-4" />
            {notifications.some((n) => n.unread) && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#00e676] rounded-full ring-2 ring-[#0f1117] animate-pulse"></span>
            )}
          </button>

          {showNotifDropdown && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-[#161922] border border-[#232836] rounded-2xl shadow-2xl p-3 z-50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#232836]">
                <span className="font-bold text-white">Notifikasi Aktivitas</span>
                <button
                  onClick={markAllRead}
                  className="text-[11px] text-[#00e676] hover:underline cursor-pointer"
                >
                  Tandai Dibaca
                </button>
              </div>
              <div className="mt-2 space-y-2 max-h-64 overflow-y-auto pr-1">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-2.5 rounded-xl border transition ${
                      n.unread
                        ? 'bg-[#11241f]/60 border-[#00e676]/30'
                        : 'bg-[#0f1117] border-[#232836]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-[11px]">{n.title}</span>
                      <span className="text-[10px] text-gray-500">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Avatar Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileDropdown(!showProfileDropdown);
              setShowLangDropdown(false);
              setShowToolsDropdown(false);
              setShowNotifDropdown(false);
            }}
            className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center font-bold text-xs text-white uppercase shadow-sm cursor-pointer hover:border-[#00e676] transition"
            title="Profil Pengguna"
          >
            R
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-[#161922] border border-[#232836] rounded-2xl shadow-2xl p-3 z-50 text-xs">
              <div className="flex items-center gap-3 pb-3 border-b border-[#232836]">
                <div className="w-10 h-10 rounded-full bg-[#00e676]/20 border border-[#00e676]/50 flex items-center justify-center font-bold text-sm text-[#00e676]">
                  R
                </div>
                <div className="overflow-hidden">
                  <div className="font-semibold text-white truncate">Riska Paputungan</div>
                  <div className="text-[11px] text-gray-400 truncate">
                    riskapaputungan4@gmail.com
                  </div>
                </div>
              </div>
              <div className="py-2.5 space-y-1">
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#0f1117] text-gray-300">
                  <span className="text-[11px]">Sisa Kuota AI</span>
                  <span className="text-[11px] font-bold text-[#00e676]">145 / 200 Menit</span>
                </div>
                <button
                  onClick={() => {
                    setShowProfileDropdown(false);
                    onOpenUpgrade();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-gray-300 hover:bg-[#232836] hover:text-white"
                >
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>Paket Pro (Diskon 65%)</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileDropdown(false);
                    onOpenExport?.();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-[#00e676] hover:bg-[#232836]"
                >
                  <Globe className="w-4 h-4 text-[#00e676]" />
                  <span className="font-semibold">Ekspor ke Hosting Sendiri</span>
                </button>
                <button
                  onClick={() => setShowProfileDropdown(false)}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-gray-300 hover:bg-[#232836] hover:text-white"
                >
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span>Pengaturan Akun</span>
                </button>
              </div>
              <div className="pt-2 border-t border-[#232836]">
                <button
                  onClick={() => setShowProfileDropdown(false)}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-red-400 hover:bg-red-500/10 hover:text-red-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
