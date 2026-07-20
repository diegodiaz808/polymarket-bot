require("dotenv").config();
const { ClobClient } = require("@polymarket/clob-client");
const { Wallet } = require("ethers");

const HOST = "https://clob.polymarket.com";
const CHAIN_ID = 137;
const TOKEN_ID = "96934895827796206840143511297918721329549349407872927193095386860069450446029";

const signer = new Wallet(process.env.PRIVATE_KEY);

(async () => {
  const tmp = new ClobClient(HOST, CHAIN_ID, signer);
  const creds = await tmp.createOrDeriveApiKey();

  const client = new ClobClient(HOST, CHAIN_ID, signer, creds);

  const ob = await client.getOrderBook(TOKEN_ID);
  console.log("BID top:", ob.bids?.[0] || null);
  console.log("ASK top:", ob.asks?.[0] || null);

  const order = await client.createOrder({
    tokenId: TOKEN_ID,
    side: "buy",
    price: 0.50,
    size: 0.25,
    orderType: "limit",
    funder: process.env.PROXY_WALLET,
  });

  const res = await client.postOrder(order);
  console.log(res);
})();
