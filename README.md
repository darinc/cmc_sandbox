# Coin Market Cap Sandbox

Just a place to share some CMC related scripts / calculations, etc.

## Requirements
- [Nodejs](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)

## Installing Yarn and NodeJS
https://yarnpkg.com/en/docs/install#linux-tab

## Installing dependancies
```
yarn install
```

## cmc_calc.js

Pulls data from Coin Market Cap and makes some additional calculations

```
node cmc_calc.js
```

This will run through the first 50 coins in coin market cap's API (sorted by total market cap)


micro_flippening_price is the calculated price of the coin today if it where to flip Bitcoin
It takes an object like this:
```
  { id: 'dragonchain',
    name: 'Dragonchain',
    symbol: 'DRGN',
    rank: '50',
    price_usd: '1.50172',
    price_btc: '0.00013879',
    '24h_volume_usd': '2880890.0',
    market_cap_usd: '358042996.0',
    available_supply: '238421940.0',
    total_supply: '433494437.0',
    max_supply: null,
    percent_change_1h: '3.11',
    percent_change_24h: '-9.92',
    percent_change_7d: '10.58',
    last_updated: '1520383456',
    micro_count: 238.42194,
    micro_cost: 358.0429957368,
    cap_if_matched_btc_raw: 2597869302343.713,
    cap_if_match_btc_nice: '2.6T',
    cap_if_matched_btc_multiplier: 'NaNx',
    flippening_price: 772.5384921475767 }
```
and adds the following additional metrics:
```
    micro_count: 238.42194,
    micro_cost: 358.0429957368,
    cap_if_matched_btc_raw: 2597869302343.713,
    cap_if_match_btc_nice: '2.6T',
    cap_if_matched_btc_multiplier: 'NaNx',
    flippening_price: 772.5384921475767
```

- micro_count is how many coins you would need to buy in order to have one one-millionth of the available coin supply
- micro_cost is how much that would cost you
- cap_if_matched_raw is the market cap this coin would have if it suddenly matched BTC's price
- cap_if_match_btc_nice is a human readable format - Trillion, Billion, Million, or k (thousand)
- cap_if_matched_btc_multiplier is how much bigger this coin would be than bitcoin if one coin suddenly matched BTC's price
- flippening_price is how much one coin would have to be for this coin to be equal to BTC's market cap
