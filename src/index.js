module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) {
    return false;
  };

  let item = str;
  let i = bracketsConfig.length - 1;

  function hex() {
  let index1 = bracketsConfig[i][0];
  let index2 = bracketsConfig[i][1];
  item = item.split(index1 + index2).join('');
  i--;
  }

  function circle() {
  itemLength1 = item.length;
  while (i >= 0) {
    hex();
  }
  itemLength2 = item.length;
  if (itemLength1 > itemLength2) {
    i = bracketsConfig.length - 1;
    circle();
  } 
  }

  circle();
  if (item.length == 0) {
    return true;
  } else {
    return false;
  }
}