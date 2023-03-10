export type IRegister = {
  username: string;
  email: string;
  password: string;
}

export type IUser = {
  uid: string,
  username: string,
  email: string,
  phone: string,
  town: string,
  interests: string[],
  reputation: number,
  totalMeets: number,
  currentCreated: number
  createdMeets: number,
  image: string,
  activeMeets: string[],
}