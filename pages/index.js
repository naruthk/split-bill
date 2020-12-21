import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from "../components/layout";
import Bill from "../components/bill"

export default function Home() {
  return (
    <Layout isHomepage>
      <Head>
        <title>Split Bill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bill />
      </main>
    </Layout>
  )
}
