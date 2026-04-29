'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Code as CodeIcon, Smartphone, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { getHighlighter } from "@/lib/highlighters";

interface InteractiveCodeBlockProps {
  code: string;
  language: string;
}

export function InteractiveCodeBlock({ code, language }: InteractiveCodeBlockProps) {
  const [view, setView] = useState<'code' | 'preview'>('code');
  const [isMobileSim, setIsMobileSim] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Limpa o código para o iframe (remove escapes para execução real)
  const cleanCode = useMemo(() => {
    return code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }, [code]);

  useEffect(() => {
    if (view === 'preview' && iframeRef.current) {
      const updateIframe = () => {
        const doc = iframeRef.current?.contentDocument;
        if (doc) {
          doc.open();
          
          const hasViewport = cleanCode.includes('viewport');
          const viewportSimStyles = !hasViewport && isMobileSim ? `
            body { width: 980px !important; transform: scale(0.28); transform-origin: top left; }
          ` : '';

          doc.write(`
            <html>
              <head>
                <meta charset="UTF-8">
                <style>
                  * { box-sizing: border-box; }
                  body { 
                    font-family: system-ui, -apple-system, sans-serif; 
                    margin: 0; padding: 15px; 
                    background: #f8fafc; color: #1e293b;
                    line-height: 1.5;
                    overflow-x: auto;
                    ${viewportSimStyles}
                  }
                  
                  header, nav, main, article, section, footer, aside {
                    border: 2px dashed #cbd5e1;
                    padding: 1.5rem 1rem 1rem 1rem;
                    margin-bottom: 1rem;
                    position: relative;
                    background: white;
                    border-radius: 8px;
                  }

                  header::before, nav::before, main::before, article::before, 
                  section::before, footer::before, aside::before {
                    content: attr(data-tag-name);
                    position: absolute;
                    top: 0; left: 0;
                    background: #64748b;
                    color: white;
                    font-size: 8px;
                    font-weight: bold;
                    padding: 2px 5px;
                    border-radius: 6px 0 6px 0;
                    text-transform: uppercase;
                  }

                  h1, h2, h3 { margin-top: 0; color: #0f172a; word-break: break-word; }
                  p { margin-bottom: 0.5rem; word-break: break-word; }
                  
                  header:not([data-tag-name])::before { content: "header"; }
                  nav:not([data-tag-name])::before { content: "nav"; }
                  main:not([data-tag-name])::before { content: "main"; }
                  footer:not([data-tag-name])::before { content: "footer"; }
                  section:not([data-tag-name])::before { content: "section"; }
                  article:not([data-tag-name])::before { content: "article"; }
                  aside:not([data-tag-name])::before { content: "aside"; }
                </style>
              </head>
              <body>${cleanCode}</body>
            </html>
          `);
          doc.close();

          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc) {
            iframeDoc.querySelectorAll('form').forEach(form => {
              form.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
              });
            });

            iframeDoc.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#' && !href.startsWith('#') && !href.startsWith('javascript:void')) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              });
            });
          }
        }
      };

      const timer = setTimeout(updateIframe, 50);
      return () => clearTimeout(timer);
    }
  }, [view, cleanCode, isMobileSim]);

  const renderedLines = useMemo(() => {
    const highlighter = getHighlighter(language);
    return code.split('\n').map((line, i) => (
      <div key={i} className="min-w-fit leading-relaxed">
        <span className="select-none text-white/20 mr-3 inline-block w-6 text-right text-[10px]">
          {i + 1}
        </span>
        <span dangerouslySetInnerHTML={{ __html: highlighter(line) || ' ' }} />
      </div>
    ));
  }, [code, language]);

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl max-w-full">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <Button 
            variant={view === 'code' ? 'secondary' : 'ghost'} 
            size="sm" 
            className="h-7 rounded-full text-[9px] font-black uppercase px-3"
            onClick={() => setView('code')}
          >
            <CodeIcon className="w-3 h-3 mr-1" /> Código
          </Button>
          {(language === 'html' || language === 'css') && (
            <Button 
              variant={view === 'preview' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-7 rounded-full text-[9px] font-black uppercase px-3"
              onClick={() => setView('preview')}
            >
              <Eye className="w-3 h-3 mr-1" /> Preview
            </Button>
          )}
        </div>
        
        {view === 'preview' && (
          <div className="flex bg-black/40 rounded-full p-0.5 border border-white/5">
            <button 
              onClick={() => setIsMobileSim(true)}
              className={cn("p-1 rounded-full transition-colors", isMobileSim ? "bg-primary text-white shadow-sm" : "text-muted-foreground")}
            >
              <Smartphone className="w-3 h-3" />
            </button>
            <button 
              onClick={() => setIsMobileSim(false)}
              className={cn("p-1 rounded-full transition-colors", !isMobileSim ? "bg-primary text-white shadow-sm" : "text-muted-foreground")}
            >
              <Laptop className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
      
      <div className="relative overflow-hidden bg-[#0d1117]">
        {view === 'code' ? (
          <div className="p-4 overflow-x-auto custom-scrollbar">
            <pre className="m-0 scroll-smooth text-[12px] font-mono text-gray-300">
              <code className="block">
                {renderedLines}
              </code>
            </pre>
          </div>
        ) : (
          <div className={cn(
            "flex justify-center bg-[#f1f5f9] transition-all duration-300 py-6 px-2 overflow-hidden",
            isMobileSim ? "items-center" : "items-start"
          )}>
            <div className={cn(
              "bg-white shadow-2xl transition-all duration-500 overflow-hidden border-[6px] border-[#1e293b] relative",
              isMobileSim ? "w-[300px] h-[480px] rounded-[2.5rem]" : "w-full max-w-4xl h-[400px] rounded-t-lg border-b-0"
            )}>
               <div className="h-5 bg-[#1e293b] flex items-center justify-center gap-1 shrink-0">
                  <div className="w-10 h-1.5 bg-white/10 rounded-full" />
               </div>
               <iframe 
                 ref={iframeRef} 
                 className="w-full h-full border-none bg-white" 
                 title="Live Interaction View"
                 sandbox="allow-scripts"
               />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
