/**
 * Precyzyjne przewijanie do wybranej sekcji z uwzględnieniem
 * wysokości przyklejonego paska nawigacji (64px).
 * Gwarantuje lądowanie idealnie na samej górze sekcji.
 */
export const scrollToSection = (targetId: string, smooth: boolean = true) => {
  const cleanId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
  const targetElement = document.getElementById(cleanId);
  if (!targetElement) return;

  const navHeight = 64; // wysokość przyklejonego paska nawigacji (h-16 = 64px)
  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetTop = rect.top + scrollTop - navHeight;

  window.scrollTo({
    top: Math.max(0, Math.round(targetTop)),
    behavior: smooth ? 'smooth' : 'auto'
  });
};
