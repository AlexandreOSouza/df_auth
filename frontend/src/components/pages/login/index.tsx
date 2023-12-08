import LoginForm from "@/components/base/form/login";
import HeaderText from "@/components/base/text/Header";
import { Card, CardBody, CardHeader } from "@chakra-ui/card";

export default function Login() {
  return (
    <Card p={2}>
      <CardHeader>
        <HeaderText>Login</HeaderText>
      </CardHeader>
      <hr />
      <CardBody>
        <LoginForm />
      </CardBody>
    </Card>
  );
}
