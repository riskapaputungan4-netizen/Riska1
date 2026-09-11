import React from 'react';
import {
  FolderClosed,
  Calendar,
  Palette,
  CircleDollarSign,
  Gift,
  Code2,
  ArrowLeft,
  Sparkles,
  Download,
  Share2,
  Play,
  Key,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { SidebarTab } from '../types';
import { HOTLINK_THUMBNAIL } from '../data/mockData';

interface OtherViewsProps {
  activeTab: SidebarTab;
  onBackToHome: () => void;
  onOpenUpgrade: () => void;
}

export const OtherViews: React.FC<OtherViewsProps> = ({
  activeTab,
  onBackToHome,
  onOpenUpgrade,
}) => {
  if (activeTab === 'beranda') return null;

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-5xl mx-auto w-full custom-scrollbars">
      {/* Back Button */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161922] hover:bg-[#232836] border border-[#232836] text-xs font-semibold text-gray-300 hover:text-white transition mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Halaman Pemotongan</span>
      </button>

      {/* View: Perpustakaan (Library) */}
      {activeTab === 'perpustakaan' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FolderClosed className="w-5 h-5 text-[#00e676]" />
                <span>Perpustakaan Video & Klip Tersimpan</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Koleksi video yang telah Anda ekstrak sebelumnya dan siap diunggah ke TikTok & Reels.
              </p>
            </div>
            <button
              onClick={onBackToHome}
              className="px-3.5 py-1.5 rounded-xl bg-[#00e676] text-black font-bold text-xs hover:bg-emerald-400 transition"
            >
              + Potong Video Baru
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Mindset Pertama Clipper Pemula',
                date: 'Hari ini, 14:20',
                duration: '00:48',
                score: 98,
                views: '4.2k estimasi',
              },
              {
                title: 'Rumus 3 Detik Hook Anti Swipe',
                date: 'Kemarin',
                duration: '00:39',
                score: 95,
                views: '12.8k estimasi',
              },
              {
                title: 'Cara Cari Klien Luar Negeri Bayar Dollar',
                date: '3 hari lalu',
                duration: '00:54',
                score: 91,
                views: '8.1k estimasi',
              },
            ].map((clip, i) => (
              <div
                key={i}
                className="bg-[#161922] rounded-xl border border-[#232836] p-3 hover:border-gray-600 transition"
              >
                <div className="relative aspect-[9/12] rounded-lg overflow-hidden bg-black mb-2.5">
                  <img
                    src={HOTLINK_THUMBNAIL}
                    alt={clip.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[#00e676] text-[10px] font-bold border border-[#00e676]/30">
                    Skor {clip.score}
                  </span>
                  <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/80 text-white font-mono text-[10px]">
                    {clip.duration}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1">{clip.title}</h4>
                <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1">
                  <span>{clip.date}</span>
                  <span className="text-emerald-400">{clip.views}</span>
                </div>
                <div className="flex gap-2 mt-3 pt-2 border-t border-[#232836]">
                  <button className="flex-1 py-1 px-2 rounded-lg bg-[#232836] hover:bg-[#31374a] text-white text-[11px] font-semibold flex items-center justify-center gap-1">
                    <Download className="w-3 h-3" /> Unduh
                  </button>
                  <button className="py-1 px-2 rounded-lg bg-[#232836] hover:bg-[#31374a] text-gray-300 text-[11px]">
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View: Kalender (Schedule) */}
      {activeTab === 'kalender' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#00e676]" />
              <span>Kalender Publikasi & Jadwal Unggah</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Jadwalkan posting otomatis klip YouTube Shorts, Instagram Reels, dan TikTok langsung dari WayinVideo.
            </p>
          </div>

          <div className="bg-[#161922] rounded-2xl border border-[#232836] p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-white">September 2026</span>
              <span className="text-xs text-[#00e676] bg-[#00e676]/10 px-2.5 py-1 rounded-full border border-[#00e676]/30">
                3 Klip Terjadwal Minggu Ini
              </span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day) => (
                <div key={day} className="text-gray-400 font-semibold py-1">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const dayNum = i + 1;
                const hasPost = dayNum === 11 || dayNum === 14 || dayNum === 18;
                return (
                  <div
                    key={i}
                    className={`h-16 rounded-xl border p-1 text-left flex flex-col justify-between ${
                      hasPost
                        ? 'bg-[#11241f] border-[#00e676]/50'
                        : 'bg-[#12141c] border-[#232836]'
                    }`}
                  >
                    <span className="text-[11px] font-mono text-gray-400">{dayNum}</span>
                    {hasPost && (
                      <span className="text-[9px] bg-[#00e676] text-black font-bold px-1 rounded truncate">
                        TikTok 19:00
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* View: Kit Merek (Brand Kit) */}
      {activeTab === 'kit_merek' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#00e676]" />
              <span>Kit Merek & Identitas Visual</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Sesuaikan watermark, palet warna subtitle, font khusus, dan logo intro/outro video.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161922] p-5 rounded-2xl border border-[#232836] space-y-4">
              <h3 className="text-sm font-bold text-white">Palet Warna Subtitle</h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00e676] border border-white/20"></div>
                <div className="w-8 h-8 rounded-lg bg-amber-400 border border-white/20"></div>
                <div className="w-8 h-8 rounded-lg bg-cyan-400 border border-white/20"></div>
                <div className="w-8 h-8 rounded-lg bg-purple-500 border border-white/20"></div>
                <div className="w-8 h-8 rounded-lg bg-white border border-white/20"></div>
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Font Utama</label>
                <input
                  type="text"
                  defaultValue="Montserrat Black (Bold Pop)"
                  className="w-full bg-[#0f1117] border border-[#232836] rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="bg-[#161922] p-5 rounded-2xl border border-[#232836] space-y-4">
              <h3 className="text-sm font-bold text-white">Watermark & Logo</h3>
              <div className="border-2 border-dashed border-[#232836] rounded-xl p-6 text-center text-xs text-gray-400">
                <span>Seret logo PNG transparan Anda ke sini</span>
              </div>
              <button
                onClick={onOpenUpgrade}
                className="w-full py-2 rounded-xl bg-[#232836] hover:bg-[#31374a] text-xs font-semibold text-gray-200 transition"
              >
                Hapus Watermark WayinVideo (Fitur Pro)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View: Harga (Pricing) */}
      {activeTab === 'harga' && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <CircleDollarSign className="w-6 h-6 text-[#00e676]" />
              <span>Pilihan Paket & Langganan</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Hemat hingga 65% dengan paket tahunan. Bebas batasan kuota untuk semua kreator video.
            </p>
            <button
              onClick={onOpenUpgrade}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#00e676] hover:bg-emerald-400 text-black font-bold text-xs transition shadow-lg shadow-[#00e676]/20 cursor-pointer"
            >
              Lihat Detail Promo Diskon 65%
            </button>
          </div>
        </div>
      )}

      {/* View: Hadiah (Rewards / Referral) */}
      {activeTab === 'hadiah' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#00e676]" />
              <span>Program Hadiah & Referral Clipper</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Ajak sesama clipper & editor video, dapatkan tambahan 60 menit durasi pemrosesan gratis per teman.
            </p>
          </div>

          <div className="bg-[#161922] p-5 rounded-2xl border border-[#232836] space-y-4">
            <div className="text-xs text-gray-300">
              Tautan Undangan Khusus Anda:
            </div>
            <div className="flex items-center gap-2 bg-[#0f1117] border border-[#232836] rounded-xl p-2 px-3">
              <span className="text-xs font-mono text-gray-300 flex-1 truncate">
                https://wayinvideo.ai/ref/riska-clipper-2026
              </span>
              <button
                onClick={() => alert('Tautan berhasil disalin!')}
                className="px-3 py-1 rounded-lg bg-[#00e676] text-black font-bold text-xs hover:bg-emerald-400 transition"
              >
                Salin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View: API Developer Docs */}
      {activeTab === 'api' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#00e676]" />
              <span>Dokumentasi API WayinVideo AI</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Integrasikan endpoint AI video clipping ke bot Discord, sistem CMS, atau aplikasi internal Anda.
            </p>
          </div>

          <div className="bg-[#161922] p-5 rounded-2xl border border-[#232836] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-[#00e676]" /> Kunci API Aktif Anda
              </span>
              <span className="text-[10px] text-[#00e676] bg-[#00e676]/10 px-2 py-0.5 rounded border border-[#00e676]/30">
                Production Ready
              </span>
            </div>
            <div className="bg-[#0f1117] p-3 rounded-xl border border-[#232836] font-mono text-xs text-gray-300 flex justify-between items-center">
              <span>wy_live_89f0293da828472910baef98</span>
              <button
                onClick={() => alert('API Key disalin')}
                className="text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-400 block mb-2">
                Contoh Request cURL:
              </span>
              <pre className="bg-[#0f1117] p-3.5 rounded-xl border border-[#232836] font-mono text-[11px] text-gray-300 overflow-x-auto">
{`curl -X POST https://api.wayinvideo.com/v1/clips/extract \\
  -H "Authorization: Bearer wy_live_89f0293..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "format": "9:16",
    "subtitle_style": "alex_hormozi",
    "max_clips": 3
  }'`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
