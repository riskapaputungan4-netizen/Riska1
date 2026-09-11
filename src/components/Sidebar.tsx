import React from 'react';
import {
  Home,
  FolderClosed,
  Calendar,
  Palette,
  CircleDollarSign,
  Gift,
  Code2,
} from 'lucide-react';
import { SidebarTab } from '../types';

interface SidebarProps {
  activeTab: SidebarTab;
  onSelectTab: (tab: SidebarTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { id: 'beranda' as SidebarTab, label: 'Beranda', icon: Home },
    { id: 'perpustakaan' as SidebarTab, label: 'Perpustakaan', icon: FolderClosed },
    { id: 'kalender' as SidebarTab, label: 'Kalender', icon: Calendar },
    { id: 'kit_merek' as SidebarTab, label: 'Kit Merek', icon: Palette },
    { id: 'harga' as SidebarTab, label: 'Harga', icon: CircleDollarSign },
    { id: 'hadiah' as SidebarTab, label: 'Hadiah', icon: Gift },
  ];

  return (
    <aside className="w-20 md:w-24 bg-[#0d0f15] border-r border-[#232836] flex flex-col items-center py-4 justify-between shrink-0 select-none z-20">
      {/* Navigation Links Rail */}
      <nav aria-label="Menu Utama" className="flex flex-col items-center space-y-4 md:space-y-5 w-full px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex flex-col items-center py-2.5 px-1 rounded-xl transition group cursor-pointer ${
                isActive
                  ? 'bg-[#161922] border border-[#00e676]/40 text-[#00e676] shadow-sm'
                  : 'text-gray-400 hover:text-gray-100 hover:bg-[#161922]/60'
              }`}
              title={item.label}
            >
              <Icon
                className={`w-5 h-5 mb-1 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-[#00e676]' : 'text-gray-400 group-hover:text-gray-200'
                }`}
              />
              <span
                className={`text-[10px] md:text-[11px] font-medium tracking-tight text-center ${
                  isActive ? 'text-white font-semibold' : ''
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Bottom: API Key shortcut */}
      <div className="w-full px-2 pt-3 border-t border-[#232836]/50">
        <button
          onClick={() => onSelectTab('api')}
          className={`w-full flex flex-col items-center py-2 px-1 rounded-xl transition group cursor-pointer ${
            activeTab === 'api'
              ? 'bg-[#161922] border border-[#00e676]/40 text-[#00e676]'
              : 'text-gray-400 hover:text-gray-100 hover:bg-[#161922]/60'
          }`}
          title="API Developer"
        >
          <Code2
            className={`w-5 h-5 mb-1 ${
              activeTab === 'api' ? 'text-[#00e676]' : 'text-gray-400 group-hover:text-gray-200'
            }`}
          />
          <span className="text-[11px] font-medium tracking-tight">API</span>
        </button>
      </div>
    </aside>
  );
};
