'use client';
import { useRef } from 'react';
import Input from '@/components/shared/Input';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setPhone } from '@/store/slices/smartSlice';

const PhoneField = () => {
  const phone = useAppSelector((state) => state.smartSlice.phone);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setPhone(''));
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="Enter phone"
      type="number"
      onClear={handleClear}
      onChange={(e) => dispatch(setPhone(e.currentTarget.value))}
      value={phone}
      ref={inputRef}
    />
  );
};

export default PhoneField;
