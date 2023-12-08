import LoginForm from "@/components/base/form/login";
import HeaderText from "@/components/base/text/Header";
import { useLogin } from "@/hook/useLogin";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";

export default function Login() {
  const { onSubmit, error } = useLogin();
  return (
    <Card p={2}>
      <CardHeader>
        <HeaderText>Login</HeaderText>
      </CardHeader>
      <hr />
      <CardBody>
        <LoginForm onSubmit={onSubmit} error={error} />
      </CardBody>
    </Card>
  );
}
