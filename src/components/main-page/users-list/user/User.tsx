import { IUser } from '@/types/user';
import Link from 'next/link';
import React from 'react';

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps) => {
  return (
    <li className="bg-bgSecondary flex flex-col rounded-lg p-3">
      <span className="mb-5 text-sm">username: {user.username}</span>
      <div className="mb-5">
        <span className="text-3xl font-bold">{user.name}</span>
        <div className="flex gap-2 text-xs">
          <span>{user.address.city}</span>
          <span>{user.address.zipcode}</span>
        </div>
      </div>
      <div>
        <span className="mb-2 inline-block text-2xl">Contacts:</span>
        <div className="flex flex-col items-start gap-1">
          <span className="flex gap-2">
            Email:
            <Link
              className="basic-transition hover:text-textDark"
              href={`mail:${user.email}`}
            >
              {user.email}
            </Link>
          </span>
          <span className="flex gap-2">
            Phone:
            <Link
              className="basic-transition hover:text-textDark"
              href={`tel:${user.phone}`}
            >
              {user.phone}
            </Link>
          </span>
        </div>
      </div>
    </li>
  );
};

export default User;
