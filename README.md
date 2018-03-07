# Coin Market Cap Sandbox

Just a place to share some CMC related scripts / calculations, etc.

## Requirements
[Nodejs](https://nodejs.org)
[Yarn](https://yarnpkg.com/)

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
  { id: 'ardor',
    name: 'Ardor',
    symbol: 'ARDR',
    rank: '48',
    price_usd: '0.383771',
    price_btc: '0.00003555',
    '24h_volume_usd': '2697980.0',
    market_cap_usd: '383387035.0',
    available_supply: '998999495.0',
    total_supply: '998999495.0',
    max_supply: '998999495.0',
    percent_change_1h: '0.2',
    percent_change_24h: '-4.26',
    percent_change_7d: '-8.93',
    last_updated: '1520381947'
}
```
and adds the following additional metrics:
```
    micro_count: 998.999495,
    micro_cost: 383.38703519564496,
    micro_cap_if_matched_raw: 10829753919970.504,
    micro_cap_if_match_btc_price: '10.83T',
    micro_cap_if_matched_how_much_bigger: '59.10x',
    micro_flippening_price: 183.4354696395517
```

micro_count is how many coins you would need to buy in order to have one one-millionth of the available coin supply
micro_cost is how much that would cost you
micro_cap_if_matched_raw is the market cap this coin would have if it suddenly matched BTC's price
micro_cap_if_match_btc_price is a human readable format - Trillion, Billion, Million, or k (thousand)
micro_cap_if_matched_how_much_bigger is how much bigger this coin would be than bitcoin if one coin suddenly matched BTC's price
micro_flippening_price is how much one coin would have to be for this coin to be equal to BTC's market cap
