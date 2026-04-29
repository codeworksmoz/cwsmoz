import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Kotlin.
 */
export const highlightKotlin = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));

  // Strings e Interpolação
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));
  h = h.replace(/(\$\{.*?\})/g, wrap('$1', 'code-var'));

  // Keywords
  const keywords = [
    'package', 'import', 'class', 'interface', 'object', 'fun', 'val', 'var', 
    'if', 'else', 'when', 'for', 'while', 'do', 'return', 'break', 'continue', 
    'try', 'catch', 'finally', 'throw', 'is', 'as', 'in', 'out', 'where', 'by', 
    'init', 'constructor', 'delegate', 'sealed', 'open', 'final', 'abstract', 
    'internal', 'private', 'protected', 'public', 'suspend', 'coroutine'
  ];
  const types = ['String', 'Int', 'Long', 'Double', 'Float', 'Boolean', 'Byte', 'Char', 'Any', 'Nothing', 'Unit'];
  
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');

  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  return h;
};
