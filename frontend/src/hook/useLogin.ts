import loginApi from "@/api/auth";
import { LoginFormValues } from "@/components/base/form/login/types";

export function useLogin() {
  const onSubmit = (formValues: LoginFormValues) => {
    loginApi(formValues)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    onSubmit,
  };
}
