import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-cyan-400">
            HAMIDGHEHI<span className="text-slate-400">.CA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">درباره من</a>
            <a href="#experience" className="hover:text-cyan-400 transition">سوابق تخصصی</a>
            <a href="#contact" className="hover:text-cyan-400 transition">تماس</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-100">
          حمیدرضا خیرخواه قیخی
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
          متخصص تحلیل داده‌های شبکه، زیرساخت‌های مخابراتی و عیب‌یابی سیستم‌های پیچیده.
        </p>
      </section>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        © Hamidreza Kheirkhah Ghehi — hamidghehi.ca
      </footer>
    </div>
  );
}
