import React, { useState } from 'react';
import { 
  Moon, Sun, Download, Zap, BarChart3, 
  AlertCircle, CheckCircle2, Activity 
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Gestion des classes dynamiques pour le thème
  const themeClasses = darkMode 
    ? "bg-[#020617] text-white" 
    : "bg-slate-50 text-slate-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30 ${themeClasses}`}>
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
            <Moon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">Sleepy Pillow</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* TOGGLE THEME */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-200 text-blue-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="/sleepy-pillow-v1.apk" 
            download="SleepyPillow_Beta.apk"
            className={`${darkMode ? 'bg-white text-black' : 'bg-blue-600 text-white'} px-6 py-2 rounded-full text-sm font-black hover:opacity-90 transition-all uppercase tracking-widest inline-block`}
          >
            APK Beta
          </a>
        </div>
      </nav>

      {/* --- HEADER SECTION --- */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden">
        {/* Glow effect s'adapte au thème */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none ${darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'}`}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8">
            NE VOUS CONTENTEZ PLUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">D'ANALYSER.</span>
          </h1>
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Sleepy Pillow est le premier oreiller connecté qui utilise vos données biométriques pour <strong>agir</strong> en temps réel sur la qualité de votre réveil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* BOUTON TÉLÉCHARGEMENT (Principal) */}
            <a 
              href="/sleepy-pillow-v1.apk" 
              download 
              className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 w-full sm:w-auto justify-center"
            >
              <Download size={24} />
              TÉLÉCHARGER L'APK
            </a>

            {/* BOUTON DÉMO (Secondaire) */}
            <a 
              href="https://sleepypillow-demo.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg border-2 transition-all w-full sm:w-auto justify-center ${
                darkMode 
                  ? 'border-slate-700 text-white hover:bg-slate-800' 
                  : 'border-slate-200 text-slate-900 hover:bg-slate-100'
              }`}
            >
              VOIR LA DÉMO LIVE
            </a>
          </div>
        </div>
      </header>

      {/* --- SECTION PROBLÉMATIQUE --- */}
      <section className={`py-20 border-y ${darkMode ? 'bg-slate-900/30 border-slate-800/50' : 'bg-white border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 italic text-blue-500">Le constat est alarmant...</h2>
              <div className="space-y-6">
                <div className={`flex items-start gap-4 p-4 rounded-xl border-l-4 border-red-500 ${darkMode ? 'bg-slate-800/40' : 'bg-slate-100'}`}>
                  <AlertCircle className="text-red-500 shrink-0" />
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}><strong>1 sur 3</strong> dort moins de 6 heures par nuit.</p>
                </div>
                <div className={`flex items-start gap-4 p-4 rounded-xl border-l-4 border-orange-500 ${darkMode ? 'bg-slate-800/40' : 'bg-slate-100'}`}>
                  <AlertCircle className="text-orange-500 shrink-0" />
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}><strong>1 sur 5</strong> souffre d'insomnie chronique.</p>
                </div>
              </div>
            </div>
            
            <div className={`flex-1 p-8 rounded-[2.5rem] border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-4">Pourquoi les solutions actuelles échouent ?</h3>
              <ul className={`space-y-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Applications : Simple constat "après coup".</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Montres : Analyse souvent trop limitée.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION NOTRE SOLUTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Notre cycle d'action</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARTE 1 */}
          <div className={`p-10 rounded-[2.5rem] border transition-all group ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:shadow-xl'}`}>
            <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
              <Activity className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">1. Mesurer</h3>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Capteurs haute précision intégrés pour la fréquence et le mouvement.</p>
          </div>

          {/* CARTE 2 */}
          <div className={`p-10 rounded-[2.5rem] border transition-all group ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-purple-500/50' : 'bg-white border-slate-200 hover:shadow-xl'}`}>
            <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8">
              <BarChart3 className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">2. Analyser</h3>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Estimation des cycles en temps réel grâce à nos algorithmes IA.</p>
          </div>

          {/* CARTE 3 (Toujours bleue pour le contraste) */}
          <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-600/20 transform md:-rotate-2">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
              <Zap className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-white">3. Agir</h3>
            <p className="text-blue-50 text-sm leading-relaxed">Réveil optimal par vibration douce et lumière progressive.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-12 border-t mt-20 ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>© 2026 Sleepy Pillow - Projet Master 2 Transverse</p>
          <div className="flex gap-4">
              <button className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">Documentation</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;