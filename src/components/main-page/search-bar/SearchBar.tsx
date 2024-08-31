'use client';
import { useRef } from 'react';
import Input from './input/Input';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setSearch } from '@/store/slices/smartSlice';

const SearchBar = () => {
  const search = useAppSelector((state) => state.smartSlice.search);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  return (
    <div className="mb-[30px]">
      <Input
        placeholder="Enter username"
        onClear={handleClear}
        onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
        value={search}
        ref={inputRef}
      />
    </div>
  );
};

export default SearchBar;
