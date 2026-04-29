import { highlightPHP } from './php';
import { highlightJS } from './javascript';
import { highlightJava } from './java';
import { highlightKotlin } from './kotlin';
import { highlightPython } from './python';
import { highlightHTML } from './html';
import { highlightCSS } from './css';
import { highlightRust } from './rust';
import { highlightGo } from './go';
import { highlightRuby } from './ruby';
import { highlightSQL } from './sql';
import { highlightBash } from './bash';

/**
 * @fileOverview Dispatcher central de Syntax Highlighting modular.
 */
export const getHighlighter = (language: string) => {
  const lang = language.toLowerCase();

  // Web
  if (['html', 'xml'].includes(lang)) return highlightHTML;
  if (lang === 'css') return highlightCSS;
  if (['javascript', 'typescript', 'js', 'ts'].includes(lang)) return highlightJS;

  // Backend & Systems
  if (lang === 'php') return highlightPHP;
  if (lang === 'java') return highlightJava;
  if (['kotlin', 'kt'].includes(lang)) return highlightKotlin;
  if (lang === 'python' || lang === 'py') return highlightPython;
  if (lang === 'rust' || lang === 'rs') return highlightRust;
  if (lang === 'go') return highlightGo;
  if (lang === 'ruby' || lang === 'rb') return highlightRuby;
  if (lang === 'cpp' || lang === 'c++') return highlightCPP;

  // Tools & DB
  if (['bash', 'sh', 'shell', 'zsh'].includes(lang)) return highlightBash;
  if (lang === 'sql') return highlightSQL;

  return (line: string) => line; // Fallback: sem highlight
};
