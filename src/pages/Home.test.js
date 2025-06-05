import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}));

test('Renders Home component without crashing', () => {
    render(
        <Home />
    );

    expect(screen.getByText('GET-Recipe')).toBeInTheDocument();
});

test('Displays Search Recipes button', () => {
    render(
        <Home />
    );

    expect(screen.getByText('Search Recipes')).toBeInTheDocument();
});