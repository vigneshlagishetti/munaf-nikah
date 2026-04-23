/**
 * Share using Web Share API (mobile) with fallback to clipboard copy.
 */
export async function shareInvitation({ title, text, url }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return { success: true, method: 'share' };
    } catch (err) {
      if (err.name === 'AbortError') return { success: false, method: 'cancelled' };
    }
  }

  // Fallback: copy link
  try {
    await navigator.clipboard.writeText(url || window.location.href);
    return { success: true, method: 'clipboard' };
  } catch {
    return { success: false, method: 'failed' };
  }
}

/**
 * Share via WhatsApp with pre-filled message.
 */
export function shareViaWhatsApp({ text, url }) {
  const message = encodeURIComponent(`${text}\n\n${url || window.location.href}`);
  window.open(`https://wa.me/?text=${message}`, '_blank');
}

/**
 * Copy text to clipboard with toast feedback.
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    const result = document.execCommand('copy');
    document.body.removeChild(textArea);
    return result;
  }
}
