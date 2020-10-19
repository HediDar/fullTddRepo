import * as constants from "./constants";

export const addGift = () => {
  return {
    type: constants.ADD_GIFT,
  };
};

export const deleteGift = (id) => {
  return {
    type: constants.DELETE_GIFT,
    payload: id,
  };
};

export const resetGift = () => {
  return {
    type: constants.RESET_GIFTS,
  };
};
