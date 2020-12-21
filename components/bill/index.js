import React, { useReducer } from "react"
import styles from './index.module.css'

import { reducer, initialState } from "../../shared/contexts/bill"

export default function Bill() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
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
        <li><span>Subtotal</span><span>$ 0.00</span></li>
        <li><span>Tax</span><span>$ 0.00</span></li>
        <li><span>Service Charge</span><span>$ 0.00</span></li>
        <li><span>Grand Total</span><span>$ 0.00</span></li>
      </ul>
    </div>
  )
}
