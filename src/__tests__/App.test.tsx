import { render, screen } from '@testing-library/react';
import { App } from '../App';

test('should render the app', () => {
  render(<App />);
  const title = screen.getByText('Podcaster');
  expect(title).toBeInTheDocument();
});
