import { IUser } from '@/types/user';
import Link from 'next/link';
import React from 'react';

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps) => {
  return (
    <li className="grid grid-cols-4 gap-4 rounded-lg bg-bgSecondary p-5 text-xl max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:text-sm">
      <div className="flex items-center gap-2">
        <span className="lg:hidden">username:</span>
        <span>{user.username}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="lg:hidden">name:</span>
        <span>{user.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="lg:hidden">email:</span>
        <Link
          className="basic-transition hover:text-textDark"
          href={`mail:${user.email}`}
        >
          {user.email}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="lg:hidden">phone:</span>
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
