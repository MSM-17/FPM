import { Injectable } from '@angular/core';
import { Investment, InvestmentResponse } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly mockInvestment = {
    assetType: 'Stock',
    assetName: 'Apple Inc.',
    assetSymbol: 'AAPL',
    quantity: 10,
    purchasePrice: 150.00,
    currency: 'USD',
    purchaseDate: '2023-01-01',
    brokerName: 'Broker XYZ',
    notes: 'Long-term investment'
  };

  constructor() { }

  getInvestmentData() {
    // Simulate fetching data from a backend service
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockInvestment);
      }, 1000); // Simulate network delay
    });
  }

  addInvestment(investment: Investment): Promise<InvestmentResponse> {
    // Simulate adding investment data to a backend service
    return new Promise<InvestmentResponse>((resolve, reject) => {
      setTimeout(() => {
        if (investment) {
          resolve({ success: 'true', message: 'Investment added successfully' });
        } else {
          reject({ success: false, message: 'Failed to add investment' });
        }
      }, 1000); // Simulate network delay
    });
  }
}
