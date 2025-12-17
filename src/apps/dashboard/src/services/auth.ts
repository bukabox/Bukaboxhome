/**
 * Authentication Service
 * 
 * Handle all authentication-related API calls.
 */

import { api } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    picture?: string;
  };
  token: string;
}

export const authService = {
  /**
   * Login with email and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/login', credentials);
  },

  /**
   * Register new user
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/register', data);
  },

  /**
   * Login with Google OAuth
   */
  async loginWithGoogle(credential: string): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/google', { credential });
  },

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<{ message: string }> {
    return api.post('/auth/reset-password', { email });
  },

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    return api.post('/auth/reset-password/confirm', { token, password: newPassword });
  },

  /**
   * Logout (clear server-side session if any)
   */
  async logout(): Promise<void> {
    return api.post('/auth/logout');
  },

  /**
   * Verify token validity
   */
  async verifyToken(): Promise<{ valid: boolean }> {
    return api.get('/auth/verify');
  },
};
