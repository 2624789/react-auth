import { useState, useCallback, useEffect } from "react";

export type User = {
  isAdmin: boolean
  name: string
  username: string
}

export type Token = {
  value: string
  type: string
}

const TOKEN_KEY = "token";

const getUserFromToken: (token: Token) => Promise<User> = async (token) => {
  const url = process.env.REACT_APP_API_URL + "/auth/current-user"
  const headers = {
    "Authorization": token.type + " " + token.value,
  }
  const res = await fetch(url, { headers, cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to get user')

  const userData = await res.json() as any;
  const { is_admin: isAdmin, name, username } = userData;
  return { isAdmin, name, username } as User
}

export const useAuth = () => {
  const [token, setToken] = useState<Token | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((user: User, token: Token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null)
    localStorage.clear();
  }, []);

  const loginFromStoredToken = useCallback(async() => {
    try {
      const tokenData = localStorage.getItem(TOKEN_KEY);

      if (!tokenData) {
        return;
      }
      const token: Token = JSON.parse(tokenData);
      const user: User = await getUserFromToken(token);
      login(user, token);      
    } catch (error: any) {
      logout()
      console.error(error.name + ': ' + error.message)
    }
  }, [login, logout]);

  useEffect(() => {
    loginFromStoredToken()
  }, [loginFromStoredToken]);

  return { token, user, login, logout };
};
