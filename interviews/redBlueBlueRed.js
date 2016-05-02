var redBlueBlueRed = function (string, pattern) {
  pattern = pattern.split(' ');
  var arr = string.split(' ');
  var l = arr.length
  var p = pattern.length;

  if (l % p !== 0) {
    return false;
  }

  var lib = {};
  for (var i = 0; i < l; i += p) {
    for (var j = 0; j < p; j++) {
      if (!lib.hasOwnProperty(arr[i + j])) {
        lib[arr[i + j]] = pattern[j];
      } else if (lib[arr[i + j]] !== pattern[j]) {
        return false;
      }
    }
  }
  return true;
}


var string = 'abc';
var arr = [];
while (string) {
  console.log(string[0]);
  arr.push(string[0]);
  string = string.slice(1);
}
arr;
