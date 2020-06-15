import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders select box', () => {
  const { getByLabelText } = render(<App />);
  const selectLocations = getByLabelText(/Aquifer Locations/i);
  expect(selectLocations).toBeInTheDocument();
});

test('Check if results table exists', () => {
  const { getByText } = render(<App />);
  const locationText = getByText(/Aquifer Location Results/i);
  expect(locationText).toBeInTheDocument();
})

test('Check alpha order', () => {
  const { container } = render(<App />)
  const locations = container.querySelector('[name="aquifers"]')
  console.log(locations[locations.length-1].value)
  // First item
  expect(locations[0].text).toBe('1 kilometre northwest of Hullcar')

  // Last item
  expect(locations[locations.length-1].text).toBe('Youbou')

})

test('Check list has null, empty and duplicate values removed', () => {
  // Add test here
})