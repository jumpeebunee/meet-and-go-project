import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/type";
import { RootState } from "../store";


interface UserSliceProps {
  user: IUser,
}

const initialState: UserSliceProps = {
  user: {
    uid: '',
    username: '',
    email: '',
    phone: '',
    town: '',
    interests: [],
    reputation: 0,
    currentCreated: 0,
    totalMeets: 0,
    createdMeets: 0,
    image: 'https://fastly.picsum.photos/id/103/200/300.jpg?hmac=QNhmiuWX_v7Br1-vACnDXKchd_VJ1OjbxDKwIM2NpD4',
    activeMeets: [],
  }
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  }
})

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
export const user = ((state: RootState) => state.user.user);