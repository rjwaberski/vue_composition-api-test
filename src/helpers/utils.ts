export const getSomeNumber = (input: string) => {
  return Math.floor(Math.random() * 10) * input.length;
};
