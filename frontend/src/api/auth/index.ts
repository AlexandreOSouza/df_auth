import { LoginFormValues } from "@/components/base/form/login/types";

export default async function loginApi({ email, password }: LoginFormValues) {
  const response = await fetch("http://127.0.0.1:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password }),
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err["message"]);
  }

  return await response.json();
}
