'use client';
import { useRef } from 'react';
import Input from '@/components/shared/Input';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setUserName } from '@/store/slices/smartSlice';

const UserNameField = () => {
  const username = useAppSelector((state) => state.smartSlice.username);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setUserName(''));
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="Enter username"
      onClear={handleClear}
      onChange={(e) => dispatch(setUserName(e.currentTarget.value))}
      value={username}
      ref={inputRef}
    />
  );
};

export default UserNameField;
