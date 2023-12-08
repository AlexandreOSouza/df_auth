import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import schema from "./schema";
import { Stack, Text } from "@chakra-ui/layout";
import InputText from "../../input/InputText";
import { Button } from "@chakra-ui/button";
import { LoginFormValues, LoginProps } from "./types";
import ErrorText from "../../text/Error";

export default function LoginForm({
  onSubmit,
  error,
  onSignIn,
}: LoginProps & { onSignIn: () => void }) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <InputText
          type={"email"}
          label={"Email"}
          control={control}
          name={"email"}
        />
        <InputText
          type={"password"}
          label={"Password"}
          control={control}
          name={"password"}
        />
      </Stack>
      <Stack>
        <ErrorText>{error}</ErrorText>
      </Stack>
      <Stack align={"center"}>
        <Button
          mt={8}
          colorScheme="blue"
          isLoading={isSubmitting}
          type="submit"
          width={"100%"}
        >
          Submit
        </Button>
        <Text onClick={onSignIn} cursor={"pointer"}>
          Sign in
        </Text>
      </Stack>
    </form>
  );
}
