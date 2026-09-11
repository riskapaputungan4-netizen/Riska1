import React from 'react';
import {
  Video,
  Search,
  Film,
  Gamepad2,
  Scissors,
  FileText,
  ListOrdered,
  MessageSquare,
  Mic,
  Maximize2,
  Image,
  Zap,
} from 'lucide-react';
import { ToolId } from '../types';

interface FeaturePillsProps {
  activeTool: ToolId;
  onSelectTool: (id: ToolId) => void;
}

const ICONS_MAP: Record<ToolId, React.ComponentType<{ className?: string }>> = {
  pemotongan_ai: Video,
  temukan_momen: Search,
  sorotan_sekali_klik: Film,
  pemotongan_gim: Gamepad2,
  editor_video: Scissors,
  ringkasan_video: FileText,
  transkrip_video: ListOrdered,
  subtitle_ai: MessageSquare,
  peningkat_ucapan: Mic,
  ai_bingkai_ulang: Maximize2,
  b_roll: Image,
  pengait_ai: Zap,
};

const TOOLS_CONFIG: { id: ToolId; label: string }[] = [
  { id: 'pemotongan_ai', label: 'Pemotongan AI' },
  { id: 'temukan_momen', label: 'Temukan Momen' },
  { id: 'sorotan_sekali_klik', label: 'Sorotan Sekali Klik' },
  { id: 'pemotongan_gim', label: 'Pemotongan Gim' },
  { id: 'editor_video', label: 'Editor Video' },
  { id: 'ringkasan_video', label: 'Ringkasan Video' },
  { id: 'transkrip_video', label: 'Transkrip Video' },
  { id: 'subtitle_ai', label: 'Subtitle AI' },
  { id: 'peningkat_ucapan', label: 'Peningkat Ucapan' },
  { id: 'ai_bingkai_ulang', label: 'AI Bingkai Ulang' },
  { id: 'b_roll', label: 'B-Roll' },
  { id: 'pengait_ai', label: 'Pengait AI' },
];

export const FeaturePills: React.FC<FeaturePillsProps> = ({ activeTool, onSelectTool }) => {
  return (
    <section
      aria-label="Alat Repurposing Video"
      className="w-full max-w-4xl flex flex-wrap items-center justify-center gap-2 md:gap-2.5 mb-7 sm:mb-8"
    >
      {TOOLS_CONFIG.map((tool) => {
        const Icon = ICONS_MAP[tool.id];
        const isActive = activeTool === tool.id;

        return (
          <button
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer select-none ${
              isActive
                ? 'bg-[#11241f] border border-[#00e676] text-[#00e676] font-semibold glow-green-sm shadow-md'
                : 'bg-[#161922] hover:bg-[#1c212c] border border-[#232836] text-gray-300 hover:text-white hover:border-gray-600'
            }`}
          >
            <Icon
              className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#00e676]' : 'text-gray-400'}`}
            />
            <span className="whitespace-nowrap">{tool.label}</span>
          </button>
        );
      })}
    </section>
  );
};
