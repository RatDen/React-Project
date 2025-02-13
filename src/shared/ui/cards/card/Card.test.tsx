
import { render, screen } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom';

jest.mock('./card-icons', () => ({
  CardIcons: () => <div>Mocked CardIcons</div>,
}));

describe('Card Component', () => {
  it('отображается корректно с базовыми данными', () => {
    const defaultProps = {
      url: 'https://example.com',
      title: 'Test Title',
      image: 'https://thumbs.dfs.ivi.ru/storage38/contents/8/f/b40d9d5ba4878ed37b91796ec52895.jpg/153x235/?q=85',
      rating: 8.5,
      year: 2021,
      country: 'USA',
      duration: '120 мин',
      genre: 'Action',
      category: 'series',
    };

    render(<Card {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('сериал Иви')).toBeInTheDocument();
    expect(screen.getByText('Mocked CardIcons')).toBeInTheDocument();
  });
});
