import React, { useState } from 'react';
import { X, Link2, Check, Video } from 'lucide-react';
import { SAMPLE_VIDEOS } from '../data/mockData';
import { VideoInfo } from '../types';

interface ChangeUrlModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl: string;
  onSelectVideo: (video: VideoInfo) => void;
}

export const ChangeUrlModal: React.FC<ChangeUrlModalProps> = ({
  isOpen,
  onClose,
  currentUrl,
  onSelectVideo,
}) => {
  const [customInput, setCustomInput] = useState(currentUrl);

  if (!isOpen) return null;

  const handleApplyCustom = () => {
    if (!customInput.trim()) return;
    onSelectVideo({
      url: customInput.trim(),
      title: 'Video Baru: Panduan & Tips Konten Viral 2026',
      creator: 'Kreator Terpilih',
      source: customInput.includes('tiktok') ? 'TikTok' : 'YouTube',
      duration: '00:18:22',
      audioQuality: 'Audio Jernih (Stereo)',
      thumbnailUrl: SAMPLE_VIDEOS[0].thumbnailUrl,
      description: 'Video berhasil dimuat dan siap diproses AI.',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#232836] bg-[#0f1117]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Ganti Sumber Video</h3>
              <p className="text-[11px] text-gray-400">
                Mendukung tautan YouTube Shorts, Video Panjang, TikTok & Drive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#232836] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Tempel Tautan URL Video
            </label>
            <div className="relative flex items-center bg-[#161922] border border-[#232836] rounded-xl px-3.5 py-2.5 focus-within:border-[#00e676]">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full bg-transparent border-0 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0 font-mono"
              />
              <button
                onClick={handleApplyCustom}
                className="ml-2 px-3 py-1 rounded-lg bg-[#00e676] text-black font-bold text-xs hover:bg-emerald-400 transition cursor-pointer shrink-0"
              >
                Gunakan
              </button>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-400 mb-2">
              Atau Pilih Contoh Video Populer:
            </div>
            <div className="space-y-2">
              {SAMPLE_VIDEOS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onSelectVideo(item);
                    onClose();
                  }}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${
                    currentUrl === item.url
                      ? 'bg-[#11241f] border-[#00e676]'
                      : 'bg-[#161922] border-[#232836] hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Video className="w-4 h-4 text-[#00e676] shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-white truncate">{item.title}</div>
                      <div className="text-[11px] text-gray-400">
                        {item.creator} • {item.duration}
                      </div>
                    </div>
                  </div>
                  {currentUrl === item.url && (
                    <Check className="w-4 h-4 text-[#00e676] shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#232836] bg-[#0f1117] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#232836] text-xs text-gray-300 hover:text-white transition cursor-pointer"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};
