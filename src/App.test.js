import { render } from '@testing-library/react';
import App from './App';

jest.mock('./pages/Home', () => {
    return function MockHome() {
        return <div data-testid="home">Home Component</div>;
    };
});

jest.mock('./pages/Search', () => {
    return function MockSearch() {
        return <div data-testid="search">Search Component</div>;
    };
});

jest.mock('./pages/Meals', () => {
    return function MockMeals() {
        return <div data-testid="meals">Meals Component</div>;
    };
});

jest.mock('./pages/SavedRecipes', () => {
    return function MockSavedRecipes() {
        return <div data-testid="saved">SavedRecipes Component</div>;
    };
});

test('App renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
});