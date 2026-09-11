import { ToolItem, SubtitlePreset, VideoInfo, GeneratedClip } from '../types';

export const HOTLINK_THUMBNAIL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD-81wyF2Z0FGOAR4ZNGobc4JgiklH9tkKRGAZ8NjeUiabZmvkD9uOIEThxmRxXrpe9ZA64Y5BmXy4ZTRRWMoO8leaDndx3zKwgLb1ZHnDztFvvaYqtTBSlLGMRWkksZpeJssDrQfLI6vObMgO76wZDx2PET4BiBNJFbhwkWmIWTupj1EeDlmnOa4ePia3rbmmLcr-JLnbEl_gq5E-_VFBiqd_aG7Fw6V30PUjRREXmI9WwxgtEwSQDpj4OFScfTX2Zt-s';

export const DEFAULT_VIDEO: VideoInfo = {
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  title: 'Cara Clipper HASILIN 2 DIGIT Per Bulan...',
  creator: 'Leo Giovanni',
  source: 'YouTube',
  duration: '00:16:41',
  audioQuality: 'Audio Jernih',
  thumbnailUrl: HOTLINK_THUMBNAIL,
  description: 'Rahasia strategi clipping konten YouTube menjadi video pendek viral di TikTok & Reels yang bisa menghasilkan puluhan juta rupiah.',
};

export const SAMPLE_VIDEOS: VideoInfo[] = [
  DEFAULT_VIDEO,
  {
    url: 'https://www.youtube.com/watch?v=k3Yk2r8V3t8',
    title: 'Strategi Konten FYP TikTok 2026: Algoritma Terbaru',
    creator: 'Denny Santoso',
    source: 'YouTube',
    duration: '00:24:15',
    audioQuality: 'Audio Jernih (48kHz)',
    thumbnailUrl: HOTLINK_THUMBNAIL,
    description: 'Panduan lengkap optimasi retention rate, hook 3 detik pertama, dan pemilihan audio tren.',
  },
  {
    url: 'https://www.youtube.com/watch?v=m7N_t4V9xL2',
    title: 'Podcast Bisnis: Cara Memulai Agensi Video AI dari Nol',
    creator: 'Raymond Chin',
    source: 'YouTube',
    duration: '00:45:10',
    audioQuality: 'Studio Pro',
    thumbnailUrl: HOTLINK_THUMBNAIL,
    description: 'Wawancara eksklusif mengupas model bisnis automated short-form agency tanpa wajah.',
  },
];

export const TOOL_ITEMS: ToolItem[] = [
  {
    id: 'pemotongan_ai',
    label: 'Pemotongan AI',
    iconName: 'Video',
    description: 'AI memotong klip otomatis mencari retention tertinggi & poin penting pembicara.',
  },
  {
    id: 'temukan_momen',
    label: 'Temukan Momen',
    iconName: 'Search',
    description: 'Cari kata kunci, topik atau emosi tertentu dari seluruh durasi video secara instan.',
  },
  {
    id: 'sorotan_sekali_klik',
    label: 'Sorotan Sekali Klik',
    iconName: 'Film',
    description: 'Otomatis buat kompilasi best moments & punchlines dalam hitungan detik.',
  },
  {
    id: 'pemotongan_gim',
    label: 'Pemotongan Gim',
    iconName: 'Gamepad2',
    description: 'Deteksi clutch moments, kill streak, dan facecam reaksi gaming streamer.',
  },
  {
    id: 'editor_video',
    label: 'Editor Video',
    iconName: 'Scissors',
    description: 'Editor multi-track browser untuk trimming, zoom otomatis, dan layering b-roll.',
  },
  {
    id: 'ringkasan_video',
    label: 'Ringkasan Video',
    iconName: 'FileText',
    description: 'Hasilkan ringkasan poin-poin penting dan mindmap ide konten dalam format teks.',
  },
  {
    id: 'transkrip_video',
    label: 'Transkrip Video',
    iconName: 'ListOrdered',
    description: 'Transkrip akurat kata per kata dengan stempel waktu dan deteksi pembicara.',
  },
  {
    id: 'subtitle_ai',
    label: 'Subtitle AI',
    iconName: 'MessageSquare',
    description: 'Otomatisasi subtitle dinamis dengan font tebal, emoji animasi, dan warna pop.',
  },
  {
    id: 'peningkat_ucapan',
    label: 'Peningkat Ucapan',
    iconName: 'Mic',
    description: 'Bersihkan noise latar belakang, tingkatkan kejernihan suara studio dengan AI audio enhancer.',
  },
  {
    id: 'ai_bingkai_ulang',
    label: 'AI Bingkai Ulang',
    iconName: 'Maximize2',
    description: 'Auto-reframe 16:9 menjadi 9:16 vertikal dengan pelacakan wajah aktif (face tracker).',
  },
  {
    id: 'b_roll',
    label: 'B-Roll',
    iconName: 'Image',
    description: 'Otomatis sisipkan visual b-roll relevan sesuai topik yang sedang diucapkan.',
  },
  {
    id: 'pengait_ai',
    label: 'Pengait AI',
    iconName: 'Zap',
    description: 'Buat pembuka hook 3 detik yang memicu penasaran tinggi untuk mencegah swipe-away.',
  },
];

