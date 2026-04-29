import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para CSS.
 */
export const highlightCSS = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));

  // Propriedades e Valores
  h = h.replace(/([a-zA-Z-]+)(:)(.*?)(;)/g, (match, p1, p2, p3, p4) => {
    return wrap(p1, 'code-attr') + p2 + wrap(p3, 'code-string') + p4;
  });

  // Seletores e At-rules
  h = h.replace(/(@\w+)/g, wrap('$1', 'code-keyword'));
  h = h.replace(/([.#][a-zA-Z0-9_-]+)/g, wrap('$1', 'code-tag'));

  return h;
};
