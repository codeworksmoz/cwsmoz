import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para PHP 8.4+.
 */
export const highlightPHP = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários (prioridade máxima)
  h = h.replace(/(\/\/.*$|#.*$)/g, wrap('$1', 'code-comment'));

  // Strings
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  // Tags PHP
  h = h.replace(/(&lt;\?php|\?&gt;)/g, wrap('$1', 'code-tag'));

  // Atributos PHP 8+ (#[Attribute])
  h = h.replace(/(#\[.*?\])/g, wrap('$1', 'code-attr'));

  // Keywords (incluindo PHP 8.4 Property Hooks e Visibility)
  const keywords = [
    'class', 'function', 'public', 'private', 'protected', 'return', 'new', 'if', 'else', 'foreach', 
    'namespace', 'use', 'enum', 'case', 'readonly', 'static', 'interface', 'implements', 'extends', 
    'as', 'instanceof', 'trait', 'final', 'try', 'catch', 'finally', 'throw', 'never', 'mixed', 
    'void', 'set', 'get', 'match', 'default', 'break', 'continue', 'var', 'readonly', 'private(set)'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Variáveis ($var)
  h = h.replace(/(\$[a-zA-Z_][a-zA-Z0-9_]*)/g, wrap('$1', 'code-var'));

  return h;
};
