export const SuspenseTrigger = () => {
  throw new Promise((resolve) => setTimeout(resolve, 1000));
};
