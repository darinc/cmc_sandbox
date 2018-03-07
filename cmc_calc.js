const Wreck = require('wreck');

var BTC = {};

// maths and formatting
function formatNumber (num) {
   return +(Math.round(num + "e+2")  + "e-2");
}
var formatThousand    = function(x) { return formatNumber(x / 1e3) + "k"; };
var formatMillion     = function(x) { return formatNumber(x / 1e6) + "M"; };
var formatBillion     = function(x) { return formatNumber(x / 1e9) + "B"; };
var formatTrillion    = function(x) { return formatNumber(x / 1e12) + "T"; };
var formatQuadrillion = function(x) { return formatNumber(x / 1e15) + "Q"; };

function formatAbbreviation(x) {
  var v = Math.abs(x);
  return (v >= .9995e15 ? formatQuadrillion
      : v >= .9995e12 ? formatTrillion
      : v >= .9995e9 ? formatBillion
      : v >= .9995e6 ? formatMillion
      : formatThousand)(x);
}

 
const getcmcdata = async function () {
 
    const { res, payload } = await Wreck.get('https://api.coinmarketcap.com/v1/ticker/?limit=50');
    var coins = JSON.parse(payload);
    for(coin in coins) {
      var c = coins[coin];

      if(c.id == 'bitcoin') {
        BTC = c;
      }

      // how many coins you would need to buy in order to have one one-millionth of the available coin supply
      c.micro_count = c.available_supply/1000000;

      // how much that would cost
      c.micro_cost = c.micro_count*c.price_usd; 

      // the market cap this coin would have if it suddenly matched BTC's price
      c.cap_if_matched_btc_raw = c.market_cap_usd * BTC.price_usd/c.price_usd;

      // human readable format - Trillion, Billion, Million, or k (thousand)
      c.cap_if_match_btc_nice = formatAbbreviation(c.market_cap_usd * BTC.price_usd/c.price_usd);

      // how much bigger this coin would be than bitcoin if one coin suddenly matched BTC's price
      c.cap_if_matched_btc_multiplier = (parseFloat(c.micro_cap_if_matched_raw) / parseFloat(BTC.market_cap_usd)).toFixed(2) + 'x';

      // 
      c.flippening_price = BTC.price_usd * BTC.available_supply/c.available_supply;
    }

    console.dir(coins);
};
 
try {
    getcmcdata();
}
catch (err) {
    console.error(err);
}

