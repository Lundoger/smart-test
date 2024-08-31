import { IUser, Users } from '@/types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface state {
  search: string;
  users: IUser[];
}

const initialState: state = {
  search: '',
  users: [],
};

export const smartSlice = createSlice({
  name: 'smart',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const { setSearch, setUsers } = smartSlice.actions;

export default smartSlice.reducer;
