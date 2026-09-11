export type ToolId =
  | 'pemotongan_ai'
  | 'temukan_momen'
  | 'sorotan_sekali_klik'
  | 'pemotongan_gim'
  | 'editor_video'
  | 'ringkasan_video'
  | 'transkrip_video'
  | 'subtitle_ai'
  | 'peningkat_ucapan'
  | 'ai_bingkai_ulang'
  | 'b_roll'
  | 'pengait_ai';

export interface ToolItem {
  id: ToolId;
  label: string;
  badge?: string;
  description: string;
  iconName: string;
}

export type SidebarTab =
  | 'beranda'
  | 'perpustakaan'
  | 'kalender'
  | 'kit_merek'
  | 'harga'
  | 'hadiah'
  | 'api';

export type OutputFormat = '9:16' | '1:1' | '16:9';

export interface SubtitlePreset {
  id: string;
  name: string;
  description: string;
  previewSample: string;
  badgeColor: string;
}

export interface VideoInfo {
  url: string;
  title: string;
  creator: string;
  source: string;
  duration: string;
  audioQuality: string;
  thumbnailUrl: string;
  description?: string;
}

export interface GeneratedClip {
  id: string;
  title: string;
  viralityScore: number;
  duration: string;
  startTime: string;
  endTime: string;
  hook: string;
  summary: string;
  tags: string[];
}
