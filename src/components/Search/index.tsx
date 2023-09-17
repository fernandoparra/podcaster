import { ChangeEvent } from 'react';

export interface SearchProps {
  search: string;
  onSearch: (search: string) => void;
}

export const Search = ({search, onSearch}: SearchProps) => {

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="h-8 px-4 py-2 border border-gray-200 rounded-sm"
        type="text"
        placeholder="Filter podcasts"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
