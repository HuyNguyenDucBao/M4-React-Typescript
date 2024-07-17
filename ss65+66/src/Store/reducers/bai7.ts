export const reducer7 = (state: boolean = true, action: { type: string }) => {
  switch (action.type) {
    case "COLOR":
      return !state;
    default:
      return state;
  }
};
