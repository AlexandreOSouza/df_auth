import { LoginFormValues } from "@/components/base/form/login/types";
import { SignFormValues } from "@/components/base/form/signIn/types";

export async function loginApi({ email, password }: LoginFormValues) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    },
  );
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err["message"]);
  }

  return await response.json();
}

export async function signInApi({ email, name, password }: SignFormValues) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/singup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password, name }),
    },
  );
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err["message"]);
  }

  return await response.json();
}
