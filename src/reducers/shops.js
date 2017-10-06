let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_SHOPS_PENDING':
      console.log('pending');
      return [...state];
    case 'GET_ALL_SHOPS_FULFILLED':
      console.log('worked!', action.payload.data);
      return state.concat(action.payload.data);
    case 'GET_ALL_SHOPS_REJECTED':
      console.log('no workie!');
      return [...state];
    default:
      return state;
  }
};
