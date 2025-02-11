import { useCallback } from 'react';

export const useShareToTelegram = (url: string, text: string) => {
  const handleShare = useCallback(() => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }, [url, text]);

  return handleShare;
};