import { LOCAL_STORAGE_KEY } from "@/helpers/consts";

export default function useLocalStorage() {
  function saveToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
  }

  function getToken(): string | undefined {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    return token ? JSON.parse(token) : undefined;
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
