import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../Api' // Import the fetchCountries function from the API component

const CountrySelector = () => {
  const [options, setOptions] = useState([]) // Store fetched country data
  const [filteredOptions, setFilteredOptions] = useState([]) // Store filtered options for search
  const [selectedOption, setSelectedOption] = useState({
    label: 'GB',
    flag: 'gb',
    currency: 'GBP', // Default currency for England
  }) // Default selection (England)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true) // Loading state
  const [error, setError] = useState(null) // Error state
  const [searchQuery, setSearchQuery] = useState('') // State for search query

  // Fetch countries data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryData = await fetchCountries() // Fetch country data from the API service
        setOptions(countryData)
        setFilteredOptions(countryData) // Set the filtered options initially
        setLoading(false)
      } catch (err) {
        setError('Failed to load countries')
        setLoading(false)
      }
    }

    fetchData() // Call the fetch function
  }, []) // Empty dependency array to only run once on mount

  // Filter options based on the search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredOptions(options) // Show all options if search query is empty
    } else {
      const filtered = options.filter(
        (option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.currency.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredOptions(filtered) // Filter options based on query
    }
  }, [searchQuery, options])

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  // Loading and error handling
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className=" w-[200px] h-[40px] gap-[10px] relative">
      {/* Dropdown Toggle */}
      <div
        className="w- h-[40px] bg-white flex items-center justify-between px-2 rounded-md 
        cursor-pointer hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/w40/${selectedOption.flag}.png`}
            alt={`${selectedOption.label} flag`}
            className="w-6 h-4 rounded-sm"
          />
          <span className=" text-[#1E1E1E] text-[16px] font-poppins font-normal">
            {`${selectedOption.label}/${selectedOption.currency}`}
          </span>
        </div>
        <svg
          width="26"
          height="26"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-[48px] left-0 px-2 bg-gray-200 shadow-lg w-[220px] rounded-md 
          border border-gray-300 z-10 max-h-60 overflow-y-auto"
        >
          {/* Search Input */}
          <div className="px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full h-8 px-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Country Options */}
          {filteredOptions.map((option) => (
            <div
              key={option.label}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <img
                src={`https://flagcdn.com/w40/${option.flag}.png`}
                alt={`${option.label} flag`}
                className="w-6 h-4 rounded-sm"
              />
              <span>{option.label}</span>
              <span className="ml-2 text-sm text-gray-500">
                {option.currency}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CountrySelector
