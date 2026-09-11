/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SidebarTab, ToolId, OutputFormat, VideoInfo } from './types';
import { DEFAULT_VIDEO, TOOL_ITEMS } from './data/mockData';
import { TopNavbar } from './components/TopNavbar';
import { Sidebar } from './components/Sidebar';
import { FeaturePills } from './components/FeaturePills';
import { VideoCard } from './components/VideoCard';
import { ExtractionModal } from './components/ExtractionModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { UploadModal } from './components/UploadModal';
import { ChangeUrlModal } from './components/ChangeUrlModal';
import { UpgradeModal } from './components/UpgradeModal';
import { ExportModal } from './components/ExportModal';
import { SupportChatWidget } from './components/SupportChatWidget';
import { OtherViews } from './components/OtherViews';

export default function App() {
  const [activeTab, setActiveTab] = useState<SidebarTab>('beranda');
  const [activeTool, setActiveTool] = useState<ToolId>('pemotongan_ai');
  const [currentVideo, setCurrentVideo] = useState<VideoInfo>(DEFAULT_VIDEO);
  const [urlInput, setUrlInput] = useState<string>(DEFAULT_VIDEO.url);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('9:16');
  const [subtitleStyle, setSubtitleStyle] = useState<string>('Alex Hormozi (Bold Pop)');
  const [currentLanguage, setCurrentLanguage] = useState<string>('Indonesia');

  // Modals state
  const [isExtractionOpen, setIsExtractionOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isChangeUrlOpen, setIsChangeUrlOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Active tool information
  const selectedToolObj = TOOL_ITEMS.find((t) => t.id === activeTool) || TOOL_ITEMS[0];

  const handleSelectVideo = (video: VideoInfo) => {
    setCurrentVideo(video);
    setUrlInput(video.url);
  };

  const handleUploadSuccess = (fileName: string, duration: string) => {
    const uploadedVideo: VideoInfo = {
      url: `file://${fileName}`,
      title: fileName.replace(/\.[^/.]+$/, ''),
      creator: 'Berkas Lokal Anda',
      source: 'Lokal (MP4)',
      duration: duration || '00:14:20',
      audioQuality: 'Audio Jernih (Stereo)',
      thumbnailUrl: DEFAULT_VIDEO.thumbnailUrl,
      description: 'Video lokal berhasil diunggah dan siap dianalisis oleh AI.',
    };
    setCurrentVideo(uploadedVideo);
    setUrlInput(`file://${fileName}`);
  };

  return (
    <div className="h-screen w-screen bg-[#0a0c10] text-gray-100 font-sans antialiased overflow-hidden flex flex-col selection:bg-[#00e676]/30 selection:text-[#00e676]">
      {/* BEGIN: TopNavigationBar */}
      <TopNavbar
        onBack={() => setActiveTab('beranda')}
        onOpenUpgrade={() => setIsUpgradeOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        currentLanguage={currentLanguage}
        onSelectLanguage={setCurrentLanguage}
        onOpenSkills={() => setActiveTool('pemotongan_ai')}
        onOpenApiDocs={() => setActiveTab('api')}
      />
      {/* END: TopNavigationBar */}

      {/* BEGIN: MainLayoutContainer */}
      <div className="flex-1 flex overflow-hidden">
        {/* BEGIN: LeftSidebar */}
        <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />
        {/* END: LeftSidebar */}

        {/* Central Content Area */}
        {activeTab === 'beranda' ? (
          <main className="flex-1 overflow-y-auto px-4 md:px-8 py-7 md:py-8 flex flex-col items-center custom-scrollbars relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-36 bg-[#10b981]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

            {/* Hero Title Header */}
            <div className="text-center max-w-2xl mb-6 md:mb-7">
              <h1 className="text-2xl md:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
                Pilih apa yang akan dilakukan dengan video ini
              </h1>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                Gunakan kecerdasan buatan untuk mengekstrak sorotan terbaik dan mendongkrak views Anda.
              </p>
            </div>

            {/* Tool Mode Pill Selector (12 Features) */}
            <FeaturePills activeTool={activeTool} onSelectTool={setActiveTool} />

            {/* Video Input and Main Preview Card */}
            <VideoCard
              video={currentVideo}
              urlInput={urlInput}
              setUrlInput={setUrlInput}
              outputFormat={outputFormat}
              setOutputFormat={setOutputFormat}
              subtitleStyle={subtitleStyle}
              setSubtitleStyle={setSubtitleStyle}
              onOpenPlayer={() => setIsPlayerOpen(true)}
              onOpenChangeUrl={() => setIsChangeUrlOpen(true)}
              onStartExtraction={() => setIsExtractionOpen(true)}
              onOpenUpload={() => setIsUploadOpen(true)}
            />

            {/* Floating Support Chat Trigger & Widget */}
            <SupportChatWidget />
          </main>
        ) : (
          <OtherViews
            activeTab={activeTab}
            onBackToHome={() => setActiveTab('beranda')}
            onOpenUpgrade={() => setIsUpgradeOpen(true)}
          />
        )}
      </div>
      {/* END: MainLayoutContainer */}

      {/* Interactive Modals */}
      <ExtractionModal
        isOpen={isExtractionOpen}
        onClose={() => setIsExtractionOpen(false)}
        videoTitle={currentVideo.title}
        thumbnailUrl={currentVideo.thumbnailUrl}
        outputFormat={outputFormat}
        subtitleStyle={subtitleStyle}
        toolName={selectedToolObj.label}
      />

      <VideoPlayerModal
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        video={currentVideo}
        onStartClip={() => setIsExtractionOpen(true)}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />

      <ChangeUrlModal
        isOpen={isChangeUrlOpen}
        onClose={() => setIsChangeUrlOpen(false)}
        currentUrl={urlInput}
        onSelectVideo={handleSelectVideo}
      />

      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
