/**
 * Networth Service
 * 
 * Account-level service untuk tracking aset & liabilitas.
 * 1 user = 1 networth instance
 */

import { api } from './api';

export interface Asset {
  id: string;
  userId: string;
  name: string;
  type: 'cash' | 'investment' | 'property' | 'other';
  value: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface Liability {
  id: string;
  userId: string;
  name: string;
  type: 'loan' | 'credit_card' | 'mortgage' | 'other';
  amount: number;
  currency: string;
  interestRate?: number;
  createdAt: string;
  updatedAt: string;
}

export interface NetworthSummary {
  totalAssets: number;
  totalLiabilities: number;
  networth: number;
  currency: string;
}

export const networthService = {
  /**
   * Get networth summary
   */
  async getSummary(): Promise<NetworthSummary> {
    return api.get<NetworthSummary>('/networth/summary');
  },

  /**
   * Get all assets
   */
  async getAssets(): Promise<Asset[]> {
    return api.get<Asset[]>('/networth/assets');
  },

  /**
   * Create new asset
   */
  async createAsset(data: Omit<Asset, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<Asset> {
    return api.post<Asset>('/networth/assets', data);
  },

  /**
   * Update asset
   */
  async updateAsset(id: string, data: Partial<Asset>): Promise<Asset> {
    return api.put<Asset>(`/networth/assets/${id}`, data);
  },

  /**
   * Delete asset
   */
  async deleteAsset(id: string): Promise<void> {
    return api.delete(`/networth/assets/${id}`);
  },

  /**
   * Get all liabilities
   */
  async getLiabilities(): Promise<Liability[]> {
    return api.get<Liability[]>('/networth/liabilities');
  },

  /**
   * Create new liability
   */
  async createLiability(data: Omit<Liability, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<Liability> {
    return api.post<Liability>('/networth/liabilities', data);
  },

  /**
   * Update liability
   */
  async updateLiability(id: string, data: Partial<Liability>): Promise<Liability> {
    return api.put<Liability>(`/networth/liabilities/${id}`, data);
  },

  /**
   * Delete liability
   */
  async deleteLiability(id: string): Promise<void> {
    return api.delete(`/networth/liabilities/${id}`);
  },

  /**
   * Get networth history/reports
   */
  async getReports(startDate?: string, endDate?: string): Promise<any[]> {
    return api.get('/networth/reports', {
      params: { startDate, endDate } as any,
    });
  },
};
