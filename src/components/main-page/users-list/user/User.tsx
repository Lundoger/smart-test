import { IUser } from '@/types/user';
import Link from 'next/link';
import React from 'react';

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps) => {
  return (
    <li className="grid grid-cols-4 gap-4 rounded-lg bg-bgSecondary p-5 text-xl">
      <div>
        <span>{user.username}</span>
      </div>
      <div>
        <span>{user.name}</span>
      </div>
      <div>
        <Link
          className="basic-transition hover:text-textDark"
          href={`mail:${user.email}`}
        >
          {user.email}
        </Link>
      </div>
      <div>
        <Link
          className="basic-transition hover:text-textDark"
          href={`tel:${user.phone}`}
        >
          {user.phone}
        </Link>
      </div>
    </li>
  );
};

export default User;
