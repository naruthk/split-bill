import Head from 'next/head'
import React from "react"

import styles from './index.module.css'

import Navigation from "../navigation"

export default function Layout({ pageTitle, isHomepage = false, children } ) {
  const title = isHomepage ? "Split Bill" : pageTitle + " - Split Bill";

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
  
      {children}

      <footer className={styles.footer}>
        <a
          href="https://www.naruth.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Naruth Kongurai
        </a>
      </footer>
    </div>
  )
}
