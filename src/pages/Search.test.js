import { render, screen } from '@testing-library/react';
import Search from './Search';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}));

test('Renders search type dropdown with correct options', () => {
    render(
        <Search />
    );

    expect(screen.getByText('Search by Name')).toBeInTheDocument();
    expect(screen.getByText('Filter by Category')).toBeInTheDocument();
});

test('Displays correct page title', () => {
    render(
        <Search />
    );

    expect(screen.getByText('Search Meals')).toBeInTheDocument();
});