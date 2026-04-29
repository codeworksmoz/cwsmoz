import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para JS/TS.
 */
export const highlightJS = (line: string): string => {
  let h = escapeHtml(line);

  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;|`.*?`)/g, wrap('$1', 'code-string'));

  const keywords = [
    'class', 'function', 'public', 'private', 'return', 'new', 'if', 'else', 'for', 'of', 'in', 
    'while', 'do', 'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 
    'async', 'await', 'var', 'let', 'const', 'export', 'import', 'from', 'as', 'type', 
    'interface', 'implements', 'extends', 'static', 'readonly', 'null', 'undefined', 'true', 'false'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  return h;
};
