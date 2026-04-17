"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { useI18n } from "@/context/I18nContext";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-4 md:mb-0">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">{t('Footer.description')}</p>
          </div>
          <div className="col-span-1 md:col-start-3 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">{t('Footer.curriculum')}</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/niveis" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.levels')}</Link></li>
                <li><Link href="/areas-de-conhecimento" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.knowledgeAreas')}</Link></li>
                <li><Link href="/certificados" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.certificates')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t('Footer.community')}</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/forum" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.forum')}</Link></li>
                <li><Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.leaderboard')}</Link></li>
                <li><Link href="/eventos" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.events')}</Link></li>
                <li><Link href="/contribuir" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.contribute')}</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground">{t('Footer.legal')}</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.privacyPolicy')}</Link></li>
                <li><Link href="/termos-de-servico" className="text-sm text-muted-foreground hover:text-foreground">{t('Footer.termsOfService')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          {t('Footer.copyright').replace('{year}', currentYear.toString())}
        </div>
      </div>
    </footer>
  );
}
