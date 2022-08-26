export const initialState = {
  mainInput: '',
  secondaryInput: '',
  mainSelect: 'usd',
  secondarySelect: 'uah',
};

export function reducer(state, actions) {
  switch (actions.type) {
    case 'CHANGE_MAIN_INPUT':
      return {
        ...state,
        mainInput: actions.payload.mainInput,
        secondaryInput: actions.payload.secondaryInput,
      };
    case 'CHANGE_SECONDARY_INPUT':
      return {
        ...state,
        secondaryInput: actions.payload.secondaryInput,
        mainInput: actions.payload.mainInput,
      };
    case 'SET_MAIN_SELECT':
      return {
        ...state,
        mainSelect: actions.payload.value,
        secondaryInput: actions.payload.secondaryInput,
      };
    case 'SET_SECONDARY_SELECT':
      return {
        ...state,
        secondarySelect: actions.payload.value,
        secondaryInput: actions.payload.secondaryInput,
      };
    default:
      return state;
  }
}
