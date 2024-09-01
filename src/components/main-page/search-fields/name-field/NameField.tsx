'use client';
import { useRef } from 'react';
import Input from '@/components/shared/Input';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setName } from '@/store/slices/smartSlice';

const NameField = () => {
  const name = useAppSelector((state) => state.smartSlice.name);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setName(''));
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="Enter name"
      onClear={handleClear}
      onChange={(e) => dispatch(setName(e.currentTarget.value))}
      value={name}
      ref={inputRef}
    />
  );
};

export default NameField;
