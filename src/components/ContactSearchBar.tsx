import { ChangeEvent, useCallback, useState } from 'react';
import Input from '@/ui/atoms/Input.tsx';
import SearchIcon from '@/assets/search-icon.svg';

import useDebounce from '../hooks/useDebounce.ts';
import CreateContactForm from '@/components/CreateContactForm.tsx';

const ContactSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 300);
  const onChangeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value), []);


  return (
    <div className="py-2 px-4 border border-b border-gray-400 flex gap-2">
      <Input value={searchValue} onChange={onChangeSearchValue} placeholder="Search contact" icon={<SearchIcon />} />
      <CreateContactForm />
    </div>
  );
};

export default ContactSearchBar;