import { escapeHtml, wrap } from './core';

/**
 * @fileOverview Highlighter especializado para HTML/XML.
 */
export const highlightHTML = (line: string): string => {
  let h = escapeHtml(line);

  // Comentários HTML
  h = h.replace(/(&lt;!--)(.*?)(--&gt;)/g, wrap('$1$2$3', 'code-comment'));

  // Tags
  h = h.replace(/(&lt;\/?)([a-zA-Z0-9-]+)([\s\S]*?)(\/?&gt;)/g, (match, p1, p2, p3, p4) => {
    return wrap(p1, 'code-tag') + wrap(p2, 'code-tag') + p3 + wrap(p4, 'code-tag');
  });

  // Atributos
  h = h.replace(/(\s)([a-zA-Z-]+)(=)(&quot;.*?&quot;|&#39;.*?&#39;)/g, (match, p1, p2, p3, p4) => {
    return p1 + wrap(p2, 'code-attr') + p3 + wrap(p4, 'code-string');
  });

  return h;
};
