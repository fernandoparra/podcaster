import { render, screen } from '@testing-library/react';
import { Search } from '../index';

test('should render search input', () => {
  render(
    <Search
      search={'text'}
      onSearch={() => {}}
    />
  );

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('text');
});
