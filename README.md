# Polymarket CLOB Experiment

Minimal trading script against Polymarket's CLOB (Central Limit Order Book) on Polygon: derives API credentials from a wallet signature, reads the live order book for a market, and places a limit order via the official `@polymarket/clob-client`.

Kept intentionally small - this was an experiment to understand how Polymarket's off-chain order book + on-chain settlement flow works before building anything bigger.

## Run

```bash
npm install
cp .env.example .env   # PRIVATE_KEY + PROXY_WALLET
node index.js
```

## Stack

Node.js · ethers · @polymarket/clob-client · Polygon
