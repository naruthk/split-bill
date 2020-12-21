import React from "react"
import styles from './index.module.css'

export default function Bill() {
  return (
    <div className={styles.container}>
      <ul className={styles.chargesListing}>
        <li><span>Subtotal</span><span>$ 0.00</span></li>
        <li><span>Tax</span><span>$ 0.00</span></li>
        <li><span>Service Charge</span><span>$ 0.00</span></li>
        <li><span>Grand Total</span><span>$ 0.00</span></li>
      </ul>
    </div>
  )
}
