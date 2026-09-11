import React from 'react';
import { Link2, Play, Zap } from 'lucide-react';
import { OutputFormat, VideoInfo } from '../types';
import { SUBTITLE_PRESETS } from '../data/mockData';

interface VideoCardProps {
  video: VideoInfo;
  urlInput: string;
  setUrlInput: (val: string) => void;
  outputFormat: OutputFormat;
  setOutputFormat: (fmt: OutputFormat) => void;
  subtitleStyle: string;
  setSubtitleStyle: (style: string) => void;
  onOpenPlayer: () => void;
  onOpenChangeUrl: () => void;
  onStartExtraction: () => void;
  onOpenUpload: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  urlInput,
  setUrlInput,
  outputFormat,
  setOutputFormat,
  subtitleStyle,
  setSubtitleStyle,
  onOpenPlayer,
  onOpenChangeUrl,
  onStartExtraction,
  onOpenUpload,
}) => {
  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      {/* URL Input Bar */}
      <div className="w-full mb-4">
        <div className="relative flex items-center bg-[#161922] border border-[#232836] hover:border-gray-500 focus-within:border-[#00e676] rounded-full px-4 py-2.5 transition shadow-inner">
          {/* Link Icon */}
          <Link2 className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />

          {/* URL Text Input */}
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="bg-transparent border-0 text-xs md:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-0 w-full p-0 leading-relaxed font-mono"
            placeholder="Tempel tautan video (YouTube, TikTok, Google Drive)..."
          />

          {/* Ganti (Change) Button */}
          <button
            type="button"
            onClick={onOpenChangeUrl}
            className="ml-2 text-xs text-[#00e676] hover:text-emerald-400 font-semibold px-2 py-0.5 rounded transition cursor-pointer"
          >
            Ganti
          </button>
        </div>
      </div>

      {/* Video Source Card Preview */}
      <div className="w-full bg-[#161922] rounded-2xl border border-[#232836] hover:border-[#31374a] transition p-3.5 shadow-xl custom-gradient-card">
        {/* Thumbnail & Video Player Container */}
        <div
          onClick={onOpenPlayer}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer"
          title="Klik untuk memutar video"
        >
          {/* Hotlinked exact reference image */}
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-[#00e676] group-hover:text-black group-hover:border-transparent transition-all shadow-2xl">
              <Play className="w-6 h-6 fill-current text-white group-hover:text-[#080a0d] transition-colors" />
            </div>
          </div>

          {/* Thumbnail Bottom Details */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between pointer-events-none">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-black/70 text-[#00e676] font-mono text-[11px] font-bold tracking-wider backdrop-blur-md border border-white/10">
              {video.duration}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-100 bg-red-600 px-2 py-0.5 rounded shadow">
              {video.source}
            </span>
          </div>
        </div>

        {/* Video Metadata & Descriptions */}
        <div className="mt-3.5 px-1">
          <h2
            onClick={onOpenPlayer}
            className="text-sm md:text-base font-bold text-white line-clamp-1 hover:text-[#00e676] transition cursor-pointer"
          >
            {video.title}
          </h2>
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
            <span className="hover:text-gray-200">{video.source}</span>
            <span>•</span>
            <span className="text-gray-300 font-medium">{video.creator}</span>
            <span>•</span>
            <span className="text-[#00e676] font-medium">{video.audioQuality}</span>
          </div>
        </div>

        {/* Repurposing Configuration Options Panel */}
        <div className="mt-4 pt-3 border-t border-[#232836] space-y-3">
          {/* Format Output Switcher */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Format Output:</span>
            <div className="flex items-center gap-1 bg-[#0b0e14] p-1 rounded-lg border border-[#232836]">
              <button
                type="button"
                onClick={() => setOutputFormat('9:16')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                  outputFormat === '9:16'
                    ? 'bg-[#161922] text-[#00e676] border border-[#00e676]/40 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                9:16 Shorts
              </button>
              <button
                type="button"
                onClick={() => setOutputFormat('1:1')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                  outputFormat === '1:1'
                    ? 'bg-[#161922] text-[#00e676] border border-[#00e676]/40 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                1:1 Persegi
              </button>
              <button
                type="button"
                onClick={() => setOutputFormat('16:9')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                  outputFormat === '16:9'
                    ? 'bg-[#161922] text-[#00e676] border border-[#00e676]/40 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                16:9 Asli
              </button>
            </div>
          </div>

          {/* Subtitle Style & AI Preset */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Gaya Subtitle:</span>
            <select
              value={subtitleStyle}
              onChange={(e) => setSubtitleStyle(e.target.value)}
              className="bg-[#0b0e14] border border-[#232836] text-gray-200 text-xs rounded-lg py-1 px-2.5 focus:border-[#00e676] focus:ring-0 focus:outline-none cursor-pointer"
            >
              {SUBTITLE_PRESETS.map((preset) => (
                <option key={preset.id} value={preset.name} className="bg-[#161922] text-gray-200">
                  {preset.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={onStartExtraction}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00e676] via-emerald-500 to-emerald-600 hover:from-[#00e676] hover:to-emerald-500 text-[#080a0d] font-bold text-sm tracking-wide transition transform active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-[#00e676]/20 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Mulai Ekstrak Klip AI (Otomatis)</span>
          </button>
        </div>
      </div>

      {/* Optional Alternate: Upload Offline Video */}
      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={onOpenUpload}
          className="text-xs text-gray-400 hover:text-gray-200 underline decoration-gray-600 underline-offset-4 transition cursor-pointer"
        >
          atau unggah video lokal dari perangkat Anda (MP4, MOV maks 2GB)
        </button>
      </div>
    </div>
  );
};
