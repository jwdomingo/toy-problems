var swap = function (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var partition = function (arr, left, right) {
  var pivot = arr[right];
  var wall = left;

  while (left <= right) {
    if (arr[left] < pivot) {
      swap(arr, wall, left);
      wall++;
    }
    left++;
  }

  swap(arr, wall, right);
  return ++wall;
};

var quickSort = function (array, left, right) {
  if (array.length > 1) {
    left = left || 0;
    right = right || array.length - 1;

    var wall = partition(array, left, right);
    if (array[wall]) {
      if (left < wall - 1) {
        quickSort(array, left, wall - 1);
      }
      if (wall < right) {
        quickSort(array, wall, right);
      }
    }
  }
  return array;
};
