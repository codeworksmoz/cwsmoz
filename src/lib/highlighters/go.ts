import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Go (Golang).
 */
export const highlightGo = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));

  // Strings
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;|`.*?`)/g, wrap('$1', 'code-string'));

  // Keywords
  const keywords = [
    'package', 'import', 'func', 'var', 'const', 'type', 'struct', 'interface', 
    'if', 'else', 'switch', 'case', 'default', 'for', 'range', 'return', 'go', 
    'chan', 'select', 'defer', 'panic', 'recover', 'map', 'range', 'nil', 'true', 'false'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Tipos
  const types = ['string', 'int', 'int64', 'float64', 'bool', 'byte', 'error', 'any'];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  return h;
};
