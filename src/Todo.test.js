import { render, screen } from '@testing-library/react';
import App from './App';

test('render input todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/input todo/i)
  expect(inputElement).toBeInTheDocument();
});

test('Submit Button todo', async () => {
    render(<App />)
    fireEvent.click(getByText('Submit'))
    const items = await screen.findAllByText(/Item #[0-9]: /)
    expect(items).toHaveLength(10)
})

