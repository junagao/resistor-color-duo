export const value = (colors) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  let result = '';
  for (let color of colors) {
    result += COLORS.indexOf(color).toString();
  }
  return parseInt(result);
};
