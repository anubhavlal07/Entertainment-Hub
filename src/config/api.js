// TMDB API Configuration
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Build API URL helper (optional - for future use)
export const buildTMDBUrl = (endpoint, params = {}) => {
    const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', TMDB_API_KEY);
    url.searchParams.append('language', 'en-US');

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, value);
        }
    });

    return url.toString();
};
