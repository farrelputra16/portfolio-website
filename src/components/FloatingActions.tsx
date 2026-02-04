'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { author } from '@/lib/content/portfolio';
import { socialLinks } from '@/lib/content/portfolio';

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickActions = [
    {
      icon: 'tabler:mail',
      label: 'Email',
      href: `mailto:${author.email}`,
    },
    {
      icon: 'tabler:brand-github',
      label: 'GitHub',
      href: socialLinks.github,
    },
    {
      icon: 'tabler:brand-linkedin',
      label: 'LinkedIn',
      href: socialLinks.linkedin,
    },
  ];

  return (
    <AnimatePresence>
      {showScroll && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
          {/* Quick Actions Menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="flex flex-col gap-2 bg-bg-secondary p-3 rounded-2xl shadow-2xl border-2 border-accent/20"
              >
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-accent/10 rounded-xl transition-colors group"
                    onClick={() => setShowMenu(false)}
                  >
                    <Icon
                      icon={action.icon}
                      width={20}
                      className="text-accent"
                    />
                    <span className="text-sm font-medium whitespace-nowrap group-hover:text-accent transition-colors">
                      {action.label}
                    </span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Buttons */}
          <div className="flex flex-col gap-3">
            {/* Quick Menu Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setShowMenu(!showMenu)}
              className="w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center group relative"
              aria-label="Toggle quick actions"
            >
              <Icon
                icon={showMenu ? 'tabler:x' : 'tabler:dots'}
                width={24}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
              {!showMenu && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </motion.button>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-bg-secondary border-2 border-accent/30 rounded-full shadow-lg hover:shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center group"
              aria-label="Scroll to top"
            >
              <Icon
                icon="tabler:arrow-up"
                width={24}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;