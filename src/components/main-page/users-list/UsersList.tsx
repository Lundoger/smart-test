'use client';
import { useGetAllUsersQuery } from '@/store/api/smartApi';
import User from './user/User';
import Loader from '@/components/shared/Loader';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setUsers } from '@/store/slices/smartSlice';

const UsersList = () => {
  const { data, isError, isLoading } = useGetAllUsersQuery();
  const { users } = useAppSelector((state) => state.smartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setUsers(data));
  }, [data]);

  return (
    <div className="flex justify-center">
      {isLoading && <Loader />}
      {isError && <p>Something went wrong!</p>}
      {users && users.length > 0 && (
        <ul className="grid basis-full grid-cols-2 gap-5">
          {users?.map((user) => <User key={user.id} user={user} />)}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
