// import necessary react testing library helpers here
// import the Counter component here

import {fireEvent, render, screen} from "@testing-library/react";
import App from "../components/App";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const {getByTestId} = render(<Counter />);
    const counterMessage = getByTestId('count');
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const {getByTestId} = render(<Counter />);
    const counterMessage = getByTestId('count');
    expect(counterMessage.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const {getByTestId, getByText} = render(<Counter />);
    const counterMessage = getByTestId('count');
    const increment = getByText('+');
    fireEvent.click(increment);
    expect(counterMessage.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const {getByTestId, getByText} = render(<Counter />);
    const counterMessage = getByTestId('count');
    const decrement = getByText('-');
    fireEvent.click(decrement);
    expect(counterMessage.textContent).toBe('-1');
});
