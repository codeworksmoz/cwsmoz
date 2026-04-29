
'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye, Terminal as TerminalIcon, ChevronDown, ChevronUp, Code as CodeIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

interface PracticeWorkspaceProps {
  language: string;
  isWebLang: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  code: string;
  setCode: (v: string) => void;
  htmlCode: string;
  setHtmlCode: (v: string) => void;
  cssCode: string;
  setCssCode: (v: string) => void;
  jsCode: string;
  setJsCode: (v: string) => void;
  isMobile: boolean;
  isConsoleOpen: boolean;
  setIsConsoleOpen: (v: boolean) => void;
  output: string;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}

export const PracticeWorkspace = React.memo(function PracticeWorkspace({
  language,
  isWebLang,
  activeTab,
  setActiveTab,
  code,
  setCode,
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
  isMobile,
  isConsoleOpen,
  setIsConsoleOpen,
  output,
  iframeRef
}: PracticeWorkspaceProps) {
  
  // Lógica de determinação do código atual para o editor
  const currentCode = isWebLang 
    ? (activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : activeTab === 'js' ? jsCode : htmlCode) 
    : code;

  const handleEditorChange = (v: string | undefined) => {
    const val = v || "";
    if (isWebLang) {
      if (activeTab === 'html') setHtmlCode(val);
      else if (activeTab === 'css') setCssCode(val);
      else if (activeTab === 'js') setJsCode(val);
    } else {
      setCode(val);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden h-full">
      <div className="flex items-center justify-between px-3 md:px-4 h-10 md:h-11 bg-black/60 border-b border-white/5 shrink-0">
        <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth">
          {isWebLang ? (
            <>
              <Button variant={activeTab === 'html' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('html')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">HTML</Button>
              <Button variant={activeTab === 'css' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('css')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">CSS</Button>
              <Button variant={activeTab === 'js' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('js')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold">JS</Button>
              <Button variant={activeTab === 'preview' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('preview')} className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold lg:hidden">VIEW</Button>
            </>
          ) : (
            <Button variant="secondary" size="sm" className="h-7 md:h-8 text-[9px] md:text-[10px] font-bold uppercase">
              <CodeIcon className="w-3.5 h-3.5 mr-1" /> {language === 'concept' ? "Lógica" : "Editor"}
            </Button>
          )}
        </div>
        <div className="hidden lg:block text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-50">
           Engine {language.toUpperCase()} v1.0
        </div>
      </div>

      <div className="flex-1 flex relative overflow-hidden min-h-0">
        <div className={cn("flex-1 h-full", (activeTab === 'preview' && isMobile) ? "hidden" : "block")}>
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            language={activeTab === 'html' ? 'html' : (activeTab === 'css' ? 'css' : (language === 'javascript' ? 'javascript' : language))}
            value={currentCode}
            onChange={handleEditorChange}
            options={{ 
              minimap: { enabled: false }, 
              fontSize: 14, 
              automaticLayout: true, 
              wordWrap: "on",
              padding: { top: 15 },
              scrollBeyondLastLine: false,
              fontFamily: "'Source Code Pro', monospace",
              lineNumbers: "on",
              renderLineHighlight: "all"
            }}
          />
        </div>
        
        {activeTab === 'preview' && isMobile && (
           <div className="flex-1 flex flex-col bg-white">
              <div className="h-6 bg-muted text-[8px] font-bold flex items-center px-3 text-muted-foreground uppercase"><Eye className="w-2.5 h-2.5 mr-1.5" /> Live Preview</div>
              <iframe ref={iframeRef} className="flex-1 w-full border-none" title="Preview" />
           </div>
        )}

        {!isMobile && isWebLang && (
          <div className="w-1/2 border-l border-white/5 bg-white flex flex-col shadow-2xl">
            <div className="h-6 bg-muted text-[9px] font-black flex items-center px-3 text-muted-foreground uppercase tracking-widest"><Eye className="w-3 h-3 mr-2" /> Live Interaction View</div>
            <iframe ref={iframeRef} className="flex-1 w-full border-none" title="Preview" />
          </div>
        )}
      </div>

      <div className={cn("bg-[#0f0f0f] border-t border-white/10 transition-all duration-300 shrink-0", isConsoleOpen ? "h-40 md:h-56" : "h-8 md:h-10")}>
        <div className="flex items-center justify-between px-4 h-8 md:h-10 cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5" onClick={() => setIsConsoleOpen(!isConsoleOpen)}>
          <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase flex items-center gap-2 tracking-widest">
            <TerminalIcon className="w-3 h-3 text-green-500" /> Terminal de Debugging
          </span>
          {isConsoleOpen ? <ChevronDown className="w-4 h-4 opacity-40" /> : <ChevronUp className="w-4 h-4 opacity-40" />}
        </div>
        {isConsoleOpen && (
          <div className="p-4 text-[11px] md:text-xs font-code text-green-400 overflow-y-auto h-32 md:h-44 custom-scrollbar bg-black/40">
            <div className="opacity-40 mb-2 font-sans text-[9px] border-b border-green-900/30 pb-1">
              [LOG SYSTEM READY: {new Date().toLocaleTimeString()}]
            </div>
            <pre className="leading-relaxed whitespace-pre-wrap">{output || "> Pronto para execução. Aguardando input..."}</pre>
          </div>
        )}
      </div>
    </div>
  );
});
