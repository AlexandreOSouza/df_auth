import { SubmitHandler } from "react-hook-form";

export type SignFormValues = {
  email: string;
  name: string;
  password: string;
};

export type SignInProps = {
  onSubmit: SubmitHandler<SignFormValues>;
  error: string;
};
