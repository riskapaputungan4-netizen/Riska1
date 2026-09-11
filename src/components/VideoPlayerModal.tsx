import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Sparkles,
  Scissors,
} from 'lucide-react';
import { VideoInfo } from '../types';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoInfo;
  onStartClip: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  video,
  onStartClip,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(74); // 01:14
  const totalSeconds = 1001; // 16:41

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= totalSeconds ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#232836] bg-[#0f1117]">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-100 bg-red-600 px-2 py-0.5 rounded shadow shrink-0">
              {video.source}
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-white truncate">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#232836] transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Subtitle simulation bar */}
          <div className="absolute bottom-16 inset-x-4 text-center pointer-events-none">
            <span className="bg-black/80 px-3 py-1.5 rounded text-xs sm:text-sm font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wide">
              "Kuncinya adalah retensi 3 detik pertama dan pemilihan hook provokatif!"
            </span>
          </div>

          {/* Hover Play/Pause center overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#00e676] text-black flex items-center justify-center shadow-2xl transform transition hover:scale-110">
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </div>
          </button>

          {/* Control Bar Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 pt-6 flex flex-col gap-2">
            {/* Scrubber */}
            <input
              type="range"
              min={0}
              max={totalSeconds}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00e676]"
            />

            <div className="flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#00e676] transition cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#00e676] transition cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-gray-400">
                  {formatTime(currentTime)} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#00e676] bg-[#00e676]/10 px-2 py-0.5 rounded border border-[#00e676]/30">
                  Audio Jernih (48kHz)
                </span>
                <button
                  onClick={() => setCurrentTime(0)}
                  className="hover:text-white p-1 transition cursor-pointer"
                  title="Ulangi dari Awal"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with quick action */}
        <div className="p-4 bg-[#0f1117] border-t border-[#232836] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <div className="font-semibold text-white">Kreator: {video.creator}</div>
            <p className="text-[11px] text-gray-400">
              Deteksi otomatis momen terbaik siap dipotong ke 9:16 Shorts
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onStartClip();
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#00e676] hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-[#00e676]/20"
          >
            <Scissors className="w-4 h-4" />
            <span>Ekstrak Klip dari Video Ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
