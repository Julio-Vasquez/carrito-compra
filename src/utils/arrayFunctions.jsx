const countDuplicateItems = (array, value) => {
  let count = 0;
  array.forEach((item) => {
    count += item == value ? 1 : 0;
  });
  return count;
};

const removeDuplicateItems = (array) => Array.from(new Set(array));

const removeItem = (array, item) => {
  const index = array.indexOf(item);
  if (index > -1) array.splice(index, 1);
  return array;
};

function count(arr, value, pos) {
  let cant = 0;
  if (pos < arr.length) {
    cant =
      value == arr[pos]
        ? 1 + count(arr, value, pos + 1)
        : 0 + count(arr, value, pos + 1);
  }
  return cant;
}
