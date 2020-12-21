import React from "react"
import styles from './index.module.css'

export default function Navigation() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}><a href="/">Split Bill</a></h1>
      <ul className={styles.navigation}>
        <li><a href="/">Calculator</a></li>
        <li><a href="/members">Members</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  )
}
