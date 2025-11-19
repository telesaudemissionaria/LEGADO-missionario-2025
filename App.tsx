
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Cross, Activity, Heart, Plus } from 'lucide-react';
import { TRANSLATIONS, PROFILES_DATA } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('PT');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];
  const profiles = PROFILES_DATA[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-200 bg-stone-950 selection:bg-amber-900 selection:text-white">
      
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-700 border-b ${scrolled ? 'bg-stone-950/90 backdrop-blur-md border-stone-800 py-3' : 'bg-transparent border-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="relative w-12 h-12 flex items-center justify-center border border-amber-700/50 rounded-sm rotate-45 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-amber-900/20"></div>
              <Cross className="w-6 h-6 text-amber-600 -rotate-45 hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-cinzel text-lg md:text-xl font-bold tracking-widest text-stone-100 leading-none">MISSIONARY</h1>
              <h2 className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-amber-700">MEDICAL CARE</h2>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] uppercase text-stone-400 font-cinzel">
            <a href="#home" className="hover:text-amber-600 transition-colors duration-300">{t.navHome}</a>
            <a href="#legacy" className="hover:text-amber-600 transition-colors duration-300">{t.navLegacy}</a>
            <div className="flex items-center border-l border-stone-800 pl-6 gap-4">
                <button onClick={() => setLang('PT')} className={`hover:text-amber-600 transition-colors ${lang === 'PT' ? 'text-amber-600' : ''}`}>PT</button>
                <button onClick={() => setLang('EN')} className={`hover:text-amber-600 transition-colors ${lang === 'EN' ? 'text-amber-600' : ''}`}>EN</button>
                <button onClick={() => setLang('ES')} className={`hover:text-amber-600 transition-colors ${lang === 'ES' ? 'text-amber-600' : ''}`}>ES</button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-stone-200 hover:text-amber-600 transition-colors">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-stone-800 shadow-2xl py-8 flex flex-col items-center gap-6 font-cinzel tracking-widest"
          >
             <a href="#home" onClick={() => setMenuOpen(false)} className="text-stone-300 hover:text-amber-600">{t.navHome}</a>
             <a href="#legacy" onClick={() => setMenuOpen(false)} className="text-stone-300 hover:text-amber-600">{t.navLegacy}</a>
             <div className="flex gap-6 pt-4 border-t border-stone-800 w-full justify-center">
                <button onClick={() => { setLang('PT'); setMenuOpen(false); }} className={lang === 'PT' ? 'text-amber-600' : 'text-stone-400'}>PT</button>
                <button onClick={() => { setLang('EN'); setMenuOpen(false); }} className={lang === 'EN' ? 'text-amber-600' : 'text-stone-400'}>EN</button>
                <button onClick={() => { setLang('ES'); setMenuOpen(false); }} className={lang === 'ES' ? 'text-amber-600' : 'text-stone-400'}>ES</button>
             </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-stone-950/60 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950 z-10"></div>
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                src="https://picsum.photos/1920/1080?grayscale&blur=1" 
                alt="Legacy Background" 
                className="w-full h-full object-cover opacity-60 sepia-[0.3]"
            />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-block mb-8"
            >
                <div className="h-px w-24 bg-amber-700 mx-auto mb-4"></div>
                <span className="text-amber-600 font-cinzel tracking-[0.5em] text-sm md:text-base uppercase">Missionary Medical Care</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-serif text-5xl md:text-7xl lg:text-9xl text-stone-100 mb-8 tracking-tight leading-tight text-shadow-gold"
            >
                {t.heroTitle}
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg md:text-2xl text-stone-400 font-light mb-12 italic font-serif max-w-3xl mx-auto leading-relaxed"
            >
                "{t.heroSubtitle}"
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <a href="#legacy" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-700/50 text-amber-600 font-cinzel hover:bg-amber-900/20 transition-all duration-500 tracking-widest text-sm">
                    <span>{t.gallerySubtitle}</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>
        </div>
      </section>

      {/* Introduction / About (Telehealth) */}
      <section className="py-32 container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-900/20 to-transparent pointer-events-none"></div>
        <div className="flex flex-col md:flex-row gap-20 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:w-1/2 relative"
            >
                <div className="absolute -inset-4 border border-amber-700/20 z-0"></div>
                <img 
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="Medical Mission" 
                    className="w-full h-auto shadow-2xl relative z-10 sepia-filter filter grayscale contrast-125 brightness-90"
                />
                <div className="absolute -bottom-10 -right-10 z-20 bg-stone-900 p-6 border border-stone-800 shadow-xl hidden md:block">
                    <Activity className="w-8 h-8 text-amber-700 mb-2" />
                    <p className="font-cinzel text-amber-600 text-xs tracking-widest">SINCE 1950</p>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:w-1/2"
            >
                <h3 className="font-cinzel text-amber-700 text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
                    <span className="w-12 h-px bg-amber-700"></span>
                    MMC
                </h3>
                <h2 className="font-serif text-3xl md:text-5xl text-stone-100 mb-8 leading-none uppercase">
                    {t.aboutTitle}
                </h2>
                <p className="text-xl md:text-2xl text-stone-400 leading-relaxed mb-10 font-light border-l-2 border-amber-900/50 pl-8 font-serif italic">
                    "{t.aboutText}"
                </p>
                <div className="flex gap-8">
                   <div className="flex flex-col gap-2">
                        <Heart className="w-6 h-6 text-amber-700" />
                        <span className="font-cinzel text-xs text-stone-500 tracking-widest">CARE</span>
                   </div>
                   <div className="flex flex-col gap-2">
                        <Cross className="w-6 h-6 text-amber-700" />
                        <span className="font-cinzel text-xs text-stone-500 tracking-widest">FAITH</span>
                   </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Profiles of Sacrifice Section */}
      <section id="legacy" className="py-32 bg-stone-950 text-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
            
            <div className="flex flex-col items-center text-center mb-20">
                <h2 className="font-serif text-5xl md:text-6xl mb-6">{t.galleryTitle}</h2>
                <div className="w-24 h-px bg-amber-700 mb-6"></div>
                <h3 className="font-cinzel text-amber-700 tracking-[0.3em] text-lg mb-8">{t.gallerySubtitle}</h3>
                <p className="text-stone-400 font-light max-w-2xl text-lg leading-relaxed font-serif italic">
                   "{t.galleryIntroText}"
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profiles.map((profile, idx) => (
                    <motion.div 
                        key={profile.id} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-stone-900 border border-stone-800 hover:border-amber-700/50 transition-colors duration-500 overflow-hidden cursor-pointer"
                        onClick={() => setExpandedProfile(expandedProfile === profile.id ? null : profile.id)}
                    >
                        <div className="aspect-[4/5] relative overflow-hidden">
                             <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                             
                             {/* MAIN IMAGE CHANGED TO FLAG */}
                             <img 
                                src={profile.image} 
                                alt={profile.name} 
                                className="w-full h-full object-cover filter grayscale contrast-100 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                             />
                             
                             {/* Overlay content displayed by default */}
                             <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90"></div>
                             <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <div className="flex items-center gap-3 mb-2">
                                    {/* Removed small flag icon since main image is now the flag */}
                                    <p className="font-cinzel text-amber-600 text-sm tracking-widest">{profile.dates}</p>
                                </div>
                                <h3 className="font-serif text-3xl text-stone-100 leading-tight">{profile.name}</h3>
                             </div>
                        </div>

                        {/* Expanded content / Hover details */}
                        <motion.div 
                            initial={false}
                            animate={{ height: expandedProfile === profile.id ? 'auto' : 0 }}
                            className="bg-stone-900 overflow-hidden"
                        >
                            <div className="p-6 border-t border-stone-800">
                                <p className="text-stone-400 font-serif text-lg leading-relaxed border-l-2 border-amber-700 pl-4">
                                    {profile.description}
                                </p>
                                
                                {/* Cause of Death Section */}
                                <div className="mt-6 pt-6 border-t border-stone-800/50">
                                    <h4 className="font-cinzel text-amber-700 text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                                        <Activity className="w-4 h-4" /> {t.deathLabel}
                                    </h4>
                                    <p className="text-stone-500 font-serif text-base italic leading-relaxed">
                                        {profile.deathInfo}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hover indicator */}
                        <div className={`absolute top-4 right-4 z-30 text-amber-600 transition-transform duration-300 ${expandedProfile === profile.id ? 'rotate-45' : ''}`}>
                            <Plus className="w-6 h-6" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 pt-24 pb-12 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="mb-12 text-center">
                <div className="w-16 h-16 border border-amber-700/30 rotate-45 flex items-center justify-center mx-auto mb-8">
                    <Cross className="w-8 h-8 text-amber-700 -rotate-45" />
                </div>
                <h2 className="font-cinzel text-3xl text-stone-200 font-bold mb-2 tracking-widest">MISSIONARY</h2>
                <p className="text-amber-700 uppercase tracking-[0.4em] text-xs">Medical Care</p>
            </div>
            
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent mb-8"></div>

            <p className="text-stone-600 text-xs font-sans tracking-wide">
                {t.footerText}
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
