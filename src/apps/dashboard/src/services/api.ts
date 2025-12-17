/**
 * API Client
 * 
 * Base API client untuk semua HTTP requests ke backend.
 */

import { API_BASE_URL, STORAGE_KEYS } from '@/utils/constants';

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Get authorization token from localStorage
   */
  private getAuthToken(): string | null {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    if (!user) return null;
    
    // In production, token will be separate from user data
    // For now, we'll handle this in the backend implementation
    return null;
  }

  /**
   * Build URL with query params
   */
  private buildURL(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(endpoint, this.baseURL);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    
    return url.toString();
  }

  /**
   * Build headers with auth token
   */
  private buildHeaders(customHeaders?: HeadersInit): Headers {
    const headers = new Headers(customHeaders);
    
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
    
    const token = this.getAuthToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    return headers;
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(error.message || 'API request failed');
    }
    
    // Handle empty responses (204 No Content)
    if (response.status === 204) {
      return {} as T;
    }
    
    return response.json();
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.buildURL(endpoint, options?.params);
    const headers = this.buildHeaders(options?.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'GET',
      headers,
    });
    
    return this.handleResponse<T>(response);
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: any, options?: RequestOptions): Promise<T> {
    const url = this.buildURL(endpoint, options?.params);
    const headers = this.buildHeaders(options?.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
    
    return this.handleResponse<T>(response);
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: any, options?: RequestOptions): Promise<T> {
    const url = this.buildURL(endpoint, options?.params);
    const headers = this.buildHeaders(options?.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'PUT',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
    
    return this.handleResponse<T>(response);
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: any, options?: RequestOptions): Promise<T> {
    const url = this.buildURL(endpoint, options?.params);
    const headers = this.buildHeaders(options?.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'PATCH',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
    
    return this.handleResponse<T>(response);
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.buildURL(endpoint, options?.params);
    const headers = this.buildHeaders(options?.headers);
    
    const response = await fetch(url, {
      ...options,
      method: 'DELETE',
      headers,
    });
    
    return this.handleResponse<T>(response);
  }
}

// Export singleton instance
export const api = new APIClient(API_BASE_URL);
