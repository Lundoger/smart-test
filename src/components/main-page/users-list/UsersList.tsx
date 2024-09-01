'use client';
import { useGetAllUsersQuery } from '@/store/api/smartApi';
import User from './user/User';
import Loader from '@/components/shared/Loader';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setUsers } from '@/store/slices/smartSlice';
import { useFilteringDataByValue } from '@/hooks/useFilteringDataByValue';
import { Users } from '@/types/user';

const UsersList = () => {
  //хук для запроса данных и состояния запроса
  const { data, isError, isLoading, isSuccess } = useGetAllUsersQuery();
  //все поля стора
  const { users, username, name, email, phone } = useAppSelector(
    (state) => state.smartSlice
  );
  //сохраняем начальное значение стейта что бы обновлять стор после фильтрации при очистке полей ввода
  const [initialUsers, setInitialUsers] = useState<Users>([]);
  //диспатч
  const dispatch = useAppDispatch();

  //эффект для того что бы записать в стор данные как только пришел ответ от сервера
  useEffect(() => {
    if (data) {
      setInitialUsers(data);
      dispatch(setUsers(data));
    }
  }, [data]);

  //хук который фильтрует наш массив по каждому полю (username, name, email, phone)
  useFilteringDataByValue(username, initialUsers, 'username');
  useFilteringDataByValue(name, initialUsers, 'name');
  useFilteringDataByValue(email, initialUsers, 'email');
  useFilteringDataByValue(phone, initialUsers, 'phone');

  return (
    <div className="flex justify-center">
      {isLoading && <Loader />}
      {isError && <p>Something went wrong!</p>}
      {users && users.length > 0 && (
        <div className="basis-full">
          <div className="relative mb-5 grid grid-cols-4 gap-4 p-3">
            <div>Username</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <span className="absolute bottom-0 left-0 h-[1px] w-full bg-textDark"></span>
          </div>
          <ul className="grid grid-cols-1 gap-5">
            {users?.map((user) => <User key={user.id} user={user} />)}
          </ul>
        </div>
      )}
      {users.length < 1 && isSuccess && <p>Unfortunately, nothing found</p>}
    </div>
  );
};

export default UsersList;
