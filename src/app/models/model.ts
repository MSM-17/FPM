export interface LoginResponse {
    success: boolean;
    message: string;
}

export interface Investment {
    assetType: string;
    assetName: string;
    assetSymbol: string;
    quantity: number;
    purchasePrice: number;
    currency: string;
    purchaseDate: Date;
    brokerName?: string;
    notes?: string;
}

export interface LoginPayload{
    email: string,
    password: string
}

export interface InvestmentResponse{
    success: string,
    message: string,
}