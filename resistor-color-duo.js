export const value = (colors) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  return parseInt(COLORS.indexOf(colors[0]).toString() + COLORS.indexOf(colors[1]).toString());
};
