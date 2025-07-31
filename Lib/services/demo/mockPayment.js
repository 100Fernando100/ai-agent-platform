export class MockPaymentService {
  constructor() {
    this.transactions = [];
  }

  async processCardPayment(amount, currency = 'USD') {
    console.log(`[DEMO] Processing card payment: ${currency} ${amount}`);
    
    const transaction = {
      id: `txn_${Date.now()}`,
      amount: amount,
      currency: currency,
      status: 'processing',
      method: 'card',
      card: {
        last4: '4242',
        brand: 'visa'
      },
      createdAt: new Date().toISOString()
    };
    
    this.transactions.push(transaction);
    
    // Simulate processing
    setTimeout(() => {
      transaction.status = 'succeeded';
      console.log(`[DEMO] Payment successful: ${transaction.id}`);
    }, 2000);
    
    return transaction;
  }

  async processCryptoPayment(amount, cryptocurrency = 'BTC') {
    console.log(`[DEMO] Processing crypto payment: ${amount} ${cryptocurrency}`);
    
    const exchangeRates = {
      BTC: 43000,
      ETH: 2200,
      USDT: 1
    };
    
    const transaction = {
      id: `crypto_${Date.now()}`,
      amount: amount,
      cryptocurrency: cryptocurrency,
      amountInCrypto: (amount / exchangeRates[cryptocurrency]).toFixed(8),
      status: 'pending',
      method: 'crypto',
      walletAddress: `demo_${cryptocurrency}_${Math.random().toString(36).substring(7)}`,
      createdAt: new Date().toISOString()
    };
    
    this.transactions.push(transaction);
    
    // Simulate blockchain confirmation
    setTimeout(() => {
      transaction.status = 'confirmed';
      transaction.txHash = `0x${Math.random().toString(16).substring(2, 66)}`;
      console.log(`[DEMO] Crypto payment confirmed: ${transaction.txHash}`);
    }, 5000);
    
    return transaction;
  }

  async generateInvoice(amount, description) {
    console.log(`[DEMO] Generating invoice for ${amount}`);
    
    return {
      invoiceId: `inv_${Date.now()}`,
      amount: amount,
      description: description,
      paymentLink: `https://demo.payment.com/invoice/${Date.now()}`,
      qrCode: `data:image/svg+xml;base64,${btoa('<svg>QR Code</svg>')}`,
      expiresAt: new Date(Date.now() + 3600000).toISOString() // 1 hour
    };
  }

  async getTransactionHistory() {
    return this.transactions;
  }
}
