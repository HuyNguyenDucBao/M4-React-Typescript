export const reducer4 = (
  state: number = 0,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;

    default:
      return state;
  }
};
