import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hockey tracker header', () => {
  render(<App />);
  const heading = screen.getByText(/Hockey Baseline Development Tracker/i);
  expect(heading).toBeDefined();
});
