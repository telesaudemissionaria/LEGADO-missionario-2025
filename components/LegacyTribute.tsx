import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Quote, Feather } from 'lucide-react';
import { generateTribute } from '../services/geminiService';
import { Language, ContentStrings } from '../types';
import { motion } from 'framer-motion';

interface Props {
  language: Language;
  texts: ContentStrings;
}

export const LegacyTribute: React.FC<Props> = ({ language, texts }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await generateTribute(input, language);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="tribute" className="py-32 bg-stone-900 relative overflow-hidden border-y border-stone-950">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-stone-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-700/20"
          >
            <Feather className="w-8 h-8 text-amber-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-200">{texts.tributeTitle}</h2>
          <p className="text-lg text-stone-500 font-light max-w-xl mx-auto">{texts.tributeDesc}</p>
        </div>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-stone-950/50 backdrop-blur-sm p-10 border border-stone-800 shadow-2xl"
        >
          <div className="flex flex-col gap-6 mb-10">
            <div className="relative group">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={texts.tributePlaceholder}
                className="w-full bg-stone-900 border-b border-stone-700 text-stone-200 placeholder-stone-600 px-4 py-4 focus:outline-none focus:border-amber-700 transition-all font-serif text-lg"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-700 group-hover:w-full transition-all duration-700"></div>
            </div>
            
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="self-end bg-amber-800 hover:bg-amber-700 text-stone-100 px-8 py-3 font-cinzel tracking-widest text-sm flex items-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-amber-900/50"
            >
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send className="w-4 h-4" />}
              {texts.tributeButton}
            </button>
          </div>

          {response && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-stone-900/50 p-8 border-l-2 border-amber-700 relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-stone-800" />
              <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-stone-300 relative z-10">
                "{response}"
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};