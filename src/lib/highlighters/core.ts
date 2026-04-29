/**
 * @fileOverview Utilitários base para o motor de Syntax Highlighting.
 */

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function wrap(text: string, className: string): string {
  return `<span class="${className}">${text}</span>`;
}

export type Highlighter = (line: string) => string;
