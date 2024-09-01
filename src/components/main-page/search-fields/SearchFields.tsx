import React from 'react';
import UserNameField from './username-field/UserNameField';
import NameField from './name-field/NameField';
import EmailField from './email-field/EmailField';
import PhoneField from './phone-field/PhoneField';

const SearchFields = () => {
  return (
    <div className="mb-8 flex flex-col gap-5">
      <UserNameField />
      <NameField />
      <EmailField />
      <PhoneField />
    </div>
  );
};

export default SearchFields;
