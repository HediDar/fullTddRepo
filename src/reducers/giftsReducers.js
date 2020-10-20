import * as constants from "../actions/constants";

const initialStates = { gifts: [] };

const giftReducer = (state = initialStates, action) => {
  const { type } = action;


  if (type === constants.ADD_GIFT) {
    const myData = [...state.gifts];
    myData.push({ id: state.gifts.length, person: "", present: "" });

    return {
      ...state,
      gifts: myData,
    };
  }

  if (type === constants.DELETE_GIFT) {
    let myData = [...state.gifts];
    myData = myData.filter((el) => el.id !== action.payload);

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

  if (type === constants.ADD_PERSON) {
    const myData = [...state.gifts];
    let i = -1;
    for (const elem of myData) {
      i++;
      if (elem.id === action.meta) {
        myData[i].person = action.payload;
      }
    }

    return {
      ...state,
      gifts: myData,
    };
  }

  if (type === constants.ADD_PRESENT) {
    const myData = [...state.gifts];
    let i = -1;
    for (const elem of myData) {
      i++;
      if (elem.id === action.meta) {
        myData[i].present = action.payload;
      }
    }

    return {
      ...state,
      gifts: myData,
    };
  } else return state;
};

export default giftReducer;
