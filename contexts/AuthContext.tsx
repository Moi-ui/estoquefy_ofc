// contexts/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipos de usuário
export type UserRole = 'gerente' | 'coordenacao' | 'solicitante';

interface User {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
}

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => Promise<void>;
  hasRole: (roles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega usuário ao iniciar o app
  useEffect(() => {
    loadStoredUser();
  }, []);

  async function loadStoredUser() {
    try {
      const storedUser = await AsyncStorage.getItem('@estoquefy:user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.log('Erro ao carregar usuário:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, senha: string) {
    try {
      // const response = await fetch('https://minha-api-moises.com/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, senha })
      // });

      // const data = await response.json();

      // Mock para teste
      const mockUser: User = {
        id: '1',
        nome: 'João Silva',
        email: email,
        role: email.includes('gerente')
          ? 'gerente'
          : email.includes('coordenacao')
          ? 'coordenacao'
          : 'solicitante',
      };

      await AsyncStorage.setItem('@estoquefy:user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('@estoquefy:user');
    setUser(null);
  }

  function hasRole(roles: UserRole[]): boolean {
    if (!user) return false;
    return roles.includes(user.role);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
};