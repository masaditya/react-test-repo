import { render, screen, fireEvent, getByText, findAllByText, container, getByRole } from "@testing-library/react";
import App from "./App";

test("render input todo", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/input todo/i);
  expect(inputElement).toBeInTheDocument();
});

test("Submit Button todo", async () => {
  render(<App />);
  const button = screen.getByText("Add Todo")
  expect(button).toBeInTheDocument()
});
