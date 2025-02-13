import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useShareToTelegram } from './useShareToTelegram';

describe('useShareToTelegram', () => {
  const mockUrl = 'https://example.com';
  const mockText = 'Посмотри этот фильм:';

  beforeEach(() => {
    global.open = jest.fn();
  });

  it('возвращает функцию handleShare', () => {
    const { result } = renderHook(() => useShareToTelegram(mockUrl, mockText));

    expect(typeof result.current).toBe('function');
  });

  it('открывает правильную ссылку при вызове handleShare', () => {
    const { result } = renderHook(() => useShareToTelegram(mockUrl, mockText));

    result.current();

    expect(global.open).toHaveBeenCalledWith(
      `https://t.me/share/url?url=${encodeURIComponent(mockUrl)}&text=${encodeURIComponent(mockText)}`,
      '_blank'
    );
  });
});
