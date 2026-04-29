import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para SQL.
 */
export const highlightSQL = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(--.*$)/g, wrap('$1', 'code-comment'));

  // Strings
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));

  // Keywords SQL (Case Insensitive em muitos casos, mas aqui focamos em uppercase/lowercase comum)
  const keywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'INSERT', 'INTO', 'UPDATE', 
    'DELETE', 'SET', 'VALUES', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'GROUP', 
    'BY', 'ORDER', 'HAVING', 'LIMIT', 'OFFSET', 'TABLE', 'CREATE', 'ALTER', 
    'DROP', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'INDEX', 'SCHEMA', 
    'select', 'from', 'where', 'and', 'or', 'insert', 'update', 'delete', 'join'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Tipos
  const types = ['INT', 'VARCHAR', 'TEXT', 'DATE', 'TIMESTAMP', 'BOOLEAN', 'FLOAT', 'DECIMAL'];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  return h;
};
