export const getCursor = (action) => {
  return [
    action.payload.event.target.selectionStart,
    action.payload.event.nativeEvent.inputType,
  ];
};
