/* ============================================
   AIVC Copy-to-Clipboard
   For prompt page code blocks
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetSelector = btn.getAttribute('data-copy');
      const target = document.querySelector(targetSelector);

      if (!target) return;

      const originalText = btn.textContent;

      try {
        await navigator.clipboard.writeText(target.textContent);
        btn.textContent = 'Copied!';
        btn.setAttribute('aria-label', 'Copied to clipboard');
        btn.classList.add('copied');

        setTimeout(() => {
          btn.textContent = originalText;
          btn.setAttribute('aria-label', 'Copy to clipboard');
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = target.textContent;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        } catch (e) {
          btn.textContent = 'Failed';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        }
        document.body.removeChild(textArea);
      }
    });
  });
});
