import React from 'react';
import { X, Sparkles, Check, Crown, Zap } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tiers = [
    {
      name: 'Starter AI',
      price: 'Rp 99.000',
      period: '/bulan',
      desc: 'Cocok untuk clipper solo yang baru memulai.',
      features: [
        '120 menit video processing/bln',
        'Ekspor 1080p tanpa watermark',
        'Gaya subtitle Alex Hormozi',
        'Deteksi hook 3 detik otomatis',
      ],
      current: false,
      cta: 'Pilih Starter',
      popular: false,
    },
    {
      name: 'Pro Creator',
      discountBadge: 'Diskon 65% Terlaris',
      price: 'Rp 189.000',
      oldPrice: 'Rp 540.000',
      period: '/bulan',
      desc: 'Untuk kreator dan agensi clipping video pendek aktif.',
      features: [
        'Durasi video tanpa batas',
        'Ekspor Ultra HD 4K 60fps',
        'Semua gaya subtitle + custom preset',
        'AI B-Roll otomatis bersuara',
        'Prioritas render antrian super cepat',
        'Auto scheduling ke TikTok & Reels',
      ],
      current: true,
      cta: 'Klaim Diskon 65% Sekarang',
      popular: true,
    },
    {
      name: 'Agency Scale',
      price: 'Rp 499.000',
      period: '/bulan',
      desc: 'Multi-seat untuk tim agensi konten dan brand besar.',
      features: [
        'Akses API developer tanpa batas',
        '5 Akun anggota tim',
        'Kit Merek custom font & logo',
        'Dedicated account manager',
      ],
      current: false,
      cta: 'Hubungi Tim',
      popular: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Banner */}
        <div className="p-5 sm:p-6 text-center border-b border-[#232836] bg-gradient-to-b from-[#11241f] to-[#11141c] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#232836] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00e676]/10 border border-[#00e676]/40 text-[#00e676] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PENAWARAN TERBATAS HARI INI</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Tingkatkan ke Pro & Hasilkan Lebih Banyak Views
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl mx-auto">
            Dapatkan akses penuh ke rendering 4K, AI B-roll otomatis, dan subtitle dinamis tanpa batasan kuota.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbars">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-5 border flex flex-col justify-between transition ${
                  tier.popular
                    ? 'bg-[#161922] border-[#00e676] shadow-xl shadow-[#00e676]/10 ring-1 ring-[#00e676]'
                    : 'bg-[#141720] border-[#232836]'
                }`}
              >
                {tier.discountBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00e676] text-black text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    {tier.discountBadge}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{tier.name}</span>
                    {tier.popular && <Crown className="w-4 h-4 text-amber-400" />}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 mb-3">{tier.desc}</p>

                  <div className="flex items-baseline gap-1 mb-4">
                    {tier.oldPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {tier.oldPrice}
                      </span>
                    )}
                    <span className="text-xl sm:text-2xl font-black text-white">
                      {tier.price}
                    </span>
                    <span className="text-[11px] text-gray-400">{tier.period}</span>
                  </div>

                  <div className="space-y-2 border-t border-[#232836] pt-3 text-xs text-gray-300">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00e676] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={onClose}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 ${
                      tier.popular
                        ? 'bg-[#00e676] hover:bg-emerald-400 text-black shadow-lg shadow-[#00e676]/20'
                        : 'bg-[#232836] hover:bg-[#31374a] text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>{tier.cta}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
