import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Java.
 */
export const highlightJava = (line: string): string => {
  let h = escapeHtml(line);

  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  const keywords = [
    'class', 'interface', 'enum', 'record', 'public', 'private', 'protected', 'static', 
    'final', 'abstract', 'void', 'return', 'new', 'if', 'else', 'for', 'while', 'do', 
    'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'throws', 
    'extends', 'implements', 'package', 'import', 'instanceof', 'sealed', 'permits', 
    'non-sealed'
  ];
  const types = ['String', 'Integer', 'int', 'long', 'double', 'float', 'boolean', 'byte', 'char'];
  
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');

  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  return h;
};
