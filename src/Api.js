import axios from 'axios';

// Function to fetch country data (flags, codes, and currencies)
export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    // Process the data to get only the required fields (flag, label, and currency)
    return response.data.map((country) => ({
        name:country.name,
      label: country.cca2, // Country code (ISO 3166-1 alpha-2)
      flag: country.cca2.toLowerCase(), // Flag URL part (lowercase)
      currency: country.currencies
        ? Object.values(country.currencies)[0].name
        : 'N/A', // Currency name (default to 'N/A' if no currency is found)
    }));
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error; // Rethrow the error so the component can handle it
  }
};
