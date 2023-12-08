import { loginApi, signInApi } from "@/api/auth";
import { LoginFormValues } from "@/components/base/form/login/types";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { LoginSuccess } from "@/helpers/types";
import { useRouter } from "next/router";
import { SignFormValues } from "@/components/base/form/signIn/types";
import { useToast } from "@chakra-ui/toast";

export function useLogin() {
  const [error, setError] = useState("");
  const { saveToken } = useLocalStorage();
  const router = useRouter();
  const toast = useToast();

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

  const onSignIn = (formValues: SignFormValues, callback: () => void) => {
    signInApi(formValues)
      .then((e) => {
        toast({
          title: "Sign In",
          description: "Sign In Success",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Sign In",
          description: "Sign In Error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(callback);
  };

  return {
    onSubmit,
    error,
    onSignIn,
  };
}
