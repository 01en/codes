/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const group = [];
  strs.forEach(s => {
    var separate = s.split('').sort((a, b) => {
      return a.charCodeAt() - b.charCodeAt();
    })
    var key = separate.reduce((a, v) => a + v, '');
    if (group[key] === undefined) {
      group[key] = [];
    }
    group[key].push(s);
  });
  return Object.values(group);
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"]));