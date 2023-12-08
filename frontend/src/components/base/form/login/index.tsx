import { yupResolver } from "@hookform/resolvers/yup";

import { SubmitHandler, useForm, UseFormSetError } from "react-hook-form";
import schema from "./schema";
import { Stack } from "@chakra-ui/layout";
import InputText from "../../input/InputText";
import { Button } from "@chakra-ui/button";

export type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: SubmitHandler<FormValues>;
};

export default function LoginForm({ onSubmit }: Props) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setError,
  } = useForm<FormValues>({
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