export const SUBTITLE_PRESETS: SubtitlePreset[] = [
  {
    id: 'hormozi',
    name: 'Alex Hormozi (Bold Pop)',
    description: 'Teks kapital tebal dengan highlight kata aktif warna kuning & hijau neon.',
    previewSample: 'HASILIN 2 DIGIT DARI RUMAH!',
    badgeColor: 'text-amber-400',
  },
  {
    id: 'karaoke_neon',
    name: 'Karaoke Neon Green',
    description: 'Efek sing-along glow hijau neon persis mengikuti ritme suara pengucapan.',
    previewSample: 'KUNCI SUKSES CLIPPER KONTEN',
    badgeColor: 'text-brand-neon',
  },
  {
    id: 'minimalist_white',
    name: 'Minimalist White',
    description: 'Font sans-serif bersih dengan latar belakang bayangan lembut elegan.',
    previewSample: 'Strategi konsistensi upload harian',
    badgeColor: 'text-white',
  },
  {
    id: 'tiktok_viral',
    name: 'TikTok Viral Preset',
    description: 'Animasi pop bouncing dengan emoji otomatis di setiap kata kunci emosional.',
    previewSample: 'JANGAN PERNAH LAKUKAN INI 😱💥',
    badgeColor: 'text-cyan-400',
  },
];

export const MOCK_GENERATED_CLIPS: GeneratedClip[] = [
  {
    id: 'clip-1',
    title: 'Mindset Pertama Clipper Pemula yang Salah Kaprah',
    viralityScore: 98,
    duration: '00:48',
    startTime: '01:20',
    endTime: '02:08',
    hook: '"Banyak orang kira jadi clipper itu cuma potong-potong video, padahal..."',
    summary: 'Menjelaskan kesalahan fatal memilih video sumber dan bagaimana memilih segmen beremosi tinggi.',
    tags: ['#ClipperTips', '#SideHustle', '#ViralShorts', '#LeoGiovanni'],
  },
  {
    id: 'clip-2',
    title: 'Rumus 3 Detik Hook yang Bikin Penonton Nonton Sampai Habis',
    viralityScore: 95,
    duration: '00:39',
    startTime: '05:42',
    endTime: '06:21',
    hook: '"Kalau 3 detik pertama kamu gak bikin penasaran, video kamu langsung dilewati!"',
    summary: 'Bedah teknik sound effect whoosh + visual zoom in + teks provokatif yang menahan swipe.',
    tags: ['#RetentionRate', '#AlgoritmaTikTok', '#TipsFYP'],
  },
  {
    id: 'clip-3',
    title: 'Cara Cari Klien Luar Negeri Bayar Dollar',
    viralityScore: 91,
    duration: '00:54',
    startTime: '11:15',
    endTime: '12:09',
    hook: '"Jangan cuma target kreator lokal, ini cara DM YouTuber US dengan portofolio AI."',
    summary: 'Template cold message dan pengiriman sample draft klip gratis yang terbukti closing 4 dari 10 pitch.',
    tags: ['#FreelanceClipper', '#KerjaRemote', '#DollarIncome'],
  },
];
