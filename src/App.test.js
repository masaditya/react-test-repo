import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render title todo list", ()=> {
  render(<App/>)
  const titleElement = screen.getByText(/Todo list/i);
  expect(titleElement).toBeInTheDocument()
})

