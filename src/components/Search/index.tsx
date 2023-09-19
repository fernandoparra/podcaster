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
    <div className="w-full">
      <input
        className="w-full h-8 p-2 border border-gray-200 rounded-sm text-xs"
        type="text"
        placeholder="Filter podcasts"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
