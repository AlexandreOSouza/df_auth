import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import schema from "./schema";
import { Stack } from "@chakra-ui/layout";
import InputText from "../../input/InputText";
import { Button } from "@chakra-ui/button";
import { SignFormValues, SignInProps } from "./types";
import ErrorText from "../../text/Error";

export default function SignInForm({ onSubmit, error }: SignInProps) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
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
          type={"text"}
          label={"Name"}
          control={control}
          name={"name"}
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
      </Stack>
    </form>
  );
}
