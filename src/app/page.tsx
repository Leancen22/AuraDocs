"use client";

import { motion } from "framer-motion";
import { Shield, EyeOff, Link as LinkIcon, LockKeyhole, Layers, ArrowRight, Sparkles } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";


// Helper components for animation
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const features = [
    {
      title: "Censura por Roles",
      description: "Define quién ve qué. Oculta párrafos, montos o nombres según si el lector es Admin, Guest o Cliente.",
      icon: <EyeOff className="text-[var(--color-primary)] w-6 h-6" />
    },
    {
      title: "Enlaces de Único Uso",
      description: "Genera links seguros que expiran automáticamente tras ser leídos o descargados. Riesgo cero.",
      icon: <LinkIcon className="text-[var(--color-primary)] w-6 h-6" />
    },
    {
      title: "Seguridad Robusta",
      description: "Cifrado de extremo a extremo, marca de agua adaptativa y visor antidescargas integrado.",
      icon: <Shield className="text-[var(--color-primary)] w-6 h-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed w-full z-50 glass rounded-none border-t-0 border-l-0 border-r-0 border-[var(--color-border-glass)]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <img src="/AuraDoc.png" alt="AuraDocs" style={{ height: '32px', width: 'auto' }} />
            <span className="text-xl font-bold tracking-tight text-white">AuraDocs</span>
          </div>
          <div>
            <a href="#waitlist" className="bg-[#6366f11a] hover:bg-[#6366f133] text-[var(--color-primary)] border border-[#6366f14d] px-5 py-2 rounded-full font-medium transition-all">
              Acceso Temprano
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center text-center">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6366f133] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-white mb-4"
          >
            <Layers size={16} className="text-[var(--color-primary)]"/>
            <span>Versión Beta Cerrada</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-[var(--color-text-primary)] to-[var(--color-text-secondary)] leading-tight tracking-tight"
          >
            Control total sobre <br className="hidden md:block"/> tus documentos
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Censura información sensible paramétrica según el rol del destinatario y comparte mediante enlaces encriptados de uso único.
          </motion.p>

          <div id="waitlist" className="pt-4 scroll-mt-32">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-black/20" id="features">
        <div className="container max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protección asimétrica, flujo simple</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">La manera más profesional de enviar presupuestos, reportes corporativos y documentos confidenciales.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={0.1 * i} className="h-full">
                <div className="glass h-full p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-xl bg-[#6366f11a] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#6366f133] transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container max-w-6xl mx-auto">
          <FadeIn>
            <div className="glass rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
              
              {/* Left: text */}
              <div className="flex-1 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f11a] border border-[#6366f14d] text-sm text-[var(--color-primary)] font-medium">
                  <Sparkles size={14} />
                  <span>Powered by IA</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Censura inteligente <br className="hidden md:block"/> en lenguaje natural
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  En lugar de marcar manualmente cada ocurrencia, simplemente escribís la instrucción y la IA hace el trabajo.
                </p>
                <ul className="space-y-3">
                  {[
                    "Censurá todos los nombres de personas",
                    "Ocultá montos y cifras financieras",
                    "Bloqueá cláusulas específicas por tema",
                  ].map((example, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                      <div className="w-5 h-5 rounded-full bg-[#6366f133] flex items-center justify-center shrink-0">
                        <ArrowRight size={10} className="text-[var(--color-primary)]" />
                      </div>
                      <span>"{example}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: fake terminal */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl bg-black/60 border border-[var(--color-border-glass)] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border-glass)]">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-[var(--color-text-secondary)]">ai-redact</span>
                  </div>
                  <div className="p-6 space-y-3 font-mono text-sm">
                    <p className="text-[var(--color-text-secondary)]">instrucción:</p>
                    <p className="text-white">"Censurá todos los nombres de personas"</p>
                    <p className="text-[var(--color-text-secondary)] pt-2">rol bloqueado: <span className="text-[var(--color-primary)]">cliente</span></p>
                    <div className="pt-2 space-y-1">
                      <p className="text-green-400">✓ "Juan García" — p.1 bloqueado</p>
                      <p className="text-green-400">✓ "María López" — p.2 bloqueado</p>
                      <p className="text-green-400">✓ "Carlos Rodríguez" — p.3 bloqueado</p>
                    </div>
                    <p className="text-[var(--color-text-secondary)] pt-2">3 censuras aplicadas.</p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* How it works simple */}
      <section className="py-24 px-6 bg-black/20 w-full">
        <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">¿Cómo funciona?</h2>
        </FadeIn>

        <div className="space-y-8">
          {[
            { step: '01', title: 'Sube tu PDF', desc: 'Carga tu documento original sin alteraciones a nuestra plataforma segura.' },
            { 
              step: '02', 
              title: 'Define las Regiones — manual o con IA', 
              desc: 'Dibuja bloques de censura interactivos, o simplemente escribí una instrucción en lenguaje natural y la IA detecta automáticamente qué ocultar según el rol.' 
            },
            { step: '03', title: 'Genera el Link Seguro', desc: 'Crea un enlace para el perfil deseado. Se redibujará el PDF al vuelo y el link dejará de servir una vez abierto.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-center md:items-start gap-6 glass p-8 rounded-2xl">
              <div className="text-6xl font-black text-[#6366f133] leading-none shrink-0">{item.step}</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-[var(--color-border-glass)] bg-black/40 text-center">
        <p className="text-[var(--color-text-secondary)] text-sm">
          © {new Date().getFullYear()} AuraDocs. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
