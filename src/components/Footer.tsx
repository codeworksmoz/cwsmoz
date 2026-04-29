"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageContext";
import { Github, Linkedin, Twitter, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/30 border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo className="h-24 w-auto -ml-4" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A plataforma de engenharia de software definitiva para a próxima geração de talentos em Moçambique. Do zero ao domínio total.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-primary">Plataforma</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">{t.dashboard}</Link></li>
              <li><Link href="/modules" className="hover:text-primary transition-colors">{t.modules}</Link></li>
              <li><Link href="/leaderboard" className="hover:text-primary transition-colors">{t.leaderboard}</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">Certificações</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-primary">Comunidade</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="/community" className="hover:text-primary transition-colors">{t.community}</Link></li>
              <li><Link href="/documentation" className="hover:text-primary transition-colors">Documentação</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Parceiros</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Fórum de Ajuda</Link></li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-primary">Contacto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>geral@codworks.mz</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary" />
                <span>Língua: Português (MZ)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
          <p>© 2026 Codworks Moz. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Termos</Link>
            <Link href="/security" className="hover:text-primary transition-colors">Segurança</Link>
          </div>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-red-500 text-base">♥</span> in Maputo
          </p>
        </div>
      </div>
    </footer>
  );
}
