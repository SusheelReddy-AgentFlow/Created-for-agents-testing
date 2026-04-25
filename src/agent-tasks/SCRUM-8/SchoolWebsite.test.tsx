import React from 'react';
import { render, screen } from '@testing-library/react';
import SchoolWebsite from './SchoolWebsite';

describe('SchoolWebsite', () => {
  test('renders the main heading', () => {
    render(<SchoolWebsite />);
    expect(screen.getByText('Welcome to Our School!')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<SchoolWebsite />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /admissions/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('renders the hero section with call to action button', () => {
    render(<SchoolWebsite />);
    expect(screen.getByText('Learning Today, Leading Tomorrow')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
  });

  test('renders all information sections', () => {
    render(<SchoolWebsite />);
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /admissions/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });

  test('renders the footer with copyright information', () => {
    render(<SchoolWebsite />);
    expect(screen.getByText(/\u00A9 2023 Our School\. All rights reserved\./i)).toBeInTheDocument();
  });
});
