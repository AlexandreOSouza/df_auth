import LoginForm from "@/components/base/form/login";
import SignInForm from "@/components/base/form/signIn";
import { SignFormValues } from "@/components/base/form/signIn/types";
import HeaderText from "@/components/base/text/Header";
import { useLogin } from "@/hook/useLogin";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { useState } from "react";

export default function Login() {
  const { onSubmit, error, onSignIn } = useLogin();
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = (formValues: SignFormValues) => {
    onSignIn(formValues, () => setSignIn(false));
  };

  return (
    <Card p={2}>
      <CardHeader>
        <HeaderText>{signIn ? "Sign In" : "Login"}</HeaderText>
      </CardHeader>
      <hr />
      <CardBody>
        {signIn ? (
          <SignInForm onSubmit={handleSignIn} error={error} />
        ) : (
          <LoginForm
            onSubmit={onSubmit}
            error={error}
            onSignIn={() => setSignIn(true)}
          />
        )}
      </CardBody>
    </Card>
  );
}
