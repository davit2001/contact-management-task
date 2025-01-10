import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import useDebounceHandler from '@/hooks/useDebounceHandler.ts';
import SearchIcon from '@/assets/search-icon.svg';
import Input from '@/ui/atoms/Input.tsx';

const SearchBar = () => {
  const searchParams: {
    name?: string;
  } = useSearch({
    strict: false,
  });
  const searchName = searchParams?.name || '';
  const [searchValue, setSearchValue] = useState(searchName);
  const navigate = useNavigate({ from: '/' });

  const debouncedSearch = useDebounceHandler((searchName) => {
    navigate({ search: (prevSearch) => ({ ...prevSearch, name: searchName }) });
  }, 300);

  const onChangeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedSearch(e.target.value);
  }, [debouncedSearch]);

  return (
    <Input
      value={searchValue}
      onChange={onChangeSearchValue}
      placeholder="Search user"
      icon={<SearchIcon />}
      ariaLabel="Search user"
    />
  )
};

export default SearchBar;