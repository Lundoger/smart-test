'use client';
import { useRef } from 'react';
import Input from '@/components/shared/Input';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setEmail } from '@/store/slices/smartSlice';

const EmailField = () => {
  const email = useAppSelector((state) => state.smartSlice.email);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setEmail(''));
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="Enter email"
      type="email"
      onClear={handleClear}
      onChange={(e) => dispatch(setEmail(e.currentTarget.value))}
      value={email}
      ref={inputRef}
    />
  );
};

export default EmailField;
