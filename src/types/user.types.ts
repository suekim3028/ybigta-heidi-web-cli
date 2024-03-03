type Gender = "F" | "M";
type Strength = "GOOD" | "NORMAL" | "BAD";

export type SignUpUser = {
  id: string;
  password: string;
  name: string;
  gender: Gender;
  height: number;
  weight: number;
  strength: Strength;
};

export type User = Omit<SignUpUser, "password">;
export type SignInUser = Pick<SignUpUser, "id" | "password">;
