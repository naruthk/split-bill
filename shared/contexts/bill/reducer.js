import { enumsDiscountMode } from "./constants";

export const REDUCER_ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
  CALC_PRE_PRICE: "calculatePrePrice",
  CALC_TAX_VALUE: "calculateTaxValue",
  CALC_SERVICE_VALUE: "calculateServiceValue",
  CALC_NET_PRICE: "calculateNetPrice"
}

export function reducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_ITEM:
      return { items: [ ...items, state.item ] }
    case REDUCER_ACTIONS.REMOVE_ITEM:
      const updatedArrayWIthoutItem = items.filter(item => {
        return item.id !== state.item.id
      })
      return { items: updatedArrayWIthoutItem }
    case REDUCER_ACTIONS.CALC_PRE_PRICE:
      const itemsPrePrice = [];
      for (let i = 0; i < state.items.length; i++) {
        const item = state.items[i];

        switch (item.discountMode) {
          case enumsDiscountMode[0]:
            itemsPrePrice[i] = item.price;
          case enumsDiscountMode[1]:
            itemsPrePrice[i] = item.price - (item.discountAmount || 0);
          case enumsDiscountMode[2]:
            itemsPrePrice[i] = item.price * (1 - (item.discountAmount || 0) / 100);
        }
      }
      return itemsPrePrice;
    default:
      throw new Error();
  }
}
