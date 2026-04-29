import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Python.
 */
export const highlightPython = (line: string): string => {
  let h = escapeHtml(line);

  h = h.replace(/(#.*$)/g, wrap('$1', 'code-comment'));
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  const keywords = [
    'def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'is', 'and', 'or', 
    'not', 'try', 'except', 'finally', 'raise', 'import', 'from', 'as', 'with', 'pass', 
    'break', 'continue', 'lambda', 'async', 'await', 'global', 'nonlocal', 'del', 'yield', 
    'None', 'True', 'False'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  return h;
};
