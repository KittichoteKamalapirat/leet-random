// 0 - max exclusive
export const getTwoRandomNumsInRange = (length: number) => {
  // All numbers are equal
  const num1 = Math.floor(Math.random() * length);
  let num2 = Math.floor(Math.random() * length);

  // run this loop until num1 is different than num2
  do {
    num2 = Math.floor(Math.random() * length);
  } while (num1 === num2);

  return [num1, num2];
};
