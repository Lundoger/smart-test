import React from 'react';
import UsersList from './users-list/UsersList';
import SearchFields from './search-fields/SearchFields';

const MainPage = () => {
  return (
    <main className="py-14">
      <div className="container">
        <SearchFields />
        <UsersList />
      </div>
    </main>
  );
};

export default MainPage;
