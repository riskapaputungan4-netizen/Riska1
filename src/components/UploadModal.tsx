import React, { useState, useRef } from 'react';
import { X, UploadCloud, Film, Check, AlertCircle } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (filename: string, duration: string) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onUploadSuccess,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      startUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      startUpload(e.target.files[0]);
    }
  };

  const startUpload = (file: File) => {
    setFileName(file.name);
    setUploading(true);
    setUploadProgress(10);

    const intv = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intv);
          setTimeout(() => {
            setUploading(false);
            onUploadSuccess(file.name, '00:12:30');
            onClose();
          }, 600);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#11141c] border border-[#232836] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#232836] bg-[#0f1117]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Unggah Video Lokal</h3>
              <p className="text-[11px] text-gray-400">Mendukung MP4, MOV, WEBM hingga 2GB</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#232836] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Zone */}
        <div className="p-6">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/quicktime,video/webm"
            className="hidden"
            onChange={handleFileChange}
          />

          {!uploading ? (
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition ${
                dragActive
                  ? 'border-[#00e676] bg-[#00e676]/5'
                  : 'border-[#232836] hover:border-[#00e676]/50 bg-[#161922]/50 hover:bg-[#161922]'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-[#1c212c] flex items-center justify-center text-[#00e676] mb-4 border border-[#232836]">
                <Film className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Tarik dan lepaskan file video ke sini
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                atau klik untuk memilih file dari komputer atau ponsel Anda
              </p>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#232836] text-xs font-semibold text-gray-200 hover:bg-[#31374a] transition">
                Pilih Berkas Video
              </div>
              <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Privasi aman: video diproses secara terenkripsi untuk klip Anda</span>
              </div>
            </div>
          ) : (
            <div className="py-8 px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676] mb-4 animate-bounce">
                <UploadCloud className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-white mb-1">Mengunggah {fileName}...</div>
              <p className="text-xs text-gray-400 mb-4">
                Menyiapkan file untuk diekstrak oleh mesin AI WayinVideo
              </p>

              {/* Progress */}
              <div className="w-full bg-[#161922] rounded-full h-2 overflow-hidden border border-[#232836] mb-2">
                <div
                  className="bg-[#00e676] h-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <div className="text-xs font-mono text-[#00e676]">{uploadProgress}%</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
