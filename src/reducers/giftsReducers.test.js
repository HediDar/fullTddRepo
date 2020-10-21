import giftReducer from "./giftsReducers";
import * as constants from "../actions/constants";
import { getAllCountriesByApi } from "../domain/APICalls";

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
    describe("test my api get all countries with redux-promise", () => {
      it("GET_COUNTRIES_PENDING case test", () => {
        const pendingMessage = "pending";
        expect(
          giftReducer(undefined, {
            type: constants.GET_COUNTRIES_PENDING,
            payload: getAllCountriesByApi(),
          })
        ).toEqual(pendingMessage);
      });

      it("GET_COUNTRIES_FULFILLED case test", () => {
        const myAction = {
          type: constants.GET_COUNTRIES_FULFILLED,
          payload: getAllCountriesByApi(),
        };
        expect(giftReducer(undefined, { myAction })).toEqual(
          myAction.payload.data
        );
      });

      it("GET_COUNTRIES_REJECTED case test", () => {
        const rejectedMessage = "rejected";
        expect(
          giftReducer(undefined, {
            type: constants.GET_COUNTRIES_REJECTED,
            payload: getAllCountriesByApi(),
          })
        ).toEqual(rejectedMessage);
      });
    });

    describe("update fields", () => {
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
});
