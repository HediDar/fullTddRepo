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

export const addPerson = (person, id) => {
  return {
    type: constants.ADD_PERSON,
    payload: person,
    meta: id,
  };
};

export const addPresent = (present, id) => {
  return {
    type: constants.ADD_PRESENT,
    payload: present,
    meta: id,
  };
};
