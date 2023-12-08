export function saveToken(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, token);
}

export function getToken(): string | undefined {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY);
  return token ? JSON.parse(token) : undefined;
}

export function removeToken(): void {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
