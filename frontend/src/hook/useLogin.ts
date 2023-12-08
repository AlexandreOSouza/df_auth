import loginApi from "@/api/auth";
import { LoginFormValues } from "@/components/base/form/login/types";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { LoginSuccess } from "@/helpers/types";
import { useRouter } from "next/router";

export function useLogin() {
  const [error, setError] = useState("");
  const { saveToken } = useLocalStorage();
  const router = useRouter();

  const onSubmit = (formValues: LoginFormValues) => {
    loginApi(formValues)
      .then(({ access_token }: LoginSuccess) => {
        saveToken(access_token);
        router.push("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    onSubmit,
    error,
  };
}
