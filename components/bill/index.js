import React, { useEffect, useReducer } from "react"
import styles from './index.module.css'

import { REDUCER_ACTIONS, reducer, initialState } from "../../shared/contexts/bill"


const calculateAllItems = dispatch => {
  dispatch({ type: REDUCER_ACTIONS.CALC_PRE_PRICE });
}

export default function Bill() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  useEffect(() => {
    calculateAllItems(dispatch);
  }, [])
  
  const { subTotal, tax, serviceCharge, grandTotal } = state.calculatedValues;

  return (
    <div className={styles.container}>
      <button>Add Item</button>
      <ul>
        {state.items.map(item => {
          const { 
            id,
            name,
            price,
            hasTaxed,
            hasServiceCharged,
            isDiscounted,
            discountMode,
            discountAmount
          } = item;

          const hasTaxedStr = hasTaxed && "+Tax"
          const hasServiceChargedStr = hasServiceCharged && "+Service"
          const hasDiscount = isDiscounted && "+Discount"

          return (
            <li key={id}>
              <span>{name}</span>
              <span>{price}<br/>{hasTaxedStr}{hasServiceChargedStr}{hasDiscount}</span>
            </li>
          )
        })}
      </ul>
      <ul className={styles.chargesListing}>
        <li><span>Subtotal</span><span>$ {subTotal}</span></li>
        <li><span>Tax</span><span>$ {tax}</span></li>
        <li><span>Service Charge</span><span>$ {serviceCharge}</span></li>
        <li><span>Grand Total</span><span>$ {grandTotal}</span></li>
      </ul>
    </div>
  )
}
