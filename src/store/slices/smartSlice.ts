import { IUser } from '@/types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface state {
  users: IUser[];
  username: string;
  name: string;
  email: string;
  phone: string;
}

const initialState: state = {
  users: [],
  username: '',
  name: '',
  email: '',
  phone: '',
};

export const smartSlice = createSlice({
  name: 'smart',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
  },
});

export const { setUsers, setUserName, setName, setEmail, setPhone } =
  smartSlice.actions;

export default smartSlice.reducer;
