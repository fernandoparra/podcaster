import { render, screen } from '@testing-library/react';
import { Card } from '../index';

test('should render the card', () => {
  render(
    <Card>
      <div>Card text</div>
    </Card>
  );
  const text = screen.getByText('Card text');
  expect(text).toBeInTheDocument();
});
