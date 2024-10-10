# Cryptocurrency Tracker

A Node.js app that fetches real-time data (price, market cap, 24h change) for Bitcoin, Matic, and Ethereum using the CoinGecko API.

## Features
- Fetches and stores cryptocurrency data in MongoDB.
- API endpoint to retrieve stats for requested cryptocurrencies.

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/awanishyadav967/cryptocurrency-tracker.git
   ```
2. cd cryptocurrency-tracker

3. Install dependencies: npm install

4. Set up your MongoDB connection in a .env file:MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.44f88.mongodb.net/Cluster0?retryWrites=true&w=majority

5. Start the server: npm start

# API Endpoint
GET /stats?coin=bitcoin
Returns the latest data for the specified cryptocurrency.


