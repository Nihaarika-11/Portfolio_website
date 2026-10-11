import React from 'react';

export const PythonLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 2C6.7 2 7 4.2 7 4.2V6.5H12V7.3H5.1C5.1 7.3 2 7 2 12.1C2 17.3 4.7 17 4.7 17H6.2V14.7C6.2 14.7 6.1 11.9 8.9 11.9H13.8C13.8 11.9 16.5 12 16.5 9.3V4.3C16.5 4.3 16.8 2 11.9 2ZM9.5 3.6C10 3.6 10.4 4 10.4 4.5C10.4 5 10 5.4 9.5 5.4C9 5.4 8.6 5 8.6 4.5C8.6 4 9 3.6 9.5 3.6Z" fill="#38BDF8"/>
    <path d="M12.1 22C17.3 22 17 19.8 17 19.8V17.5H12V16.7H18.9C18.9 16.7 22 17 22 11.9C22 6.7 19.3 7 19.3 7H17.8V9.3C17.8 9.3 17.9 12.1 15.1 12.1H10.2C10.2 12.1 7.5 12 7.5 14.7V19.7C7.5 19.7 7.2 22 12.1 22ZM14.5 20.4C14 20.4 13.6 20 13.6 19.5C13.6 19 14 18.6 14.5 18.6C15 18.6 15.4 19 15.4 19.5C15.4 20 15 20.4 14.5 20.4Z" fill="#FACC15"/>
  </svg>
);

export const JavaLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17C7 17 10 18.5 14 17C17 15.8 18 14 18 14C18 14 16.5 15 14 15.2C10.8 15.4 8.5 14.5 7 17Z" fill="#F97316"/>
    <path d="M8.5 19.5C8.5 19.5 11 20.5 14.2 19.5C16.8 18.7 17.5 17.5 17.5 17.5C17.5 17.5 16 18.2 13.8 18.2C11 18.2 9.5 17.5 8.5 19.5Z" fill="#EA580C"/>
    <path d="M12.5 2C11.5 5 8 7 10 10.5C10.5 11.5 11.8 12 11.8 12C11.8 12 11 11 10.5 9.5C10 7.5 13.5 6 12.5 2Z" fill="#38BDF8"/>
    <path d="M15 5C14.5 7 12 8.5 13.5 11.5C13.5 11.5 13 10 13.8 8.5C14.5 7 16.5 6 15 5Z" fill="#0284C7"/>
  </svg>
);

export const GitLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 10.6L13.4 2.4C12.9 1.9 12 1.9 11.5 2.4L9.8 4.1L12.3 6.6C12.9 6.4 13.6 6.5 14.1 7.1C14.7 7.6 14.8 8.5 14.5 9.2L16.9 11.6C17.6 11.3 18.5 11.5 19 12C19.7 12.7 19.7 13.8 19 14.5C18.3 15.2 17.2 15.2 16.5 14.5C16 14 15.9 13.2 16.1 12.5L13.9 10.3V15.7C14.1 16 14.2 16.4 14.2 16.8C14.2 17.9 13.3 18.8 12.2 18.8C11.1 18.8 10.2 17.9 10.2 16.8C10.2 16.1 10.6 15.5 11.2 15.2V9.8C10.6 9.5 10.2 8.9 10.2 8.2C10.2 7.7 10.4 7.2 10.8 6.9L8.3 4.4L2.4 10.3C1.9 10.8 1.9 11.7 2.4 12.2L10.6 20.4C11.1 20.9 12 20.9 12.5 20.4L21.6 11.3C22.1 10.8 22.1 11.1 21.6 10.6Z" fill="#F43F5E"/>
  </svg>
);

export const ExcelLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.5" />
    <path d="M7 7H17V17H7V7Z" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M7 12H17M12 7V17" stroke="#34D399" strokeWidth="1.2" />
    <path d="M9 9.5L11 14.5M11 9.5L9 14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ESP32Chip: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="2" fill="#0F172A" stroke="#00F0FF" strokeWidth="1.5" />
    <rect x="7" y="6" width="10" height="7" rx="1" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
    <circle cx="12" cy="17" r="1.5" fill="#00F0FF" />
    <path d="M2 7H4M2 11H4M2 15H4M20 7H22M20 11H22M20 15H22" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 8H15M9 10H13" stroke="#94A3B8" strokeWidth="0.8" />
  </svg>
);

export const ArduinoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C9.5 8 5 8 3 10C1 12 1 15 3 17C5 19 9.5 19 12 15C14.5 19 19 19 21 17C23 15 23 12 21 10C19 8 14.5 8 12 12Z" stroke="#06B6D4" strokeWidth="1.6" />
    <path d="M6 13.5H8M7 12.5V14.5M16 13.5H18" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PCBTraceIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="2" fill="#00F0FF" />
    <circle cx="19" cy="8" r="2" fill="#3B82F6" />
    <circle cx="12" cy="18" r="2.5" fill="#8B5CF6" />
    <path d="M5 7V12L10 17H12M19 10V14L14 18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BoundingBoxIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8V4H8M16 4H20V8M20 16V20H16M8 20H4V16" stroke="#00F0FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.5" fill="#38BDF8" />
    <circle cx="12" cy="12" r="5" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 2" />
  </svg>
);

export const NeuralNetIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="6" r="2" fill="#00F0FF" />
    <circle cx="5" cy="18" r="2" fill="#00F0FF" />
    <circle cx="12" cy="4" r="2" fill="#60A5FA" />
    <circle cx="12" cy="12" r="2.5" fill="#3B82F6" />
    <circle cx="12" cy="20" r="2" fill="#60A5FA" />
    <circle cx="19" cy="12" r="2.5" fill="#8B5CF6" />
    <path d="M7 6L10 4M7 6L10 11M7 18L10 13M7 18L10 20M14 4L17 11M14 12L17 12M14 20L17 13" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.7" />
  </svg>
);

export const SensorWaveIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12H6L8 5L12 19L15 9L17 14L19 12H22" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="19" r="1.5" fill="#00F0FF" />
    <circle cx="8" cy="5" r="1.5" fill="#38BDF8" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.93H5.06v8.57h2.8z" />
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
