export function formDataArr(state = null, action) {
  switch (action.type) {
    case "FETCHED_FORM_DATA":
      return action.data;
    default:
      return state;
  }
}

export function savedFormDataRes(state = null, action) {
  switch (action.type) {
    case "SAVED_FORM_DATA":
      return action.data;
    default:
      return state;
  }
}
