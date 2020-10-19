import * as constants from "./constants";

export const addGift = (gift) => {
  return {
    type: constants.ADD_GIFT,
    payload: gift,
  };
};

export const deleteGift = (id) => {
  return {
    type: constants.DELETE_GIFT,
    payload: id,
  };
};
