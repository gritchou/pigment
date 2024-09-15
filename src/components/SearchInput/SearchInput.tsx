import React, { useRef } from 'react';

interface SearchInputProps {
  onSearch: (city: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const city = (inputRef.current?.value || '').trim();
    if (city.length > 0) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter city"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
