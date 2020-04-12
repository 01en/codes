/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var ups = [];
  for (var i = 0; i < prices.length; i++) {
    var current = prices[i];
    var next = prices[i + 1];
    var diff = next - current;

    if (diff > 0) {
      var up = { 'buy': current, 'cell': next, 'profit': next - current };
      ups.push(up);
    }
  }

  var maxProfit = 0;
  var maxSellNum = ups.length;
  // 値上がりなし
  if (maxSellNum === 0) {
    return 0;
  }

  // 単調増加: sell -1回
  var increaseFlag = true;
  var currentMax = Number.MIN_SAFE_INTEGER;
  prices.forEach(p => {
    if (currentMax <= p) {
      currentMax = p;
    } else {
      increaseFlag = false;
    }
  });
  if (increaseFlag) {
    return prices[prices.length - 1] - prices[0];
  }

  // 値動きに上下あり
  var profit = 0;
  ups.forEach(u => {
    profit += u.profit;
  })
  return profit;
};

/**
 * 解説みるとApproach2に該当
 * Approach1のbrute forceが理解できない、再帰処理は難しい
 */