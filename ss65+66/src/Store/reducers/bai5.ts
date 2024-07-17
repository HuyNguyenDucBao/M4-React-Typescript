export const reducer5 = (
  state: number[] = [],
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "RANDOM":
      return [...state, Math.floor(Math.random() * 100)];
    default:
      return state;
  }
};
