import { useAppDispatch } from '@/store/hook';
import { setUsers } from '@/store/slices/smartSlice';
import { IUser } from '@/types/user';
import { useEffect, useMemo } from 'react';

type UserKeys = keyof IUser;

export const useFilteringDataByValue = (
  value: string,
  data: IUser[],
  userKey: UserKeys
) => {
  const dispatch = useAppDispatch();

  // Преобразуем значение поиска в нижний регистр
  const lowerCaseValue = value.toLowerCase();

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!lowerCaseValue) return data;

    return data.filter((user) => {
      const itemValue = user[userKey];

      if (typeof itemValue === 'string') {
        return itemValue.toLowerCase().includes(lowerCaseValue);
      }

      if (typeof itemValue === 'number') {
        return itemValue.toString().includes(lowerCaseValue);
      }

      return false;
    });
  }, [userKey, lowerCaseValue]);

  useEffect(() => {
    dispatch(setUsers(filteredData));
  }, [filteredData]);

  return { filteredData };
};
