import * as constants from "../actions/constants";

const initialStates = { gifts: [] };

const giftReducer = (state = initialStates, action) => {
  const { type } = action;
  console.log(state.gifts);

  if (type === constants.ADD_GIFT) {
    const myData = state.gifts;
    myData.push({ id: state.gifts.length });

    return {
      ...state,
      gifts: myData,
    };
  }

  if (type === constants.DELETE_GIFT) {
    const myData = [...state.gifts];
    let i = -1;
    for (const elem of myData) {
      i++;
      if (elem.id === action.payload) {
        myData.splice(i, 1);
      }
    }

    return {
      ...state,
      gifts: myData,
    };
  }

  if (type === constants.RESET_GIFTS) {
    return {
      ...state,
      gifts: [],
    };
  }
};

export default giftReducer;
