import React, { useState, useEffect } from 'react';
import {
  X,
  Zap,
  Sparkles,
  Download,
  Share2,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sliders,
  TrendingUp,
} from 'lucide-react';
import { GeneratedClip, OutputFormat } from '../types';
import { MOCK_GENERATED_CLIPS } from '../data/mockData';

interface ExtractionModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  thumbnailUrl: string;
  outputFormat: OutputFormat;
  subtitleStyle: string;
  toolName: string;
}

export const ExtractionModal: React.FC<ExtractionModalProps> = ({
  isOpen,
  onClose,
  videoTitle,
  thumbnailUrl,
  outputFormat,
  subtitleStyle,
  toolName,
}) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);
  const [activeClip, setActiveClip] = useState<GeneratedClip | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [exportedId, setExportedId] = useState<string | null>(null);

  const steps = [
    'Mengunduh video & mengekstrak aliran audio fidelitas tinggi...',
    'Mentranskripsi ucapan bahasa Indonesia & deteksi stempel waktu...',
    'Menilai virality retention & mendeteksi hook 3 detik...',
    `Membingkai ulang ke format ${outputFormat} & menyematkan subtitle ${subtitleStyle}...`,
  ];

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setStepIndex(0);
      setIsProcessing(true);
      setActiveClip(null);
      return;
    }

    setIsProcessing(true);
    setProgress(15);
    setStepIndex(0);

    const timer1 = setTimeout(() => {
      setProgress(45);
      setStepIndex(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setProgress(75);
      setStepIndex(2);
    }, 2200);

    const timer3 = setTimeout(() => {
      setProgress(95);
      setStepIndex(3);
    }, 3400);

    const timer4 = setTimeout(() => {
      setProgress(100);
      setIsProcessing(false);
      setActiveClip(MOCK_GENERATED_CLIPS[0]);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isOpen, outputFormat, subtitleStyle]);

  if (!isOpen) return null;

  const handleCopyCaption = (clip: GeneratedClip) => {
    const text = `${clip.title}\n\n${clip.hook}\n\n${clip.tags.join(' ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(clip.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExport = (clipId: string) => {
    setExportedId(clipId);
    setTimeout(() => {
      setExportedId(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#232836] bg-[#0f1117]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Ekstraksi AI: {toolName}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#161922] text-[#00e676] border border-[#00e676]/30">
                  {outputFormat}
                </span>
              </h2>
              <p className="text-xs text-gray-400 line-clamp-1">{videoTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#232836] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbars">
          {isProcessing ? (
            /* Processing State */
            <div className="py-12 px-4 flex flex-col items-center text-center max-w-lg mx-auto">
              {/* Spinning AI Orb */}
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-[#232836] border-t-[#00e676] animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-[#161922] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#00e676] animate-pulse" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Memproses Klip Video dengan AI
              </h3>
              <p className="text-xs text-gray-400 mb-6 h-8">
                {steps[stepIndex]}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-[#161922] rounded-full h-2.5 overflow-hidden border border-[#232836] mb-3">
                <div
                  className="bg-gradient-to-r from-[#00e676] to-emerald-400 h-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between w-full text-[11px] text-gray-500 font-mono">
                <span>Algoritma AI WayinVideo</span>
                <span>{progress}%</span>
              </div>
            </div>
          ) : (
            /* Results State */
            <div className="space-y-6">
              {/* Success Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#11241f] border border-[#00e676]/40 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#00e676] text-black flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-white">
                      Berhasil Menghasilkan 3 Klip Viral Berpotensi Tinggi!
                    </span>
                    <p className="text-gray-300 text-[11px]">
                      Diformat 9:16 Shorts dengan pelacakan wajah & subtitle {subtitleStyle}.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsProcessing(true);
                      setProgress(0);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161922] text-gray-300 hover:text-white text-[11px] border border-[#232836] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ulangi Analisis</span>
                  </button>
                </div>
              </div>

              {/* Clips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MOCK_GENERATED_CLIPS.map((clip) => {
                  const isSelected = activeClip?.id === clip.id;
                  const isExporting = exportedId === clip.id;

                  return (
                    <div
                      key={clip.id}
                      onClick={() => setActiveClip(clip)}
                      className={`relative rounded-xl p-3.5 border transition cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#161922] border-[#00e676] shadow-lg shadow-[#00e676]/10'
                          : 'bg-[#141720] border-[#232836] hover:border-gray-600'
                      }`}
                    >
                      {/* Top Bar: Virality Score & Duration */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00e676]/10 border border-[#00e676]/40 text-[#00e676] text-[11px] font-bold">
                          <TrendingUp className="w-3 h-3" />
                          <span>Skor {clip.viralityScore}/100</span>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                          {clip.duration}
                        </span>
                      </div>

                      {/* Mock Vertical Video Preview Frame */}
                      <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-black mb-3 group">
                        <img
                          src={thumbnailUrl}
                          alt={clip.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20"></div>

                        {/* Centered Play icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-[#00e676] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Hormozi Subtitle Simulation Overlay */}
                        <div className="absolute bottom-3 inset-x-2 text-center">
                          <div className="inline-block bg-black/80 px-2 py-1 rounded text-[11px] font-extrabold uppercase tracking-wide text-amber-300 border border-amber-400/40">
                            {clip.hook.slice(1, 32)}...
                          </div>
                        </div>
                      </div>

                      {/* Title and Timestamps */}
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-white line-clamp-2 mb-1">
                          {clip.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 line-clamp-2 mb-2">
                          {clip.summary}
                        </p>
                        <div className="text-[10px] text-gray-500 font-mono mb-3">
                          Stempel Waktu: {clip.startTime} - {clip.endTime}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-2 border-t border-[#232836]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExport(clip.id);
                          }}
                          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                            isExporting
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#00e676] hover:bg-emerald-400 text-black'
                          }`}
                        >
                          {isExporting ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Mengunduh...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              <span>Ekspor Klip</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyCaption(clip);
                          }}
                          className="p-1.5 rounded-lg bg-[#0f1117] hover:bg-[#232836] text-gray-400 hover:text-white border border-[#232836] transition cursor-pointer"
                          title="Salin Teks Caption & Hashtag"
                        >
                          {copiedId === clip.id ? (
                            <Check className="w-4 h-4 text-[#00e676]" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inspector of Active Clip */}
              {activeClip && (
                <div className="p-4 rounded-xl bg-[#0f1117] border border-[#232836] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Sliders className="w-4 h-4 text-[#00e676]" />
                      Detail Klip Terpilih: {activeClip.title}
                    </span>
                    <span className="text-gray-400">
                      Gaya Subtitle: <strong className="text-gray-200">{subtitleStyle}</strong>
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 bg-[#161922] p-2.5 rounded-lg border border-[#232836]">
                    <span className="text-[#00e676] font-semibold">Hook Terdeteksi: </span>
                    {activeClip.hook}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeClip.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-gray-400 bg-[#161922] px-2 py-0.5 rounded border border-[#232836]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#232836] bg-[#0f1117] flex items-center justify-between text-xs text-gray-400">
          <span>Format: 1080x1920 Full HD (60fps ready)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#232836] hover:bg-[#31374a] text-white transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
