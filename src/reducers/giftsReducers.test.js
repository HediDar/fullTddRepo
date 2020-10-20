import giftReducer from "./giftsReducers";
import * as constants from "../actions/constants";

describe("giftReducer", () => {
  describe("modifications done by the app component", () => {
    it("add a gift", () => {
      expect(giftReducer({ gifts: [] }, { type: constants.ADD_GIFT })).toEqual({
        gifts: [{ id: 0, person: "", present: "" }],
      }); // the reducer takes two args:initial state+the action that contains the type+payload
    });

    it("delete a gift", () => {
      const id = 0;
      expect(
        giftReducer(
          { gifts: [{ id: 0, person: "", present: "" }] },
          { type: constants.DELETE_GIFT, payload: id }
        )
      ).toEqual({ gifts: [] }); // the reducer takes two args:initial state+the action that contains the type+payload
    });

    it("reset gifts in the state reducer", () => {
      expect(
        giftReducer(
          { gifts: [{ id: 0, person: "", present: "" }] },
          { type: constants.RESET_GIFTS }
        )
      ).toEqual({
        gifts: [],
      }); // the reducer takes two args:initial state+the action that contains the type+payload
    });
  });

  describe("modifications done by the gift component", () => {
    it("update a person", () => {
      const person = "testPerson";
      const id = 0;
      expect(
        giftReducer(
          { gifts: [{ id: 0, person: "", present: "" }] },
          {
            type: constants.ADD_PERSON,
            payload: person,
            meta: id,
          }
        )
      ).toEqual({
        gifts: [{ id: 0, person: person, present: "" }],
      });
    });

    it("update a present", () => {
      const present = "testPresent";
      const id = 0;
      expect(
        giftReducer(
          { gifts: [{ id: 0, person: "", present: "" }] },
          {
            type: constants.ADD_PRESENT,
            payload: present,
            meta: id,
          }
        )
      ).toEqual({
        gifts: [{ id: 0, person: "", present: present }],
      });
    });
  });
});
