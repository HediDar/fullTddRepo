import giftReducer from "./giftsReducers";
import * as constants from "../actions/constants";
import { getAllCountriesByApi } from "../domain/APICalls";

jest.spyOn(console, "log");

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
      afterEach(() => {
        jest.clearAllMocks();
      });

      const initialStates = { gifts: [], countries: [] };
      it("GET_COUNTRIES_PENDING case test", () => {
        const pendingMessage = "pending";
        expect(console.log.mock.calls.length).toBe(0);

        expect(
          giftReducer(undefined, {
            type: constants.GET_COUNTRIES_PENDING,
            payload: getAllCountriesByApi(),
          })
        ).toEqual(initialStates);
        expect(console.log.mock.calls.length).toBe(1);
        expect(console.log.mock.calls[0][0]).toBe(pendingMessage);
      });

      it("GET_COUNTRIES_FULFILLED case test", () => {
        expect(
          giftReducer(undefined, {
            type: constants.GET_COUNTRIES_FULFILLED,
            payload: getAllCountriesByApi(),
          })
        ).toEqual({ countries: undefined, gifts: [] }); //undefined cause i dont know or cant simulate the data fetch
      });

      it("GET_COUNTRIES_REJECTED case test", () => {
        const rejectMessage = "rejected";
        expect(console.log.mock.calls.length).toBe(0);
        expect(
          giftReducer(undefined, {
            type: constants.GET_COUNTRIES_REJECTED,
            payload: getAllCountriesByApi(),
          })
        ).toEqual(initialStates);
        expect(console.log.mock.calls.length).toBe(1);
        expect(console.log.mock.calls[0][0]).toBe(rejectMessage);
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
