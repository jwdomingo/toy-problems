/*
 * Apple Stocks
 *
 * Suppose we could access yesterday's stock prices as an array. The indices are
 * the time in minutes past trade opening time, which was 9:30am local time. The
 * values are the price in dollars of Apple stock at that time.
 *
 * So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
 *
 * Write an efficient function that takes stockPricesYesterday and returns the
 * best profit I could have made from 1 purchase and 1 sale of 1 Apple stock
 * yesterday.
 *
 * For example:
 *   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
 *   getMaxProfit(stockPricesYesterday);
 *     // returns 6 (buying for $5 and selling for $11)
 *
 * No "shorting"—you must buy before you sell. You may not buy and sell in the
 * same time step (at least 1 minute must pass).
 */

 var getMaxProfit = function (stockPricesYesterday) {
   if (stockPricesYesterday.length < 2) {
     throw new Error('More than one stock price required to get max profit');
   }

   var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
   var minPrice = stockPricesYesterday[0];
   var price;
   var profit;

   for (var i = 1, l = stockPricesYesterday.length; i < l; i++) {
     price = stockPricesYesterday[i];
     profit = price - stockPricesYesterday[i - 1];
     maxProfit = Math.max(maxProfit, price - minPrice);
     minPrice = Math.min(price, minPrice);
   }

   return maxProfit;
 }

 console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
 console.log(getMaxProfit([30, 20, 10, 9, 8, 7]));
