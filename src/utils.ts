//function to randomize the answers to the questions
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
