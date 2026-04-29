import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Bash/Shell.
 */
export const highlightBash = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(#.*$)/g, wrap('$1', 'code-comment'));

  // Strings
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  // Comandos comuns e keywords
  const keywords = [
    'if', 'then', 'else', 'elif', 'fi', 'for', 'while', 'in', 'do', 'done', 'case', 
    'esac', 'function', 'sudo', 'apt', 'npm', 'composer', 'git', 'docker', 'ls', 
    'cd', 'pwd', 'mkdir', 'rm', 'cp', 'mv', 'chmod', 'chown', 'echo', 'export'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Variáveis ($VAR)
  h = h.replace(/(\$[a-zA-Z_][a-zA-Z0-9_]*)/g, wrap('$1', 'code-var'));

  return h;
};
