"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Award, Download, Share2, ShieldCheck, ExternalLink, Loader2, QrCode } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import jsPDF from "jspdf";

export default function CertificationsPage() {
  const { t } = useLanguage();
  const { user, profile } = useAuth();
  const certAsset = PlaceHolderImages.find(img => img.id === 'certificate-badge');
  
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCerts() {
      if (!user) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('user_id', user.id)
        .order('issued_at', { ascending: false });
      
      if (!error && data) {
        setCertificates(data);
      }
      setLoading(false);
    }
    fetchCerts();
  }, [user]);

  const downloadCertificate = (cert: any) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    doc.setFillColor(15, 23, 42); 
    doc.rect(0, 0, 297, 210, "F");
    
    doc.setDrawColor(59, 130, 246); 
    doc.setLineWidth(1);
    doc.rect(5, 5, 287, 200);
    doc.setDrawColor(30, 41, 59);
    doc.rect(8, 8, 281, 194);

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("CODWORKS MOÇAMBIQUE", 148.5, 25, { align: "center" });

    doc.setFontSize(42);
    doc.setTextColor(59, 130, 246);
    doc.text("CERTIFICADO", 148.5, 60, { align: "center" });
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("DE CONCLUSÃO TÉCNICA", 148.5, 72, { align: "center" });

    doc.setFontSize(18);
    doc.setFont("helvetica", "normal");
    doc.text("Esta certifica que o Engenheiro(a)", 148.5, 95, { align: "center" });

    doc.setFontSize(36);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(profile?.display_name || "Estudante Codworks", 148.5, 115, { align: "center" });

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(`Completou com distinção o módulo de especialização:`, 148.5, 135, { align: "center" });

    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(59, 130, 246);
    doc.text(cert.level_title.toUpperCase(), 148.5, 155, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184); 
    const verifyUrl = `${window.location.origin}/verify/${cert.id}`;
    doc.text(`Emitido em: ${new Date(cert.issued_at).toLocaleDateString()}`, 40, 185);
    doc.text(`ID de Verificação: ${cert.id}`, 40, 192);
    
    doc.setTextColor(59, 130, 246);
    doc.text(`Validar autenticidade em: ${verifyUrl}`, 40, 199);

    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.circle(250, 180, 15, 'S');
    doc.setFontSize(8);
    doc.text("VERIFIED", 250, 181, { align: "center" });
    doc.text("ELITE", 250, 184, { align: "center" });

    doc.save(`certificado-codworks-${cert.level_id}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl flex-1">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-6 border-2 border-primary/20">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-headline text-5xl font-bold mb-4">Conquistas de Engenharia</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada certificado possui um ID de verificação único e cumpre os padrões internacionais de competência técnica.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-8 mb-20">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <Card key={cert.id} className="bg-card/50 border-none shadow-2xl overflow-hidden group hover:ring-2 ring-primary/20 transition-all rounded-[2.5rem]">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-primary/5 p-12 flex items-center justify-center relative border-r border-white/5">
                      {certAsset && (
                        <Image 
                          src={certAsset.imageUrl} 
                          alt={certAsset.description}
                          width={180}
                          height={180}
                          className="drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <CardContent className="md:w-2/3 p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-green-500 font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                          <ShieldCheck className="w-4 h-4" />
                          Credencial Verificada
                        </div>
                        <h2 className="font-headline text-3xl font-bold mb-3">{cert.level_title}</h2>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                           <span className="flex items-center gap-1.5"><QrCode className="w-4 h-4" /> ID: {cert.id.substring(0,8)}...</span>
                           <span>•</span>
                           <span>Emitido em {new Date(cert.issued_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          onClick={() => downloadCertificate(cert)}
                          className="flex-1 rounded-2xl h-14 font-bold shadow-lg shadow-primary/20 text-lg"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Descarregar PDF
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-2xl h-14 font-bold border-white/10 hover:bg-white/5">
                          <Share2 className="w-5 h-5 mr-2" />
                          Partilhar
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-24 bg-card/20 rounded-[3rem] border-dashed border-2 border-white/5">
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-10" />
                <h3 className="text-2xl font-bold opacity-40 mb-2">Nenhuma certificação emitida</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">Conclui os níveis para desbloquear os teus certificados de engenheiro de elite.</p>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}