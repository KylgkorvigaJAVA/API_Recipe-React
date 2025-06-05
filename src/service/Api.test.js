import { fetchMeals } from './Api';

global.fetch = jest.fn();

describe('API Service', () => {
    beforeEach(() => {
        fetch.mockClear();
        jest.clearAllMocks();
    });

    test('Constructs correct URL for search type', async () => {
        const mockResponse = {
            meals: [{ idMeal: '1', strMeal: 'Test Meal' }]
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse
        });

        await fetchMeals('search', 'chicken');

        expect(fetch).toHaveBeenCalledWith(
            'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
        );
    });

    test('Returns empty array for invalid search type', async () => {

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        const result = await fetchMeals('invalid', 'test');

        expect(result).toEqual([]);
        expect(consoleSpy).toHaveBeenCalledWith(
            'Error fetching meals:',
            expect.any(Error)
        );

        consoleSpy.mockRestore();
    });
});