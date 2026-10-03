import { useEffect } from 'react';

// Wzorce polskich sierotek:
// 1. Spójniki, przyimki, partykuły: a, i, o, u, w, z, do, na, od, po, za, ze, we, że, co, by, to, tu, aż, bo, ku, ale, lub, czy, dla, nad, pod, bez, oraz, nie, jak, się
const orphanPattern = /(^|[\s(„"'«[\]])([aiouwz]|do|na|od|po|za|ze|we|że|co|by|to|tu|aż|bo|ku|ale|lub|czy|dla|nad|pod|bez|oraz|nie|jak|się)\s+/gui;

// 2. Liczby z jednostkami lub rzeczownikami (np. "3 tygodnie", "288 PLN", "15 miejsc", "21 dni")
const numberPattern = /(^|[\s(„"'«[\]])(\d+)\s+([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)/gu;

/**
 * Zastępuje spacje po spójnikach, przyimkach i krótkich wyrazach (tzw. sierotkach)
 * twardymi spacjami (non-breaking space \u00A0), aby nigdy nie zostawały na końcu wersu.
 */
export function fixPolishOrphans(text: string): string {
  if (!text || typeof text !== 'string') return text;
  
  return text
    .replace(orphanPattern, '$1$2\u00A0')
    .replace(orphanPattern, '$1$2\u00A0')
    .replace(numberPattern, '$1$2\u00A0$3');
}

/**
 * Hook automatycznie eliminujący wiszące spójniki (sierotki) w całym drzewie DOM.
 */
export function useOrphanFixer() {
  useEffect(() => {
    const fixNode = (node: Text) => {
      const val = node.nodeValue;
      if (!val || val.length < 2) return;

      const parent = node.parentElement;
      if (!parent) return;

      const tag = parent.tagName.toLowerCase();
      // Ignorujemy tagi kodu, formularzy i SVG
      if (['script', 'style', 'input', 'textarea', 'pre', 'code', 'svg', 'path'].includes(tag)) {
        return;
      }

      const replaced = fixPolishOrphans(val);

      if (replaced !== val) {
        node.nodeValue = replaced;
      }
    };

    const walk = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (n) => {
          const parent = n.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName.toLowerCase();
          if (['script', 'style', 'input', 'textarea', 'pre', 'code', 'svg', 'path'].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      let curr = walker.nextNode();
      while (curr) {
        fixNode(curr as Text);
        curr = walker.nextNode();
      }
    };

    // Początkowe przejście po całym dokumencie
    walk(document.body);

    // Obserwator zmian (np. otwarcie modala, dynamiczne przełączanie widoków)
    let isProcessing = false;
    const observer = new MutationObserver(() => {
      if (isProcessing) return;
      isProcessing = true;
      observer.disconnect();
      try {
        walk(document.body);
      } finally {
        observer.observe(document.body, { childList: true, subtree: true });
        isProcessing = false;
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);
}
