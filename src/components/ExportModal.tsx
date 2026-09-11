import React, { useState } from 'react';
import {
  X,
  Globe,
  Github,
  Server,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Download,
  Sparkles,
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [activePlatform, setActivePlatform] = useState<'vercel' | 'netlify' | 'docker' | 'local'>('vercel');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#232836] bg-[#0f1117]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Panduan Ekspor ke Hosting Sendiri</h3>
              <p className="text-[11px] text-gray-400">
                Langkah mudah mempublikasikan WayinVideo AI ke domain & server pribadi Anda
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

        {/* Export Step 1 Notice */}
        <div className="p-4 bg-[#161922] border-b border-[#232836] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-[#00e676]">Langkah 1: Ekspor Kode</span>
            <p className="text-gray-300 text-[11px] mt-0.5">
              Di menu Google AI Studio (kanan atas), klik tombol menu lalu pilih <strong>Export to GitHub</strong> atau <strong>Download ZIP</strong>.
            </p>
          </div>
          <div className="px-3 py-1 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] text-[11px] font-semibold whitespace-nowrap">
            Sudah dikonfigurasi & siap deploy
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#232836] bg-[#0d0f15] px-4 pt-2 gap-2 text-xs">
          {[
            { id: 'vercel', label: 'Vercel (Rekomendasi)', icon: Globe },
            { id: 'netlify', label: 'Netlify', icon: Globe },
            { id: 'docker', label: 'VPS / Docker', icon: Server },
            { id: 'local', label: 'Komputer Lokal', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activePlatform === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePlatform(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-semibold transition cursor-pointer ${
                  isActive
                    ? 'border-[#00e676] text-[#00e676]'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-5 overflow-y-auto space-y-4 custom-scrollbars text-xs">
          {activePlatform === 'vercel' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#11241f] border border-[#00e676]/30 text-gray-200">
                <span className="font-bold text-white">Vercel: Opsi Paling Cepat & Gratis</span>
                <p className="text-[11px] text-gray-300 mt-1">
                  File <code>vercel.json</code> sudah kami sertakan di dalam proyek, jadi Anda tidak perlu menyetel routing manual.
                </p>
              </div>

              <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed">
                <li>Buka <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#00e676] underline">Vercel.com</a> dan buat akun (gratis).</li>
                <li>Klik tombol <strong>Add New Project</strong> &gt; hubungkan dengan repositori GitHub Anda.</li>
                <li>Pilih repositori <strong>wayinvideo-ai</strong> yang baru diekspor.</li>
                <li>
                  Pengaturan build otomatis:
                  <div className="bg-[#0f1117] p-2.5 rounded-lg border border-[#232836] font-mono text-[11px] text-gray-300 mt-1.5 space-y-0.5">
                    <div>Framework Preset: <strong>Vite</strong></div>
                    <div>Build Command: <strong>npm run build</strong></div>
                    <div>Output Directory: <strong>dist</strong></div>
                  </div>
                </li>
                <li>Klik <strong>Deploy</strong>. Selesai dalam 1 menit!</li>
              </ol>
            </div>
          )}

          {activePlatform === 'netlify' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#161922] border border-[#232836] text-gray-200">
                <span className="font-bold text-white">Netlify: Drag & Drop atau Sambungkan Git</span>
                <p className="text-[11px] text-gray-400 mt-1">
                  File <code>public/_redirects</code> sudah otomatis disertakan agar semua halaman web app Anda tidak mengalami error 404 saat di-refresh.
                </p>
              </div>

              <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed">
                <li>Masuk ke <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-[#00e676] underline">Netlify.com</a>.</li>
                <li>Pilih <strong>Add new site</strong> &gt; <strong>Import from GitHub</strong>.</li>
                <li>Atau jalankan <code>npm run build</code> di komputer Anda lalu tarik folder <code>dist</code> ke Netlify Drop.</li>
              </ol>
            </div>
          )}

          {activePlatform === 'docker' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#161922] border border-[#232836] text-gray-200">
                <span className="font-bold text-white">Self-Host VPS dengan Docker & Nginx</span>
                <p className="text-[11px] text-gray-400 mt-1">
                  File <code>Dockerfile</code> dan <code>.dockerignore</code> sudah tersedia di root proyek dengan image Nginx ringan.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-gray-400 mb-1 font-mono text-[11px]">
                  <span>Perintah Build & Run Docker:</span>
                  <button
                    onClick={() => handleCopy("docker build -t wayinvideo-ai .\ndocker run -d -p 80:80 --name wayinvideo wayinvideo-ai", "docker")}
                    className="flex items-center gap-1 text-[#00e676] hover:underline"
                  >
                    {copiedCode === 'docker' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Salin Perintah</span>
                  </button>
                </div>
                <pre className="bg-[#0f1117] p-3 rounded-xl border border-[#232836] font-mono text-[11px] text-[#00e676] overflow-x-auto">
{`# 1. Build image docker
docker build -t wayinvideo-ai .

# 2. Jalankan container di port 80
docker run -d -p 80:80 --name wayinvideo wayinvideo-ai`}
                </pre>
              </div>
            </div>
          )}

          {activePlatform === 'local' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#161922] border border-[#232836] text-gray-200">
                <span className="font-bold text-white">Menjalankan di Komputer / Laptop Sendiri</span>
                <p className="text-[11px] text-gray-400 mt-1">
                  Pastikan Node.js versi 18 atau 20+ sudah terpasang di komputer Anda.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-gray-400 mb-1 font-mono text-[11px]">
                  <span>Perintah Terminal:</span>
                  <button
                    onClick={() => handleCopy("npm install\nnpm run dev", "local")}
                    className="flex items-center gap-1 text-[#00e676] hover:underline"
                  >
                    {copiedCode === 'local' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Salin Perintah</span>
                  </button>
                </div>
                <pre className="bg-[#0f1117] p-3 rounded-xl border border-[#232836] font-mono text-[11px] text-[#00e676] overflow-x-auto">
{`# Pasang semua paket dependensi
npm install

# Jalankan server lokal
npm run dev

# Buka di browser Anda pada http://localhost:3000`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#232836] bg-[#0f1117] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#232836] text-xs text-gray-200 hover:text-white transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
