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
