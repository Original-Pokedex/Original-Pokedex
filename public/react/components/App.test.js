/** @jest-environment jsdom */
const {fetch} = require('whatwg-fetch');
global.fetch = fetch;
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome to the Original Pokedex')).toBeInTheDocument();
});

it('should be a working test', () => {
    expect(true).toBe(true);
  });
  