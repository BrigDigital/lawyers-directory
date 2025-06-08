import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LawyersDirectory from '../lawyers';

describe('LawyersDirectory', () => {
  test('renders provided lawyer info', () => {
    const lawyers = [
      { name: 'Alice', city: 'Delhi', phone: '1234567890', specialty: 'Civil' },
    ];
    render(<LawyersDirectory initialLawyers={lawyers} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText(/Delhi/)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
  });
});
