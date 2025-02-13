import { render, screen, fireEvent } from '@testing-library/react';
import { CardIcons } from './index';
import '@testing-library/jest-dom';
import { useShareToTelegram } from '@/shared/hooks/useShareToTelegram';

jest.mock('@/shared/hooks/useShareToTelegram', () => ({
  useShareToTelegram: jest.fn(() => jest.fn()),
}));

describe('CardIcons Component', () => {
  const mockUrl = 'https://example.com';

  it('рендерит все иконки', () => {
    render(<CardIcons url={mockUrl} />);

    expect(screen.getByTitle('Буду смотреть')).toBeInTheDocument();
    expect(screen.getByTitle('Поделиться с друзьями')).toBeInTheDocument();
    expect(screen.getByTitle('Похожее')).toBeInTheDocument();
    expect(screen.getByTitle('Уже смотрел, оценить')).toBeInTheDocument();
    expect(screen.getByTitle('Не нравится такое')).toBeInTheDocument();
  });

  it('вызывает handleShare при клике на кнопку "Поделиться с друзьями"', () => {
    const mockHandleShare = jest.fn();
    (useShareToTelegram as jest.Mock).mockReturnValue(mockHandleShare);

    render(<CardIcons url={mockUrl} />);

    const shareButton = screen.getByTitle('Поделиться с друзьями');
    fireEvent.click(shareButton);

    expect(mockHandleShare).toHaveBeenCalledTimes(1);
  });
});
