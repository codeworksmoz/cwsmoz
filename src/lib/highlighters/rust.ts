import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para Rust.
 */
export const highlightRust = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários
  h = h.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/g, wrap('$1', 'code-comment'));

  // Strings e Lifetimes
  h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, wrap('$1', 'code-string'));
  h = h.replace(/(&#39;[a-z]\b)/g, wrap('$1', 'code-var')); // Lifetimes como 'a

  // Keywords
  const keywords = [
    'fn', 'let', 'mut', 'const', 'static', 'if', 'else', 'match', 'while', 'loop', 
    'for', 'in', 'return', 'break', 'continue', 'struct', 'enum', 'trait', 'impl', 
    'type', 'mod', 'use', 'pub', 'crate', 'self', 'Self', 'where', 'async', 'await', 
    'unsafe', 'move', 'dyn'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  h = h.replace(keywordRegex, wrap('$1', 'code-keyword'));

  // Tipos e Macros
  const types = ['i32', 'i64', 'u32', 'u64', 'f32', 'f64', 'bool', 'str', 'String', 'Vec', 'Option', 'Result', 'Box', 'Arc', 'Mutex'];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  h = h.replace(typeRegex, wrap('$1', 'code-type'));

  // Macros (ex: println!)
  h = h.replace(/([a-zA-Z_][a-zA-Z0-9_]*!)/g, wrap('$1', 'code-keyword'));

  return h;
};
