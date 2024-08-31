import React from 'react';
import UsersList from './users-list/UsersList';
import SearchBar from './search-bar/SearchBar';

const MainPage = () => {
  return (
    <main className="py-14">
      <div className="container">
        <SearchBar />
        <UsersList />
      </div>
    </main>
  );
};

export default MainPage;
