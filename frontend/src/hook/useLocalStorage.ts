import { LOCAL_STORAGE_KEY } from "@/helpers/consts";
import { setCookie } from "nookies";

export default function useLocalStorage() {
  function saveToken(token: string): void {
    setCookie(null, LOCAL_STORAGE_KEY, token, {
      maxAge: 30 * 24 * 60 * 60,
    });
  }

  function getToken(): string | undefined {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    return token ? token : undefined;
  }

  function removeToken(): void {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return {
    saveToken,
    getToken,
    removeToken,
  };
}
