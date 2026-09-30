import React from 'react';

export interface ToolItem {
  name: string;
  category: 'AI & Dev' | 'Microsoft 365' | 'Productivity & Office' | 'System & IT' | 'Creative & Media';
  color: string;
  icon: React.ReactNode;
}

const rawToolsList: ToolItem[] = [
  // 1. Google AI Studio
  {
    name: 'Google AI Studio',
    category: 'AI & Dev',
    color: '#4285F4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#g-ai-grad)" />
        <defs>
          <linearGradient id="g-ai-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4" />
            <stop offset="0.5" stopColor="#9B72CB" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 2. Android Studio
  {
    name: 'Android Studio',
    category: 'AI & Dev',
    color: '#3DDC84',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path fill="#3DDC84" d="M17.5 7.8l1.4-2.4c.2-.3.1-.7-.2-.9s-.7-.1-.9.2L16.3 7c-1.3-.6-2.8-.9-4.3-.9-1.5 0-3 .3-4.3.9L6.2 4.7c-.2-.3-.6-.4-.9-.2s-.3.6-.2.9l1.4 2.4C3.8 9.2 2 12.3 2 16h20c0-3.7-1.8-6.8-4.5-8.2zM7.5 13c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm9 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
      </svg>
    ),
  },

  // 3. Visual Studio
  {
    name: 'Visual Studio',
    category: 'AI & Dev',
    color: '#5C2D91',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#5C2D91">
        <path d="M17.6 1.1l-8.9 8.2-5.4-4.1-2 1.3 4.4 3.7-4.4 3.7 2 1.3 5.4-4.1 8.9 8.2L23 20.8V3.2L17.6 1.1zm.9 14.6l-5.6-3.7 5.6-3.7v7.4z" />
      </svg>
    ),
  },

  // 4. GitHub
  {
    name: 'GitHub',
    category: 'AI & Dev',
    color: '#FFFFFF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F0F6FC">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },

  // 5. Antigravity
  {
    name: 'Antigravity',
    category: 'AI & Dev',
    color: '#818CF8',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#818CF8" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="12" cy="12" r="4" fill="#C084FC" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // 6. ClickUp
  {
    name: 'ClickUp',
    category: 'Productivity & Office',
    color: '#7B68EE',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 16.5C5.8 19 8.6 20.5 12 20.5C15.4 20.5 18.2 19 20 16.5L16.8 14.2C15.6 15.6 13.9 16.5 12 16.5C10.1 16.5 8.4 15.6 7.2 14.2L4 16.5Z" fill="#7B68EE" />
        <path d="M12 7.5L6.5 12.2L8.5 14.5L12 11.5L15.5 14.5L17.5 12.2L12 7.5Z" fill="#FF00DF" />
      </svg>
    ),
  },

  // 7. Git
  {
    name: 'Git',
    category: 'AI & Dev',
    color: '#F05032',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.6 4.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1L12.3 10v4.7c.3.2.6.5.7.9.4.9 0 2-1 2.4s-2 0-2.4-1c-.4-.9 0-2 1-2.4.3-.1.6-.2.9-.2V9.8c-.3 0-.6-.1-.9-.2l-2.6 2.6c.1.3.2.7.2 1 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.3 0 .7.1 1 .2L9.8 8.6 2.4 16c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.2z" />
      </svg>
    ),
  },

  // 8. Node.js
  {
    name: 'Node.js',
    category: 'AI & Dev',
    color: '#339933',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L2 7.8v11.5l10 5.7 10-5.7V7.8L12 2zm6.7 12.8c-.3.4-.6.8-1 1.1-.9.6-1.9.9-3 .9-1.2 0-2.2-.4-3-1.1-.8-.8-1.2-1.8-1.2-3.1 0-1.3.4-2.3 1.2-3.1.8-.8 1.8-1.1 3-1.1 1.1 0 2 .3 2.8.8.8.6 1.3 1.4 1.5 2.4h-2.1c-.2-.6-.5-1-.9-1.3-.4-.3-.9-.4-1.5-.4-.7 0-1.3.2-1.7.7-.4.5-.7 1.2-.7 2s.2 1.5.7 2c.4.5 1 .7 1.7.7.6 0 1.1-.1 1.5-.4.4-.3.7-.7.9-1.2h2.1c-.2.6-.5 1.2-.6 1.6z" />
      </svg>
    ),
  },

  // 9. MySQL
  {
    name: 'MySQL',
    category: 'AI & Dev',
    color: '#00758F',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M17.5 4C14.5 4 12 6.5 12 9.5C12 10.3 12.2 11.1 12.5 11.8C10.5 11.2 8.7 10 7.3 8.3C6.5 11.4 7.2 14.8 9.2 17.2C8.3 17.1 7.4 16.7 6.6 16.2C6.9 17.8 7.8 19.2 9.2 20C10.5 20.8 12.1 21 13.6 20.6C12.8 19.8 12.4 18.7 12.4 17.5C12.4 15.3 14.1 13.5 16.3 13.5C17.2 13.5 18 13.8 18.7 14.3C19 13.4 19.2 12.5 19.2 11.5C19.2 8.5 17.5 4 17.5 4Z" fill="#00758F" />
        <circle cx="16.5" cy="8" r="1" fill="#F29111" />
      </svg>
    ),
  },

  // 10. Adobe Photoshop
  {
    name: 'Adobe Photoshop',
    category: 'Creative & Media',
    color: '#31A8FF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <path d="M5.5 6.5H10C11.7 6.5 13 7.6 13 9.3C13 11 11.7 12.1 10 12.1H7.8V17.5H5.5V6.5ZM7.8 8.4V10.2H9.8C10.5 10.2 11 9.8 11 9.3C11 8.8 10.5 8.4 9.8 8.4H7.8Z" fill="#31A8FF" />
        <path d="M14.5 15.2C15.1 15.7 15.8 16 16.6 16C17.4 16 17.8 15.6 17.8 15.1C17.8 14.5 17.3 14.2 16.3 13.8C14.7 13.1 13.8 12.3 13.8 10.9C13.8 9.5 14.9 8.4 16.6 8.4C17.6 8.4 18.5 8.7 19.1 9.2L18.4 10.5C17.9 10.1 17.3 9.9 16.6 9.9C15.9 9.9 15.5 10.2 15.5 10.7C15.5 11.2 16 11.5 16.9 11.8C18.6 12.5 19.5 13.3 19.5 14.8C19.5 16.3 18.3 17.5 16.5 17.5C15.4 17.5 14.3 17 13.6 16.4L14.5 15.2Z" fill="#31A8FF" />
      </svg>
    ),
  },

  // 11. AnyDesk
  {
    name: 'AnyDesk',
    category: 'System & IT',
    color: '#EF4444',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#EF4444">
        <path d="M8.5 4.5L1.5 11.5L8.5 18.5L15.5 11.5L8.5 4.5ZM15.5 4.5L12 8L15.5 11.5L19 8L15.5 4.5ZM15.5 11.5L12 15L15.5 18.5L19 15L15.5 11.5Z" />
      </svg>
    ),
  },

  // 12. TeamViewer
  {
    name: 'TeamViewer',
    category: 'System & IT',
    color: '#0E80D8',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#0E80D8" />
        <circle cx="12" cy="12" r="7" fill="white" />
        <path d="M10 9L7 12L10 15M14 9L17 12L14 15" stroke="#0E80D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12H17" stroke="#0E80D8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // 13. Remote Desktop
  {
    name: 'Remote Desktop',
    category: 'System & IT',
    color: '#0078D7',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="13" rx="2" stroke="#0078D7" strokeWidth="2" />
        <path d="M8 20H16M12 17V20" stroke="#0078D7" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 8.5L10 11.5L7 14.5M12 14.5H16" stroke="#00BCF2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // 14. Microsoft 365
  {
    name: 'Microsoft 365',
    category: 'Microsoft 365',
    color: '#D83B01',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
      </svg>
    ),
  },

  // 15. Microsoft Power BI
  {
    name: 'Microsoft Power BI',
    category: 'Microsoft 365',
    color: '#F2C811',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect x="3" y="13" width="4.5" height="8" rx="1" fill="#F2C811" />
        <rect x="9.5" y="8" width="4.5" height="13" rx="1" fill="#E6AD10" />
        <rect x="16" y="3" width="4.5" height="18" rx="1" fill="#D39600" />
      </svg>
    ),
  },

  // 16. Microsoft Power Automate
  {
    name: 'Microsoft Power Automate',
    category: 'Microsoft 365',
    color: '#0066FF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 13H11L9 22L20 10H13L15 2H12Z" fill="url(#pa-grad)" />
        <defs>
          <linearGradient id="pa-grad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0066FF" />
            <stop offset="1" stopColor="#00C7FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 17. Microsoft Lists
  {
    name: 'Microsoft Lists',
    category: 'Microsoft 365',
    color: '#0E707E',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="#0E707E" strokeWidth="2" />
        <circle cx="7" cy="8.5" r="1.5" fill="#E3008C" />
        <circle cx="7" cy="12" r="1.5" fill="#0078D4" />
        <circle cx="7" cy="15.5" r="1.5" fill="#107C41" />
        <path d="M11 8.5H17M11 12H17M11 15.5H17" stroke="#E1DCC9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },

  // 18. Microsoft OneNote
  {
    name: 'Microsoft OneNote',
    category: 'Microsoft 365',
    color: '#7719AA',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#7719AA" />
        <path d="M7 6.5H9.5L14.5 14.5V6.5H17V17.5H14.5L9.5 9.5V17.5H7V6.5Z" fill="white" />
      </svg>
    ),
  },

  // 19. Microsoft To Do
  {
    name: 'Microsoft To Do',
    category: 'Microsoft 365',
    color: '#2563EB',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2" fill="#1E3A8A" />
        <path d="M7.5 12L10.5 15L16.5 9" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // 20. Microsoft Word
  {
    name: 'Microsoft Word',
    category: 'Microsoft 365',
    color: '#185ABD',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#185ABD" />
        <path d="M6 7H8.5L10.5 15L12.5 8H14.5L16.5 15L18.5 7H21L18 17H15.5L13.5 10L11.5 17H9L6 7Z" fill="white" />
      </svg>
    ),
  },

  // 21. Microsoft Excel
  {
    name: 'Microsoft Excel',
    category: 'Microsoft 365',
    color: '#107C41',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#107C41" />
        <path d="M7 6.5H10L13.5 12L10 17.5H7L11.5 12L7 6.5ZM17 6.5H14L12.5 9.5L14 12L17 17.5H14.5L12.5 14L14 11.5L17 6.5Z" fill="white" />
      </svg>
    ),
  },

  // 22. Microsoft PowerPoint
  {
    name: 'Microsoft PowerPoint',
    category: 'Microsoft 365',
    color: '#C43E1C',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#C43E1C" />
        <path d="M7 6.5H12.5C14.5 6.5 16 7.8 16 9.8C16 11.8 14.5 13.1 12.5 13.1H9.5V17.5H7V6.5ZM9.5 8.7V11H12.2C13.2 11 13.8 10.5 13.8 9.8C13.8 9.1 13.2 8.7 12.2 8.7H9.5Z" fill="white" />
      </svg>
    ),
  },

  // 23. LibreOffice
  {
    name: 'LibreOffice',
    category: 'Productivity & Office',
    color: '#18A303',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M5 3H14L19 8V21H5V3Z" fill="#18A303" />
        <path d="M14 3V8H19" fill="#2ECC71" />
        <path d="M8 12H16M8 15H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },

  // 24. WPS Office
  {
    name: 'WPS',
    category: 'Productivity & Office',
    color: '#EA2839',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#EA2839">
        <path d="M3 6L8 16L12 9L16 16L21 6H17L14 12L12 8L10 12L7 6H3Z" />
      </svg>
    ),
  },

  // 25. OpenOffice
  {
    name: 'Open Office',
    category: 'Productivity & Office',
    color: '#129AEF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#129AEF" />
        <path d="M7 13C9 10 12 10 14 12M10 11C12 8 15 8 17 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // 26. CapCut
  {
    name: 'CapCut',
    category: 'Creative & Media',
    color: '#FFFFFF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 6H10L14 12L10 18H4L8 12L4 6Z" fill="#00E5FF" />
        <path d="M20 6H14L10 12L14 18H20L16 12L20 6Z" fill="white" />
      </svg>
    ),
  },

  // 27. VN Editor
  {
    name: 'VN Editor',
    category: 'Creative & Media',
    color: '#00D2FF',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#0F172A" />
        <text x="12" y="16" fill="#00D2FF" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">VN</text>
      </svg>
    ),
  },

  // 28. OBS Studio
  {
    name: 'OBS Studio',
    category: 'Creative & Media',
    color: '#E5E7EB',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93c-2.45-.37-4.44-2.12-5.07-4.48L11 13.5v5.43zM8.5 12c0-.52.07-1.02.2-1.5L4.47 8.35C4.17 9.48 4 10.71 4 12c0 2.21.9 4.21 2.35 5.65L8.5 12zm8.57-2.95l-3.07 1.77V5.07c2.45.37 4.44 2.12 5.07 4.48-.63-.2-1.3-.35-2-.5zM15.5 12c0 .52-.07 1.02-.2 1.5l4.23 2.15c.3-1.13.47-2.36.47-3.65 0-2.21-.9-4.21-2.35-5.65L15.5 12z" />
      </svg>
    ),
  },

  // 29. Chrome Browser
  {
    name: 'Chrome Browser',
    category: 'System & IT',
    color: '#4285F4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#4285F4" />
        <circle cx="12" cy="12" r="4.5" fill="white" />
        <circle cx="12" cy="12" r="3.5" fill="#4285F4" />
        <path d="M12 7.5H21.5C20.3 4.3 16.5 2 12 2C9.5 2 7.3 2.8 5.6 4.3L9.6 11.2C10.2 9 11 7.5 12 7.5Z" fill="#EA4335" />
        <path d="M15.5 13.5L10.5 22C11 22 11.5 22 12 22C16.8 22 20.8 18.5 21.8 13.8L15.5 13.5Z" fill="#FBBC05" />
        <path d="M3.5 7.5C2.5 8.8 2 10.3 2 12C2 16.5 5 20.2 9.2 21.6L13.2 14.7C12.8 15.2 12.4 15.5 12 15.5C9.5 15.5 7.5 13.5 7.5 11C7.5 9.8 8 8.8 8.8 8L3.5 7.5Z" fill="#34A853" />
      </svg>
    ),
  },

  // 30. Microsoft Edge
  {
    name: 'Microsoft Edge',
    category: 'System & IT',
    color: '#0078D7',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M21.5 14C20.5 18.5 16.5 22 11.5 22C5.5 22 1 17.5 1 11.5C1 6.5 4.5 2.5 9 1.5C8 3 7.5 5 7.5 7.5C7.5 11.5 10.5 14.5 14.5 14.5C17.5 14.5 20 13 21.5 14Z" fill="url(#edge-g)" />
        <defs>
          <linearGradient id="edge-g" x1="1" y1="1" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0078D7" />
            <stop offset="0.5" stopColor="#00C79A" />
            <stop offset="1" stopColor="#00E5FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 31. Brave Browser
  {
    name: 'Brave Browser',
    category: 'System & IT',
    color: '#FB542B',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FB542B">
        <path d="M12 2L4 6L5.5 16L12 22L18.5 16L20 6L12 2ZM12 5.2L16.8 7.6L15.6 14.8L12 18.6L8.4 14.8L7.2 7.6L12 5.2Z" />
      </svg>
    ),
  },

  // 32. Docker
  {
    name: 'Docker',
    category: 'System & IT',
    color: '#2496ED',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.8 8.8H11.5V11H13.8V8.8ZM16.8 8.8H14.5V11H16.8V8.8ZM8.5 8.8H6.2V11H8.5V8.8ZM11.5 6.2H9.2V8.5H11.5V6.2ZM14.5 6.2H12.2V8.5H14.5V6.2ZM17.5 6.2H15.2V8.5H17.5V6.2ZM23.4 12.2C23.1 11.9 22.3 11.5 21 11.6C20.6 10.8 20 10.3 19.4 10L18.8 11.5C19.3 11.8 19.8 12.3 20 13C19.7 13.2 19 13.5 18 13.5H2C1.5 15.5 2.5 18 5 19.5C8 21.2 13 21.2 16.5 19.2C19.5 17.5 21.2 14.8 21.5 12.5C22.3 12.6 23 12.4 23.4 12.2Z" />
      </svg>
    ),
  },

  // 33. WinRAR
  {
    name: 'WinRAR',
    category: 'System & IT',
    color: '#006FBA',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="4" rx="1" fill="#006FBA" />
        <rect x="3" y="9" width="18" height="4" rx="1" fill="#009688" />
        <rect x="3" y="14" width="18" height="6" rx="1" fill="#795548" />
        <rect x="11" y="3" width="2.5" height="18" fill="#F19A24" />
      </svg>
    ),
  },

  // 34. Microsoft Whiteboard
  {
    name: 'Microsoft Whiteboard',
    category: 'Microsoft 365',
    color: '#0078D4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#0078D4" strokeWidth="2" />
        <path d="M6 14C8 10 11 11 13 13C15 15 17 11 18 9" stroke="#00BCF2" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20H16" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // 35. Microsoft Outlook
  {
    name: 'Microsoft Outlook',
    category: 'Microsoft 365',
    color: '#0078D4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#0078D4" />
        <path d="M4 7L12 12.5L20 7V17H4V7Z" fill="white" fillOpacity="0.25" />
        <path d="M4 7H20L12 12.5L4 7Z" fill="white" />
        <circle cx="9" cy="12" r="3" fill="#004E8C" />
        <text x="9" y="14" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle">O</text>
      </svg>
    ),
  },

  // 36. Microsoft OneDrive
  {
    name: 'Microsoft OneDrive',
    category: 'Microsoft 365',
    color: '#0078D4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 17.5H18C20 17.5 21.5 16 21.5 14C21.5 12.2 20.2 10.7 18.5 10.5C18 7.5 15.5 5.5 12.5 5.5C10 5.5 7.8 7 7.2 9.2C5.3 9.6 4 11.2 4 13.2C4 15.5 5.8 17.5 8 17.5H9.5Z" fill="#0078D4" />
        <path d="M14.5 17.5H7.5C5.5 17.5 4 16 4 14C4 12.5 5 11.2 6.5 10.7C7 8.5 9 7 11.5 7C13.5 7 15.2 8.2 16 10C17.5 10.2 18.5 11.5 18.5 13C18.5 15.5 16.5 17.5 14.5 17.5Z" fill="#00A4EF" fillOpacity="0.6" />
      </svg>
    ),
  },

  // 37. Microsoft Teams
  {
    name: 'Microsoft Teams',
    category: 'Microsoft 365',
    color: '#464EB8',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <circle cx="16.5" cy="7" r="2.5" fill="#7B83EB" />
        <path d="M14 11H19C20.1 11 21 11.9 21 13V15.5H14V11Z" fill="#7B83EB" />
        <circle cx="9.5" cy="8.5" r="3" fill="#5059C9" />
        <rect x="3.5" y="12" width="12" height="9" rx="2" fill="#464EB8" />
        <path d="M7.5 15.2H11.5M9.5 15.2V19.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },

  // 38. Microsoft SharePoint
  {
    name: 'Microsoft SharePoint',
    category: 'Microsoft 365',
    color: '#038387',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="14" cy="7.5" r="4.5" fill="#004E52" />
        <circle cx="8" cy="11" r="5" fill="#038387" />
        <circle cx="14.5" cy="15.5" r="5.5" fill="#00A99D" />
        <text x="8" y="13.5" fill="white" fontSize="6.5" fontWeight="bold" textAnchor="middle">S</text>
      </svg>
    ),
  },

  // 39. Microsoft Planner
  {
    name: 'Microsoft Planner',
    category: 'Microsoft 365',
    color: '#31752F',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" fill="#31752F" />
        <rect x="6" y="7" width="5" height="10" rx="1" fill="#78C257" />
        <rect x="13" y="7" width="5" height="5" rx="1" fill="#46A038" />
      </svg>
    ),
  },

  // 40. Microsoft Power Apps
  {
    name: 'Microsoft Power Apps',
    category: 'Microsoft 365',
    color: '#742774',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#742774">
        <path d="M12 2L4 9V17L12 22L20 17V9L12 2ZM12 6.5L16.5 10.5L12 14.5L7.5 10.5L12 6.5Z" />
      </svg>
    ),
  },

  // 41. Microsoft Loop
  {
    name: 'Microsoft Loop',
    category: 'Microsoft 365',
    color: '#0A85EA',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#0A85EA" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="3.5" fill="#40E0D0" />
      </svg>
    ),
  },

  // 42. Microsoft Insights
  {
    name: 'Microsoft Insights',
    category: 'Microsoft 365',
    color: '#D83B01',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#D83B01" strokeWidth="2" />
        <path d="M7 14L10 11L13 13L17 8" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="8" r="1.5" fill="#FFB900" />
      </svg>
    ),
  },

  // 43. Microsoft Forms
  {
    name: 'Microsoft Forms',
    category: 'Microsoft 365',
    color: '#008272',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#008272" />
        <path d="M7 6.5H16.5V9H9.5V11H15V13.5H9.5V17.5H7V6.5Z" fill="white" />
        <path d="M14 14L16.5 16.5L20.5 11" stroke="#00FFD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // 44. Microsoft Viva
  {
    name: 'Microsoft Viva',
    category: 'Microsoft 365',
    color: '#E3008C',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="url(#viva-g)" strokeWidth="2.5" />
        <path d="M7 8L12 17L17 8" stroke="#E3008C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="viva-g" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3008C" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 45. ChatGPT
  {
    name: 'ChatGPT',
    category: 'AI & Dev',
    color: '#10A37F',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path fill="#10A37F" d="M22.28 9.87a6.23 6.23 0 0 0-.53-5.1 6.36 6.36 0 0 0-6.7-2.94 6.25 6.25 0 0 0-4.84-2.28A6.36 6.36 0 0 0 4.1 2.8a6.24 6.24 0 0 0-3.3 4.25 6.35 6.35 0 0 0 1.25 7.15 6.23 6.23 0 0 0 .53 5.1 6.36 6.36 0 0 0 6.7 2.94 6.25 6.25 0 0 0 4.84 2.28 6.36 6.36 0 0 0 6.1-3.25 6.24 6.24 0 0 0 3.3-4.25 6.35 6.35 0 0 0-1.24-7.15zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },

  // 46. Gemini
  {
    name: 'Gemini',
    category: 'AI & Dev',
    color: '#1BA1E3',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#gemini-g)" />
        <defs>
          <linearGradient id="gemini-g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 47. DOLA
  {
    name: 'DOLA',
    category: 'AI & Dev',
    color: '#8B5CF6',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#8B5CF6" />
        <circle cx="12" cy="12" r="5" fill="white" />
        <path d="M12 9V12L14 14" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },

  // 48. CoPilot
  {
    name: 'CoPilot',
    category: 'AI & Dev',
    color: '#0078D4',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M7 6C4.8 6 3 7.8 3 10C3 12.2 4.8 14 7 14H17C19.2 14 21 12.2 21 10C21 7.8 19.2 6 17 6H7Z" fill="url(#cp-1)" />
        <path d="M17 18C19.2 18 21 16.2 21 14C21 11.8 19.2 10 17 10H7C4.8 10 3 11.8 3 14C3 16.2 4.8 18 7 18H17Z" fill="url(#cp-2)" fillOpacity="0.8" />
        <defs>
          <linearGradient id="cp-1" x1="3" y1="6" x2="21" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0078D4" />
            <stop offset="1" stopColor="#7B68EE" />
          </linearGradient>
          <linearGradient id="cp-2" x1="3" y1="10" x2="21" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8C00" />
            <stop offset="1" stopColor="#E3008C" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 49. Supabase
  {
    name: 'Supabase',
    category: 'AI & Dev',
    color: '#3ECF8E',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M13.4 22L13.8 13.5H21.5L10.6 2L10.2 10.5H2.5L13.4 22Z" fill="url(#supa-g)" />
        <defs>
          <linearGradient id="supa-g" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3ECF8E" />
            <stop offset="1" stopColor="#249361" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // 50. Firebase
  {
    name: 'Firebase',
    category: 'AI & Dev',
    color: '#FFCA28',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 18.5L6.5 4.5L10 11L4.5 18.5Z" fill="#FFA000" />
        <path d="M12.5 8L10 11L14.5 2.5L12.5 8Z" fill="#F57C00" />
        <path d="M4.5 18.5L14.5 2.5L19.5 18.5L12 22.5L4.5 18.5Z" fill="#FFCA28" />
        <path d="M12 22.5L19.5 18.5L16.5 8L12 22.5Z" fill="#FF8F00" />
      </svg>
    ),
  },

  // 51. Stitch
  {
    name: 'Stitch',
    category: 'Productivity & Office',
    color: '#3B82F6',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M8 8L16 16M16 8L8 16" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // 52. Suno
  {
    name: 'Suno',
    category: 'Creative & Media',
    color: '#FF5A36',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF5A36" />
        <path d="M7 12V14M9 10V16M11 7V17M13 9V15M15 11V13M17 12V13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },

  // 53. Netlify
  {
    name: 'Netlify',
    category: 'AI & Dev',
    color: '#00C7B7',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#00C7B7">
        <path d="M12 2L4 7.5V16.5L12 22L20 16.5V7.5L12 2ZM12 5.5L17.5 9.3V14.7L12 18.5L6.5 14.7V9.3L12 5.5Z" />
      </svg>
    ),
  },

  // 54. Prezi
  {
    name: 'Prezi',
    category: 'Productivity & Office',
    color: '#1C75BC',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.5" stroke="#1C75BC" strokeWidth="2" />
        <circle cx="10" cy="12" r="4" stroke="#00A8FF" strokeWidth="1.8" />
        <circle cx="15" cy="12" r="2" fill="#1C75BC" />
      </svg>
    ),
  },
];

export const TOOLS_LIST: ToolItem[] = [...rawToolsList].sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
);
