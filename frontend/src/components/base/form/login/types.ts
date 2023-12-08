import { SubmitHandler } from "react-hook-form";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginProps = {
  onSubmit: SubmitHandler<LoginFormValues>;
};
