import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Ruby.
 */
export const highlightRuby = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(#.*$)/g, wrap('$1', 'code-comment'));

  // Strings e Símbolos
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));
  h = h.replace(/(:(?:[a-zA-Z_][a-zA-Z0-9_]*|&quot;.*?&quot;))/g, wrap('$1', 'code-string'));

  // Keywords
  const keywords = [
    'def', 'end', 'class', 'module', 'if', 'else', 'elsif', 'unless', 'while', 'until', 
    'for', 'in', 'return', 'next', 'break', 'redo', 'retry', 'begin', 'rescue', 
    'ensure', 'case', 'when', 'then', 'and', 'or', 'not', 'self', 'nil', 'true', 'false',
    'yield', 'do'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Variáveis (@var, @@var, $var)
  h = h.replace(/(@[a-zA-Z_][a-zA-Z0-9_]*|@@[a-zA-Z_][a-zA-Z0-9_]*|\$[a-zA-Z_][a-zA-Z0-9_]*)/g, wrap('$1', 'code-var'));

  return h;
};
