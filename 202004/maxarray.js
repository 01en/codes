/**
 * 最大配列問題  
 */

/**
 * ブルートフォースアプローチ。効率は良くない
 * @param {} arr 
 */
var maxSubArray = function (arr) {
  let maxSum = Number.MIN_SAFE_INTEGER; // もし要素を取らない場合、ゼロが返却されます

  // 始める箇所を設定
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    // 始める箇所からひとつずつ追加して、部分配列の合計をつくり、最大値と比較する
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
};


// console.log(maxSubArray([-1]));

/**
 * 効率的なアルゴリズム
 * https://riptutorial.com/ja/algorithm/example/24964/%E6%9C%80%E5%A4%A7%E3%82%B5%E3%83%96%E3%82%A2%E3%83%AC%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1
 */