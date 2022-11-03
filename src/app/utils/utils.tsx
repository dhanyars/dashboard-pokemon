export const getRandomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

export const getRandomColor = () => {
  const h = getRandomNumber(360);

  return `hsl(${h}deg, 100%, 90%)`;
};
