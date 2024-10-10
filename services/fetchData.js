// services/fetchData.js
const axios = require("axios");
const CryptoData = require("../models/cryptoData");

async function fetchData() {
    try {
        // Fetch data for Bitcoin, Matic, and Ethereum from CoinGecko
        const coins = ["bitcoin", "matic-network", "ethereum"];
        const promises = coins.map(coin =>
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`)
        );

        const results = await Promise.all(promises);

        // Process and save the fetched data into the database
        const dataToSave = results.map((result, index) => {
            const coin = coins[index];
            return {
                coin,
                price: result.data[coin].usd,
                marketCap: result.data[coin].usd_market_cap,
                change: result.data[coin].usd_24h_change
            };
        });

        await CryptoData.insertMany(dataToSave);
        console.log("Cryptocurrency data fetched and saved successfully.");
    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
    }
}

module.exports = fetchData;
