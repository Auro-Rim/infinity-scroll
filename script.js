const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];

const flatter = (acc) => {
  const newArray = acc.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatter(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return newArray;
};

console.log(flatter(exampleArray));
