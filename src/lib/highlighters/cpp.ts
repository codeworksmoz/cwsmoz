import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para C++.
 */
export const highlightCPP = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários e Diretivas
  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));
  h = h.replace(/^(#\w+)/g, wrap('$1', 'code-keyword'));

  // Strings
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  // Keywords
  const keywords = [
    'class', 'struct', 'namespace', 'public', 'private', 'protected', 'virtual', 
    'override', 'final', 'template', 'typename', 'using', 'std', 'return', 'new', 
    'delete', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 
    'continue', 'try', 'catch', 'throw', 'nullptr', 'true', 'false', 'const', 'static'
  ];
  const types = ['int', 'char', 'float', 'double', 'bool', 'void', 'string', 'auto', 'long', 'size_t'];
  
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');

  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  return h;
};
