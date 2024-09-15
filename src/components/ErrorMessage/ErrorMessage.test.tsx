import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import '@testing-library/jest-dom';

test('renders error message', () => {
  render(<ErrorMessage message="City not found" />);

  expect(screen.getByText(/Error:/i)).toBeInTheDocument();
  expect(screen.getByText(/City not found/i)).toBeInTheDocument();
});
