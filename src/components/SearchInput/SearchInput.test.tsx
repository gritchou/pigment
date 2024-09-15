import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom';

test('renders input and button', () => {
  const mockOnSearch = jest.fn();
  render(<SearchInput onSearch={mockOnSearch} />);


  const input = screen.getByPlaceholderText('Enter city');
  const button = screen.getByRole('button', { name: /search/i });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('calls onSearch with correct value', () => {
  const mockOnSearch = jest.fn();
  render(<SearchInput onSearch={mockOnSearch} />);

  const input = screen.getByPlaceholderText('Enter city');
  const button = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'Paris' } });
  fireEvent.click(button);

  expect(mockOnSearch).toHaveBeenCalledWith('Paris');
});

test('does not call onSearch with empty input', () => {
  const mockOnSearch = jest.fn();
  render(<SearchInput onSearch={mockOnSearch} />);

  const button = screen.getByRole('button', { name: /search/i });
  fireEvent.click(button);

  expect(mockOnSearch).not.toHaveBeenCalled();
});
