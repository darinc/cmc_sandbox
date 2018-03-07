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


It takes an coin market cap coin object:
```
  { id: '0x',
    name: '0x',
    symbol: 'ZRX',
    rank: '45',
    price_usd: '0.789198',
    price_btc: '0.00007289',
    '24h_volume_usd': '6511820.0',
    market_cap_usd: '407865091.0',
    available_supply: '516809585.0',
    total_supply: '1000000000.0',
    max_supply: null,
    percent_change_1h: '0.45',
    percent_change_24h: '-9.52',
    percent_change_7d: '-21.29',
    last_updated: '1520385552'
}
```
and adds the following additional metrics:
```
    micro_count: 516.809585,
    micro_cost: 407.86509086282996,
    cap_if_match_btc_raw: 5627177806247.988,
    cap_if_match_btc_nice: '5.63T',
    cap_if_match_btc_multiplier: '30.57x',
    flippening_price: 356.14383056575855
```

- micro_count is how many coins you would need to buy in order to have one one-millionth of the available coin supply
- micro_cost is how much that would cost you
- cap_if_match_btc_raw is the market cap this coin would have if it suddenly matched BTC's price
- cap_if_match_btc_nice is a human readable format - Trillion, Billion, Million, or k (thousand)
- cap_if_match_btc_multiplier is how much bigger this coin would be than bitcoin if one coin suddenly matched BTC's price
- flippening_price is how much one coin would have to be for this coin to be equal to BTC's market cap
