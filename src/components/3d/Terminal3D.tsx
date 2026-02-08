'use client';
import { AnimatePresence,motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TerminalLine {
  id: number;
  text: string;
  type: 'command' | 'output' | 'success' | 'error';
}

export default function Terminal3D({ className = '' }: { className?: string }) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const terminalSequence = [
    { text: '$ whoami', type: 'command' as const },
    { text: 'Farrel Arkesya Kahira Putra', type: 'output' as const },
    { text: '$ cat specialties.txt', type: 'command' as const },
    { text: '> AI Engineering', type: 'output' as const },
    { text: '> Web3 Development', type: 'output' as const },
    { text: '> Full-Stack Architecture', type: 'output' as const },
    { text: '$ ls achievements/', type: 'command' as const },
    { text: 'pokedex500_180k_marketcap.sol ✓', type: 'success' as const },
    { text: 'study_crypto_300_members.md ✓', type: 'success' as const },
    { text: 'synkode_engineering_lead.ts ✓', type: 'success' as const },
    { text: '$ npm start building-future', type: 'command' as const },
    { text: '> Server running at https://portfolio.dev', type: 'success' as const },
    { text: '> Ready to collaborate! 🚀', type: 'success' as const },
  ];

  useEffect(() => {
    if (currentIndex < terminalSequence.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { ...terminalSequence[currentIndex], id: currentIndex },
        ]);
        setCurrentIndex((prev) => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'success':
        return 'text-blue-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* 3D Terminal Container */}
      <motion.div
        initial={{ rotateX: 20, rotateY: -5 }}
        animate={{ rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm text-gray-400 font-mono">terminal@farrel:~</div>
            <div className="w-16" /> {/* Spacer */}
          </div>

          {/* Terminal Content */}
          <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm">
            <AnimatePresence>
              {lines.map((line, index) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 ${getLineColor(line.type)}`}
                >
                  {line.type === 'command' && (
                    <span className="text-purple-400 mr-2">❯</span>
                  )}
                  <span>{line.text}</span>
                  {index === lines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 ml-1 bg-green-400"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Holographic overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          
          {/* Scan line effect */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            animate={{ y: [0, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* 3D Shadow/Depth effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10 transform translate-y-4 scale-95" />
      </motion.div>
    </div>
  );
}